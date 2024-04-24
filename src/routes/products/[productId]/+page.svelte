<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import Title from "$lib/components/Title.svelte";

	export let data;
	const { products } = data;
	console.log(products);
</script>

<section>
	<header>
		<Button href="/products" name="Back to products page" />
	</header>
	<div class="sm:px- lg:px- mx-auto px-2 py-8 sm:py-6">
		{#await products}
			Loading...
		{:then products}
			<header>
				<Title title={products.title} />
			</header>
			<p class="mt-4 max-w-md text-gray-500">
				{products.description}
			</p>
			<div class="flex flex-col mt-5">
				<span class="tracking-wider text-gray-900 font-bold text-xl">$ {products.price}</span>
				<span class="tracking-wider text-gray-900 font-semibold">Stocks: {products.stock}</span>
			</div>
			<div class="mt-8 flex w-full flex-wrap justify-between gap-10">
				{#each products.images as image}
					<img
						src={image}
						alt=""
						class="h-96 w-96 object-cover transition duration-500 group-hover:scale-105"
					/>
				{/each}
			</div>
		{:catch error}
			<!-- products was rejected -->
		{/await}
	</div>
</section>
