// src/App.js

import React, { useState } from 'react';
import Scene from './Scene';
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
    <div className="App">
      <h1>Pizzeria</h1>
      <Scene
        sceneData={StoryData[currentScene]}
        currentSentenceIndex={currentSentenceIndex}
        handleNextSentence={handleNextSentence}
        goToNextScene={goToNextScene}
      />
    </div>
  );
}

export default App;
