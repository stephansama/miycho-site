<script lang="ts">
	import { AppRail, AppRailAnchor, AppRailTile } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	let activeSection = 0;
	const sections = ['about', 'contact me'];
</script>

<AppRail class="max-sm:hidden">
	<svelte:fragment slot="lead">
		<AppRailAnchor href="#">
			<img src="/miycho.png" alt="test" />
		</AppRailAnchor>
	</svelte:fragment>
	{#each sections as section, value}
		<AppRailTile bind:group={activeSection} {value} name={section}>
			<span>{section}</span>
		</AppRailTile>
	{/each}
	<svelte:fragment slot="trail">
		<LightSwitch class="mx-auto my-4" />
	</svelte:fragment>
</AppRail>
