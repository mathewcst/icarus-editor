interface MetaResource {
	MetaRow: string;
	Count: string;
}

interface UnlockedFlag {
	[key: string]: string
}

interface Talent {
	RowName: string;
	Rank: number;
}

export interface Profile {
	UserID: string;
	MetaResources: MetaResource[];
	UnlockedFlags: UnlockedFlag[];
	Talents: Talent[];
	NextChrSlot: number;
	DataVersion: number;
}

export const styxMapTalents = [
	{
		"RowName": "Prospect_Styx_A_Expedition",
		"Rank": 1
	},
	{
		"RowName": "Prospect_Styx_B_Expedition",
		"Rank": 1
	},
	{
		"RowName": "Prospect_Styx_C_Expedition",
		"Rank": 1
	},
	{
		"RowName": "Prospect_Styx_D_Expedition",
		"Rank": 1
	},
	{
		"RowName": "Prospect_Styx_E_Expedition",
		"Rank": 1
	},
	{
		"RowName": "Prospect_Styx_A_Exploration",
		"Rank": 1
	},
]


export const unlockStyxMap = (profile: Profile) => {
	const currentTalents = profile.Talents;

	//Check if the talent is already unlocked
	const styxMapTalentsUnlocked = hasStyxUnlocked(profile);

	if (!styxMapTalentsUnlocked) {
		profile.Talents = [...currentTalents, ...styxMapTalents];
	}

	return profile;

}

export const hasStyxUnlocked = (profile: Profile) => {
	const currentTalents = profile.Talents;

	//Check if the talent is already unlocked
	const styxMapTalentsUnlocked = styxMapTalents.every(talent => {
		return currentTalents.some(currentTalent => {
			return currentTalent.RowName === talent.RowName && currentTalent.Rank === talent.Rank;
		})
	})

	return styxMapTalentsUnlocked;
}
