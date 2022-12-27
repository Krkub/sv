import type { Actions } from "./$types";
import { prisma } from "../../prisma";
import * as jwt from "jsonwebtoken";
import { JWT_KEY } from "$env/static/private";
export const actions: Actions = {
    login: async (event) => {
        const data = await event.request.formData()
        const email = data.get("email")?.toString()
        const password = data.get("password")?.toString()
        if (email && password) {
            const userd = await prisma.users.findFirst({
                where: {
                    email: email,
                    password: password
                }
            })

            if (userd) {
                event.cookies.set("user_id", jwt.sign(userd.id.toString(), JWT_KEY), { path: "/" })

                return { succes: true }
            }
        }

        return { success: false }

    },
    logout: async (event) => {
        event.cookies.delete("user_id", { path: "/" })
        return { success: true }

    }
}