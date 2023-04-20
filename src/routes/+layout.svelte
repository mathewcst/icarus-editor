<script lang="ts">
	import '$/app.css';
	import '@fontsource/lato';

	import Header from './components/Header.svelte';
</script>

<div id="app" class="font-lato">
	<Header />

	<main>
		<slot />
	</main>
</div>
