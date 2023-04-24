<script lang="ts">
	import type { Profile } from '$/lib/profile';
	import PageTitle from '../components/PageTitle.svelte';

	import type { NeatJSONOptions } from 'neatjson';
	import { neatJSON } from 'neatjson';

	import Highlight from 'svelte-highlight';
	import json from 'svelte-highlight/languages/json';
	import a11yDark from 'svelte-highlight/styles/a11y-dark';

	let profile: Profile | null = null;
	let copied = false;
	let copiedProfile = false;

	const neatOptions: NeatJSONOptions = {
		indent: '\t',
		wrap: 46,
		aligned: false
	};

	const loadJsonFromFile = (e: Event) => {
		const file = (e.target as HTMLInputElement).files?.[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onload = (e) => {
			const json = e.target?.result as string;
			profile = JSON.parse(json);
		};
		reader.readAsText(file);
	};

	const handleCopyPath = () => {
		const path = `%localappdata%\\Icarus\\Saved\\PlayerData\\`;
		navigator.clipboard.writeText(path);

		copied = true;

		setTimeout(() => {
			copied = false;
		}, 1000);
	};

	const handleCopyProfile = () => {
		const json = neatJSON(profile, neatOptions);
		navigator.clipboard.writeText(json);

		copiedProfile = true;

		setTimeout(() => {
			copiedProfile = false;
		}, 1000);
	};

	$: code = neatJSON(profile, neatOptions);
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

		<div class="flex flex-row my-2">
			<p class="mr-2">Path:</p>
			<kbd class="text-sm kbd">
				%localappdata%\Icarus\Saved\PlayerData\YOUR_STEAM_ID\Profile.json
			</kbd>
			<button
				class="btn btn-sm btn-square"
				class:btn-success={copied}
				class:btn-ghost={!copied}
				on:click={handleCopyPath}
			>
				<iconify-icon icon="material-symbols:content-copy" />
			</button>
		</div>
	</div>

	<div class="flex-auto" />

	<div class="flex flex-col items-center justify-center max-w-xs form-control">
		<input
			type="file"
			class="w-full max-w-xs file-input file-input-bordered file-input-primary"
			accept=".json"
			on:change={loadJsonFromFile}
		/>
	</div>
</div>

<div class="flex flex-col">
	{#if profile}
		<div class="relative my-4">
			<div class="absolute top-4 right-4">
				<button class="btn btn-sm" on:click={handleCopyProfile} class:btn-success={copiedProfile}>
					{#if copiedProfile}
						Copied!
					{:else}
						Copy
					{/if}
				</button>
			</div>
			<Highlight language={json} {code} />
		</div>
	{/if}
</div>
