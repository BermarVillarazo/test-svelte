export function load({ cookies }) {
	let username = cookies.get("username");

	if (!username) {
		return {
			message: "Please input a username",
		};
	}

	return { username, message: "Your username has been set!" };
}

export const actions = {
	yourusername: async ({ cookies, request }) => {
		const data = await request.formData();
		const username = data.get("username");

		cookies.set("username", username, { path: "/" });
	},
	deleteusername: async ({ cookies }) => {
		const username = cookies.get("username");
		console.log(username);

		cookies.delete("username", { path: "/" });
	},
};
