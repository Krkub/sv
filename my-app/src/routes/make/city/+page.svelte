<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;

  
</script>
<main>
   <form action="/make/city" method="post">
    {#each data.cities as city}
        <div>
            <input type="radio" name="city" value={city.id} id={city.id.toString()}>
            <label for={city.id.toString()}>{city.name}</label>
        </div>
    {/each}
        <input type="submit" value="submit">
    </form>
</main>