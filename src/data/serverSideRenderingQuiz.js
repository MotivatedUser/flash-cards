const serverSideRenderingQuiz = [
  {
    id: "1",
    question: "What is Server-side Rendering (SSR)?",
    options: [
      "A technique used to cache web content.",
      "A technique used to generate HTML on the server before sending it to the client.",
      "A technique used to improve user interactions.",
    ],
    correctOption: 1,
  },
  {
    id: "2",
    question: "How does SSR differ from client-side rendering?",
    options: [
      "In client-side rendering, the HTML is generated on the client-side using JavaScript.",
      "In SSR, the HTML is generated on the server-side before sending it to the client.",
      "Client-side rendering is a more secure option.",
    ],
    correctOption: 1,
  },
  {
    id: "3",
    question: "What are the benefits of using SSR?",
    options: [
      "Improving app performance, SEO, and accessibility.",
      "Reducing server resources and configuration.",
      "Simplifying development and maintenance.",
    ],
    correctOption: 0,
  },
  {
    id: "4",
    question: "What are the challenges of using SSR?",
    options: [
      "Requires more server resources and configuration.",
      "Is more complex to set up and maintain.",
      "Can have security risks if not implemented correctly.",
    ],
    correctOption: 2,
  },
  {
    id: "5",
    question: "Which JavaScript frameworks and libraries support SSR?",
    options: [
      "React, Vue.js, Angular, and others.",
      "JQuery, Underscore.js, and Lodash.",
      "Bootstrap, Materialize, and Bulma.",
    ],
    correctOption: 0,
  },
  {
    id: "6",
    question: "How does React support SSR?",
    options: [
      "Through a library called React Router.",
      "Through a library called React Server.",
      "Through a library called React Redux.",
    ],
    correctOption: 1,
  },
  {
    id: "7",
    question: "What is the role of the server in SSR?",
    options: [
      "The server generates the HTML by executing JavaScript code.",
      "The server hosts the files and serves them to the client.",
      "The server processes user input and manages state.",
    ],
    correctOption: 0,
  },
  {
    id: "8",
    question: "How does SSR affect the user experience?",
    options: [
      "Improves the user experience by reducing load times and improving SEO.",
      "Negatively affects the user experience by increasing load times.",
      "Has no significant impact on the user experience.",
    ],
    correctOption: 0,
  },
  {
    id: "9",
    question: "What are the best practices for implementing SSR?",
    options: [
      "Optimizing server performance and using caching.",
      "Ensuring security and testing for compatibility.",
      "Using a single-page application architecture.",
    ],
    correctOption: 1,
  },
  {
    id: "10",
    question: "What is client-side hydration in SSR?",
    options: [
      "Attaching event listeners and re-rendering components.",
      "Loading additional assets on demand.",
      "Reducing the size of the initial download.",
    ],
    correctOption: 0,
  },
  {
    id: "11",
    question: "What are the benefits of client-side hydration?",
    options: [
      "Dynamic UIs, better performance, and smoother transitions.",
      "Improved security and error handling.",
      "Reduced server resources and configuration.",
    ],
    correctOption: 0,
  },
  {
    id: "12",
    question: "What is the difference between static and dynamic rendering?",
    options: [
      "Static rendering generates HTML at build time.",
      "Dynamic rendering generates HTML on the server-side at runtime.",
      "Static rendering is used for single-page applications.",
    ],
    correctOption: 1,
  },
  {
    id: "13",
    question: "What are the advantages of using static rendering?",
    options: [
      "Faster load times, better SEO, and reduced server load.",
      "Dynamic content and real-time updates.",
      "Simpler development and easier maintenance.",
    ],
    correctOption: 0,
  },
  {
    id: "14",
    question: "What are the limitations of using static rendering?",
    options: [
      "Challenging to set up for dynamic content.",
      "Requires frequent rebuilds.",
      "Larger initial download size.",
    ],
    correctOption: 2,
  },
  {
    id: "15",
    question: "What is Next.js?",
    options: [
      "A framework for creating server-rendered React applications.",
      "A library for handling form validation in React.",
      "A package manager for JavaScript and Node.js.",
    ],
    correctOption: 0,
  },
  {
    id: "16",
    question: "How does Next.js work?",
    options: [
      "Generates static HTML files at build time.",
      "Provides server-side rendering capabilities for dynamic content.",
      "Improves performance by bundling and minifying assets.",
    ],
    correctOption: 1,
  },
  {
    id: "17",
    question: "What are the benefits of using Next.js?",
    options: [
      "Simplifies SSR and static site generation setup.",
      "Better developer experience and improved performance.",
      "Built-in support for real-time data fetching.",
    ],
    correctOption: 1,
  },
  {
    id: "18",
    question: "How does Vue.js support SSR?",
    options: [
      "Through a built-in library called Vue Server Renderer.",
      "By using the official Vue.js CLI.",
      "Through a plugin called Vuex.",
    ],
    correctOption: 0,
  },
  {
    id: "19",
    question: "What are the benefits of using Vue.js with SSR?",
    options: [
      "Better SEO, faster load times, and improved accessibility.",
      "Real-time data fetching and state management.",
      "Automatic code splitting and lazy loading.",
    ],
    correctOption: 0,
  },
  {
    id: "20",
    question: "How does Angular support SSR?",
    options: [
      "Through a package called Angular Universal.",
      "By using the Angular CLI and ng serve.",
      "Through a library called Angular Material.",
    ],
    correctOption: 0,
  },
  {
    id: "21",
    question: "What are the benefits of using Angular with SSR?",
    options: [
      "Better SEO, faster load times, and improved accessibility.",
      "Built-in support for component-based architecture.",
      "Automatic code splitting and lazy loading.",
    ],
    correctOption: 0,
  },
  {
    id: "22",
    question: "What is the role of SEO in SSR?",
    options: [
      "Improves the SEO ranking of a web page by providing faster load times.",
      "Improves the crawlability and indexability of the page.",
      "Reduces the time-to-first-byte.",
    ],
    correctOption: 1,
  },
  {
    id: "23",
    question: "What are some common pitfalls to avoid when implementing SSR?",
    options: [
      "Overcomplicating the server-side code.",
      "Not considering differences between server-side and client-side JavaScript.",
      "Not testing the application thoroughly for compatibility.",
    ],
    correctOption: 2,
  },
  {
    id: "24",
    question:
      "What are some tools and libraries available for implementing SSR?",
    options: [
      "React Server, Vue Server Renderer, Angular Universal, and Next.js.",
      "Webpack, Gulp, Grunt, and Rollup.",
      "Jest, Mocha, Jasmine, and Chai.",
    ],
    correctOption: 0,
  },
];
export default serverSideRenderingQuiz;
