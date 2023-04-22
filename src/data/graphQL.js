const graphQLFlashcards = [
  {
    id: "1",
    question: "What is GraphQL and why is it used?",
    answer:
      "GraphQL is a query language for APIs that was developed by Facebook. It allows clients to request only the data they need, which improves performance and reduces network overhead.",
  },
  {
    id: "2",
    question: "How does GraphQL differ from REST?",
    answer:
      "GraphQL allows clients to request only the data they need with a single request, while REST requires multiple requests to fetch related data.",
  },
  {
    id: "3",
    question: "What are the benefits of using GraphQL?",
    answer:
      "GraphQL improves performance by reducing network overhead, provides better developer productivity, and simplifies API development and maintenance.",
  },
  {
    id: "4",
    question: "What are the challenges of using GraphQL?",
    answer:
      "GraphQL requires additional server resources and configuration, can be more complex to set up and maintain, and may have security risks if not implemented correctly.",
  },
  {
    id: "5",
    question: "What are some use cases for GraphQL?",
    answer:
      "GraphQL can be used for a wide range of use cases, including mobile applications, real-time applications, and microservices.",
  },
  {
    id: "6",
    question: "What are GraphQL schemas and types?",
    answer:
      "GraphQL schemas define the data types and structures that can be queried or mutated. Types are the building blocks of a schema, defining the shape and fields of data.",
  },
  {
    id: "7",
    question: "What is a resolver in GraphQL?",
    answer:
      "A resolver is a function that maps a GraphQL query to a data source. Resolvers are used to retrieve or mutate data and can be customized to suit the needs of the application.",
  },
  {
    id: "8",
    question: "What are the different types of queries in GraphQL?",
    answer:
      "The different types of queries in GraphQL are query, mutation, and subscription. Query is used for fetching data, mutation is used for modifying data, and subscription is used for real-time updates.",
  },
  {
    id: "9",
    question: "What is a GraphQL mutation?",
    answer:
      "A GraphQL mutation is used to modify data on the server-side. Mutations typically return the updated data or a status code to indicate the success or failure of the operation.",
  },
  {
    id: "10",
    question: "What is a GraphQL subscription?",
    answer:
      "A GraphQL subscription is used for real-time updates from the server. Subscriptions allow clients to receive updates when data changes on the server-side.",
  },
  {
    id: "11",
    question:
      "What is the difference between a query and a mutation in GraphQL?",
    answer:
      "A query is used for fetching data, while a mutation is used for modifying data on the server-side.",
  },
  {
    id: "12",
    question: "What are some common GraphQL clients?",
    answer:
      "Some common GraphQL clients include Apollo Client, Relay, and Urql.",
  },
  {
    id: "13",
    question: "What is the role of the GraphQL server?",
    answer:
      "The GraphQL server is responsible for handling GraphQL queries and mutations, and returning the requested data to the client.",
  },
  {
    id: "14",
    question: "What are some common GraphQL server implementations?",
    answer:
      "Some common GraphQL server implementations include Apollo Server, Express with graphqlHTTP, and Yoga.",
  },
  {
    id: "15",
    question: "What is introspection in GraphQL?",
    answer:
      "Introspection is a feature in GraphQL that allows clients to query the schema and its available fields and types.",
  },
  {
    id: "16",
    question: "What are GraphQL directives?",
    answer:
      "GraphQL directives are used to provide additional instructions to the server for how to handle a query or mutation. Some common directives include @skip and @include.",
  },
  {
    id: "17",
    question: "What are some common patterns for structuring GraphQL schemas?",
    answer:
      "Some common patterns for structuring GraphQL schemas include using a modular or domain-driven design, and separating queries, mutations, and subscriptions into separate files.",
  },
  {
    id: "18",
    question: "What is batching in GraphQL?",
    answer:
      "Batching is a technique used in GraphQL to reduce the number of network requests by grouping multiple queries or mutations into a single request.",
  },
  {
    id: "19",
    question: "What is caching in GraphQL?",
    answer:
      "Caching is a technique used in GraphQL to reduce the number of network requests by storing previously requested data on the client-side.",
  },
  {
    id: "20",
    question:
      "What are some common security considerations when using GraphQL?",
    answer:
      "Some common security considerations when using GraphQL include validating user input, limiting the depth and complexity of queries, and protecting against denial-of-service attacks.",
  },
  {
    id: "21",
    question: "What are some popular tools for testing GraphQL APIs?",
    answer:
      "Some popular tools for testing GraphQL APIs include Jest, Apollo Client, and Cypress.",
  },
  {
    id: "22",
    question:
      "What are some best practices for performance optimization in GraphQL?",
    answer:
      "Some best practices for performance optimization in GraphQL include limiting query depth and complexity, using pagination and batching for large datasets, and implementing caching and CDN solutions.",
  },
  {
    id: "23",
    question: "What are some common GraphQL anti-patterns?",
    answer:
      "Some common GraphQL anti-patterns include over-fetching and under-fetching data, circular references, and over-reliance on client-side caching.",
  },
  {
    id: "24",
    question: "What are some notable companies that use GraphQL?",
    answer:
      "Some notable companies that use GraphQL include Facebook, GitHub, Airbnb, and Shopify.",
  },
];
export default graphQLFlashcards;
