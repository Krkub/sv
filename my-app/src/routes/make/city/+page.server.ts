import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { prisma } from "../../../prisma";


export const load = (async (event) => {
    const cities = await prisma.city.findMany({
        where: {
            hotels: { every: {} }

        }
    })
    return { cities }

}) satisfies PageServerLoad

export const actions: Actions = {
    default: async (event) => {
        const form = await event.request.formData()
        const city=form.get("city")?.toString()
        if(city){
        event.cookies.set("city_id",city,{path:"/"})
        return {suc:true}
        }
        return {suc:false}
    }
}