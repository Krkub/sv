import type { PageServerLoad } from "./$types";
import { prisma } from "../prisma";
import type { Actions } from "@sveltejs/kit";
import * as jwt from "jsonwebtoken";
import { JWT_KEY } from "$env/static/private";

export const load = (async (data) => {
    const token = data.cookies.get("user_id")
    if (token) {
        try {
            const user_id = jwt.verify(token, JWT_KEY)
            const reservations = await prisma.reservations.findFirst({
                where:
                    { user_id: Number(user_id) },
                include: {
                    rooms: {
                        include: {
                            hotels: {
                                include: {
                                    city: true
                                }
                            },
                            room_type: true
                        }
                    },
                }

            })
            if (reservations) {
                return {
                    total: reservations?.total?.toString(),
                    city: reservations?.rooms.hotels.city.name,
                    hotel_name: reservations?.rooms.hotels.name,
                    stars: reservations?.rooms.hotels.stars,
                    room_type: reservations?.rooms.room_type.name,
                    room_number: reservations?.rooms.room_number,
                    start_date: reservations?.start_date,
                    end_date: reservations?.end_date,
                    suc: true
                }
            }
        }
        catch { return { suc: false } }
        return { suc: false }
    }
}) satisfies PageServerLoad


export const actions: Actions = {
    default: async (event) => {

        // const user_id = event.cookies.get("user_id")
        // await prisma.reservations.delete({
        //     where:{
        //         user_id:Number(user_id)
        //     }
        // })
        // return {suc:true}
    }
}