import type { Actions, PageServerLoad } from './$types';
import { prisma } from "../../../prisma";
export const load = (async (event) => {
    const hotel_id = event.cookies.get("hotel_id")?.toString()
    if (hotel_id) {
        const room_types = await prisma.room_type.findMany({
            where: {
                rooms: {
                    every: { hotel_id: { equals: Number(hotel_id) } }
                }
            }
        })
        return { room_types }
    }

}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async (event) => {
        const data = await event.request.formData()
        const room_type_id = data.get("room_type")?.toString()
        if (room_type_id) {
            event.cookies.set("room_type_id", room_type_id, { path: "/" })
            return { suc: true }
        }

    }
}