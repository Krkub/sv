import type { LayoutServerLoad } from './$types';
import { prisma } from '../prisma';

import jsonwebtoken from 'jsonwebtoken';
import { JWT_KEY } from '$env/static/private';
export const load = (async (data) => {
	const token = data.cookies.get('user_id');
	if (token) {
		try {
			const user_id = jsonwebtoken.verify(token, JWT_KEY, {});
			const userd = await prisma.users.findFirst({ where: { id: Number(user_id) } });
			return { suc: true, userd: userd };
		} catch {
			return { suc: false };
		}
	}
	return { suc: false };
}) satisfies LayoutServerLoad;
