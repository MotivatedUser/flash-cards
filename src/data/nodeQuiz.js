const nodeQuiz = [
    {
        id: "1",
        question: "What is Node.js and what is it used for?",
        options: [
        "A JavaScript library for building user interfaces.",
        "Node.js is a runtime environment that executes JavaScript on the server side. It is built on the V8 engine and allows developers to create scalable and high-performance server-side applications.",
        "A CSS preprocessor that extends the capabilities of CSS.",
        ],
        correctOption: 1,
        },
        {
        id: "2",
        question: "Explain the differences between synchronous and asynchronous programming in Node.js.",
        options: [
        "Synchronous programming executes tasks sequentially, blocking subsequent tasks until completion. Asynchronous programming runs tasks concurrently using callbacks, Promises, or async/await for non-blocking execution.",
        "Synchronous programming uses multiple threads, while asynchronous programming uses a single thread.",
        "Synchronous programming is event-driven, while asynchronous programming is not.",
        ],
        correctOption: 0,
        },
        {
        id: "3",
        question: "What are the key features of Node.js?",
        options: [
        "Key features of Node.js include non-blocking I/O, event-driven architecture, single-threaded processing, built-in package manager (npm), and support for JavaScript on the server side.",
        "Node.js supports both synchronous and asynchronous programming.",
        "Node.js is built on the V8 engine and supports multi-threaded processing.",
        ],
        correctOption: 0,
        },
        {
        id: "4",
        question: "What is the event loop in Node.js?",
        options: [
        "The event loop is a mechanism that processes queued tasks, such as I/O operations, in a non-blocking manner. It allows Node.js to handle concurrent tasks efficiently without multiple threads.",
        "A loop that repeatedly processes events in a Node.js application.",
        "A feature that allows Node.js to execute code in parallel.",
        ],
        correctOption: 0,
        },
        {
        id: "5",
        question: "Explain the purpose of the process object in Node.js.",
        options: [
        "A global object that manages environment variables in Node.js.",
        "The process object is a global object in Node.js that provides information about and control over the current Node.js process. It includes methods for handling events, managing environment variables, and exiting the process.",
        "An object that represents the current state of a Node.js application.",
        ],
        correctOption: 1,
        },
        {
        id: "6",
        question: "What is the role of the 'require' function in Node.js?",
        options: [
        "The 'require' function is used to import modules in Node.js. It allows developers to include built-in or third-party modules and use their functionality in the current script or application.",
        "A function that loads and runs JavaScript code in a separate process.",
        "A function that exports modules in Node.js.",
        ],
        correctOption: 0,
        },
        {
        id: "7",
        question: "What is the difference between the 'exports' and 'module.exports' in Node.js?",
        options: [
        "Both are used for exporting modules, but 'exports' is a shorthand for 'module.exports'.",
        "The 'exports' object is a prototype of 'module.exports'.",
        "'exports' is an object that is used to expose functions or variables from a module. 'module.exports' is the actual object that gets exported. Assigning a new value to 'exports' breaks the reference to 'module.exports'.",
        ],
        correctOption: 2,
        },
        {
            id: "8",
            question: "What is the role of the buffer class in Node.js?",
            options: [
            "A class for handling binary data in memory.",
            "The buffer class is used for handling binary data in Node.js. It allows developers to work with files, network connections, and other data sources that require manipulation of raw bytes.",
            "A class for handling file I/O in Node.js.",
            ],
            correctOption: 1,
            },
            {
            id: "9",
            question: "Explain the purpose of the fs module in Node.js.",
            options: [
            "The fs module is a built-in module in Node.js that provides an API for interacting with the file system. It enables reading, writing, updating, and deleting files, as well as working with directories.",
            "A module for handling network connections in Node.js.",
            "A module for managing processes in Node.js.",
            ],
            correctOption: 0,
            },
            {
            id: "10",
            question: "What is the role of streams in Node.js?",
            options: [
            "Streams are objects in Node.js that enable efficient data handling by reading and writing data in chunks. They are useful for processing large data sets or streaming data, such as video or audio.",
            "A feature for handling file I/O in Node.js.",
            "A feature for handling network I/O in Node.js.",
            ],
            correctOption: 0,
            },
            {
            id: "11",
            question: "What is the purpose of the cluster module in Node.js?",
            options: [
            "A module for managing worker threads in Node.js.",
            "A module for managing child processes in Node.js.",
            "The cluster module enables developers to create child processes to share the server workload, improving the application’s scalability and reliability. Each child process runs on a different CPU core, allowing for more efficient use of system resources.",
            ],
            correctOption: 2,
            },
            {
            id: "12",
            question: "What is middleware in the context of Node.js?",
            options: [
            "Middleware is a function that sits between the server and the client and intercepts requests and responses. It is used for tasks such as authentication, logging, and error handling, and can modify the request or response objects as needed.",
            "A module for handling HTTP requests and responses in Node.js.",
            "A feature for handling asynchronous code in Node.js.",
            ],
            correctOption: 0,
            },
            {
            id: "13",
            question: "What are the differences between PUT and POST requests in Node.js?",
            options: [
            "PUT requests are used for updating existing resources, while POST requests are used for creating new resources. PUT requests are idempotent, meaning that sending the same request multiple times has the same effect as sending it once. POST requests are not idempotent.",
            "PUT requests are used for creating new resources, while POST requests are used for updating existing resources.",
            "PUT and POST requests are used interchangeably in Node.js.",
            ],
            correctOption: 0,
            },
            {
            id: "14",
            question: "What is JWT and how is it used in Node.js?",
            options: [
            "JWT (JSON Web Token) is a standard for creating access tokens that can be used for authentication and authorization. JWTs are used to securely transmit information between parties, such as a client and server, and can be verified using a secret key or public key cryptography.",
            "A JavaScript library for building user interfaces.",
            "A CSS preprocessor that extends the capabilities of CSS.",
            ],
            correctOption: 0,
            },
            {
                id: "15",
                question: "What is the purpose of the package.json file in Node.js?",
                options: [
                "A file for managing server-side dependencies.",
                "The package.json file is a manifest file that contains information about the project, such as its name, version, dependencies, and scripts. It is used by the npm package manager to install and manage dependencies and run scripts, among other tasks.",
                "A file for managing client-side dependencies.",
                ],
                correctOption: 1,
                },
                {
                id: "16",
                question: "What is Express.js and how is it used in Node.js?",
                options: [
                "Express.js is a popular web framework for Node.js that simplifies the process of creating server-side applications. It provides a set of features and tools for handling HTTP requests, routing, middleware, and templating, among other tasks.",
                "A library for building user interfaces in Node.js.",
                "A JavaScript runtime for running server-side code.",
                ],
                correctOption: 0,
                },
                {
                id: "17",
                question: "What is MongoDB and how is it used in Node.js?",
                options: [
                "A popular SQL database for storing data in tables.",
                "MongoDB is a popular NoSQL database that stores data in JSON-like documents instead of tables. It is used in Node.js applications for storing and retrieving data, and can be accessed using the MongoDB Node.js driver or an ORM such as Mongoose.",
                "A popular client-side database for storing data in browsers.",
                ],
                correctOption: 1,
                },
                {
                id: "18",
                question: "What is the purpose of the Node.js REPL?",
                options: [
                "The Node.js REPL (Read-Eval-Print Loop) is an interactive shell that allows developers to test and experiment with Node.js code and APIs. It provides a command-line interface for executing JavaScript code and displaying the results.",
                "A tool for building and bundling Node.js applications.",
                "A tool for managing Node.js package dependencies.",
                ],
                correctOption: 0,
                },
                {
                id: "19",
                question: "What is the difference between Node.js streams and buffers?",
                options: [
                "Node.js streams are used for handling data that can be processed in chunks, such as file I/O and network I/O. Node.js buffers, on the other hand, are used for handling binary data in memory, such as image data or encrypted data.",
                "Buffers are used for file I/O, while streams are used for network I/O.",
                "Buffers are used for network I/O, while streams are used for file I/O.",
                ],
                correctOption: 0,
                },
                {
                id: "20",
                question: "What is middleware in Node.js?",
                options: [
                "Middleware is a function that sits in the middle of the request-response cycle in Node.js, processing the request before it reaches the final handler. It is used for tasks such as authentication, logging, and error handling.",
                "A module for handling HTTP requests and responses in Node.js.",
                "A feature for handling asynchronous code in Node.js.",
                ],
                correctOption: 0,
                },
                {
                    id: "21",
                    question: "What is the purpose of the 'cluster' module in Node.js?",
                    options: [
                    "The cluster module in Node.js allows applications to utilize multiple CPU cores, improving performance and scalability. It provides a way to create child processes that share server ports, enabling load balancing and fault tolerance.",
                    "A module for managing worker threads in Node.js.",
                    "A module for managing child processes in Node.js.",
                    ],
                    correctOption: 0,
                    },
                    {
                    id: "22",
                    question: "What is the purpose of the 'child_process' module in Node.js?",
                    options: [
                    "A module for managing worker threads in Node.js.",
                    "A module for managing cluster processes in Node.js.",
                    "The child_process module in Node.js provides a way to spawn new child processes and communicate with them through standard input and output streams. It is useful for running external commands or parallelizing work.",
                    ],
                    correctOption: 2,
                    },
                    {
                    id: "23",
                    question: "What is the 'EventEmitter' class in Node.js?",
                    options: [
                    "The EventEmitter class is a built-in class in Node.js that provides a way to handle and emit events. It allows developers to create custom events and event listeners, enabling communication between different parts of the application.",
                    "A class for managing event-driven architecture in Node.js.",
                    "A class for managing event loops in Node.js.",
                    ],
                    correctOption: 0,
                    },
                    {
                    id: "24",
                    question: "What is the purpose of the 'os' module in Node.js?",
                    options: [
                    "A module for managing operating system-related tasks in Node.js.",
                    "The os module in Node.js provides an API for interacting with the operating system. It allows developers to retrieve information about the system, such as CPU usage, memory usage, and network interfaces.",
                    "A module for managing file system operations in Node.js.",
                    ],
                    correctOption: 1,
                    }
]
export default nodeQuiz