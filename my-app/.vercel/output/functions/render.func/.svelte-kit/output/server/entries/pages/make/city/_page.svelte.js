import { c as create_ssr_component, f as each, h as add_attribute, e as escape } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<main><form action="${"/make/city"}" method="${"post"}">${each(data.cities, (city) => {
    return `<div><input type="${"radio"}" name="${"city"}"${add_attribute("value", city.id, 0)}${add_attribute("id", city.id.toString(), 0)} ${data?.def === city.id ? "checked" : ""}>
				<label${add_attribute("for", city.id.toString(), 0)}>${escape(city.name)}</label>
			</div>`;
  })}
		<input type="${"submit"}" value="${"submit"}"></form>
	${form?.suc ? `<a href="${"/make/hotel"}">Next</a>` : ``}</main>`;
});
export {
  Page as default
};
