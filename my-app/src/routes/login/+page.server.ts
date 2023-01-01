import type { Actions } from './$types';
import { prisma } from '../../prisma';
import jsonwebtoken from 'jsonwebtoken';
import { JWT_KEY } from '$env/static/private';
import { createHash } from 'crypto';
export const actions: Actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const email = data.get('email')?.toString();
		const password = data.get('password')?.toString();
		if (email && password) {
			const userd = await prisma.users.findFirst({
				where: {
					email: email
				}
			});

			if (userd) {
				const hash = createHash('sha256');
				hash.update(userd.password.substring(0, 32) + password);
				const digest = userd.password.substring(0, 32) + hash.digest('hex');
				if (digest === userd.password) {
					event.cookies.set('user_id', jsonwebtoken.sign(userd.id.toString(), JWT_KEY), { path: '/' });

					return { succes: true };
				}
			}
		}

		return { success: false };
	}
};
