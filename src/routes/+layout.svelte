<script lang="ts">
	import '$/app.css';
	import '@fontsource/lato';
	import 'iconify-icon';

	import Header from './components/Header.svelte';
</script>

<div id="app" class="font-lato">
	<Header />

	<main>
		<div class="container max-w-screen-lg py-4 mx-auto">
			<slot />
		</div>
	</main>
</div>
