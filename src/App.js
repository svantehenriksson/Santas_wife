// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Scene from './Scene';
import WordQuiz from './WordQuiz';
import StoryData from './StoryData';
import './style.css';

function App() {
  const [currentScene, setCurrentScene] = useState(0);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

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
    <Router basename="/react_proto"> {/* Set the base path here */}
      <div className="App">
        <h1>Pizzeria</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Scene
                  sceneData={StoryData[currentScene]}
                  currentSentenceIndex={currentSentenceIndex}
                  handleNextSentence={handleNextSentence}
                  goToNextScene={goToNextScene}
                />
                <Link to="/quiz" className="practice-link">
                  Harjoittele sanoja - Practice words
                </Link>
              </>
            }
          />
          <Route path="/quiz" element={<WordQuiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
