import { browser } from "$app/environment";
import { writable } from "svelte/store";

interface Power {
	power_gen: number;
	power_cons: number;
	water_gen: number;
	water_cons: number;
}

const defaultValue: Power = {
	power_gen: 0,
	power_cons: 0,
	water_gen: 0,
	water_cons: 0,
}

export const power = writable<Power>(defaultValue);


power.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('grid', JSON.stringify(value));
	}
});
