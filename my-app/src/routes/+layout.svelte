<script lang="ts">
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
</script>

<div>

	{#if data?.suc}
		<span
			><form action="/login?/logout" method="post"><input type="submit" value="Logout" /></form>
			{data.userd?.name}</span
		>
	{:else}
        <nav>
		<a href="/login">login</a>
		<a href="/register">register</a>
        </nav>
	{/if}
</div>

<slot />

<style>
	div {
		position: fixed;
		width: 100%;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	span {
		float: right;
		padding: 10px;
	}
	nav {
		width: 30%;
		display: flex;
		justify-content: space-around;
	}
</style>
