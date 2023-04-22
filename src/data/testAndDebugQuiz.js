const testAndDebugQuiz = [
  {
    id: "1",
    question: "What is the purpose of software testing?",
    options: [
      "The process of creating software applications.",
      "Evaluating applications to ensure they meet requirements, function as expected, and provide a satisfactory user experience.",
      "An approach to optimizing software performance.",
    ],
    correctOption: 1,
  },
  {
    id: "2",
    question:
      "What is the difference between unit testing, integration testing, and functional testing?",
    options: [
      "Testing individual units, verifying units work together, and checking application meets requirements from a user perspective.",
      "Testing the frontend, backend, and database layers.",
      "Testing performance, security, and user experience.",
    ],
    correctOption: 0,
  },
  {
    id: "3",
    question: "What is test-driven development (TDD)?",
    options: [
      "A software development methodology where tests are written before the implementation code.",
      "A project management framework for software development.",
      "An approach to writing code with minimal bugs.",
    ],
    correctOption: 0,
  },
  {
    id: "4",
    question: "What is the purpose of end-to-end testing?",
    options: [
      "Testing individual components of an application.",
      "Validating the entire application workflow, from the user interface to the database layer.",
      "Ensuring that an application meets its performance benchmarks.",
    ],
    correctOption: 1,
  },
  {
    id: "5",
    question:
      "What are some popular testing frameworks for front-end development?",
    options: [
      "Jest, Mocha, Jasmine, Karma, Cypress, and Enzyme.",
      "React, Angular, Vue, and Svelte.",
      "Node.js, Express, and Django.",
    ],
    correctOption: 0,
  },
  {
    id: "6",
    question: "What is the role of a debugger in software development?",
    options: [
      "A tool that helps developers identify, investigate, and resolve issues in their code.",
      "An application for writing and compiling code.",
      "A platform for deploying and managing software applications.",
    ],
    correctOption: 0,
  },
  {
    id: "7",
    question: "How can you debug JavaScript code in a browser?",
    options: [
      "Using browser developer tools, such as Chrome DevTools or Firefox Developer Tools.",
      "Using code editors like Visual Studio Code or Sublime Text.",
      "By running the code in a command-line interface.",
    ],
    correctOption: 0,
  },
  {
    id: "8",
    question: "What is the difference between a manual and an automated test?",
    options: [
      "Manual tests involve human testers, while automated tests use software tools or scripts.",
      "Manual tests are for frontend development, while automated tests are for backend development.",
      "Manual tests are for performance testing, while automated tests are for functional testing.",
    ],
    correctOption: 0,
  },
  {
    id: "9",
    question: "What is code coverage and why is it important?",
    options: [
      "A measure of code quality and maintainability.",
      "A metric measuring the percentage of code executed by a test suite.",
      "A tool for identifying and resolving code issues.",
    ],
    correctOption: 1,
  },
  {
    id: "10",
    question: "What is regression testing and when should it be performed?",
    options: [
      "Retesting an application after changesto ensure existing functionality works as expected.",
      "Testing the performance of an application under various load conditions.",
      "Testing the compatibility of an application across different browsers and devices.",
    ],
    correctOption: 0,
  },
  {
    id: "11",
    question: "What is the role of assertions in testing?",
    options: [
      "Statements that check if a specific condition is true or false during a test.",
      "Techniques for organizing and running test cases.",
      "Tools for measuring the performance of an application.",
    ],
    correctOption: 0,
  },
  {
    id: "12",
    question:
      "What is performance testing and why is it important for web applications?",
    options: [
      "Evaluating an application's speed, responsiveness, and stability under various load conditions.",
      "Testing the compatibility of an application with different browsers and devices.",
      "Ensuring that an application's user interface is intuitive and visually appealing.",
    ],
    correctOption: 0,
  },
  {
    id: "13",
    question: "What is cross-browser testing and why is it necessary?",
    options: [
      "Testing a web application across multiple browsers and browser versions to ensure consistent functionality and appearance.",
      "Testing the performance of a web application under various load conditions.",
      "Ensuring that a web application's user interface is accessible and usable.",
    ],
    correctOption: 0,
  },
  {
    id: "14",
    question: "What are some common debugging techniques?",
    options: [
      "Setting breakpoints, stepping through code execution, using debuggers, and examining call stacks.",
      "Creating flowcharts, writing pseudocode, and reviewing code with peers.",
      "Using version control systems, continuous integration, and code reviews.",
    ],
    correctOption: 0,
  },
  {
    id: "15",
    question: "What are smoke tests and why are they useful?",
    options: [
      "High-level tests that quickly verify the basic functionality of an application.",
      "Tests that check the performance of an application under various load conditions.",
      "Tests that ensure the compatibility of an application with different browsers and devices.",
    ],
    correctOption: 0,
  },
  {
    id: "16",
    question: "What is the role of mocking in testing?",
    options: [
      "Replacing real dependencies or components with simulated versions during testing.",
      "Creating realistic test data for use in test cases.",
      "Automating the execution of test cases and generating test reports.",
    ],
    correctOption: 0,
  },
  {
    id: "17",
    question: "What is the difference between black-box and white-box testing?",
    options: [
      "Verifying functionality without knowledge of internal structure vs. testing internal structure, design, or code.",
      "Testing individual components vs. testing the entire application.",
      "Manual testing vs. automated testing.",
    ],
    correctOption: 0,
  },
  {
    id: "18",
    question: "What is a test plan and what should it include?",
    options: [
      "A document outlining testing strategy, objectives, scope, and resources for a software project.",
      "A detailed list of all test cases and test scripts for a software project.",
      "A report summarizing the results of all tests conducted during a software project.",
    ],
    correctOption: 0,
  },
  {
    id: "19",
    question: "What is the difference between a test case and a test script?",
    options: [
      "A set of input values and expected results vs. a sequence of instructions for automating a test case.",
      "A document describing a test plan vs. a detailed list of test cases and test scripts.",
      "A method for organizing test cases vs. a tool for executing test cases automatically.",
    ],
    correctOption: 0,
  },
  {
    id: "20",
    question: "What are some common causes of software defects?",
    options: [
      "Incorrect requirements, design errors, coding mistakes, and inadequate testing.",
      "Insufficient documentation, poor communication, and lack of training.",
      "Hardware failures, network issues, and third-party service outages.",
    ],
    correctOption: 0,
  },
  {
    id: "21",
    question: "What is a test suite?",
    options: [
      "A collection of test cases or test scripts that are executed together.",
      "A tool for managing and organizing test cases.",
      "A set of performance benchmarks for a software application.",
    ],
    correctOption: 0,
  },
  {
    id: "22",
    question: "What is the difference between error, bug, and defect?",
    options: [
      "A human action causing incorrect results, a code flaw causing unexpected behavior, and a discrepancy between actual and expected behavior.",
      "A syntax error, a logic error, and a runtime error.",
      "A problem in the design phase, a problem in the development phase, and a problem in the testing phase.",
    ],
    correctOption: 0,
  },
  {
    id: "23",
    question:
      "What is load testing and why is it important for web applications?",
    options: [
      "Evaluating performance, stability, and scalability of an application under various levels of load or concurrent users.",
      "Testing the compatibility of an application with different browsers and devices.",
      "Ensuring that an application's user interface is accessible and usable.",
    ],
    correctOption: 0,
  },
  {
    id: "24",
    question: "What are some best practices for writing testable code?",
    options: [
      "Following SOLID principles, writing small functions, using dependency injection, and designing for modularity.",
      "Writing clear comments, following a consistent naming convention, and using a version control system.",
      "Collaborating with team members, conducting code reviews, and practicing continuous integration.",
    ],
    correctOption: 0,
  },
];
export default testAndDebugQuiz;
