<script>
	import { page } from '$app/stores';
</script>

<a class="button primary w-20ch text-center" href={$page.url.pathname + '/new'}><slot /></a>
