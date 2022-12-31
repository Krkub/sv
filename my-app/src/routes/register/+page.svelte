<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<form method="post">
	<input type="text" name="user_name" placeholder="Username" />
	<input type="text" name="email" placeholder="Email" />
	<input type="password" name="password" placeholder="Password" />
	<input type="tel" name="phone_number" placeholder="Phone number" />
	<textarea name="description" placeholder="Description" />
	<input type="submit" value="Register" />
</form>
{#if form?.succes}
	Succesfully registerd. <a href="/">Go home</a>
{/if}

<style>
	form {
		display: flex;
		flex-direction: column;
		width: fit-content;
		padding: 10px;
	}
	input,
	textarea {
		padding: 10px;
		margin: 15px;
	}
</style>
