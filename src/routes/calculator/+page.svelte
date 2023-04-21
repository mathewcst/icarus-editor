<script lang="ts">
	import grid from '$/stores/grid';
	import GridItem from './components/GridItem.svelte';

	let grid_name: string;

	const handleNewGrid = () => {
		grid.createGrid(grid_name);
		grid_name = '';
	};
</script>

<svelte:head>
	<title>Power Calculator | Icarus Tools</title>
</svelte:head>

<h1 class="my-4 text-2xl font-bold uppercase">Calculator</h1>

<div class="flex flex-row items-center justify-between p-4 my-4 rounded-lg bg-base-200">
	<p class="max-w-xl">
		Create a grid for each power/water base you have. Your base would be a grid, a outpost to mine
		Iron would be another, etc.
	</p>

	<div class="flex-auto" />

	<form
		on:submit|preventDefault={handleNewGrid}
		class="flex flex-row items-center justify-end gap-4"
	>
		<div class="w-full max-w-xs form-control">
			<input
				type="text"
				id="grid_name"
				bind:value={grid_name}
				placeholder="i.e.: Base"
				class="w-full max-w-xs input input-bordered"
			/>
		</div>

		<div class="flex flex-col items-center justify-center max-w-xs form-control">
			<button type="submit" class="btn btn-primary">Add Grid</button>
		</div>
	</form>
</div>

{#each $grid as item}
	<GridItem {item} />
{/each}
