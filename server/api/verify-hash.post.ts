export default defineEventHandler(async (event) => {
	const { hash } = await readBody<{ hash: string }>(event);

	const allowedHashes = [
		'c399b0c24566e7649c6e56132c838f57', // md5 masha
		'3d572ee089c1eb8194db70847f93b411', // md5 mom
		'fc3b489b79f807e9b5ba46924fe075e6' // md5 dad
	];

	return { allowed: allowedHashes.includes(hash) };
});