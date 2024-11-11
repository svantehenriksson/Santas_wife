// src/SentenceBox.js

import React from 'react';
import './style.css';

const SentenceBox = ({ sentence }) => {
  const translatedWords = sentence.words.map((word, index) => (
    <span key={index} className="hover-translate" data-translation={word.en}>
      {word.fi}
    </span>
  ));

  return (
    <div className="sentence-box">
      <b>{sentence.speaker}:</b> <br /> <br />
      {translatedWords.reduce((acc, el) => acc === null ? [el] : [...acc, " ", el], null)}
    </div>
  );
};

export default SentenceBox;
