<script>
	$: innerWidth = 0;
	$: innerHeight = 0;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

{#if innerWidth > 0}
	<span class="inline-flex sm:hidden">xs</span>
	<span class="hidden sm:inline-flex md:hidden">sm</span>
	<span class="hidden md:inline-flex lg:hidden">md</span>
	<span class="hidden lg:inline-flex xl:hidden">lg</span>
	<span class="hidden xl:inline-flex 2xl:hidden">xl</span>
	<span class="hidden 2xl:inline-flex">2xl</span>
	<span>{innerWidth} x {innerHeight} </span>
	<span class="landscape:hidden">P</span>
	<span class="portrait:hidden">L</span>
{/if}
