<script lang="ts">
	import '$/app.css';
	import '@fontsource/lato';
	import 'iconify-icon';

	import Footer from './components/Footer.svelte';
	import Header from './components/Header.svelte';
</script>

<div id="app" class="font-lato">
	<Header />

	<main>
		<div class="container max-w-screen-xl py-4 mx-auto">
			<slot />
		</div>
	</main>

	<Footer />
</div>

<style>
	main {
		min-height: calc(100vh - 8rem);
	}
</style>
