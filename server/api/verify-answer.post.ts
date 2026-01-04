export default defineEventHandler(async (event) => {
	const { id, answerInd } = await readBody<{ id: keyof typeof answers, answerInd: number }>(event);

	const answers = {
		q1: 3,
		q2: 1,
		q3: 4,
		q4: 2,
		q5: 1,
		q6: 2,
		q7: 4,
		q8: 3,
		q9: 2,
		q10: 4,
		q11: 3
	};

	return { correct: answers[id] - 1 === answerInd };
});