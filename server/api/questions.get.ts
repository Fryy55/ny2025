export default defineEventHandler(async (event) => {
	const questions = [
		{
			id: 'q1',
			text: 'test stuff 1',
			options: ['option1', 'option2 <', 'option3', 'option4']
		},
		{
			id: 'q2',
			text: 'test stuff 2',
			options: ['option1', 'option2', 'option3', 'option4 <']
		},
		{
			id: 'q3',
			text: 'test stuff 3',
			options: ['option1 <', 'option2', 'option3', 'option4']
		},
		{
			id: 'q10',
			text: 'final ques!!',
			options: ['option1', 'option2', 'option3 <', 'option4']
		}
	];

	for (let i = questions.length - 2; 0 < i; --i) {
		const j = Math.floor(Math.random() * (i + 1));
		[questions[i], questions[j]] = [questions[j]!, questions[i]!];
	}

	questions[0] = questions.at(-1)!;

	return questions.slice(0, 1);
});