<script lang="ts">
	import { page } from '$app/stores';

	interface Menu {
		name: string;
		link: string;
		icon: string;
	}

	let menu: Menu[] = [
		{
			name: 'Home',
			link: '/',
			icon: 'mdi:home'
		},
		{
			name: 'Power Calculator',
			link: '/power',
			icon: 'material-symbols:power-plug'
		}
	];
</script>

<header class="navbar bg-base-300">
	<div class="flex-1">
		<a href="/" class="text-xl normal-case btn btn-ghost">Icarus Tools</a>
	</div>
	<div class="flex-none">
		<ul class="gap-2 px-1 menu menu-horizontal">
			{#each menu as item}
				<li>
					<a href={item.link} class:active={item.link === $page.url.pathname}>
						<iconify-icon icon={item.icon} class="text-xl" />
						{item.name}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</header>
