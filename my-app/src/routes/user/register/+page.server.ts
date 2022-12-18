import type { Actions } from "./$types";
import { PrismaClient } from "@prisma/client";
export const actions: Actions = {
    default: async (event) => {
        const prisma = new PrismaClient
        const data = await event.request.formData();
        const userd= await prisma.users.create({
            data:{
                email:data.get("email"),
                name:data.get("user_name"),
                description:data.get("description"),
                phone_number:data.get("phone_numebr"),
                password:data.get("password"),
            }
        })
        event.cookies.set("user_id",userd.id.toString(),{path:"/"})
        return{succes:true}
    },
}