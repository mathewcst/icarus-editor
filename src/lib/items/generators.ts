export interface Generator {
	name: string;
	power?: number;
	water?: number;
}

export const generators: Generator[] = [
	{
		name: "Solar Panel",
		power: 5000
	},
	{
		name: "Biofuel Generator",
		power: 5000
	},
	{
		name: "Water Wheel",
		power: 2000
	},
	{
		name: "Water Pump",
		power: 0,
		water: 1000
	}
]
