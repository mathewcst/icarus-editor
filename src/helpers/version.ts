interface Version {
	version: string
	date: Date
	description: string
}

export const versions: Version[] = [
	{
		version: '0.1.0',
		date: new Date('04/20/2023'),
		description: 'Initial release'
	},
	{
		version: '0.1.1',
		date: new Date('04/21/2023'),
		description: 'Add missing items: Lights'
	},
	{
		version: '0.1.2',
		date: new Date('04/22/2023'),
		description: 'Fix mobile view'
	},
	{
		version: '0.1.3',
		date: new Date('04/23/2023'),
		description: 'Created Chagelog page'
	}
]


export const latestVersion = versions[versions.length - 1]
