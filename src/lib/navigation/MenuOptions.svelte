<script>
	export let page;
	export let options;

	$: is_current = (href) => page.url.pathname.startsWith(href);
</script>

<div class="flex gap-x-3 items-center text-sm 2xl:text-lg">
	{#each options as { href, title, id }}
		{#key page.route.id}
			<a {href} class:active-option={is_current(href)}>{title}</a>
		{/key}
	{/each}
</div>

<style>
	a {
		@apply px-4 py-1 rounded;
	}

	a:hover {
		@apply text-white bg-reepolee-500 shadow-xl;
	}

	.active-option {
		@apply bg-gray-800 text-white;
	}
</style>
