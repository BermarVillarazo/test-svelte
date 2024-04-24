export async function load({ fetch }) {
	async function fetchingProducts() {
		const productApi = await fetch("https://dummyjson.com/products");
		const productData = await productApi.json();
		return productData.products;
	}

	return {
		products: fetchingProducts(),
	};
}
