interface MetaResource {
	MetaRow: string;
	Count: number;
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

	profile.Talents = currentTalents.concat(styxMapTalents);

	console.log(profile)

	return profile;

}

export const removeStyxMap = (profile: Profile) => {
	const currentTalents = profile.Talents;

	profile.Talents = currentTalents.filter(talent => {
		return !styxMapTalents.some(styxTalent => {
			return styxTalent.RowName === talent.RowName && styxTalent.Rank === talent.Rank;
		})
	})


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
