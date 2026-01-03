export default defineEventHandler(async (event) => {
	return [
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
});