import React from 'react';
import Flashcard from './Flashcard';
import '../../src/App.css';

const FlashcardList = ({ flashcards }) => {
    return (
      <div className="flashcard-list">
        {flashcards &&
          flashcards.map((section) => (
            <div key={section.heading} className="flashcard-section">
              <h2>{section.heading}</h2>
              <div className="flashcard-container">
                {section.flashcards.map((flashcard) => (
                  <Flashcard key={flashcard.id} flashcard={flashcard} />
                ))}
              </div>
            </div>
          ))}
      </div>
    );
  };
  

export default FlashcardList;

