import { prisma } from "../../../prisma";
import type { Actions, PageServerLoad } from "./$types";


export const load=(async (event)=>{
    const city=event.cookies.get("city_id")
    if(city){
        const hotels = await prisma.hotels.findMany({
            where:{city_id:{equals: Number(city)}}
        })
        return {hotels,suc:true}
    }
    return{suc:false}
}) satisfies PageServerLoad
