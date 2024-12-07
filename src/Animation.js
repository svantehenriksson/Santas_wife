import React, { useEffect } from 'react';
import './style.css';

function Animation({ image, duration, onAnimationEnd }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationEnd();
    }, duration);

    return () => clearTimeout(timer); // Clean up the timer when unmounting
  }, [duration, onAnimationEnd]);

  return (
    <div className="animation-container">
      <img src={image} alt="Animation" />
    </div>
  );
}

export default Animation;
