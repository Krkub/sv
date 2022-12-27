import type { Actions } from "./$types";
import { prisma } from "../../prisma";
import * as jwt from "jsonwebtoken";
import { JWT_KEY } from "$env/static/private";
export const actions: Actions = {
    default: async (event) => {
        const data = await event.request.formData();
        const email=data.get("email")?.toString()
        const name = data.get("user_name")?.toString()
        const description = data.get("description")?.toString()
        const phone_number = data.get("phone_number")?.toString()
        const password= data.get("password")?.toString()
        if(email&&name&&description&&phone_number&&password){
        const userd= await prisma.users.create({
            data:{
                email:email,
                name:name,
                description:description,
                phone_number:phone_number,
                password:password,
            }
        })
        event.cookies.set("user_id",jwt.sign(userd.id.toString(),JWT_KEY),{path:"/"})
        return{succes:true}}
    return {success:false}
    },
}