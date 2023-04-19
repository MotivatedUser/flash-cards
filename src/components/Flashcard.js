import React, { useState } from 'react';
import '../../src/App.css';

const Flashcard = ({ flashcard }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flashcard ${isFlipped ? 'flipped' : ''}`}
      onClick={handleFlip}
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <h3>{flashcard.question}</h3>
        </div>
        <div className="flashcard-back">
          <p>{flashcard.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
