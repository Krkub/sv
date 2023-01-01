import { c as create_ssr_component } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "form.svelte-xcq1sg{display:flex;flex-direction:column;width:fit-content;padding:10px}input.svelte-xcq1sg{padding:10px;margin:15px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<form method="${"post"}" action="${"/login"}" class="${"svelte-xcq1sg"}"><input type="${"text"}" name="${"email"}" placeholder="${"Email"}" class="${"svelte-xcq1sg"}">
	<input type="${"password"}" name="${"password"}" placeholder="${"Password"}" class="${"svelte-xcq1sg"}">
	<input type="${"submit"}" value="${"Login"}" class="${"svelte-xcq1sg"}"></form>

${form?.success == true ? `Succesfully logged in <a href="${"/"}">Go home</a>` : `${form?.success == false ? `Login failed` : ``}`}`;
});
export {
  Page as default
};
