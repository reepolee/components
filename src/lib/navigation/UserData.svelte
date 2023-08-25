<script>
	export let page;
</script>

{#if page.data.session}
	<a href="/app/profile"
		>{page.data.session.user.user_metadata.full_name ?? page.data.session.user.email}</a
	>
{:else if page.route.id != '/login'}
	<div class="button w-10ch text-center">
		<a href="/login">Prijava</a>
	</div>
{/if}

<style>
	a {
		@apply hover:font-bold;
	}
</style>
