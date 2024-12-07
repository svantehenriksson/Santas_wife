// src/WordQuiz.js

import React, { useState } from 'react';

const quizData = [
  { fi: 'Moi', en: 'Hi' },
  { fi: 'Mitä', en: 'What' },
  { fi: 'Pizza', en: 'Pizza' },
];

function WordQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');

  const handleAnswer = () => {
    if (userAnswer.toLowerCase() === quizData[currentQuestion].en.toLowerCase()) {
      setScore(score + 1);
    }
    setUserAnswer('');
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
      <h2>Practice Words</h2>
      <p>Translate the following Finnish word:</p>
      <h3>{quizData[currentQuestion].fi}</h3>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Type your answer"
      />
      <button onClick={handleAnswer}>Submit</button>
      <p>Score: {score}</p>
    </div>
  );
}

export default WordQuiz;
