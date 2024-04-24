<script lang="ts">
	export let href = "";
	export let name = "";
</script>

<a
	{href}
	class="block rounded-lg bg-indigo-600 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
	type="button"
>
	{name}
</a>
