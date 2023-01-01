import { p as prisma } from "../../../chunks/prisma.js";
import * as jwt from "jsonwebtoken";
import { J as JWT_KEY } from "../../../chunks/private.js";
import { createHash } from "crypto";
const actions = {
  default: async (event) => {
    const data = await event.request.formData();
    const email = data.get("email")?.toString();
    const password = data.get("password")?.toString();
    if (email && password) {
      const userd = await prisma.users.findFirst({
        where: {
          email
        }
      });
      if (userd) {
        const hash = createHash("sha256");
        hash.update(userd.password.substring(0, 32) + password);
        const digest = userd.password.substring(0, 32) + hash.digest("hex");
        if (digest === userd.password) {
          event.cookies.set("user_id", jwt.sign(userd.id.toString(), JWT_KEY), { path: "/" });
          return { succes: true };
        }
      }
    }
    return { success: false };
  }
};
export {
  actions
};
