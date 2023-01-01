import { c as create_ssr_component, h as add_attribute } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  let start_date = data.start_date;
  let end_date = data.end_date;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<main><form action="${"/make/time"}" method="${"post"}"><label for="${"start_date"}">Start date:</label>
		<input type="${"date"}" id="${"start_date"}" name="${"start_date"}"${add_attribute("max", end_date, 0)}${add_attribute("value", start_date, 0)}>
		<label for="${"end_date"}">End date:</label>
		<input type="${"date"}" id="${"end_date"}" name="${"end_date"}"${add_attribute("min", start_date, 0)}${add_attribute("value", end_date, 0)}>
		<input type="${"submit"}"></form>
	${form?.suc ? `<a href="${"/make/room"}">Next:</a>` : ``}</main>`;
});
export {
  Page as default
};
