 import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What does the Internet prefix WWW stand for?',
			answerOptions: [
				{ answerText: 'Wide Width Wickets', isCorrect: false },
				{ answerText: 'WesternWashingtonWorld', isCorrect: false },
				{ answerText: 'World Wide Web', isCorrect: true },
				{ answerText: ' Worldwide Weather', isCorrect: false },
			],
		},
		{
			questionText: 'Who founded Apple Computer??',
			answerOptions: [
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Steve Jobs', isCorrect: true },
				{ answerText: 'Stephen Fry', isCorrect: false },
				{ answerText: 'Stephen Hawking', isCorrect: false },
				
			],
		},
		{
			questionText: 'How many computer languages are in use?',
			answerOptions: [
				{ answerText: '1000', isCorrect: false },
				{ answerText: '4000', isCorrect: false },
				{ answerText: '5000', isCorrect: false },
				{ answerText: ' 2000', isCorrect: true },
			],
		},
		{
			questionText: 'Which of these is not a kind of computer?',
			answerOptions: [
				{ answerText: 'Lada', isCorrect: true },
				{ answerText: 'Apple', isCorrect: false },
				{ answerText: 'Lenovo', isCorrect: false },
				{ answerText: ' Toshiba', isCorrect: false },
			],
		},
		{
			questionText: ' Which of these products is not made by the Apple Corporation?',
			answerOptions: [
				{ answerText: 'IMAX', isCorrect: true },
				{ answerText: 'iPhone', isCorrect: false },
				{ answerText: 'iMac', isCorrect: false },
				{ answerText: 'iPod', isCorrect: false },
			],
		},
	];

	const [cQuestion, SCQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = cQuestion + 1;
		if (nextQuestion < questions.length) {
			SCQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {cQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[cQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[cQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
