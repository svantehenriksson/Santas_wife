// src/ChoiceButtons.js

import React from 'react';
import './style.css';

const ChoiceButtons = ({ choices, onSelect }) => {
  return (
    <div className="choices">
      {choices.map((choice, index) => (
        <button
          key={index}
          className="choice-btn"
          onClick={() => onSelect(choice)}
        >
          {choice.label}
        </button>
      ))}
    </div>
  );
};

export default ChoiceButtons;
