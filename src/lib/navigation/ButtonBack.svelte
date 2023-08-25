<script>
	let _class = 'h-6';
	export { _class as class };
</script>

<button on:click={() => history.back()} class="flex items-center text-lg gap-2 {_class}">
	<slot />

	<svg viewBox="9 5 6 14" class="h-full aspect-square text-reepolee-500">
		<path
			fill="currentColor"
			d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"
		/></svg
	>
</button>
