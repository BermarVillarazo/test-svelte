export function load({ cookies }) {
	let username = cookies.get("username");

	return { username };
}

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const username = data.get("username");
		cookies.set("username", username, { path: "/" });
	},
};
