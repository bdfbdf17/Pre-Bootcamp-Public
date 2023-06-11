import React, { useState } from 'react';

const FancyButton = () => {
  const [showCard, setShowCard] = useState(false);

  const handleButtonClick = () => {
    setShowCard(true);
  };

  return (
    <div>
      <button className="fancy-button" onClick={handleButtonClick}>
        <span className="button-text">Discover More</span>
      </button>

      {showCard && (
        <div className="card">
          <h2>About Me</h2>
          <p>Computer Science Engineering Student | Web Development enthousiast.</p>

          <h2>Skills</h2>
          <ul>
            <li>Javascript</li>
            <li>React</li>
            <li>Html /Css</li>
          </ul>

          <h2>Contact</h2>
          <p>Email: mohamedamirbendhiaf@gmail.com</p>
          <p>Phone: +36309045826</p>
        </div>
      )}
    </div>
  );
};

export default FancyButton;
