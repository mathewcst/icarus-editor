<script lang="ts">
	import '$/app.css';
	import '@fontsource/lato';
	import 'iconify-icon';

	import Container from './components/Container.svelte';
	import Footer from './components/Footer.svelte';
	import Header from './components/Header.svelte';
</script>

<div id="app" class="font-lato">
	<Header />

	<main>
		<Container>
			<slot />
		</Container>
	</main>

	<Footer />
</div>

<style>
	main {
		min-height: calc(100vh - 9rem);
	}
</style>
