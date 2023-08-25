<script>
	export let href = '#';
	export let recently_updated = false;
	let _class =
		'px-3 py-2 border border-gray-300 rounded-lg shadow hover:shadow-xl cursor-pointer hover:border-gray-400 bg-white relative';
	export { _class as class };
</script>

<a {href} class={_class} class:bg-yellow-50={recently_updated}>
	<slot />
</a>
