import type { PageServerLoad } from './$types';
import { prisma } from '../prisma';
import type { Actions } from '@sveltejs/kit';
import jsonwebtoken from 'jsonwebtoken';
import { JWT_KEY } from '$env/static/private';

export const load = (async (data) => {
	const token = data.cookies.get('user_id');
	if (token) {
		try {
			const user_id = jsonwebtoken.verify(token, JWT_KEY);
			const reservations = await prisma.reservations.findMany({
				where: { user_id: Number(user_id) },
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
					}
				}
			});
			if (reservations) {
				return {
					reservations,
					suc: true
				};
			}
		} catch {
			return { suc: false };
		}
		return { suc: false };
	}
}) satisfies PageServerLoad;

export const actions: Actions = {
	cancel: async (event) => {
		const user_id = event.cookies.get('user_id');
		if (user_id) {
			try {
				const user = jsonwebtoken.verify(user_id, JWT_KEY);
				await prisma.reservations.deleteMany({
					where: {
						user_id: Number(user)
					}
				});
				return { suc: true };
			} catch {
				return { suc: false };
			}
		}
	},
	logout: async (event) => {
		event.cookies.delete('user_id', { path: '/' });
		return { success: true };
	}
};
