<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<main>
	<form action="/make/time" method="post">
		<label for="start_date">Start date:</label>
		<input type="date" id="start_date" name="start_date" />
		<label for="end_date">End date:</label>
		<input type="date" id="end_date" name="end_date" />
		<input type="submit" />
	</form>
    {#if form?.suc}
        <a href="/make/room">Next:</a>
    {/if}
</main>
