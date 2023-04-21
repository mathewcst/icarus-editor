import ls from 'localstorage-slim';

import { browser } from "$app/environment";
import { writable } from "svelte/store";

import type { Item } from '../lib/items';

const STORE_NAME = 'grid'

export interface ItemWithId extends Item {
	id: number;
}

export interface Grid {
	id: number;
	name: string;
	power_generation: number;
	power_consumption: number;
	water_generation: number;
	water_consumption: number;
	items: ItemWithId[];
}

const defaultValue: Grid[] = []
let initialValue: Grid[] = []

if (browser) {
	// Check if localStoarge item exists
	const localGrid = ls.get(STORE_NAME)

	// Parse JSON from localStoarge
	if (localGrid) {
		initialValue = localGrid as Grid[]
	}

	// If there is no localStoarge, use default (empty) value
	else {
		initialValue = defaultValue
	}
}


function createGridStore() {
	const { subscribe, set, update } = writable<Grid[]>(initialValue)

	const addItemToGrid = (item: ItemWithId, grid_id: number) => {

		update((value) => {
			const grid = value.find(grid => grid.id === grid_id)
			if (grid) {
				grid.items.push(item)
			}
			return value
		})
	}

	const removeItemFromGrid = (item: Item, grid_id: number) => {
		update((value) => {
			const grid = value.find(grid => grid.id === grid_id)
			if (grid) {
				const index = grid.items.findIndex(gridItem => gridItem.name === item.name)
				if (index > -1) {
					grid.items.splice(index, 1)
				}
			}
			return value
		})
	}

	const createGrid = (grid_name: string) => {
		const newGrid: Grid = {
			id: initialValue.length + 1,
			name: grid_name,
			power_generation: 0,
			power_consumption: 0,
			water_generation: 0,
			water_consumption: 0,
			items: []
		}

		update((value) => {
			value.push(newGrid)
			return value
		})
	}

	const deleteGrid = (grid_id: number) => {
		update((value) => {
			const index = value.findIndex(grid => grid.id === grid_id)
			if (index > -1) {
				value.splice(index, 1)
			}
			return value
		})
	}

	const renameGrid = (grid_id: number, grid_name: string) => {
		update((value) => {
			const grid = value.find(grid => grid.id === grid_id)
			if (grid) {
				grid.name = grid_name
			}
			return value
		})
	}

	const reset = () => set(defaultValue)

	return {
		subscribe,
		addItemToGrid,
		removeItemFromGrid,
		createGrid,
		deleteGrid,
		renameGrid,
		reset,
		set
	}
}

const grid = createGridStore()

grid.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('grid', JSON.stringify(value));
	}
});

export default grid
