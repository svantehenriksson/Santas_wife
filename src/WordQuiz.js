import React, { useState } from 'react';

const quizData = [
  // These words are from the sentences and choices in storyData.js
  { fi: 'Yksityisetsivä', en: 'Private detective', options: ['Private detective', 'Lawyer', 'Doctor'] },
  { fi: 'Talvi', en: 'Winter', options: ['Spring', 'Summer', 'Winter'] },
  { fi: 'Toimistollasi', en: 'In your office', options: ['In the car', 'In your office', 'At home'] },
  { fi: 'Kalliossa', en: 'In Kallio', options: ['In Kallio', 'In Helsinki', 'In Rovaniemi'] },
  { fi: 'Rautatieasemalla', en: 'At the railway station', options: ['At the bus station', 'At the airport', 'At the railway station'] },
  { fi: 'Vaimoni', en: 'My wife', options: ['My wife', 'My brother', 'My friend'] },
  { fi: 'Kadonnut', en: 'Missing', options: ['Lost', 'Found', 'Missing'] },
  { fi: 'Kultahippuja', en: 'Gold nuggets', options: ['Gold nuggets', 'Silver coins', 'Precious stones'] },
  { fi: 'Roskakorissa', en: 'In the trash bin', options: ['In the drawer', 'In the trash bin', 'On the shelf'] },
  { fi: 'Kartta', en: 'Map', options: ['Map', 'Book', 'Ticket'] },
  { fi: 'Haltin', en: 'Halti', options: ['Halti', 'Kilimanjaro', 'Everest'] },
  { fi: 'Korkein', en: 'Highest', options: ['Lowest', 'Tallest', 'Highest'] },
  { fi: 'Vuori', en: 'Mountain', options: ['Mountain', 'Forest', 'Ocean'] },
  { fi: 'Matka', en: 'Journey', options: ['Trip', 'Journey', 'Adventure'] },
  { fi: 'Bussilla', en: 'By bus', options: ['By car', 'By bus', 'On foot'] },
  { fi: 'Jatkuu', en: 'Continues', options: ['Ends', 'Begins', 'Continues'] },
  { fi: 'Odota', en: 'Wait', options: ['Stop', 'Wait', 'Go'] },
  { fi: 'Liity', en: 'Join', options: ['Join', 'Leave', 'Stay'] },
  { fi: 'Sähköpostilistalle', en: 'To the mailing list', options: ['To the newsletter', 'To the mailing list', 'To the community'] },
  { fi: 'Poroista', en: 'Reindeer', options: ['Reindeer', 'Cow', 'Horse'] },
  { fi: 'Kullasta', en: 'Gold', options: ['Silver', 'Gold', 'Copper'] },
  { fi: 'R-kioskille', en: 'To the R-kiosk', options: ['To the bank', 'To the supermarket', 'To the R-kiosk'] },
  { fi: 'Hyttiin', en: 'To the cabin', options: ['To the bus', 'To the cabin', 'To the hotel'] },
  { fi: 'Poro', en: 'Reindeer', options: ['Reindeer', 'Moose', 'Bear'] },
  { fi: 'Talo', en: 'House', options: ['Car', 'House', 'Road'] },
  { fi: 'Joulu', en: 'Christmas', options: ['Christmas', 'New Year', 'Easter'] },
  { fi: 'Metsässä', en: 'In the forest', options: ['In the park', 'In the forest', 'In the city'] },
  { fi: 'Jouluputki', en: 'Christmas pipe', options: ['Christmas tree', 'Christmas pipe', 'Christmas lights'] },
  { fi: 'Rautatie', en: 'Railway', options: ['Bus', 'Train', 'Railway'] },
  { fi: 'Pohjoispuolella', en: 'North side', options: ['South side', 'North side', 'East side'] },
  { fi: 'Tarkka', en: 'Precise', options: ['Precise', 'Fast', 'Accurate'] },
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
