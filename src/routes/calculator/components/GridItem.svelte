<script lang="ts">
	import type { Item } from '$/lib/items';
	import type { Grid } from '$/stores/grid';

	import grid from '$/stores/grid';

	import {
		powerConsumptionTimesQuantity,
		powerGenerationTimesQuantity,
		sorted_items,
		waterConsumptionTimesQuantity,
		waterGenerationTimesQuantity
	} from '$/lib/items';
	import { onMount } from 'svelte';

	export let item: Grid;

	let item_name: string;
	let item_quantity: number;

	let total_power_generated = 0;
	let total_power_consumed = 0;
	let total_water_generated = 0;
	let total_water_consumed = 0;

	let total_power_left = 0;
	let total_water_left = 0;

	// FORM HANDLERS
	const handleDeleteGrid = () => {
		grid.deleteGrid(item.id);
	};

	const handleAddItem = () => {
		const new_item = {
			id: item.items.length + 1,
			name: item_name,
			quantity: item_quantity || 0
		};

		grid.addItemToGrid(new_item, item.id);

		item_name = '';
		item_quantity = 0;

		// Recalculate totals
		calculateTotalPowerConsumption();
		calculateTotalPowerGeneration();
		calculateTotalWaterConsumption();
		calculateTotalWaterGeneration();
	};

	const changeItemQuantity = (object: Item, quantity: number) => {
		if (object.quantity) {
			grid.changeItemQuantity(object, item.id, object?.quantity + quantity);
		}

		// Recalculate totals
		calculateTotalPowerConsumption();
		calculateTotalPowerGeneration();
		calculateTotalWaterConsumption();
		calculateTotalWaterGeneration();
	};

	const handleDeleteItem = (object: Item) => {
		grid.removeItemFromGrid(object, item.id);

		// Recalculate totals
		calculateTotalPowerConsumption();
		calculateTotalPowerGeneration();
		calculateTotalWaterConsumption();
		calculateTotalWaterGeneration();
	};

	const calculateTotalPowerGeneration = () => {
		let total = 0;

		item.items.forEach((object) => {
			total += powerGenerationTimesQuantity(object);
		});

		total_power_generated = total;
		total_power_left = total - total_power_consumed;

		return total;
	};

	const calculateTotalPowerConsumption = () => {
		let total = 0;

		item.items.forEach((object) => {
			total += powerConsumptionTimesQuantity(object);
		});

		total_power_consumed = total;
		total_power_left = total_power_generated - total;

		return total;
	};

	const calculateTotalWaterGeneration = () => {
		let total = 0;

		item.items.forEach((object) => {
			total += waterGenerationTimesQuantity(object);
		});

		total_water_generated = total;
		total_water_left = total - total_water_consumed;

		return total;
	};

	const calculateTotalWaterConsumption = () => {
		let total = 0;

		item.items.forEach((object) => {
			total += waterConsumptionTimesQuantity(object);
		});

		total_water_consumed = total;
		total_water_left = total_water_generated - total;

		return total;
	};

	onMount(() => {
		calculateTotalPowerConsumption();
		calculateTotalPowerGeneration();
		calculateTotalWaterConsumption();
		calculateTotalWaterGeneration();
	});
</script>

<div class="flex flex-col items-center justify-start p-4 my-4 bg-base-300">
	<header class="flex flex-row items-center justify-start w-full">
		<h3 class="text-lg font-bold uppercase">{item.name}</h3>

		<div class="flex-auto" />

		<button
			on:click={handleDeleteGrid}
			class="flex flex-row items-center justify-center h-8 px-4 bg-red-600 rounded-lg"
		>
			Delete
		</button>
	</header>

	<div class="w-full my-4 overflow-x-auto">
		<table class="table w-full table-zebra">
			<!-- head -->
			<thead>
				<tr>
					<th>Name</th>
					<th>Quantity</th>
					<th>Power Gen.</th>
					<th>Power Con.</th>
					<th>Water Gen.</th>
					<th>Water Con.</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{#each item.items as object}
					<tr>
						<th>{object.name}</th>
						<th>
							<div class="flex flex-row items-center justify-start">
								{object.quantity}
								<div class="relative flex flex-col items-center justify-center ml-4">
									<button on:click={() => changeItemQuantity(object, 1)} class="relative top-1">
										<iconify-icon icon="material-symbols:keyboard-arrow-up-rounded" />
									</button>
									<button on:click={() => changeItemQuantity(object, -1)} class="relative bottom-1">
										<iconify-icon icon="material-symbols:keyboard-arrow-down-rounded" />
									</button>
								</div>
							</div>
						</th>
						<th>{powerGenerationTimesQuantity(object)}</th>
						<th>{powerConsumptionTimesQuantity(object)}</th>
						<th>{waterGenerationTimesQuantity(object)}</th>
						<th>{waterConsumptionTimesQuantity(object)}</th>
						<th>
							<button class="btn-error btn" on:click={() => handleDeleteItem(object)}>Delete</button
							>
						</th>
					</tr>
				{/each}
				<tr class="hidden sm:block">
					<th>
						<select class="w-full max-w-xs select select-bordered" bind:value={item_name}>
							<option disabled selected value="">Select Item</option>
							{#each sorted_items() as obj}
								<option value={obj.name}>{obj.name}</option>
							{/each}
						</select>
					</th>
					<th>
						<input
							type="number"
							name="item_quantity"
							bind:value={item_quantity}
							class="input input-bordered"
							placeholder="Quantity"
						/>
					</th>
					<th />
					<th />
					<th />
					<th />
					<th>
						<button class="btn btn-success" on:click={handleAddItem}>Add</button>
					</th>
				</tr>
				<tr class="active">
					<th>
						<p>Totals</p>
					</th>
					<th />
					<th>
						<p>{total_power_generated}</p>
					</th>
					<th>
						<p>{total_power_consumed}</p>
					</th>
					<th>
						<p>{total_water_generated}</p>
					</th>
					<th>
						<p>{total_water_consumed}</p>
					</th>
					<th />
				</tr>
				<tr>
					<th>
						<p>Left</p>
					</th>
					<th />
					<th>
						<p
							class:text-red-500={total_power_left < 0}
							class:text-green-500={total_power_left > 0}
						>
							{total_power_left}
						</p>
					</th>
					<th />
					<th>
						<p
							class:text-red-500={total_water_left < 0}
							class:text-green-500={total_water_left > 0}
						>
							{total_water_left}
						</p>
					</th>
					<th />
					<th />
				</tr>
			</tbody>
		</table>
		<div class="flex flex-col items-center justify-center gap-2 py-4 my-4 sm:hidden bg-base-100">
			<p>Add new item</p>
			<select class="w-full max-w-xs select select-bordered" bind:value={item_name}>
				<option disabled selected value="">Select Item</option>
				{#each sorted_items() as obj}
					<option value={obj.name}>{obj.name}</option>
				{/each}
			</select>
			<input
				type="number"
				name="item_quantity"
				bind:value={item_quantity}
				class="w-full max-w-xs input input-bordered"
				placeholder="Quantity"
			/>
			<button class="btn btn-success" on:click={handleAddItem}> Add </button>
		</div>
	</div>
</div>
