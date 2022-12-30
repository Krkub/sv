<script lang="ts">
    import type { ActionData, PageData } from './$types';
    
    export let data: PageData;
    export let form:ActionData
</script>

{#if data.rooms}
<form action="/make/room" method="post">
    {#each data.rooms as room}
        <div>
            <input type="radio" value={room.id} name="room" id={room.id.toString()}>
            <label for={room.id.toString()}>
                Number: {room.room_number}
                Price: {room.price}
            </label>
        </div>
        {/each}
        <input type="submit">
    </form>
{/if}
{#if form?.suc}
    <a href="/">Reservation made. go home</a>
{/if}