// src/Scene.js

import React from 'react';
import SentenceBox from './SentenceBox';
import ChoiceButtons from './ChoiceButtons';

function Scene({ sceneData, currentSentenceIndex, handleNextSentence, goToNextScene }) {
  return (
    <div
      className="image-container"
      style={{ backgroundImage: `url(${sceneData.image})` }}
    >
      {currentSentenceIndex >= 0 ? (
        <>
          <SentenceBox sentence={sceneData.sentences[currentSentenceIndex]} />
          <button className="arrow-button" onClick={handleNextSentence}>→</button>
        </>
      ) : (
        <ChoiceButtons
          choices={sceneData.choices}
          onSelect={(choice) => goToNextScene(choice.next)}
        />
      )}
    </div>
  );
}

export default Scene;
