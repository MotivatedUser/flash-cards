const reactFlashcards = [
    {
    id: '1',
    question: 'What is React and why is it used?',
    answer: 'React is a JavaScript library for building user interfaces. It simplifies UI development with a component-based architecture, efficient rendering, and unidirectional data flow.'
    },
    {
    id: '2',
    question: 'What are components in React?',
    answer: 'Components are reusable, self-contained UI elements that encapsulate markup, styles, and logic. They can be functional or class-based, and are the building blocks of React applications.'
    },
    {
    id: '3',
    question: 'What is JSX and why is it used in React?',
    answer: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript code. It makes component creation more readable and intuitive in React.'
    },
    {
    id: '4',
    question: 'What is the difference between state and props in React?',
    answer: "State is a component's mutable internal data, while props are immutable inputs passed from parent components. State is managed within a component, while props are passed down the component tree."
    },
    {
    id: '5',
    question: 'What are React hooks?',
    answer: 'Hooks are functions that let you use state and lifecycle features in functional components. Common hooks include useState, useEffect, and useContext.'
    },
    {
    id: '6',
    question: 'What is the virtual DOM and how does it improve performance in React?',
    answer: 'The virtual DOM is an in-memory representation of the actual DOM. React updates the virtual DOM first, then efficiently applies the minimal changes needed to the actual DOM, improving performance.'
    },
    {
    id: '7',
    question: 'What is Redux and why is it used with React?',
    answer: 'Redux is a state management library often used with React. It provides a single store for application state, making it easier to manage and debug large or complex apps.'
    },
    {
    id: '8',
    question: 'What is the context API in React?',
    answer: 'The context API provides a way to pass data through the component tree without using props. It makes it easier to manage global state or share data across multiple components.'
    },
    {
    id: '9',
    question: 'What are higher-order components (HOCs) in React?',
    answer: 'HOCs are functions that take a component and return a new component with additional props or behavior. They are used to reuse component logic and enhance components without modifying their implementation.'
    },
    {
    id: '10',
    question: 'What is the difference between a controlled and an uncontrolled component in React?',
    answer: "Controlled components have their form data managed by React state, while uncontrolled components rely on the browser's default form handling. Controlled components provide better control and flexibility."
    },
    ];
    export default reactFlashcards;