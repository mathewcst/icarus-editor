<script lang="ts">
	import { versions } from '$/helpers/version';

	let sortedVersions = versions.sort((a, b) => {
		return b.date.valueOf() - a.date.valueOf();
	});

	let formatDate = (date: Date) => {
		return new Intl.DateTimeFormat('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		}).format(date);
	};
</script>

<svelte:head>
	<title>Changelog | Icarus Tools</title>
</svelte:head>

<div class="flex flex-col items-start justify-center w-full gap-2 p-4 bg-base-300">
	{#each sortedVersions as item}
		<div class="w-full my-2 rounded-lg bg-base-100">
			<div class="flex flex-row items-center justify-start">
				<h3 class="p-4 text-xl font-bold">
					{item.version}
				</h3>
				<h4 class="px-4 py-1 text-sm bg-primary text-base-300 rounded-xl">
					{formatDate(item.date)}
				</h4>
			</div>
			<div class="p-4">
				<p>{item.description}</p>
			</div>
		</div>
	{/each}
</div>
