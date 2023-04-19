const nodeFlashcards = [
    {
    id: '1',
    question: 'What is Node.js and what is it used for?',
    answer: 'Node.js is a runtime environment that executes JavaScript on the server side. It is built on the V8 engine and allows developers to create scalable and high-performance server-side applications.'
    },
    {
    id: '2',
    question: 'Explain the differences between synchronous and asynchronous programming in Node.js.',
    answer: 'Synchronous programming executes tasks sequentially, blocking subsequent tasks until completion. Asynchronous programming runs tasks concurrently using callbacks, Promises, or async/await for non-blocking execution.'
    },
    {
    id: '3',
    question: 'What are the key features of Node.js?',
    answer: 'Key features of Node.js include non-blocking I/O, event-driven architecture, single-threaded processing, built-in package manager (npm), and support for JavaScript on the server side.'
    },
    {
    id: '4',
    question: 'What is the event loop in Node.js?',
    answer: 'The event loop is a mechanism that processes queued tasks, such as I/O operations, in a non-blocking manner. It allows Node.js to handle concurrent tasks efficiently without multiple threads.'
    },
    {
    id: '5',
    question: 'Explain the purpose of the process object in Node.js.',
    answer: 'The process object is a global object in Node.js that provides information about and control over the current Node.js process. It includes methods for handling events, managing environment variables, and exiting the process.'
    },
    {
    id: '6',
    question: 'What is the role of the "require" function in Node.js?',
    answer: 'The "require" function is used to import modules in Node.js. It allows developers to include built-in or third-party modules and use their functionality in the current script or application.'
    },
    {
    id: '7',
    question: 'What is the difference between the "exports" and "module.exports" in Node.js?',
    answer: '"exports" is an object that is used to expose functions or variables from a module. "module.exports" is the actual object that gets exported. Assigning a new value to "exports" breaks the reference to "module.exports".'
    },
    {
    id: '8',
    question: 'What is the role of the buffer class in Node.js?',
    answer: 'The buffer class is used for handling binary data in Node.js. It allows developers to work with files, network connections, and other data sources that require manipulation of raw bytes.'
    },
    {
    id: '9',
    question: 'Explain the purpose of the fs module in Node.js.',
    answer: 'The fs module is a built-in module in Node.js that provides an API for interacting with the file system. It enables reading, writing, updating, and deleting files, as well as working with directories.'
    },
    {
    id: '10',
    question: 'What is the role of streams in Node.js?',
    answer: 'Streams are objects in Node.js that enable efficient data handling by reading and writing data in chunks. They are useful for processing large data sets or streaming data, such as video or audio.'
    },
    ];
    export default nodeFlashcards;