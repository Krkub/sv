import { c as create_ssr_component, f as each, h as add_attribute, e as escape } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `${data.rooms ? `<form action="${"/make/room"}" method="${"post"}">${each(data.rooms, (room) => {
    return `<div><input type="${"radio"}"${add_attribute("value", room.id, 0)} name="${"room"}"${add_attribute("id", room.id.toString(), 0)}>
				<label${add_attribute("for", room.id.toString(), 0)}>Number: ${escape(room.room_number)}
					Price: ${escape(room.price)}</label>
			</div>`;
  })}
		<input type="${"submit"}"></form>` : ``}
${form?.suc ? `<a href="${"/"}">Reservation made. go home</a>` : ``}`;
});
export {
  Page as default
};
