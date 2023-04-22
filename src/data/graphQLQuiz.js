const graphQLQuiz = [
    {
        id: "1",
        question: "What is GraphQL and why is it used?",
        options: [
          "A database query language developed by Microsoft.",
          "A query language for APIs developed by Facebook, improving performance and reducing network overhead.",
          "A JavaScript library for creating user interfaces.",
        ],
        correctOption: 1,
      },
      {
        id: "2",
        question: "How does GraphQL differ from REST?",
        options: [
          "REST uses multiple requests, while GraphQL uses only one request for related data.",
          "REST is a markup language, while GraphQL is a query language.",
          "GraphQL is a database, while REST is an API architecture.",
        ],
        correctOption: 0,
      },
      {
        id: "3",
        question: "What are the benefits of using GraphQL?",
        options: [
          "Improves performance, developer productivity, and simplifies API development.",
          "Makes it easier to create web pages with interactive content.",
          "Provides an object-relational mapping tool for databases.",
        ],
        correctOption: 0,
      },
      {
        id: "4",
        question: "What are the challenges of using GraphQL?",
        options: [
          "Requires more server resources, can be complex to maintain, and may have security risks.",
          "Has limited browser support and is difficult to learn.",
          "Lacks a rich ecosystem and has a steep learning curve.",
        ],
        correctOption: 0,
      },
      {
        id: "5",
        question: "What are some use cases for GraphQL?",
        options: [
          "Mobile apps, real-time applications, and microservices.",
          "Creating animations, transitions, and interactive elements.",
          "Implementing server-side rendering and static site generation.",
        ],
        correctOption: 0,
      },
      {
        id: "6",
        question: "What are GraphQL schemas and types?",
        options: [
          "Tools for validating GraphQL queries.",
          "Define data types and structures that can be queried or mutated.",
          "A technique for error handling in GraphQL.",
        ],
        correctOption: 1,
      },
      {
        id: "7",
        question: "What is a resolver in GraphQL?",
        options: [
          "An error handling mechanism.",
          "A function that maps a GraphQL query to a data source.",
          "A component for displaying data in a user interface.",
        ],
        correctOption: 1,
      },
      {
        id: "8",
        question: "What are the different types of queries in GraphQL?",
        options: [
          "Query, mutation, and subscription.",
          "GET, POST, PUT, and DELETE.",
          "SELECT, INSERT, UPDATE, and DELETE.",
        ],
        correctOption: 0,
      },
      {
        id: "9",
        question: "What is a GraphQL mutation?",
        options: [
          "A component for handling user input.",
          "An error handling mechanism in GraphQL.",
          "Used to modify data on the server-side.",
        ],
        correctOption: 2,
      },
      {
        id: "10",
        question: "What is a GraphQL subscription?",
        options: [
          "A feature for real-time updates from the server.",
          "A mechanism for error handling in GraphQL.",
          "A technique for optimizing GraphQL performance.",
        ],
        correctOption: 0,
      },
      {
        id: "11",
        question: "What is the difference between a query and a mutation in GraphQL?",
        options: [
          "Queries fetch data, mutations modify data.",
          "Queries modify data, mutations fetch data.",
          "Both are used for fetching data.",
        ],
        correctOption: 0,
      },
      {
        id: "12",
        question: "What are some common GraphQL clients?",
        options: [
          "Apollo Client, Relay, and Urql.",
          "MySQL, PostgreSQL, and MongoDB.",
          "jQuery, React, and Angular.",
        ],
        correctOption: 0,
      },
      {
        id: "13",
        question: "What is the role of the GraphQL server?",
        options: [
          "Handles GraphQL queries and returns data to the client.",
          "Validates and optimizes GraphQL queries.",
          "Provides a user interface for GraphQL applications.",
        ],
        correctOption: 0,
      },
      {
        id: "14",
        question: "What are some common GraphQL server implementations?",
        options: [
          "Apollo Server, Express with graphqlHTTP, and Yoga.",
          "Nginx, Apache, and IIS.",
          "MySQL, PostgreSQL, and SQLite.",
        ],
        correctOption: 0,
      },
      {
        id: "15",
        question: "What is introspection in GraphQL?",
        options: [
          "A technique for optimizing GraphQL performance.",
          "A feature that allows clients to query the schema and its fields and types.",
          "An error handling mechanism in GraphQL.",
        ],
        correctOption: 1,
      },
      {
        id: "16",
        question: "What are GraphQL directives?",
        options: [
          "Provide additional instructions to the server for handling queries.",
          "Used for creating custom GraphQL data types.",
          "A method for organizing GraphQL schemas.",
        ],
        correctOption: 0
    },
    {
        id: "17",
        question: "What are some common patterns for structuring GraphQL schemas?",
        options: [
          "Using a modular or domain-driven design and separating queries, mutations, and subscriptions.",
          "Storing all queries, mutations, and subscriptions in a single file.",
          "Organizing schemas based on performance metrics.",
        ],
        correctOption: 0,
      },
      {
        id: "18",
        question: "What is batching in GraphQL?",
        options: [
          "A technique for reducing network requests by grouping multiple queries or mutations.",
          "A method for organizing GraphQL schemas.",
          "An error handling mechanism in GraphQL.",
        ],
        correctOption: 0,
      },
      {
        id: "19",
        question: "What is caching in GraphQL?",
        options: [
          "A method for organizing GraphQL schemas.",
          "An error handling mechanism in GraphQL.",
          "A technique for reducing network requests by storing previously requested data on the client-side.",
        ],
        correctOption: 2,
      },
      {
        id: "20",
        question: "What are some common security considerations when using GraphQL?",
        options: [
          "Validating user input, limiting query depth and complexity, and protecting against denial-of-service attacks.",
          "Optimizing server-side rendering and implementing static site generation.",
          "Using responsive design and optimizing images for various devices.",
        ],
        correctOption: 0,
      },
      {
        id: "21",
        question: "What are some popular tools for testing GraphQL APIs?",
        options: [
          "Jest, Apollo Client, and Cypress.",
          "Mocha, Enzyme, and Selenium.",
          "Git, Jenkins, and Travis CI.",
        ],
        correctOption: 0,
      },
      {
        id: "22",
        question: "What are some best practices for performance optimization in GraphQL?",
        options: [
          "Limiting query depth and complexity, using pagination and batching, and implementing caching and CDN solutions.",
          "Minifying CSS and JavaScript files, optimizing images, and using a Content Delivery Network (CDN).",
          "Using server-side rendering and static site generation techniques.",
        ],
        correctOption: 0,
      },
      {
        id: "23",
        question: "What are some common GraphQL anti-patterns?",
        options: [
          "Over-fetching and under-fetching data, circular references, and over-reliance on client-side caching.",
          "Using inline styles, adding too many animations, and using complex selectors.",
          "Creating large monolithic applications, tightly coupling components, and not following a modular design.",
        ],
        correctOption: 0,
      },
      {
        id: "24",
        question: "What are some notable companies that use GraphQL?",
        options: [
          "Facebook, GitHub, Airbnb, and Shopify.",
          "Microsoft, IBM, Oracle, and SAP.",
          "Twitter, LinkedIn, Reddit, and Pinterest.",
        ],
        correctOption: 0,
      },
]
export default graphQLQuiz