<script lang="ts">
	import { allGenerators } from '$/lib/items';

	console.log(allGenerators());
</script>

<svelte:head>
	<title>Power Calculator | Icarus Tools</title>
</svelte:head>

<h1 class="my-4 text-2xl font-bold uppercase">Calculator</h1>

<div class="overflow-x-auto">
	<table class="table w-full table-zebra">
		<!-- head -->
		<thead>
			<tr>
				<th />
				<th>Name</th>
				<th>Job</th>
				<th>Favorite Color</th>
			</tr>
		</thead>
		<tbody>
			<!-- row 1 -->
			<tr>
				<th>1</th>
				<td>Cy Ganderton</td>
				<td>Quality Control Specialist</td>
				<td>Blue</td>
			</tr>
			<!-- row 2 -->
			<tr>
				<th>2</th>
				<td>Hart Hagerty</td>
				<td>Desktop Support Technician</td>
				<td>Purple</td>
			</tr>
			<!-- row 3 -->
			<tr>
				<th>3</th>
				<td>Brice Swyre</td>
				<td>Tax Accountant</td>
				<td>Red</td>
			</tr>
		</tbody>
	</table>
</div>
