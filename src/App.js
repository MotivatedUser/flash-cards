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
import { behavioralQuestions, communicationQuestions, competencyQuestions, opinionQuestions } from './data/interviewTopQuestions';
import accessibilityQuiz from './data/accessibilityQuiz';
import angularQuiz from './data/angularQuiz';
import Quiz from './components/Quiz';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('1');
  const [quizMode, setQuizMode] = useState(false);
  const categories = [
    { id: '1', name: 'Accessibility' },
    { id: '101', name: 'Accessibility Quiz'},
    { id: '2', name: 'Angular' },
    { id: '102', name: 'Angular Quiz' },
    { id: '3', name: 'CSS' },
    { id: '4', name: 'HTML' },
    { id: '5', name: 'JavaScript' },
    { id: '6', name: 'Node.js' },
    { id: '7', name: 'Performance' },
    { id: '8', name: 'React' },
    { id: '9', name: 'Responsive' },
    { id: '10', name: 'Vue' },
    { id: '11', name: 'Interview Prep'},
    { id: '12', name: 'Interview Prep Questions' }
    // Add more categories here
  ];

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    setQuizMode(categoryId >= 100)
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
    
    if (selectedCategory === '12') {
      return [
        {
          heading:'Competency',
          flashcards: competencyQuestions,
        },
        {
          heading:'Communication',
          flashcards: communicationQuestions,
        },
        {
          heading:'Opinion',
          flashcards: opinionQuestions,
        },
        {
          heading:'Behavioral',
          flashcards: behavioralQuestions,
        },
      ]
    }
  }
      // Add more conditions to return flashcards for other categories
  
      const getQuizData = () => {
        switch (selectedCategory) {
          case '101':
            return accessibilityQuiz;
          case '102':
            return angularQuiz;
          // Add more cases for other quiz categories
          default:
            return [];
        }
      };
  

      return (
        <div className="App">
          <Navbar />
          <CategorySelector
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
          />
          {quizMode ? (
            <Quiz
              quizData={getQuizData()}
              onFinish={(score) => {
                alert(`Quiz finished! Your score is: ${score}`);
                setQuizMode(false);
              }}
            />
          ) : (
            <FlashcardList flashcards={getFlashcards()} />
          )}
        </div>
      );
}

export default App;
