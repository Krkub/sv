import type { Actions, PageServerLoad } from './$types';

export const load = (async (event) => {
	return { start_date: event.cookies.get('start_date'), end_date: event.cookies.get('end_date') };
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const start_date = data.get('start_date')?.toString();
		const end_date = data.get('end_date')?.toString();
		if (start_date && end_date) {
			event.cookies.set('start_date', start_date, { path: '/' });
			event.cookies.set('end_date', end_date, { path: '/' });
			return { suc: true };
		}
	}
};
