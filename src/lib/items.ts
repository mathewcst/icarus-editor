export interface Item {
	name: string;
	quantity?: number;
	power_generation?: number;
	power_consumption?: number;
	water_generation?: number;
	water_consumption?: number;
}

export const items: Item[] = [
	{
		name: 'Masonry Bench',
		water_consumption: 250,
	},
	{
		name: 'Cement Mixer',
		water_consumption: 250,
	},
	{
		name: 'Kitchen Bench',
		water_consumption: 100,
	},
	{
		name: 'Biofuel Stove',
		water_consumption: 100,
	},
	{
		name: 'Iron Crop Plot',
		water_consumption: 15,
	},
	{
		name: 'Repair Bench',
		power_consumption: 1500,
	},
	{
		name: 'Biofuel Composter',
		water_consumption: 100,
	},
	{
		name: 'Glass Workbench',
		water_consumption: 250,
	},
	{
		name: 'Biofuel Generator',
		power_generation: 5000,
	},
	{
		name: 'Electric Deep-Mining Drill',
		power_consumption: 2000,
	},
	{
		name: 'Electric Extractor',
		power_consumption: 1500,
	},
	{
		name: 'Electric Radar',
		power_consumption: 1000,
	},
	{
		name: 'Electric Furnace',
		power_consumption: 2500,
	},
	{
		name: 'Material Processor',
		power_consumption: 2500,
	},
	{
		name: 'Prototype Tumper',
		power_consumption: 1500,
	},
	{
		name: 'Directioal Worklamp',
		power_consumption: 150,
	},
	{
		name: 'Omnidirectional Worklamp',
		power_consumption: 150,
	},
	{
		name: 'Hydroponic Crop Plot',
		water_consumption: 15,
		power_consumption: 100,
	},
	{
		name: 'Advanced Alteration Bench',
		power_consumption: 1500,
	},
	{
		name: 'Water Pump',
		power_consumption: 1000,
		water_generation: 1000,
	},
	{
		name: 'Water Sprinkler',
		water_consumption: 10,
	},
	{
		name: 'Solar Panel',
		power_generation: 5000,
	},
	{
		name: 'Water Wheel',
		power_generation: 2000,
	},
	{
		name: 'Electric Textiles Bench',
		power_consumption: 2500,
	},
	{
		name: 'Chemistry Bench',
		power_consumption: 2500,
	},
	{
		name: 'Marble Kitchen Bench',
		water_consumption: 100,
	},
	{
		name: 'Electric Stove',
		power_consumption: 1000,
		water_consumption: 100,
	},
	{
		name: 'Plumbed Sink',
		water_consumption: 250,
	},
	{
		name: 'Refrigerator',
		power_consumption: 500,
	},
	{
		name: 'Deep Freeze',
		power_consumption: 2500,
	},
	{
		name: 'Electric Dehumidifier',
		power_consumption: 500,
	},
	{
		name: 'Heavy Air Conditioner',
		power_consumption: 250,
	},
	{
		name: 'Heavy Heater',
		power_consumption: 250,
	},
	{
		name: 'Electric Composter',
		power_consumption: 1000,
		water_consumption: 100,
	},
	{
		name: 'Electric Carpentry Bench',
		power_consumption: 2500,
	},
	{
		name: 'Electric Masonry Bench',
		power_consumption: 2000,
		water_consumption: 250,
	}
]

export const sorted_items = () => {
	return items.sort((a, b) => {
		if (a.name < b.name) {
			return -1;
		}
		return 1;
	});
}

export const allGenerators = () => {
	const generators = items.filter(item => item.power_generation);
	const water_pumps = items.filter(item => item.water_generation);

	return generators.concat(water_pumps);
}

export const allConsumers = () => {
	const consumers = items.filter(item => item.power_consumption);
	const water_consumers = items.filter(item => item.water_consumption);

	return consumers.concat(water_consumers);
}


export const getItem = (name: string) => {
	return items.find(item => item.name === name);
}

export const powerGenerationTimesQuantity = (item: Item) => {
	const item_details = getItem(item.name);

	if (item_details?.power_generation && item.quantity) {
		return item_details?.power_generation * item.quantity;
	} else {
		return 0;
	}
};

export const waterGenerationTimesQuantity = (item: Item) => {
	const item_details = getItem(item.name);

	if (item_details?.water_generation && item.quantity) {
		return item_details?.water_generation * item.quantity;
	} else {
		return 0;
	}
};

export const powerConsumptionTimesQuantity = (item: Item) => {
	const item_details = getItem(item.name);

	if (item_details?.power_consumption && item.quantity) {
		return item_details?.power_consumption * item.quantity;
	} else {
		return 0;
	}
};

export const waterConsumptionTimesQuantity = (item: Item) => {
	const item_details = getItem(item.name);

	if (item_details?.water_consumption && item.quantity) {
		return item_details?.water_consumption * item.quantity;
	} else {
		return 0;
	}
};
