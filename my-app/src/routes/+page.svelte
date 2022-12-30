<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;
	let cancel_confim = -1;
</script>

{#if data?.reservations}
	{#each data.reservations as reservation}
		<div class="flex">
			<span>Your reservation:</span>
			<span>Total:{reservation.total}</span>
			<span>City:{reservation.rooms.hotels.city.name}</span>
			<span>Hotel name:{reservation.rooms.hotels.name}</span>
			<span>Stars:{reservation.rooms.hotels.stars}</span>
			<span>Room type:{reservation.rooms.room_type.name} </span>
			<span>Room number:{reservation.rooms.room_number}</span>
			<span>Start date:{reservation.start_date?.toISOString().substring(0, 10)} </span>
			<span>End date:{reservation.end_date?.toISOString().substring(0, 10)}</span>
			<button on:click={(e) => (cancel_confim = reservation.id)}>Cancel</button>
			{#if cancel_confim===reservation.id}
				<form action="/?/cancel" method="post">
					<input type="hidden" value={reservation.id}>
					<input type="submit" value="Are you sure you want to cancel" />
				</form>
			{/if}
		</div>
	{:else}
		<div>You do not have any reservations</div>
	{/each}
{/if}

<style>
	.flex {
		display: flex;
		flex-direction: column;
	}
	button {
		width: 20%;
	}
</style>
