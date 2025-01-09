import React, { useState } from 'react';

const quizData = [
  { fi: 'Moi', en: 'Hi', options: ['Hi', 'Bye', 'Thanks'] },
  { fi: 'Mitä', en: 'What', options: ['What', 'Why', 'When'] },
  { fi: 'Pizza', en: 'Pizza', options: ['Burger', 'Pizza', 'Pasta'] },
];

function WordQuiz({ onBackToStory }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === quizData[currentQuestion].en) {
      setScore(score + 1);
    }
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`Quiz finished! Your score: ${score + 1}/${quizData.length}`);
      setCurrentQuestion(0);
      setScore(0);
    }
  };

  return (
    <div className="quiz-container">
      <h2 className="quiz-heading">Practice Words</h2>
      <p className="quiz-subheading">Translate the following Finnish word:</p>
      <h3 className="quiz-word">{quizData[currentQuestion].fi}</h3>
      <div className="options-container">
        {quizData[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className="quiz-option"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <p className="quiz-score">Score: {score}</p>
      <button className="practice-link" onClick={onBackToStory}>
        Takaisin tarinaan - Back to story
      </button>
    </div>
  );
}

export default WordQuiz;
