import { p as prisma } from "../../chunks/prisma.js";
import * as jwt from "jsonwebtoken";
import { J as JWT_KEY } from "../../chunks/private.js";
const load = async (data) => {
  const token = data.cookies.get("user_id");
  if (token) {
    try {
      const user_id = jwt.verify(token, JWT_KEY, {});
      const userd = await prisma.users.findFirst({ where: { id: Number(user_id) } });
      return { suc: true, userd };
    } catch {
      return { suc: false };
    }
  }
  return { suc: false };
};
export {
  load
};
