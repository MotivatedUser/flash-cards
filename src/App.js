import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CategorySelector from './components/CategorySelector';
import FlashcardList from './components/FlashcardList';
import accessibilityFlashcards from './data/accessibility';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('1');
  const categories = [
    { id: '1', name: 'Accessibility' },
    // Add more categories here
  ];

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const getFlashcards = () => {
    if (!selectedCategory) {
      return [];
    }
  
    if (selectedCategory === '1') {
      return accessibilityFlashcards;
    }
    // Add more conditions to return flashcards for other categories
  
    return [];
  };

  return (
    <div className="App">
      <Navbar />
      <CategorySelector
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <FlashcardList flashcards={getFlashcards()} />
    </div>
  );
}

export default App;
