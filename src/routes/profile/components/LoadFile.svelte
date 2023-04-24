<script lang="ts">
	import type { Profile } from '$/lib/profile';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{ profile: Profile }>();

	const loadJsonFromFile = (e: Event) => {
		const file = (e.target as HTMLInputElement).files?.[0];
		if (!file) return;

		const reader = new FileReader();

		reader.onload = (e) => {
			const json = e.target?.result as string;
			dispatch('profile', JSON.parse(json));
		};

		reader.readAsText(file);
	};
</script>

<div class="flex flex-col items-center justify-center max-w-xs form-control">
	<input
		type="file"
		class="w-full max-w-xs file-input file-input-bordered file-input-primary"
		accept=".json"
		on:change={loadJsonFromFile}
	/>
</div>
