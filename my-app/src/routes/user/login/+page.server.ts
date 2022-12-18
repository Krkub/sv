import type { Actions } from "./$types";
import { PrismaClient } from "@prisma/client";

export const actions: Actions = {
    login: async (event) => {
        const data = await event.request.formData()
        const prisma = new PrismaClient
        const userd = await prisma.users.findFirst({
            where: {
                email: data.get("email"),
                password: data.get("password")
            }
        })

        if (userd) {
            event.cookies.set("user_id", userd.id, { path: "/" })

            return { succes: true }
        }
        else return { succes: false }
    },
    logout:async (event)=>{
        event.cookies.delete("user_id",{path:"/"})
        return {success:true}

    }
}