const jsFlashcards = [
    {
    id: '1',
    question: 'What is JavaScript and its purpose?',
    answer: 'JavaScript is a high-level, versatile programming language primarily used for enhancing web pages with interactivity, animations, and dynamic content. It can be used on both client and server-side.'
    },
    {
    id: '2',
    question: 'What are the main data types in JavaScript?',
    answer: 'JavaScript has six main data types: Undefined, Null, Boolean, Number, String, and Object (including arrays, functions, and specialized objects like Date and RegExp).'
    },
    {
    id: '3',
    question: 'What are the differences between var, let, and const?',
    answer: 'Var has function scope, while let and const have block scope. Var is hoisted, and let and const are not. Const is used for declaring constants, which cannot be reassigned, while var and let can be reassigned.'
    },
    {
    id: '4',
    question: 'What are JavaScript functions and how are they declared?',
    answer: 'Functions are reusable blocks of code that perform specific tasks. Functions can be declared using the "function" keyword, followed by a name, a parameter list, and a code block (e.g., function example(param) { ... }).'
    },
    {
    id: '5',
    question: 'What is the difference between == and === in JavaScript?',
    answer: 'The == operator compares values for equality, performing type coercion if needed. The === operator compares both values and types for strict equality, without type coercion.'
    },
    {
    id: '6',
    question: 'What is an anonymous function in JavaScript?',
    answer: 'An anonymous function is a function without a name, typically used as a callback or in a self-invoking expression. It can be assigned to a variable, passed as an argument, or returned from another function.'
    },
    {
    id: '7',
    question: 'What is the purpose of the "this" keyword in JavaScript?',
    answer: "The 'this' keyword refers to the object that the currently executing function belongs to, providing a way to access the object's properties and methods. Its value depends on the calling context."
    },
    {
    id: '8',
    question: 'What is an event and event handling in JavaScript?',
    answer: 'An event is an action or occurrence (e.g., click, hover) detected by the browser. Event handling involves defining functions (event handlers) to respond to events, using methods like addEventListener to bind handlers to elements.'
    },
    {
    id: '9',
    question: 'What is a closure in JavaScript?',
    answer: "A closure is a function that retains access to its outer function's scope, even after the outer function has completed execution. This enables data privacy and function factories with configurable behavior."
    },
    {
    id: '10',
    question: 'What is the difference between synchronous and asynchronous JavaScript?',
    answer: 'Synchronous JavaScript executes code sequentially, blocking subsequent code until completion. Asynchronous JavaScript uses callbacks, promises, or async/await to perform tasks without blocking the execution of other code.'
    },
    {
    id: '11',
    question: 'What are promises in JavaScript and how are they used?',
    answer: 'Promises are objects representing the eventual completion or failure of an asynchronous operation. They simplify asynchronous code, providing methods like "then" and "catch" for chaining and handling success or error states.'
    },
]

export default jsFlashcards