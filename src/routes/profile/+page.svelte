<script lang="ts">
	import type { Profile } from '$/lib/profile';

	import a11yDark from 'svelte-highlight/styles/a11y-dark';

	import PageTitle from '$/routes/components/PageTitle.svelte';

	import LoadFile from './components/LoadFile.svelte';
	import PathKbd from './components/PathKBD.svelte';
	import ProfileJson from './components/ProfileJSON.svelte';

	let profile: Profile | null = null;

	const handleLoadedProfile = (event: CustomEvent<Profile>) => {
		profile = event.detail;
	};

	$: code = profile ? JSON.stringify(profile, null, '\t') : null;
</script>

<svelte:head>
	<title>Profile Editor | Icarus Tools</title>
	{@html a11yDark}
</svelte:head>

<PageTitle>Profile Editor</PageTitle>

<div class="flex flex-col items-center justify-between p-4 my-4 rounded-lg sm:flex-row bg-base-200">
	<div class="max-w-2xl">
		<p>
			Simple way to edit your <kbd class="kbd">Profile.json</kbd>.
		</p>

		<div class="flex flex-row items-center justify-center my-2">
			<p class="mr-2">Path:</p>
			<PathKbd />
		</div>
	</div>

	<div class="flex-auto" />

	<LoadFile on:profile={handleLoadedProfile} />
</div>

<div class="flex flex-col">
	{#if profile}
		<ProfileJson {profile} {code} />
	{/if}
</div>
