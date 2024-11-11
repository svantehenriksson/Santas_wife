// src/TextBox.js

import React from 'react';
import './style.css';

const TextBox = () => {
  return (
    <div className="text-box">
      <p>
        <span className="translatable" data-translation="Hello">Hei</span>, 
        <span className="translatable" data-translation="and"> ja </span>
        <span className="translatable" data-translation="welcome">tervetuloa</span>
        <span className="translatable" data-translation="to our"> meidän </span>
        <span className="translatable" data-translation="pizzeria">pizzeriaan</span>!
      </p>
      <p>
        <span className="translatable" data-translation="Enjoy">Nauti</span> 
        <span className="translatable" data-translation="our">meidän</span> 
        <span className="translatable" data-translation="delicious">herkullisista</span> 
        <span className="translatable" data-translation="pizzas">pizzoista</span> 
        <span className="translatable" data-translation="and">ja</span> 
        <span className="translatable" data-translation="more">muusta</span>.
      </p>
    </div>
  );
};

export default TextBox;
