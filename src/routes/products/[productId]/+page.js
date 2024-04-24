export function load({ fetch, params }) {
	async function fetchingProduct(id) {
		const productApi = await fetch(`https://dummyjson.com/products/${id}`);
		const productData = await productApi.json();
		return productData;
	}

	return {
		products: fetchingProduct(params.productId),
	};
}
