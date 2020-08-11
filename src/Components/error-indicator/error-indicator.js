import React from 'react';

import './error-indicator.css';
import icon from '../../img/bird.jpg';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon"/>
      <span className="boom">BOOM!</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
        (but we already sent AngryBirds to fix it)
      </span>
    </div>
  );
};

export default ErrorIndicator;
