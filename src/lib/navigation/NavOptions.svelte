<script>
	export let page;
	export let options;
	export let uppercase = false;
	$: is_current = (href) => page.url.pathname.startsWith(href);
</script>

<nav class="flex gap-x-3 items-center h-12">
	{#each options as { href, title, id }}
		{#key page.route.id}
			<a {href} class:active-option={is_current(href)} class:uppercase>{title}</a>
		{/key}
	{/each}
</nav>

<style>
	a {
		@apply px-6 pt-2 pb-1 border-b-4 border-b-transparent text-center text-sm 2xl:text-base/5 tracking-tighter;
	}

	a.active-option {
		@apply text-white bg-reepolee-500 shadow-xl rounded;
	}

	nav:hover a.active-option:not(:hover) {
		@apply text-white bg-reepolee-500/60 shadow-xl rounded;
	}

	a:hover:not(.active-option) {
		@apply text-white bg-reepolee-500 shadow-xl rounded;
	}
</style>
