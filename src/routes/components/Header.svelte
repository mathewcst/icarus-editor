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
			name: 'Calculator',
			link: '/calculator',
			icon: 'mdi:calculator-variant-outline'
		},

		{
			name: 'Profile Editor',
			link: '/profile',
			icon: 'material-symbols:lab-profile-outline'
		},
		{
			name: 'Changelog',
			link: '/changelog',
			icon: 'material-symbols:family-history'
		}
	];
</script>

<header class="bg-base-300">
	<div class="container max-w-screen-xl mx-auto navbar">
		<div class="flex-1">
			<a href="/">
				<img src="/logo.png" alt="Icarus Tools" width="160" />
			</a>
		</div>
		<div class="flex-none">
			<ul class="gap-2 px-1 menu menu-horizontal">
				{#each menu as item}
					<li>
						<a href={item.link} class:active={item.link === $page.url.pathname}>
							<iconify-icon icon={item.icon} class="hidden text-xl sm:block" />
							{item.name}
						</a>
					</li>
				{/each}
				<!--<li class="hidden disabled sm:block">
					<button class="disabled">
						<iconify-icon icon="material-symbols:lab-profile-outline" class="text-xl" />
						Profile Editor
						<div class="badge badge-error badge-sm">Soon</div>
					</button>
				</li>-->
			</ul>
		</div>
	</div>
</header>
