import { writable } from "svelte/store";

interface Power {
	power_gen: number;
	power_cons: number;
}

const defaultValue: Power = {
	power_gen: 0,
	power_cons: 0
}

export const power = writable<Power>(defaultValue);
