<script lang="ts">
	import { hasStyxUnlocked, removeStyxMap, unlockStyxMap, type Profile } from '$/lib/profile';

	import a11yDark from 'svelte-highlight/styles/a11y-dark';

	import PageTitle from '$/routes/components/PageTitle.svelte';

	import LoadFile from './components/LoadFile.svelte';
	import PathKbd from './components/PathKBD.svelte';
	import ProfileJson from './components/ProfileJSON.svelte';

	let profile: Profile | null = null;
	let collapsed = false;

	const handleLoadedProfile = (event: CustomEvent<Profile>) => {
		profile = event.detail;

		refunds = profile.MetaResources[0].Count;
		credits = profile.MetaResources[1].Count;
		exotics = profile.MetaResources[2].Count;

		styx_unlocked = hasStyxUnlocked(profile);
	};

	let refunds = 0;
	let credits = 0;
	let exotics = 0;
	let styx_unlocked = false;

	$: code = profile ? JSON.stringify(profile, null, '\t') : null;

	const handleUpdateJSON = () => {
		if (profile) {
			profile.MetaResources[0].Count = refunds;
			profile.MetaResources[1].Count = credits;
			profile.MetaResources[2].Count = exotics;
		}
	};

	const handleStyxUnlocks = (event: Event) => {
		var input = event.target as HTMLInputElement;

		if (profile) {
			if (input.checked) {
				profile = unlockStyxMap(profile);
			} else {
				profile = removeStyxMap(profile);
			}
		}
	};
</script>

<svelte:head>
	<title>Profile Editor | Icarus Tools</title>
	{@html a11yDark}
</svelte:head>

<PageTitle>Profile Editor</PageTitle>

<div class="flex flex-col items-center justify-between p-4 my-4 rounded-lg sm:flex-row bg-base-200">
	<div class="max-w-2xl">
		<p>
			Simple way to edit your <kbd class="kbd">Profile.json</kbd>.
		</p>

		<div class="flex flex-row items-center justify-center my-2">
			<p class="mr-2">Path:</p>
			<PathKbd />
		</div>
	</div>

	<div class="flex-auto" />

	<LoadFile on:profile={handleLoadedProfile} />
</div>

<div class="flex flex-col items-center justify-between p-4 my-4 rounded-lg sm:flex-row bg-base-200">
	<div class="grid w-full grid-cols-3 gap-4">
		<div class="w-full max-w-xs form-control">
			<label class="label" for="refunds">
				<span class="flex flex-row items-center justify-start label-text">
					Refunds
					<img src="/images/talent.png" width="20" alt="Talent Icon" class="ml-2" />
				</span>
			</label>
			<input
				type="number"
				name="refunds"
				id="refunds"
				placeholder="Type here"
				class="w-full max-w-xs input input-bordered"
				bind:value={refunds}
				on:change={handleUpdateJSON}
			/>
		</div>

		<div class="w-full max-w-xs form-control">
			<label class="label" for="credits">
				<span class="flex flex-row items-center justify-start label-text">
					Ren
					<img src="/images/ren.png" width="20" alt="Talent Icon" class="ml-2" />
				</span>
			</label>
			<input
				type="number"
				name="credits"
				id="credits"
				placeholder="Type here"
				class="w-full max-w-xs input input-bordered"
				bind:value={credits}
				on:change={handleUpdateJSON}
			/>
		</div>

		<div class="w-full max-w-xs form-control">
			<label class="label" for="exotics">
				<span class="flex flex-row items-center justify-start label-text">
					Exotics
					<img src="/images/exotic.png" width="20" alt="Talent Icon" class="ml-2" />
				</span>
			</label>
			<input
				type="number"
				name="exotics"
				id="exotics"
				placeholder="Type here"
				class="w-full max-w-xs input input-bordered"
				bind:value={exotics}
				on:change={handleUpdateJSON}
			/>
		</div>

		<div class="form-control">
			<label class="cursor-pointer label">
				<span class="label-text">Unlock Styx Zones</span>
				<input
					type="checkbox"
					checked={styx_unlocked}
					class="checkbox"
					on:change={handleStyxUnlocks}
				/>
			</label>
		</div>
	</div>
</div>

<div class="flex flex-col">
	{#if profile}
		<div class="collapse" class:collapse-open={collapsed}>
			<div class="flex flex-row items-center justify-start">
				<p class="text-xl font-medium collapse-title">Profile.json</p>
				<button class="btn btn-ghost" on:click={() => (collapsed = !collapsed)}>
					{#if collapsed}
						Hide
					{:else}
						Show
					{/if}
				</button>
			</div>
			<div class="collapse-content">
				<ProfileJson {profile} {code} />
			</div>
		</div>
	{/if}
</div>
