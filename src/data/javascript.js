const jsFlashcards = [
  {
    id: "1",
    question: "What is JavaScript and its purpose?",
    answer:
      "JavaScript is a high-level, versatile programming language primarily used for enhancing web pages with interactivity, animations, and dynamic content. It can be used on both client and server-side.",
  },
  {
    id: "2",
    question: "What are the main data types in JavaScript?",
    answer:
      "JavaScript has six main data types: Undefined, Null, Boolean, Number, String, and Object (including arrays, functions, and specialized objects like Date and RegExp).",
  },
  {
    id: "3",
    question: "What are the differences between var, let, and const?",
    answer:
      "Var has function scope, while let and const have block scope. Var is hoisted, and let and const are not. Const is used for declaring constants, which cannot be reassigned, while var and let can be reassigned.",
  },
  {
    id: "4",
    question: "What are JavaScript functions and how are they declared?",
    answer:
      'Functions are reusable blocks of code that perform specific tasks. Functions can be declared using the "function" keyword, followed by a name, a parameter list, and a code block (e.g., function example(param) { ... }).',
  },
  {
    id: "5",
    question: "What is the difference between == and === in JavaScript?",
    answer:
      "The == operator compares values for equality, performing type coercion if needed. The === operator compares both values and types for strict equality, without type coercion.",
  },
  {
    id: "6",
    question: "What is an anonymous function in JavaScript?",
    answer:
      "An anonymous function is a function without a name, typically used as a callback or in a self-invoking expression. It can be assigned to a variable, passed as an argument, or returned from another function.",
  },
  {
    id: "7",
    question: 'What is the purpose of the "this" keyword in JavaScript?',
    answer:
      "The 'this' keyword refers to the object that the currently executing function belongs to, providing a way to access the object's properties and methods. Its value depends on the calling context.",
  },
  {
    id: "8",
    question: "What is an event and event handling in JavaScript?",
    answer:
      "An event is an action or occurrence (e.g., click, hover) detected by the browser. Event handling involves defining functions (event handlers) to respond to events, using methods like addEventListener to bind handlers to elements.",
  },
  {
    id: "9",
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a function that retains access to its outer function's scope, even after the outer function has completed execution. This enables data privacy and function factories with configurable behavior.",
  },
  {
    id: "10",
    question:
      "What is the difference between synchronous and asynchronous JavaScript?",
    answer:
      "Synchronous JavaScript executes code sequentially, blocking subsequent code until completion. Asynchronous JavaScript uses callbacks, promises, or async/await to perform tasks without blocking the execution of other code.",
  },
  {
    id: "11",
    question: "What are promises in JavaScript and how are they used?",
    answer:
      'Promises are objects representing the eventual completion or failure of an asynchronous operation. They simplify asynchronous code, providing methods like "then" and "catch" for chaining and handling success or error states.',
  },
  {
    id: "12",
    question: "What are the different types of loops available in JavaScript?",
    answer:
      "JavaScript provides three types of loops: for, while, and do-while. They all iterate over a code block with different conditions and syntax.",
  },
  {
    id: "13",
    question:
      "What is the difference between a let and a var variable declaration?",
    answer:
      "The let keyword declares block-scoped variables, while var declares function-scoped variables. Variables declared with let are not hoisted, and cannot be re-declared within the same scope, while variables declared with var can be hoisted and re-declared.",
  },
  {
    id: "14",
    question: 'What is the use of the "use strict" statement in JavaScript?',
    answer:
      'The "use strict" statement is a directive that enables strict mode, which enforces stricter parsing and error handling rules in JavaScript. It helps prevent common coding mistakes and promotes better code quality.',
  },
  {
    id: "15",
    question:
      "What are some common methods for manipulating arrays in JavaScript?",
    answer:
      "JavaScript provides several methods for manipulating arrays, such as push(), pop(), shift(), unshift(), splice(), slice(), join(), concat(), map(), filter(), reduce(), and sort(). These methods enable adding, removing, and transforming array elements efficiently.",
  },
  {
    id: "16",
    question: "What is object destructuring in JavaScript?",
    answer:
      "Object destructuring is a feature that allows extracting properties from an object and assigning them to variables with a concise syntax. It can simplify code and avoid repetitive dot notation for accessing object properties.",
  },
  {
    id: "17",
    question:
      "What is the purpose of the call() and apply() methods in JavaScript?",
    answer:
      'The call() and apply() methods are used to call a function with a specified object as the context, and with arguments passed as an array or a list, respectively. They enable borrowing methods from other objects, and setting the "this" value of a function dynamically.',
  },
  {
    id: "18",
    question:
      "What is the difference between an object and a primitive in JavaScript?",
    answer:
      "Objects are complex data types that can contain properties and methods, while primitives are simple data types (undefined, null, boolean, number, string, and symbol) that are immutable and passed by value. Objects are passed by reference, and can be changed or mutated.",
  },
  {
    id: "19",
    question: "What is a higher-order function in JavaScript?",
    answer:
      "A higher-order function is a function that either takes one or more functions as arguments, or returns a function as its result. Higher-order functions enable creating abstractions and composing functions, making code more reusable and flexible.",
  },
  {
    id: "20",
    question:
      "What is the difference between a callback function and a promise in JavaScript?",
    answer:
      "A callback function is a function passed as an argument to another function, and executed when a certain event or condition is met. A promise is an object representing the eventual completion or failure of an asynchronous operation, with methods for handling success or error states. Promises enable avoiding callback hell and writing cleaner, more readable asynchronous code.",
  },
  {
    id: "21",
    question: "What are some ways to handle errors in JavaScript?",
    answer:
      "Some ways to handle errors in JavaScript include using try/catch blocks, throwing custom errors, and logging errors to the console or a server. Libraries like Sentry and Bugsnag can also be used for error monitoring and reporting.",
  },
  {
    id: "22",
    question: "What is the event loop in JavaScript?",
    answer:
      "The event loop is a mechanism in JavaScript that allows for non-blocking I/O operations by constantly checking for pending events in the event queue and executing their associated callback functions. This enables asynchronous programming and prevents the UI from freezing.",
  },
  {
    id: "23",
    question: "What are arrow functions in JavaScript?",
    answer:
      'Arrow functions are a shorthand syntax for creating function expressions in JavaScript. They have a concise syntax, implicit return statement, and a lexically bound "this" keyword. They can be used as anonymous functions or in place of function expressions.',
  },
  {
    id: "24",
    question:
      'What is the purpose of the "use strict" directive in JavaScript?',
    answer:
      'The "use strict" directive is a way to enforce stricter parsing and error handling in JavaScript code. It enables certain features like block-scoped variables, disallows some syntax, and helps prevent common coding mistakes.',
  },
];

export default jsFlashcards;
