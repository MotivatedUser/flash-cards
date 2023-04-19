import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CategorySelector from './components/CategorySelector';
import FlashcardList from './components/FlashcardList';
import accessibilityFlashcards from './data/accessibility';
import angularFlashcards from './data/angular';
import cssFlashcards from './data/css';
import htmlFlashcards from './data/html';
import jsFlashcards from './data/javascript';
import performanceFlashcards from './data/performance';
import reactFlashcards from './data/react';
import responsiveFlashcards from './data/responsive';
import vueFlashcards from './data/vue';
import './App.css';
import nodeFlashcards from './data/node';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('1');
  const categories = [
    { id: '1', name: 'Accessibility' },
    { id: '2', name: 'Angular' },
    { id: '3', name: 'CSS' },
    { id: '4', name: 'HTML' },
    { id: '5', name: 'JavaScript' },
    { id: '6', name: 'Node.js' },
    { id: '7', name: 'Performance' },
    { id: '8', name: 'React' },
    { id: '9', name: 'Responsive' },
    { id: '10', name: 'Vue' }
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
    if (selectedCategory === '2') {
      return angularFlashcards;
    }
    if (selectedCategory === '3') {
      return cssFlashcards;
    }
    if (selectedCategory === '4') {
      return htmlFlashcards;
    }
    if (selectedCategory === '5') {
      return jsFlashcards;
    }
    if (selectedCategory === '6') {
      return nodeFlashcards;
    }
    if (selectedCategory === '7') {
      return performanceFlashcards;
    }
    if (selectedCategory === '8') {
      return reactFlashcards;
    }
    if (selectedCategory === '9') {
      return responsiveFlashcards;
    }
    if (selectedCategory === '10') {
      return vueFlashcards;
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
