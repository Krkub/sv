import { c as create_ssr_component, f as each, h as add_attribute, e as escape } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<main>${data.room_types ? `<form action="${"/make/room_type"}" method="${"post"}">${each(data.room_types, (room_type) => {
    return `<div><input type="${"radio"}"${add_attribute("value", room_type.id, 0)} name="${"room_type"}"${add_attribute("id", room_type.id.toString(), 0)} ${data.def === room_type.id ? "checked" : ""}>
					<label${add_attribute("for", room_type.id.toString(), 0)}>Name: ${escape(room_type.name)}
						Bathrooms: ${escape(room_type.total_bathrooms)}
						Occupancy: ${escape(room_type.total_ocupancy)}
						Bedrooms: ${escape(room_type.total_bedrooms)}
						${room_type.has_air_conditioning ? `Has AC` : ``}
						${room_type.has_heating ? `Has heating` : ``}
						${room_type.has_internet ? `Has internet` : ``}
						${room_type.has_kitchen ? `Has kitchen` : ``}
						${room_type.has_tv ? `Has TV` : ``}</label>
				</div>`;
  })}
			<input type="${"submit"}"></form>` : ``}
	${form?.suc ? `<a href="${"/make/time"}">Next:</a>` : ``}</main>`;
});
export {
  Page as default
};
