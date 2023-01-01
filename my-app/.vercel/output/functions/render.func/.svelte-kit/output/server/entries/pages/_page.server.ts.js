import { p as prisma } from "../../chunks/prisma.js";
import * as jwt from "jsonwebtoken";
import { J as JWT_KEY } from "../../chunks/private.js";
const load = async (data) => {
  const token = data.cookies.get("user_id");
  if (token) {
    try {
      const user_id = jwt.verify(token, JWT_KEY);
      const reservations = await prisma.reservations.findMany({
        where: { user_id: Number(user_id) },
        include: {
          rooms: {
            include: {
              hotels: {
                include: {
                  city: true
                }
              },
              room_type: true
            }
          }
        }
      });
      if (reservations) {
        return {
          reservations,
          suc: true
        };
      }
    } catch {
      return { suc: false };
    }
    return { suc: false };
  }
};
const actions = {
  cancel: async (event) => {
    const user_id = event.cookies.get("user_id");
    if (user_id) {
      try {
        const user = jwt.verify(user_id, JWT_KEY);
        await prisma.reservations.deleteMany({
          where: {
            user_id: Number(user)
          }
        });
        return { suc: true };
      } catch {
        return { suc: false };
      }
    }
  },
  logout: async (event) => {
    event.cookies.delete("user_id", { path: "/" });
    return { success: true };
  }
};
export {
  actions,
  load
};
