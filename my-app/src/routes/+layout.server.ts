import type { LayoutServerLoad, } from "./$types";
import { PrismaClient } from "@prisma/client";

export const load = (async (data) => {
    const user_id = data.cookies.get("user_id")
    if(user_id){
    const prisma = new PrismaClient
    const userd = await prisma.users.findFirst({ where: { id: Number(user_id) } })
      return {userd,suc:true}
    }
    return {suc:false}
}) satisfies LayoutServerLoad
