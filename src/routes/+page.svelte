<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>Home | {data.username}</title>
</svelte:head>

<section class="flex flex-col gap-10">
	<p>Welcome Back, <span class="font-bold">{data.username}!</span></p>
	<a href="/landingpage" class="bg-yellow-600 p-5">Visit the website for suprise</a>

	<div class="centered">
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
		</form>
	</div>
</section>
