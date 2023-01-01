import { c as create_ssr_component, f as each, h as add_attribute, e as escape } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<main>${data.hotels ? `<form action="${"/make/hotel"}" method="${"post"}">${each(data?.hotels, (hotel) => {
    return `<div><input type="${"radio"}" name="${"hotel"}"${add_attribute("id", hotel.id.toString(), 0)}${add_attribute("value", hotel.id, 0)} ${data?.def === hotel.id ? "checked" : ""}>
					<label${add_attribute("for", hotel.id.toString(), 0)}>Name: ${escape(hotel.name)}
						${hotel.has_gym ? `Has gym` : ``}
						${hotel.has_pool ? `Has pool` : ``}
						Stars: ${escape(hotel.stars)}</label>
				</div>`;
  })}
			<input type="${"submit"}" value="${"submit"}"></form>` : ``}
	${form?.suc ? `<a href="${"/make/room_type"}">Next:</a>` : ``}</main>`;
});
export {
  Page as default
};
