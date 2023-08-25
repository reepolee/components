<script>
	let y = 0;
	$: scrolled = y > 0;
</script>

<svelte:window bind:scrollY={y} />

<div
	class="flex items-center justify-between bg-gray-200 sticky z-10 top-12 border-b-slate-300"
	class:border-b={scrolled}
>
	<slot />
</div>
