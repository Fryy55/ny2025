export default defineEventHandler(async (event) => {
	const { id, answerInd } = await readBody<{ id: keyof typeof answers, answerInd: number }>(event);

	const answers = {
		q1: 2,
		q2: 4,
		q3: 1,
		q10: 3
	};

	return { correct: answers[id] - 1 === answerInd };
});