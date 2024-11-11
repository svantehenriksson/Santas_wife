// src/ImageContainer.js

import React from 'react';
import './style.css';
import image1 from './image1.jpeg';

const ImageContainer = ({ children }) => {
  return (
    <div className="image-container" style={{ backgroundImage: `url(${image1})` }}>
      {children}
    </div>
  );
};

export default ImageContainer;
