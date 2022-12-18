import type { PageServerLoad } from "./$types";
import { PrismaClient } from "@prisma/client";


export const load = (async (data) => {
    const user_id = data.cookies.get("user_id")

    if (user_id) {
        const prisma = new PrismaClient
        const reservations = await prisma.reservations.findFirst({
            where:
                { user_id: Number(user_id) },
            include:{rooms:{
                include:{
                    hotels:{
                        include:{
                            city:true
                        }
                    },
                    room_type:true
                }
            },
            }
            
        })
       
        return {
            total:reservations?.total?.toString(),
            city:reservations?.rooms.hotels.city.name,
            hotel_name:reservations?.rooms.hotels.name,
            stars:reservations?.rooms.hotels.stars,
            room_type:reservations?.rooms.room_type.name,
            room_number:reservations?.rooms.room_number,
            start_date:reservations?.start_date,
            end_date:reservations?.end_date
        }
    }
}) satisfies PageServerLoad