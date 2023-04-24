<script lang="ts">
	import { latestVersion } from '$/helpers/version';
</script>

<footer class="flex flex-row items-center justify-center h-16 bg-base-300">
	<div class="container max-w-screen-xl mx-auto">
		<div class="flex flex-row items-center justify-center px-4">
			<p>
				Made by
				<a href="https://twitter.com/mathewcst" target="_blank" rel="noreferrer" class="link">
					@mathewcst
				</a>
			</p>

			<div class="flex-auto" />

			<p>
				<a href="/changelog" class="link">v{latestVersion.version}</a>
			</p>
		</div>
	</div>
</footer>
