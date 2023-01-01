import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export const file = '_app/immutable/components/pages/_layout.svelte-3e6d7b51.js';
export { server };
export const imports = ["_app/immutable/components/pages/_layout.svelte-3e6d7b51.js","_app/immutable/chunks/index-267f67aa.js","_app/immutable/chunks/stores-0d98cc95.js","_app/immutable/chunks/singletons-f1d73a06.js"];
export const stylesheets = ["_app/immutable/assets/_layout-f9d50e6e.css"];
export const fonts = [];
