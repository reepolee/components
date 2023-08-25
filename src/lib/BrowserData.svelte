<script>
	import { DEV } from 'esm-env';
	import TailwindSize from './TailwindSize.svelte';
	let element;
	const handle_click = () => {
		element.remove();
	};
</script>

{#if DEV}
	<button
		class="fixed left-1/2 -translate-x-1/2 bottom-4 z-10 rounded bg-slate-100/90 px-4 pb-1 text-center text-2xl text-slate-800/50"
		on:click={handle_click}
		bind:this={element}
	>
		<TailwindSize />
	</button>
{/if}
