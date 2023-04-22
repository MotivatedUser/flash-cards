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
    {
        id: '11',
        question: 'What is the purpose of the cluster module in Node.js?',
        answer: 'The cluster module enables developers to create child processes to share the server workload, improving the application’s scalability and reliability. Each child process runs on a different CPU core, allowing for more efficient use of system resources.'
      },
      {
        id: '12',
        question: 'What is middleware in the context of Node.js?',
        answer: 'Middleware is a function that sits between the server and the client and intercepts requests and responses. It is used for tasks such as authentication, logging, and error handling, and can modify the request or response objects as needed.'
      },
      {
        id: '13',
        question: 'What are the differences between PUT and POST requests in Node.js?',
        answer: 'PUT requests are used for updating existing resources, while POST requests are used for creating new resources. PUT requests are idempotent, meaning that sending the same request multiple times has the same effect as sending it once. POST requests are not idempotent.'
      },
      {
        id: '14',
        question: 'What is JWT and how is it used in Node.js?',
        answer: 'JWT (JSON Web Token) is a standard for creating access tokens that can be used for authentication and authorization. JWTs are used to securely transmit information between parties, such as a client and server, and can be verified using a secret key or public key cryptography.'
      },
      {
        id: '15',
        question: 'What is the purpose of the package.json file in Node.js?',
        answer: 'The package.json file is a manifest file that contains information about the project, such as its name, version, dependencies, and scripts. It is used by the npm package manager to install and manage dependencies and run scripts, among other tasks.'
      },
      {
        id: '16',
        question: 'What is Express.js and how is it used in Node.js?',
        answer: 'Express.js is a popular web framework for Node.js that simplifies the process of creating server-side applications. It provides a set of features and tools for handling HTTP requests, routing, middleware, and templating, among other tasks.'
      },
      {
        id: '17',
        question: 'What is MongoDB and how is it used in Node.js?',
        answer: 'MongoDB is a popular NoSQL database that stores data in JSON-like documents instead of tables. It is used in Node.js applications for storing and retrieving data, and can be accessed using the MongoDB Node.js driver or an ORM such as Mongoose.'
      },
      {
        id: '18',
        question: 'What is the purpose of the Node.js REPL?',
        answer: 'The Node.js REPL (Read-Eval-Print Loop) is an interactive shell that allows developers to test and experiment with Node.js code and APIs. It provides a command-line interface for executing JavaScript code and displaying the results.'
      },
      {
        id: '19',
        question: 'What is the difference between Node.js streams and buffers?',
        answer: 'Node.js streams are used for handling data that can be processed in chunks, such as file I/O and network I/O. Node.js buffers, on the other hand, are used for handling binary data in memory, such as image data or encrypted data.'
      },
      {
        id: '20',
        question: 'What is middleware in Node.js?',
        answer: 'Middleware is a function that sits in the middle of the request-response cycle in Node.js, processing the request before it reaches the final handler. It is used for tasks such as authentication, logging, and error handling.'
      },
      {
        id: '21',
        question: 'What is the purpose of the "cluster" module in Node.js?',
        answer: 'The cluster module in Node.js allows applications to utilize multiple CPU cores, improving performance and scalability. It provides a way to create child processes that share server ports, enabling load balancing and fault tolerance.'
      },
      {
        id: '22',
        question: 'What is the purpose of the "child_process" module in Node.js?',
        answer: 'The child_process module in Node.js provides a way to spawn new child processes and communicate with them through standard input and output streams. It is useful for running external commands or parallelizing work.'
      },
      {
        id: '23',
        question: 'What is the "EventEmitter" class in Node.js?',
        answer: 'The EventEmitter class is a built-in class in Node.js that provides a way to handle and emit events. It allows developers to create custom events and event listeners, enabling communication between different parts of the application.'
      },
      {
        id: '24',
        question: 'What is the purpose of the "os" module in Node.js?',
        answer: 'The os module in Node.js provides an API for interacting with the operating system. It allows developers to retrieve information about the system, such as CPU usage, memory usage, and network interfaces.'
      },
];
    export default nodeFlashcards;