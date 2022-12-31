import { prisma } from "../../../prisma";
import type { Actions, PageServerLoad } from "./$types";


export const load=(async (event)=>{
    const city=event.cookies.get("city_id")
    if(city){
        const hotels = await prisma.hotels.findMany({
            where:{city_id:{equals: Number(city)}}
        })
        return {hotels,suc:true,def:Number(event.cookies.get("hotel_id"))}
    }
    return{suc:false}
}) satisfies PageServerLoad

export const actions:Actions={
    default:async (event)=>{
        const data=await event.request.formData()
        const hotel_id=data.get("hotel")?.toString()
        if(hotel_id){
            event.cookies.set("hotel_id",hotel_id,{path:"/"})
            return{suc:true}
        }
        return{suc:false}
    }
}