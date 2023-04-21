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

<div class="p-4 my-4 rounded-lg actions bg-base-200">
	<form on:submit|preventDefault={handleNewGrid} class="flex flex-row items-center justify-center">
		<div class="w-full max-w-xs form-control">
			<label class="label" for="grid_name">
				<span class="label-text">Grid Name</span>
			</label>
			<input
				type="text"
				id="grid_name"
				bind:value={grid_name}
				placeholder="i.e.: Base"
				class="w-full max-w-xs input input-bordered"
			/>
		</div>

		<button type="submit" class="btn btn-primary">New Grid</button>
	</form>
</div>

{#each $grid as item}
	<GridItem {item} />
{/each}
