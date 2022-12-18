<script lang="ts">
    import type { PageServerData } from "./$types";
    export let data:PageServerData
</script>
<div>

<span>Your reservation:</span>
<span>Total:{data.total}</span>
<span>City:{data.city}</span>
<span>Hotel name:{data.hotel_name}</span>
<span>Stars:{data.stars}</span>
<span>Room type:{data.room_type} </span>
<span>Room number:{data.room_number}</span>
<span>Start date:{data.start_date?.toISOString().substring(0,10)} </span>
<span>End date:{data.end_date?.toISOString().substring(0,10)}</span>
</div>

<style>
    div{
        display: flex;
        flex-direction: column;
    }
</style>