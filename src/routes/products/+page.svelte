<script lang="ts">
	import Products from "$lib/components/Products.svelte";

	export let data;
	const { products } = data;
	// console.log(products);
</script>

<section class="mx-auto flex flex-col gap-10 p-5 md:max-w-7xl">
	<header>
		<h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Products</h2>
	</header>

	<div class="flex flex-wrap gap-5 md:justify-between">
		{#await products}
			Loading products...
		{:then products}
			{#each products as { id, images, title, description }}
				<Products {id} images={images[1]} {title} {description} />
			{/each}
		{:catch error}
			<p>error loading products: {error.message}</p>
		{/await}
	</div>
</section>
