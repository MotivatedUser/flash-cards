const reactQuiz = [
  {
    id: "1",
    question: "What is React and why is it used?",
    options: [
      "React is a JavaScript library for building user interfaces. It simplifies UI development with a component-based architecture, efficient rendering, and unidirectional data flow.",
      "React is a CSS framework for designing responsive layouts.",
      "React is a server-side rendering engine for JavaScript applications.",
    ],
    correctOption: 0,
  },
  {
    id: "2",
    question: "What are components in React?",
    options: [
      "Functions that handle data fetching and manipulation.",
      "Reusable, self-contained UI elements that encapsulate markup, styles, and logic. They can be functional or class-based, and are the building blocks of React applications.",
      "Styling constructs used to apply visual design to applications.",
    ],
    correctOption: 1,
  },
  {
    id: "3",
    question: "What is JSX and why is it used in React?",
    options: [
      "JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript code. It makes component creation more readable and intuitive in React.",
      "JSX is a CSS preprocessor for advanced styling in React applications.",
      "JSX is a templating language for server-side rendering of React applications.",
    ],
    correctOption: 0,
  },
  {
    id: "4",
    question: "What is the difference between state and props in React?",
    options: [
      "State is a component's mutable internal data, while props are immutable inputs passed from parent components. State is managed within a component, while props are passed down the component tree.",
      "State is a global application store, while props are local component variables.",
      "State is a component's CSS styling, while props are its HTML attributes.",
    ],
    correctOption: 0,
  },
  {
    id: "5",
    question: "What are React hooks?",
    options: [
      "Hooks are syntax elements used to declare components in JSX.",
      "Hooks are lifecycle methods in class components.",
      "Hooks are functions that let you use state and lifecycle features in functional components. Common hooks include useState, useEffect, and useContext.",
    ],
    correctOption: 2,
  },
  {
    id: "6",
    question:
      "What is the virtual DOM and how does it improve performance in React?",
    options: [
      "The virtual DOM is a CSS optimization technique for React applications.",
      "The virtual DOM is an in-memory representation of the actual DOM. React updates the virtual DOM first, then efficiently applies the minimal changes needed to the actual DOM, improving performance.",
      "The virtual DOM is a server-side rendering technique for React applications.",
    ],
    correctOption: 1,
  },
  {
    id: "7",
    question: "What is Redux and why is it used with React?",
    options: [
      "Redux is a state management library often used with React. It provides a single store for application state, making it easier to manage and debug large or complex apps.",
      "Redux is a CSS framework for designing responsive layouts in React applications.",
      "Redux is a server-side rendering engine for React applications.",
    ],
    correctOption: 0,
  },
  {
    id: "8",
    question: "What is the context API in React?",
    options: [
      "The context API provides a way to pass data through the component tree without using props. It makes it easier to manage global state or share data across multiple components.",
      "The context API is a set of React lifecycle methods.",
      "The context API is a JavaScript library for managing styles in React applications.",
    ],
    correctOption: 0,
  },
  {
    id: "9",
    question: "What are higher-order components (HOCs) in React?",
    options: [
      "HOCs are functions that take a component and return a new component with additional props or behavior. They are used to reuse component logic and enhance components without modifying their implementation.",
      "HOCs are a set of React hooks for managing component state and lifecycle.",
      "HOCs are a CSS preprocessor for advanced styling in React applications.",
    ],
    correctOption: 0,
  },
  {
    id: "10",
    question:
      "What is the difference between a controlled and an uncontrolled component in React?",
    options: [
      "Controlled components have their form data managed by React state, while uncontrolled components rely on the browser's default form handling. Controlled components provide better control and flexibility.",
      "Controlled components are class components, while uncontrolled components are functional components.",
      "Controlled components use the context API, while uncontrolled components use Redux for state management.",
    ],
    correctOption: 0,
  },
  {
    id: "11",
    question: "What is the role of the render() method in React?",
    options: [
      "The render() method is responsible for generating the HTML that represents a component. It returns a tree of React elements that will be rendered to the DOM.",
      "The render() method is a hook for managing state in functional components.",
      "The render() method is a middleware function for handling asynchronous actions in Redux applications.",
    ],
    correctOption: 0,
  },
  {
    id: "12",
    question:
      "What is the difference between a functional component and a class component in React?",
    options: [
      "Functional components are stateless and rely on props for rendering, while class components can have internal state and lifecycle methods. Functional components are simpler and more concise.",
      "Functional components are used for styling, while class components are used for logic.",
      "Functional components are used with Redux, while class components are used with the context API.",
    ],
    correctOption: 0,
  },
  {
    id: "13",
    question: "What is the purpose of the useEffect() hook in React?",
    options: [
      "The useEffect() hook is a CSS preprocessor for advanced styling in React applications.",
      "The useEffect() hook allows you to perform side effects in functional components, such as fetching data, subscribing to events, or updating the DOM. It replaces componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods.",
      "The useEffect() hook is a middleware function for handling asynchronous actions in Redux applications.",
    ],
    correctOption: 1,
  },
  {
    id: "14",
    question: "What are React keys and why are they important?",
    options: [
      "React keys are unique identifiers assigned to elements in an array or iterator, used to track changes and update the DOM efficiently. They prevent unnecessary re-renders and improve performance.",
      "React keys are functions for managing state in functional components.",
      "React keys are a set of React hooks for managing component lifecycle.",
    ],
    correctOption: 0,
  },
  {
    id: "15",
    question:
      "What is the difference between shallow rendering and full rendering in React testing?",
    options: [
      "Shallow rendering tests only the top-level component, while full rendering tests the entire component tree. Shallow rendering is faster and more focused, while full rendering is more comprehensive and realistic.",
      "Shallow rendering is used for testing class components, while full rendering is used for testing functional components.",
      "Shallow rendering is a CSS preprocessor for advanced styling in React applications, while full rendering is a JavaScript library for managing styles in React applications.",
    ],
    correctOption: 0,
  },
  {
    id: "16",
    question: "What is server-side rendering in React and why is it used?",
    options: [
      "Server-side rendering is the process of rendering React components on the server and sending HTML to the client, rather than relying on client-side rendering. It improves performance, SEO, and accessibility.",
      "Server-side rendering is a set of React hooks for managing component lifecycle.",
      "Server-side rendering is a middleware function for handling asynchronous actions in Redux applications.",
    ],
    correctOption: 0,
  },
  {
    id: "17",
    question: "What is the purpose of React Router and how is it used?",
    options: [
      "React Router is a library for managing client-side routing in React applications. It allows you to define routes and navigation, handle parameters and redirects, and provide a consistent user experience.",
      "React Router is a set of React hooks for managing component state and lifecycle.",
      "React Router is a JavaScript library for managing styles in React applications.",
    ],
    correctOption: 0,
  },
  {
    id: "18",
    question: "What is Redux Saga and why is it used with Redux?",
    options: [
      "Redux Saga is a middleware library for managing asynchronous side effects in Redux applications. It uses generator functions to coordinate complex logic, such as fetching data, handling errors, and dispatching actions.",
      "Redux Saga is a set of React hooks for managing component state and lifecycle.",
      "Redux Saga is a CSS preprocessor for advanced styling in Redux applications.",
    ],
    correctOption: 0,
  },
  {
    id: "19",
    question:
      "What is the purpose of React Native and how is it different from React?",
    options: [
      "React Native is a framework for building mobile apps using React and native components, while React is a library for building web UIs using components. React Native allows you to create cross-platform apps with native performance and look-and-feel.",
      "React Native is a set of React hooks for managing component state and lifecycle.",
      "React Native is a JavaScript library for managing styles in React applications.",
    ],
    correctOption: 0,
  },
  {
    id: "20",
    question:
      "What is the React Developer Tools and how can it be used for debugging?",
    options: [
      "The React Developer Tools is a browser extension that adds a tab to the developer tools for inspecting React components, state, and props. It allows you to debug and troubleshoot React applications more efficiently.",
      "React Developer Tools is a set of React hooks for managing component state and lifecycle.",
      "React Developer Tools is a JavaScript library for managing styles in React applications.",
    ],
    correctOption: 0,
  },
  {
    id: "21",
    question: "What is the purpose of PropTypes in React?",
    options: [
      "PropTypes is a runtime type checking mechanism for React props. It helps validate the data types of props passed to a component, catching bugs early, and improving the code quality and maintainability.",
      "PropTypes is a set of React hooks for managing component state and lifecycle.",
      "PropTypes is a CSS preprocessor for advanced styling in React applications.",
    ],
    correctOption: 0,
  },
  {
    id: "22",
    question:
      "What is the difference between PureComponent and Component in React?",
    options: [
      "PureComponent is a subclass of Component that implements a shallow comparison of props and state in the shouldComponentUpdate lifecycle method. It helps prevent unnecessary re-renders, improving performance in certain scenarios.",
      "PureComponent is a set of React hooks for managing component state and lifecycle.",
      "PureComponent is a JavaScript library for managing styles in React applications.",
    ],
    correctOption: 0,
  },
  {
    id: "23",
    question: "What is React.memo() and why is it used?",
    options: [
      "React.memo() is a higher-order component that optimizes functional components by memoizing the output and preventing unnecessary re-renders if the props have not changed. It improves performance for components with expensive renders.",
      "React.memo() is a set of React hooks for managing component state and lifecycle.",
      "React.memo() is a CSS preprocessor for advanced styling in React applications.",
    ],
    correctOption: 0,
  },
  {
    id: "24",
    question: "What are React Portals and why are they used?",
    options: [
      "React Portals provide a way to render child components outside the parent component's DOM hierarchy, while preserving the React context and event handling. They are useful for modals, tooltips, or other UI elements that need to break out of the parent container.",
      "React Portals is a set of React hooks for managing component state and lifecycle.",
      "React Portals is a JavaScript library for managing styles in React applications.",
    ],
    correctOption: 0,
  },
];
export default reactQuiz;
