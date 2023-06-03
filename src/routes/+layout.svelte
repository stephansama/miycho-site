<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import Footer from '$lib/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import '../app.postcss';
</script>

<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<Navbar />
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
