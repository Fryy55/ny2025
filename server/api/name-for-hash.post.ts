export default defineEventHandler(async (event) => {
	const { hash } = await readBody<{ hash: keyof typeof names }>(event);

	const names = {
		"c399b0c24566e7649c6e56132c838f57": "Маши",
		"3d572ee089c1eb8194db70847f93b411": "Мамы",
		"fc3b489b79f807e9b5ba46924fe075e6": "Папы"
	};

	return { allowed: names[hash] };
});