<script lang="ts">
    import type { PageServerData } from "./$types";
    export let data:PageServerData
    let cancel_confim=false
</script>

{#if data.suc}


<div class="flex">
<span>Your reservation:</span>
<span>Total:{data.total}</span>
<span>City:{data.city}</span>
<span>Hotel name:{data.hotel_name}</span>
<span>Stars:{data.stars}</span>
<span>Room type:{data.room_type} </span>
<span>Room number:{data.room_number}</span>
<span>Start date:{data.start_date?.toISOString().substring(0,10)} </span>
<span>End date:{data.end_date?.toISOString().substring(0,10)}</span>
<button on:click={e=>cancel_confim=true}>Cancel</button>
{#if cancel_confim}
<form action="/" method="post">
<input type="submit" value="Are you sure you want to cancel">
</form>
{/if}
</div>
{:else}
<div>You do not have any reservations</div>
{/if}

<style>
    .flex{
        display: flex;
        flex-direction: column;
    }
    div{
        clear: none;
        width: fit-content;
        z-index: 10;
        position: relative;
    }
    button{
        width: 10%;
    }

</style>