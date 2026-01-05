export default defineEventHandler(async (event) => {
	const { wish } = await readBody(event);

	let verified = false;
	for (const c of wish) {
		if (c != " " && c != "\n") {
			verified = true;
			break;
		}
	}

	if (!verified)
		return { forbidden: true };

	const db = useDatabase();

	await db.sql`
	CREATE TABLE IF NOT EXISTS wishes (
		id INTEGER PRIMARY KEY,
		wish TEXT NOT NULL,
		sort_value INTEGER
	)`;

	await db.sql`
		INSERT INTO wishes
			(wish, sort_value)
		VALUES
			(${wish}, ${Math.floor(Math.random() * 999_999) + 1})
	`;

	const { rows } = await db.sql`
		SELECT wish FROM wishes
		ORDER BY sort_value ASC
	`;

	return {
		wishes: rows!.map(i => i.wish)
	};
});