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

	export let item: Grid;

	let item_name: string;
	let item_quantity: number;

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
	};

	const handleDeleteItem = (object: Item) => {
		grid.removeItemFromGrid(object, item.id);
	};
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
					<th />
					<th>Name</th>
					<th>#</th>
					<th>Power Gen.</th>
					<th>Power Con.</th>
					<th>Water Gen.</th>
					<th>Water Con.</th>
					<th>Actions</th>
					<th />
				</tr>
			</thead>
			<tbody>
				{#each item.items as object}
					<tr>
						<th />
						<th>{object.name}</th>
						<th>{object.quantity}</th>
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
				<tr>
					<th />
					<th>
						<select class="w-full max-w-xs select select-bordered" bind:value={item_name}>
							<option disabled selected>Select Item</option>
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
					<th />
					<th>
						<p>Totals</p>
					</th>
					<th />
					<th>
						<p>{powerGenerationTimesQuantity(item)}</p>
					</th>
					<th>
						<p>{powerConsumptionTimesQuantity(item)}</p>
					</th>
					<th>
						<p>{waterGenerationTimesQuantity(item)}</p>
					</th>
					<th>
						<p>{waterConsumptionTimesQuantity(item)}</p>
					</th>
					<th />
				</tr>
			</tbody>
		</table>
	</div>
</div>
