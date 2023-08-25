<script>
	import ItemsCenter from '$components/ItemsCenter.svelte';
	import reepolee from './reepolee.svg?raw';
	import NavOptions from './NavOptions.svelte';
	import UserData from './UserData.svelte';
	export let menus;
</script>

<div class="max-md:hidden px-4 py-2 sticky top-0 z-20 w-full bg-gray-200 h-12">
	<ItemsCenter>
		<div class="left select-main-menu flex flex-row items-center gap-x-8 text-base font-semibold">
			<a href="/" class="h-4 text-gray-700">
				{@html reepolee}
			</a>
			<NavOptions options={menus[0].options} uppercase />
		</div>

		<div class="w-48 flex justify-end">
			<UserData />
		</div>
	</ItemsCenter>
</div>
