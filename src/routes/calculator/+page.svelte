<script lang="ts">
	import grid from '$/stores/grid';
	import PageTitle from '../components/PageTitle.svelte';
	import GridItem from './components/GridItem.svelte';

	let grid_name: string;

	const handleNewGrid = () => {
		grid.createGrid(grid_name);
		grid_name = '';
	};

	// TODO: allow to set custom values for generators or other items (ex: BioFuel generator provides 5000 energy)
</script>

<svelte:head>
	<title>Power Calculator | Icarus Tools</title>
</svelte:head>

<PageTitle>Calculator</PageTitle>

<div class="flex flex-col items-center justify-between p-4 my-4 rounded-lg sm:flex-row bg-base-200">
	<p class="max-w-xl">
		Create a grid for each power/water base you have. Your base would be a grid, a outpost to mine
		Iron would be another, etc.
	</p>

	<div class="flex-auto" />

	<form
		on:submit|preventDefault={handleNewGrid}
		class="flex flex-row items-center justify-end gap-4 mt-4 sm:mt-0"
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
