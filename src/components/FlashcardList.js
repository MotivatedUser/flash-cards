import React from 'react';
import Flashcard from './Flashcard';
import '../../src/App.css';

const FlashcardList = ({ flashcards }) => {
    return (
      <div className="flashcard-list">
        {flashcards && flashcards.map((flashcard) => (
          <Flashcard key={flashcard.id} flashcard={flashcard} />
        ))}
      </div>
    );
  };  

export default FlashcardList;
