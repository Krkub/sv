import { c as create_ssr_component, b as subscribe, e as escape, d as null_to_empty } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".selected.svelte-6gap0y{text-decoration:underline red}main.svelte-6gap0y{display:flex;width:100%;justify-content:center;align-items:center}.logut.svelte-6gap0y{justify-self:flex-end}nav.svelte-6gap0y{display:flex;justify-content:space-around;width:40%}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<main class="${"head svelte-6gap0y"}"><a href="${"/"}" class="${escape(null_to_empty($page.url.pathname === "/" ? "selected" : void 0), true) + " svelte-6gap0y"}">home</a>
	${data?.suc ? `<nav class="${"svelte-6gap0y"}"><a href="${"/edit"}" class="${escape(
    null_to_empty($page.url.pathname.substring(0, 5) === "/edit" ? "selected" : void 0),
    true
  ) + " svelte-6gap0y"}">edit your reservation</a>
			<a href="${"/make"}" class="${escape(
    null_to_empty($page.url.pathname.substring(0, 5) === "/make" ? "selected" : void 0),
    true
  ) + " svelte-6gap0y"}">make a reservation</a></nav>
		<div class="${"logut svelte-6gap0y"}"><form action="${"/?/logout"}" method="${"post"}"><input type="${"submit"}" value="${"Logout"}"></form>
			${escape(data.userd?.name)}</div>` : `<nav class="${"svelte-6gap0y"}"><a href="${"/login"}" class="${escape(
    null_to_empty($page.url.pathname.substring(0, 6) === "/login" ? "selected" : void 0),
    true
  ) + " svelte-6gap0y"}">login</a>
			<a href="${"/register"}" class="${escape(
    null_to_empty($page.url.pathname.substring(0, 9) === "/register" ? "selected" : void 0),
    true
  ) + " svelte-6gap0y"}">register</a></nav>`}</main>
<div>${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  Layout as default
};
