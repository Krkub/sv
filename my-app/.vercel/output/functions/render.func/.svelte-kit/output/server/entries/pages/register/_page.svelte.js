import { c as create_ssr_component } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "form.svelte-1520lil{display:flex;flex-direction:column;width:fit-content;padding:10px}input.svelte-1520lil,textarea.svelte-1520lil{padding:10px;margin:15px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<form method="${"post"}" class="${"svelte-1520lil"}"><input type="${"text"}" name="${"user_name"}" placeholder="${"Username"}" class="${"svelte-1520lil"}">
	<input type="${"text"}" name="${"email"}" placeholder="${"Email"}" class="${"svelte-1520lil"}">
	<input type="${"password"}" name="${"password"}" placeholder="${"Password"}" class="${"svelte-1520lil"}">
	<input type="${"tel"}" name="${"phone_number"}" placeholder="${"Phone number"}" class="${"svelte-1520lil"}">
	<textarea name="${"description"}" placeholder="${"Description"}" class="${"svelte-1520lil"}"></textarea>
	<input type="${"submit"}" value="${"Register"}" class="${"svelte-1520lil"}"></form>
${form?.succes ? `Succesfully registerd. <a href="${"/"}">Go home</a>` : ``}`;
});
export {
  Page as default
};
