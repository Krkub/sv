<script lang="ts">
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;
</script>

<main>
	{#if data.room_types}
		<form action="/make/room_type" method="post">
			{#each data.room_types as room_type}
				<div>
					<input type="radio" value={room_type.id} name="room_type" id={room_type.id.toString()} checked={data.def===room_type.id}/>
					<label for={room_type.id.toString()}>
						Name: {room_type.name}
						Bathrooms: {room_type.total_bathrooms}
						Occupancy: {room_type.total_ocupancy}
						Bedrooms: {room_type.total_bedrooms}
						{#if room_type.has_air_conditioning}
                        Has AC
                        {/if}
						{#if room_type.has_heating}
							Has heating
						{/if}
                        {#if room_type.has_internet}
                            Has internet
                        {/if}
                        {#if room_type.has_kitchen}
                            Has kitchen
                        {/if}
                        {#if room_type.has_tv}
                            Has TV
                        {/if}
					</label>
				</div>
			{/each}
			<input type="submit" />
		</form>
	{/if}
	{#if form?.suc}
		<a href="/make/time">Next:</a>
	{/if}
</main>
