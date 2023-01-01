import { c as create_ssr_component, f as each, e as escape, h as add_attribute } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".flex.svelte-cw4c7o{display:flex;flex-direction:column}button.svelte-cw4c7o{width:20%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let cancel_confim = -1;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${data?.reservations ? `${data.reservations.length ? each(data.reservations, (reservation) => {
    return `<div class="${"flex svelte-cw4c7o"}"><span>Your reservation:</span>
			<span>Total:${escape(reservation.total)}</span>
			<span>City:${escape(reservation.rooms.hotels.city.name)}</span>
			<span>Hotel name:${escape(reservation.rooms.hotels.name)}</span>
			<span>Stars:${escape(reservation.rooms.hotels.stars)}</span>
			<span>Room type:${escape(reservation.rooms.room_type.name)}</span>
			<span>Room number:${escape(reservation.rooms.room_number)}</span>
			<span>Start date:${escape(reservation.start_date?.toISOString().substring(0, 10))}</span>
			<span>End date:${escape(reservation.end_date?.toISOString().substring(0, 10))}</span>
			<button class="${"svelte-cw4c7o"}">Cancel</button>
			${cancel_confim === reservation.id ? `<form action="${"/?/cancel"}" method="${"post"}"><input type="${"hidden"}"${add_attribute("value", reservation.id, 0)}>
					<input type="${"submit"}" value="${"Are you sure you want to cancel"}">
				</form>` : ``}
		</div>`;
  }) : `<div>You do not have any reservations</div>`}` : ``}`;
});
export {
  Page as default
};
