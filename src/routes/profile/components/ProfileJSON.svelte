<script lang="ts">
	import type { Profile } from '$/lib/profile';

	import Highlight from 'svelte-highlight';
	import json from 'svelte-highlight/languages/json';

	export let profile: Profile | null = null;
	export let code: string | null = null;

	let copied = false;

	const handleCopyProfile = () => {
		const json = JSON.stringify(profile, null, '\t');
		navigator.clipboard.writeText(json);

		copied = true;

		setTimeout(() => {
			copied = false;
		}, 1000);
	};
</script>

<div class="relative my-4">
	<div class="absolute top-4 right-4">
		<button class="btn btn-sm" on:click={handleCopyProfile} class:btn-success={copied}>
			{#if copied}
				Copied!
			{:else}
				Copy
			{/if}
		</button>
	</div>
	<Highlight language={json} {code} />
</div>
