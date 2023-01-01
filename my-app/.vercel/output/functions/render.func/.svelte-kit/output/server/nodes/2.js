import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/_page.svelte-06a44e5f.js';
export { server };
export const imports = ["_app/immutable/components/pages/_page.svelte-06a44e5f.js","_app/immutable/chunks/index-267f67aa.js"];
export const stylesheets = ["_app/immutable/assets/_page-6a4ba0a1.css"];
export const fonts = [];
