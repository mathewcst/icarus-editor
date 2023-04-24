<script lang="ts">
	let copied = false;

	const handleCopyPath = () => {
		const path = `%localappdata%\\Icarus\\Saved\\PlayerData\\`;
		navigator.clipboard.writeText(path);

		copied = true;

		setTimeout(() => {
			copied = false;
		}, 1000);
	};
</script>

<kbd class="text-sm kbd"> %localappdata%\Icarus\Saved\PlayerData\YOUR_STEAM_ID\Profile.json </kbd>
<button
	class="btn btn-sm btn-square"
	class:btn-success={copied}
	class:btn-ghost={!copied}
	on:click={handleCopyPath}
>
	<iconify-icon icon="material-symbols:content-copy" />
</button>
