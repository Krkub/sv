<script lang="ts">
	import type { ActionData, PageServerData } from "./$types";

    export let data:PageServerData
    export let form:ActionData
</script>

<main>
    {#if data.hotels}
    <form action="/make/hotel" method="post">
    {#each data?.hotels as hotel}
        <input type="radio" name="hotel" id={hotel.id.toString()} value={hotel.id}>
        <label for={hotel.id.toString()}>{hotel.name}</label>
    {/each}
        <input type="submit" value="submit">
    </form>
    {/if}
    {#if form?.suc}
    <a href="/make/room_type">Next:</a>    
    {/if}
</main>