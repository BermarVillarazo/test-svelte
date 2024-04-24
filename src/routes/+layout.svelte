<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import "../app.css";
</script>

<main class="mx-auto max-w-screen-xl">
	<Header />
	<slot />
</main>
