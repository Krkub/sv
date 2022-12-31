<script lang="ts">
	import type { LayoutServerData } from './$types';
	import { page } from '$app/stores';
	export let data: LayoutServerData;
</script>

<main class="head">
	<a href="/" class={$page.url.pathname === '/' ? 'selected' : undefined}>home</a>
	{#if data?.suc}
		<nav>
			<a
				href="/edit"
				class={$page.url.pathname.substring(0, 5) === '/edit' ? 'selected' : undefined}
				>edit your reservation</a
			>
			<a
				href="/make"
				class={$page.url.pathname.substring(0, 5) === '/make' ? 'selected' : undefined}
				>make a reservation</a
			>
		</nav>
		<div class="logut">
			<form action="/?/logout" method="post"><input type="submit" value="Logout" /></form>
			{data.userd?.name}
		</div>
	{:else}
		<nav>
			<a
				href="/login"
				class={$page.url.pathname.substring(0, 6) === '/login' ? 'selected' : undefined}>login</a
			>
			<a
				href="/register"
				class={$page.url.pathname.substring(0, 9) === '/register' ? 'selected' : undefined}
				>register</a
			>
		</nav>
	{/if}
</main>
<div>
	<slot />
</div>

<style>
	.selected {
		text-decoration: underline red;
	}
	main {
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
	}
	.logut {
		justify-self: flex-end;
	}
	nav {
		display: flex;
		justify-content: space-around;
		width: 40%;
	}
</style>
