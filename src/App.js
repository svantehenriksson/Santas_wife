import React, { useState } from 'react';
import Animation from './Animation';
import Scene from './Scene';
import StoryData from './StoryData';
import WordQuiz from './WordQuiz'; // Import WordQuiz component
import './style.css';

function App() {
  const [showAnimation, setShowAnimation] = useState(true);
  const [currentScene, setCurrentScene] = useState(null);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false); // Add state for WordQuiz

  const handleNextSentence = () => {
    const currentSceneData = StoryData[currentScene];
    if (currentSentenceIndex < currentSceneData.sentences.length - 1) {
      setCurrentSentenceIndex(currentSentenceIndex + 1);
    } else if (currentSceneData.choices) {
      setCurrentSentenceIndex(-1); // Show choices instead of sentences
    } else {
      goToNextScene(currentSceneData.next);
    }
  };

  const goToNextScene = (sceneIndex) => {
    setCurrentScene(sceneIndex);
    setCurrentSentenceIndex(0);
  };

  return (
    <div className="App">
      <h1>Pizzeria</h1>
      {showQuiz ? (
        <WordQuiz />
      ) : showAnimation ? (
        <Animation
          image={process.env.PUBLIC_URL + '/walking.gif'}
          duration={5000}
          onAnimationEnd={() => {
            setShowAnimation(false);
            setCurrentScene(0); // Start the first scene after the intro animation
          }}
        />
      ) : currentScene !== null ? (
        <>
          <Scene
            sceneData={StoryData[currentScene]}
            currentSentenceIndex={currentSentenceIndex}
            handleNextSentence={handleNextSentence}
            goToNextScene={goToNextScene}
          />
          {/* Subtle link */}
          <button
            className="practice-link"
            onClick={() => setShowQuiz(true)} // Show WordQuiz when clicked
          >
            Harjoittele sanoja - Practice words
          </button>
        </>
      ) : null}
    </div>
  );
}

export default App;
