<script lang="ts">
	export let id = "";
	export let images = "";
	export let title = "";
	export let description = "";
</script>

<a href={`/products/${id}`} class="group relative block h-64 max-w-72 sm:h-80 lg:h-96">
	<span class="absolute inset-0 border-2 border-dashed border-black"></span>
	<div
		class="relative flex h-full transform items-end gap-5 border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
	>
		<div
			class="p-2 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
		>
			<img src={images} alt={title + "'s Image"} class="h-11/12 w-11/12" />
			<h2 class="text-md mt-4 font-medium sm:text-xl">{title}</h2>
		</div>

		<div
			class="absolute p-2 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
		>
			<img src={images} alt={title + "'s Image"} class="h-11/12 w-11/12" />
			<h3 class="text-md mt-4 font-medium sm:text-xl">{title}</h3>

			<p class="mt-4 h-10 overflow-clip text-sm sm:text-base">
				{description}
			</p>

			<p class="mt-4 font-bold">Read more</p>
		</div>
	</div>
</a>
