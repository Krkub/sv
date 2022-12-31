<script lang="ts">
    import type { ActionData, PageData } from './$types';
    
    export let data: PageData;
    export let form:ActionData
  
</script>
<main>
   <form action="/make/city" method="post">
    {#each data.cities as city}
        <div>
            <input type="radio" name="city" value={city.id} id={city.id.toString()} checked={data?.def===city.id}>
            <label for={city.id.toString()}>{city.name}</label>
        </div>
    {/each}
        <input type="submit" value="submit">
    </form>
    {#if form?.suc}
        <a href="/make/hotel">Next</a>
    {/if}
</main>