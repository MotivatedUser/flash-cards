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
import { beforeInterviewFlashcards, duringInterviewFlashcards, onlineInterviewFlashcards } from './data/interviewPrep';

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
    { id: '10', name: 'Vue' },
    { id: '11', name: 'Interview Prep'}
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
      return [
        {
        heading: 'Accessibility',
        flashcards: accessibilityFlashcards,
        }
      ]
    }
    if (selectedCategory === '2') {
      return [
        {
        heading: 'Angular',
        flashcards: angularFlashcards,
        }
      ]
    }
    if (selectedCategory === '3') {
      return [
        {
        heading: 'CSS',
        flashcards: cssFlashcards,
        }
      ]
    }
    if (selectedCategory === '4') {
      return [
        {
        heading: 'HTML',
        flashcards: htmlFlashcards,
        }
      ]
    }
    if (selectedCategory === '5') {
      return [
        {
        heading: 'JavaScript',
        flashcards: jsFlashcards,
        }
      ]
    }
    if (selectedCategory === '6') {
      return [
        {
        heading: 'Node.js',
        flashcards: nodeFlashcards,
        }
      ]
    }
    if (selectedCategory === '7') {
      return [
        {
        heading: 'Performance',
        flashcards: performanceFlashcards,
        }
      ]
    }
    if (selectedCategory === '8') {
      return [
        {
        heading: 'React',
        flashcards: reactFlashcards,
        }
      ]
    }
    if (selectedCategory === '9') {
      return [
        {
        heading: 'Responsive',
        flashcards: responsiveFlashcards,
        }
      ]
    }
    if (selectedCategory === '10') {
      return [
        {
        heading: 'Vue',
        flashcards: vueFlashcards,
        }
      ]
    }
    if (selectedCategory === '11') {
      return [
        {
          heading: 'Before the Interview',
          flashcards: beforeInterviewFlashcards,
        },
        {
          heading: 'During the Interview',
          flashcards: duringInterviewFlashcards,
        },
        {
          heading: 'Preparing for an Online Interview',
          flashcards: onlineInterviewFlashcards,
        },
      ];
    }
    
  }
      // Add more conditions to return flashcards for other categories
  
  
  

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
