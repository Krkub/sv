import type { Actions, PageServerLoad } from './$types';
import { prisma } from "../../../prisma";
import * as jwt from "jsonwebtoken";
import { JWT_KEY } from '$env/static/private';
export const load = (async (event) => {
    const hotel_id = Number(event.cookies.get("hotel_id"))
    const room_type_id = Number(event.cookies.get("room_type_id"))
    const start_date = event.cookies.get("start_date")
    const end_date = event.cookies.get("end_date")
    if (end_date && start_date && hotel_id && room_type_id) {
        const start_date_parsed = new Date(start_date)
        const end_date_parsed = new Date(end_date)
        const rooms_raw = await prisma.rooms.findMany({
            where:
            {
                room_type_id: { equals: room_type_id },
                hotel_id: { equals: hotel_id },

            },
            include: { reservations: true }
        })
        const rooms = rooms_raw.filter(e => {
            let match = true
            e.reservations.forEach(f => {
                match = start_date_parsed < f.end_date && f.start_date < end_date_parsed
            })
            return match
        })

        return { rooms: rooms }

    }

}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async (event) => {
        const data = await event.request.formData()
        const room_id = data.get("room")?.toString()
        const end_date = event.cookies.get("end_date")
        const start_date = event.cookies.get("start_date")
        const user_id = event.cookies.get("user_id")
        const price = await prisma.rooms.findUnique({
            where: { id: Number(room_id) },
            select: { price: true }
        })
        if (room_id && end_date && start_date && user_id && price) {
            try {
            
                const start_date_parsed = new Date(start_date)
                const end_date_parsed = new Date(end_date)
                const user_id_parsed = jwt.verify(user_id, JWT_KEY)
                const result = await prisma.reservations.create({
                    data: {
                        end_date: end_date_parsed,
                        start_date: start_date_parsed,
                        room_id: Number(room_id),
                        user_id: Number(user_id_parsed),
                        total: Number(price.price) * ((end_date_parsed.getTime() - start_date_parsed.getTime()) / 1000 / 60 / 60 / 24)
                    }
                })
               
                event.cookies.delete("room_type_id",{path:"/"})
                event.cookies.delete("hotel_id",{path:"/"})
                event.cookies.delete("end_date",{path:"/"})
                event.cookies.delete("start_date",{path:"/"})
                event.cookies.delete("city_id",{path:"/"})
                return{suc:true}
            } catch (error) {
                return { suc: false }
            }


        }
    }

}