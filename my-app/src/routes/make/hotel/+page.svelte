<script lang="ts">
	import type { ActionData, PageServerData } from './$types';

	export let data: PageServerData;
	export let form: ActionData;
</script>

<main>
	{#if data.hotels}
		<form action="/make/hotel" method="post">
			{#each data?.hotels as hotel}
				<div>
					<input
						type="radio"
						name="hotel"
						id={hotel.id.toString()}
						value={hotel.id}
						checked={data?.def === hotel.id}
					/>
					<label for={hotel.id.toString()}>
						Name: {hotel.name}
						{#if hotel.has_gym}
							Has gym
						{/if}
						{#if hotel.has_pool}
							Has pool
						{/if}
						Stars: {hotel.stars}
					</label>
				</div>
			{/each}
			<input type="submit" value="submit" />
		</form>
	{/if}
	{#if form?.suc}
		<a href="/make/room_type">Next:</a>
	{/if}
</main>
