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
import cssQuiz from './data/cssQuiz';
import htmlQuiz from './data/htmlQuiz';
import webSecurity from './data/webSecurity';
import webAPIFlashcards from './data/webAPI';
import Quiz from './components/Quiz';
import designPatternsFlashcards from './data/designPatterns';
import testAndDebugFlashcards from './data/testAndDebug';
import versionControlFlashcards from './data/versionControl';
import typescriptFlashcards from './data/typescript';
import progressiveWebAPIFlashcards from './data/progressiveWebAPI';
import serverSideRenderingFlashcards from './data/serverSideRendering';
import graphQLFlashcards from './data/graphQL';
import uxUIFlashcards from './data/uxUI';
import designPatternsQuiz from './data/designPatternsQuiz';
import javascriptQuiz from './data/javascriptQuiz';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('1');
  const [quizMode, setQuizMode] = useState(false);
  const categories = [
    { id: '1', name: 'Accessibility' },
    { id: '101', name: 'Accessibility Quiz'},
    { id: '2', name: 'Angular' },
    { id: '102', name: 'Angular Quiz' },
    { id: '3', name: 'CSS' },
    { id: '103', name: 'CSS Quiz' },
    { id: '4', name: 'HTML' },
    { id: '104', name: 'HTML Quiz'},
    { id: '5', name: 'JavaScript' },
    { id: '105', name: 'JavaScript Quiz'},
    { id: '6', name: 'Node.js' },
    { id: '7', name: 'Performance' },
    { id: '8', name: 'React' },
    { id: '9', name: 'Responsive' },
    { id: '10', name: 'Vue' },
    { id: '11', name: 'Interview Prep'},
    { id: '12', name: 'Interview Prep Questions' },
    { id: '13', name: 'Web Security'},
    { id: '14', name: 'Web APIs'},
    { id: '15', name: 'Design Patterns'},
    { id: '115', name: 'Design Patterns Quiz'},
    { id: '16', name: 'Testing and Debugging'},
    { id: '17', name: 'Version Control'},
    { id: '18', name: 'TypeScript'},
    { id: '19', name: 'Progressive Web APIs'},
    { id: '20', name: 'Server-side Rendering' },
    { id: '21', name: 'GraphQL'},
    { id: '22', name: 'UX / UI' },
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
    if (selectedCategory === '13') {
      return [
        {
        heading: 'Web Security',
        flashcards: webSecurity,
        }
      ]
    }
    if (selectedCategory === '14') {
      return [
        {
        heading: 'Web APIs',
        flashcards: webAPIFlashcards,
        }
      ]
    }
    if (selectedCategory === '15') {
      return [
        {
        heading: 'Design Patterns',
        flashcards: designPatternsFlashcards,
        }
      ]
    }
    if (selectedCategory === '16') {
      return [
        {
        heading: 'Testing and Debugging',
        flashcards: testAndDebugFlashcards,
        }
      ]
    }
    if (selectedCategory === '17') {
      return [
        {
        heading: 'Version Control',
        flashcards: versionControlFlashcards,
        }
      ]
    }
    if (selectedCategory === '18') {
      return [
        {
        heading: 'TypeScript',
        flashcards: typescriptFlashcards,
        }
      ]
    }
    if (selectedCategory === '19') {
      return [
        {
        heading: 'Progressive Web APIs',
        flashcards: progressiveWebAPIFlashcards,
        }
      ]
    }
    if (selectedCategory === '20') {
      return [
        {
        heading: 'Server-Side Rendering',
        flashcards: serverSideRenderingFlashcards,
        }
      ]
    }
    if (selectedCategory === '21') {
      return [
        {
        heading: 'GraphQL',
        flashcards: graphQLFlashcards,
        }
      ]
    }
    if (selectedCategory === '22') {
      return [
        {
        heading: 'UX / UI',
        flashcards: uxUIFlashcards,
        }
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
          case '103':
            return cssQuiz;
          case '104':
            return htmlQuiz;
          case '105':
            return javascriptQuiz;
          case '115':
            return designPatternsQuiz;
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
