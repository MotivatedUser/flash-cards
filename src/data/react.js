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
    {
        id: '11',
        question: 'What is the role of the render() method in React?',
        answer: 'The render() method is responsible for generating the HTML that represents a component. It returns a tree of React elements that will be rendered to the DOM.'
      },
      {
        id: '12',
        question: 'What is the difference between a functional component and a class component in React?',
        answer: 'Functional components are stateless and rely on props for rendering, while class components can have internal state and lifecycle methods. Functional components are simpler and more concise.'
      },
      {
        id: '13',
        question: 'What is the purpose of the useEffect() hook in React?',
        answer: 'The useEffect() hook allows you to perform side effects in functional components, such as fetching data, subscribing to events, or updating the DOM. It replaces componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods.'
      },
      {
        id: '14',
        question: 'What are React keys and why are they important?',
        answer: 'React keys are unique identifiers assigned to elements in an array or iterator, used to track changes and update the DOM efficiently. They prevent unnecessary re-renders and improve performance.'
      },
      {
        id: '15',
        question: 'What is the difference between shallow rendering and full rendering in React testing?',
        answer: 'Shallow rendering tests only the top-level component, while full rendering tests the entire component tree. Shallow rendering is faster and more focused, while full rendering is more comprehensive and realistic.'
      },
      {
        id: '16',
        question: 'What is server-side rendering in React and why is it used?',
        answer: 'Server-side rendering is the process of rendering React components on the server and sending HTML to the client, rather than relying on client-side rendering. It improves performance, SEO, and accessibility.'
      },
      {
        id: '17',
        question: 'What is the purpose of React Router and how is it used?',
        answer: 'React Router is a library for managing client-side routing in React applications. It allows you to define routes and navigation, handle parameters and redirects, and provide a consistent user experience.'
      },
      {
        id: '18',
        question: 'What is Redux Saga and why is it used with Redux?',
        answer: 'Redux Saga is a middleware library for managing asynchronous side effects in Redux applications. It uses generator functions to coordinate complex logic, such as fetching data, handling errors, and dispatching actions.'
      },
      {
        id: '19',
        question: 'What is the purpose of React Native and how is it different from React?',
        answer: 'React Native is a framework for building mobile apps using React and native components, while React is a library for building web UIs using components. React Native allows you to create cross-platform apps with native performance and look-and-feel.'
      },
      {
        id: '20',
        question: 'What is the React Developer Tools and how can it be used for debugging?',
        answer: 'The React Developer Tools is a browser extension that adds a tab to the developer tools for inspecting React components, state, and props. It allows you to debug and troubleshoot React applications more efficiently.'
      },
      {
        id: '21',
        question: 'What is the purpose of PropTypes in React?',
        answer: 'PropTypes is a runtime type checking mechanism for React props. It helps validate the data types of props passed to a component, catching bugs early, and improving the code quality and maintainability.'
    },
    {
        id: '22',
        question: 'What is the difference between PureComponent and Component in React?',
        answer: 'PureComponent is a subclass of Component that implements a shallow comparison of props and state in the shouldComponentUpdate lifecycle method. It helps prevent unnecessary re-renders, improving performance in certain scenarios.'
    },
    {
        id: '23',
        question: 'What is React.memo() and why is it used?',
        answer: 'React.memo() is a higher-order component that optimizes functional components by memoizing the output and preventing unnecessary re-renders if the props have not changed. It improves performance for components with expensive renders.'
    },
    {
        id: '24',
        question: 'What are React Portals and why are they used?',
        answer: "React Portals provide a way to render child components outside the parent component's DOM hierarchy, while preserving the React context and event handling. They are useful for modals, tooltips, or other UI elements that need to break out of the parent container."
    }

];
    export default reactFlashcards;