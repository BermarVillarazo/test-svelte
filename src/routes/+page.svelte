<script lang="ts">
	import Modal from "$lib/components/Modal.svelte";
	import { onMount } from "svelte";

	export let data;

	let showModal = true;

	onMount(() => {
		console.log(data);
		function hideModal() {
			showModal = false;
		}

		if (data.username) {
			setTimeout(hideModal, 2000);
		}
	});
</script>

<svelte:head>
	<title>Home | {data.username}</title>
</svelte:head>

<section class="flex flex-col gap-10">
	{#if showModal}
		<div class={`${data.username} ? ${showModal} : "hidden"`}>
			<Modal modalOptions={true} message={data.message} />
		</div>
	{:else}
		<Modal modalOptions={false} message={data.message} />
	{/if}
	<p>Hi there, <span class="font-bold">{data.username}!</span></p>
	<a href="/landingpage" class="bg-yellow-600 p-5">Visit the website for suprise</a>

	<form method="POST">
		<label
			class="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
		>
			<input
				type="text"
				name="username"
				class="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
			/>

			<span
				class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
			>
				Username
			</span>
		</label>
		<div class="mt-10">
			<button
				formaction="?/yourusername"
				class="rounded-lg bg-indigo-600 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
			>
				Update username
			</button>
			<button
				formaction="?/deleteusername"
				class="rounded-lg bg-indigo-600 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
			>
				Delete username
			</button>
		</div>
	</form>
</section>
