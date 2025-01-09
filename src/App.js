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
  const [showQuiz, setShowQuiz] = useState(false); // State to toggle WordQuiz visibility

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
      <h1>Suomen eläimet - Finland's animals</h1>
      {showQuiz ? (
        <WordQuiz 
          onBackToStory={() => setShowQuiz(false)} // Pass function to return to story
        />
      ) : showAnimation ? (
        <Animation
          image={process.env.PUBLIC_URL + '/Uncia_uncia.gif'}
          duration={7000}
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
          <div>
            {/* Practice words link */}
            <button
              className="practice-link"
              onClick={() => setShowQuiz(true)} // Show WordQuiz when clicked
            >
              Harjoittele sanoja - Practice words
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default App;
