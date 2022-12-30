<script lang="ts">
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
    export let form:ActionData
</script>

<main>
	{#if data.room_types}
    <form action="/make/room_type" method="post">
		{#each data.room_types as room_type}
			<div>
               <input type="radio" value={room_type.id} name="room_type" id={room_type.id.toString()}>
               <label for={room_type.id.toString()}>{room_type.name}</label> 
            </div>
            {/each}
        </form>
	{/if}
    {#if form?.suc}
        <a href="/make/time">Next:</a>
    {/if}
</main>
