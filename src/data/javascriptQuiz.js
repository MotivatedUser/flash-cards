const javascriptQuiz = [
    {
        id: "1",
        question: "What is JavaScript and its purpose?",
        options: [
          "A markup language for designing web pages.",
          "A high-level, versatile programming language primarily used for enhancing web pages with interactivity, animations, and dynamic content. It can be used on both client and server-side.",
          "A framework for building web applications."
        ],
        correctOption: 1,
      },
      {
        id: "2",
        question: "What are the main data types in JavaScript?",
        options: [
          "Objects, Classes, and Functions.",
          "Undefined, Null, Boolean, Number, String, and Object (including arrays, functions, and specialized objects like Date and RegExp).",
          "Integers, Floats, and Doubles."
        ],
        correctOption: 1,
      },
      {
        id: "3",
        question: "What are the differences between var, let, and const?",
        options: [
          "Var has function scope, while let and const have block scope. Var is hoisted, and let and const are not. Const is used for declaring constants, which cannot be reassigned, while var and let can be reassigned.",
          "Var is used for declaring functions, let is used for declaring objects, and const is used for declaring arrays.",
          "Var and let are used for declaring constants, while const is used for declaring variables that can be reassigned."
        ],
        correctOption: 0,
      },
      {
        id: "4",
        question: "What are JavaScript functions and how are they declared?",
        options: [
          'A way to declare variables and assign values.',
          'A method for handling events and animations.',
          'Functions are reusable blocks of code that perform specific tasks. Functions can be declared using the "function" keyword, followed by a name, a parameter list, and a code block (e.g., function example(param) { ... }).'
        ],
        correctOption: 2,
      },
      {
        id: "5",
        question: "What is the difference between == and === in JavaScript?",
        options: [
          "The == operator compares values for equality, performing type coercion if needed. The === operator compares both values and types for strict equality, without type coercion.",
          "The == operator is used for declaring variables, while the === operator is used for declaring constants.",
          "The == operator is used for declaring functions, while the === operator is used for declaring objects."
        ],
        correctOption: 0,
      },
      {
        id: "6",
        question: "What is an anonymous function in JavaScript?",
        options: [
          "A function that is automatically executed when a script is loaded.",
          "A function that can be used as a template for creating other functions.",
          "An anonymous function is a function without a name, typically used as a callback or in a self-invoking expression. It can be assigned to a variable, passed as an argument, or returned from another function."
        ],
        correctOption: 2,
      },
      {
        id: "7",
        question: 'What is the purpose of the "this" keyword in JavaScript?',
        options: [
          "To create a new instance of an object.",
          "The 'this' keyword refers to the object that the currently executing function belongs to, providing a way to access the object's properties and methods. Its value depends on the calling context.",
          "To bind a function to a specific context."
        ],
        correctOption: 1,
      },
      {
        id: "8",
        question: "What is an event and event handling in JavaScript?",
        options: [
          "An event is an action or occurrence (e.g., click, hover) detected by the browser. Event handling involves defining functions (event handlers) to respond to events, using methods like addEventListener to bind handlers to elements.",
          "An event is a JavaScript function that is executed when a script is loaded.",
          "Event handling is the process of organizing JavaScript code into modules and components."
        ],
        correctOption: 0,
      },
      {
        id: "9",
        question: "What is a closure in JavaScript?",
        options: [
          "A closure is a function that retains access to its outer function's scope, even after the outer function has completed execution. This enables data privacy and function factories with configurable behavior.",
          "A closure is a method for organizing JavaScript code into modules and components.",
          "A closure is a JavaScript function that is automatically executed when a script is loaded."
        ],
        correctOption: 0,
      },
      {
        id: "10",
        question: "What is the difference between synchronous and asynchronous JavaScript?",
        options: [
          "Synchronous JavaScript is used for server-side programming, while asynchronous JavaScript is used for client-side programming.",
          "Synchronous JavaScript is used for creating event handlers, while asynchronous JavaScript is used for creating functions.",
          "Synchronous JavaScript executes code sequentially, blocking subsequent code until completion. Asynchronous JavaScript uses callbacks, promises, or async/await to perform tasks without blocking the execution of other code."
        ],
        correctOption: 2,
      },
      {
        id: "11",
        question: "What are promises in JavaScript and how are they used?",
        options: [
          'Promises are objects representing the eventual completion or failure of an asynchronous operation. They simplify asynchronous code, providing methods like "then" and "catch" for chaining and handling success or error states.',
          "Promises are used to store values that can be accessed later in the code.",
          "Promises are a way to organize JavaScript code into modules and components."
        ],
        correctOption: 0,
      },
      {
        id: "12",
        question: "What are the different types of loops available in JavaScript?",
        options: [
          "JavaScript provides three types of loops: for, while, and do-while. They all iterate over a code block with different conditions and syntax.",
          "JavaScript provides two types of loops: for-each and while.",
          "JavaScript provides four types of loops: for, foreach, do, and while."
        ],
        correctOption: 0,
      },
      {
        id: "13",
        question: "What is the difference between a let and a var variable declaration?",
        options: [
          "The let keyword declares block-scoped variables, while var declares function-scoped variables. Variables declared with let are not hoisted, and cannot be re-declared within the same scope, while variables declared with var can be hoisted and re-declared.",
          "The let keyword is used for declaring constants, while var is used for declaring variables that can be reassigned.",
          "The let keyword is used for declaring functions, while var is used for declaring objects."
        ],
        correctOption: 0,
      },
      {
        id: "14",
        question: 'What is the use of the "use strict" statement in JavaScript?',
        options: [
          'The "use strict" statement is a directive that enables strict mode, which enforces stricter parsing and error handling rules in JavaScript. It helps prevent common coding mistakes and promotes better code quality.',
          "The 'use strict' statement is a way to declare variables without hoisting.",
          "The 'use strict' statement is a method for organizing JavaScript code into modules and components."
        ],
        correctOption: 0,
      },
      {
        id: "15",
        question: "What are some common methods for manipulating arrays in JavaScript?",
        options: [
          "JavaScript provides several methods for manipulating arrays, such as push(), pop(), shift(), unshift(), splice(), slice(), join(), concat(), map(), filter(), reduce(), and sort(). These methods enable adding, removing, and transforming array elements efficiently.",
          "Some common methods for manipulating arrays in JavaScript include createElement(), appendChild(), and removeChild().",
          "Common methods for manipulating arrays in JavaScript include getElementById(), getElementsByClassName(), and getElementsByTagName()."
        ],
        correctOption: 0,
      },
      {
        id: "16",
        question: "What is object destructuring in JavaScript?",
        options: [
          "Object destructuring is a feature that allows extracting properties from an object and assigning them to variables with a concise syntax. It can simplify code and avoid repetitive dot notation for accessing object properties.",
          "Object destructuring is a method for organizing JavaScript code into modules and components.",
          "Object destructuring is a way to declare variables without hoisting."
        ],
        correctOption: 0,
      },
      {
        id: "17",
        question: "What is the purpose of the call() and apply() methods in JavaScript?",
        options: [
          'The call() and apply() methods are used to call a function with a specified object as the context, and with arguments passed as an array or a list, respectively. They enable borrowing methods from other objects, and setting the "this" value of a function dynamically.',
          "The call() and apply() methods are used to declare variables without hoisting.",
          "The call() and apply() methods are used to organize JavaScript code into modules and components."
        ],
        correctOption: 0,
      },
      {
        id: "18",
        question: "What is the difference between an object and a primitive in JavaScript?",
        options: [
          "Objects are complex data types that can contain properties and methods, while primitives are simple data types (undefined, null, boolean, number, string, and symbol) that are immutable and passed by value. Objects are passed by reference, and can be changed or mutated.",
          "Objects are simple data types, while primitives are complex data types that can contain properties and methods.",
          "Objects are used for organizing JavaScript code into modules and components, while primitives are used for declaring variables without hoisting."
        ],
        correctOption: 0,
      },
      {
        id: "19",
        question: "What is a higher-order function in JavaScript?",
        options: [
          "A higher-order function is a function that either takes one or more functions as arguments, or returns a function as its result. Higher-order functions enable creating abstractions and composing functions, making code more reusable and flexible.",
          "A higher-order function is a function that takes a primitive value as an argument.",
          "A higher-order function is a function that takes an object as an argument."
        ],
        correctOption: 0,
      },
      {
        id: "20",
        question: "What is the difference between a callback function and a promise in JavaScript?",
        options: [
          "A callback function is a function passed as an argument to another function, and executed when a certain event or condition is met. A promise is an object representing the eventual completion or failure of an asynchronous operation, with methods for handling success or error states. Promises enable avoiding callback hell and writing cleaner, more readable asynchronous code.",
          "A callback function is an object representing the eventual completion or failure of an asynchronous operation, while a promise is a function passed as an argument to another function.",
          "A callback function is a way to declare variables without hoisting, while a promise is a method for organizing JavaScript code into modules and components."
        ],
        correctOption: 0,
      },
      {
        id: "21",
        question: "What are some ways to handle errors in JavaScript?",
        options: [
          "Some ways to handle errors in JavaScript include using try/catch blocks, throwing custom errors, and logging errors to the console or a server. Libraries like Sentry and Bugsnag can also be used for error monitoring and reporting.",
          "Some ways to handle errors in JavaScript include using the call() and apply() methods, object destructuring, and arrow functions.",
          "Some ways to handle errors in JavaScript include using higher-order functions, promises, and callbacks."
        ],
        correctOption: 0,
      },
      {
        id: "22",
        question: "What is the event loop in JavaScript?",
        options: [
          "The event loop is a mechanism in JavaScript that allows for non-blocking I/O operations by constantly checking for pending events in the event queue and executing their associated callback functions. This enables asynchronous programming and prevents the UI from freezing.",
          "The event loop is a way to declare variables without hoisting.",
          "The event loop is a method for organizing JavaScript code into modules and components."
        ],
        correctOption: 0,
      },
      {
        id: "23",
        question: "What are arrow functions in JavaScript?",
        options: [
          'Arrow functions are a shorthand syntax for creating function expressions in JavaScript. They have a concise syntax, implicit return statement, and a lexically bound "this" keyword. They can be used as anonymous functions or in place of function expressions.',
          "Arrow functions are a way to declare variables without hoisting.",
          "Arrow functions are a method for organizing JavaScript code into modules and components."
        ],
        correctOption: 0,
      },
      {
        id: "24",
        question: 'What is the purpose of the "use strict" directive in JavaScript?',
        options: [
          'The "use strict" directive is a way to enforce stricter parsing and error handling in JavaScript code. It enables certain features like block-scoped variables, disallows some syntax, and helps prevent common coding mistakes.',
          'The "use strict" directive is a way to declare variables without hoisting.',
          'The "use strict" directive is a method for organizing JavaScript code into modules and components.'
        ],
        correctOption: 0,
    }
]
export default javascriptQuiz;