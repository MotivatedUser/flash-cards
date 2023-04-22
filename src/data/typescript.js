const typescriptFlashcards = [
  {
    id: "1",
    question:
      "What is TypeScript and why would you use it for front-end development?",
    answer:
      "TypeScript is a superset of JavaScript that adds optional static typing, interfaces, classes, and other features to improve code maintainability, reliability, and scalability. It can catch common errors at compile-time, provide better tooling support, and enable better code organization and reuse.",
  },
  {
    id: "2",
    question:
      "What are some of the key differences between TypeScript and JavaScript?",
    answer:
      "TypeScript adds optional static typing, interfaces, classes, enums, tuples, and other features that are not present in JavaScript. It also has a stricter syntax, requires compilation to JavaScript, and has better tooling support for code analysis and refactoring.",
  },
  {
    id: "3",
    question: "How do you define and use interfaces in TypeScript?",
    answer:
      "Interfaces define a contract for the shape of an object, specifying its properties and types. They can be used to enforce consistency across related objects, enable duck typing, and make code more readable and maintainable.",
  },
  {
    id: "4",
    question:
      "What is the difference between a class and an interface in TypeScript?",
    answer:
      "A class is a blueprint for creating objects with methods and properties, while an interface is a contract for the shape of an object. Classes can be instantiated and extended, while interfaces cannot. However, a class can implement an interface to satisfy its contract.",
  },
  {
    id: "5",
    question: "What are type guards in TypeScript and how are they used?",
    answer:
      "Type guards are conditional statements that determine the type of a value at runtime and enable type-specific behavior. They can be used to narrow the type of a union, distinguish between different object shapes, or check for null or undefined values.",
  },
  {
    id: "6",
    question: "What is a module in TypeScript?",
    answer:
      "A module in TypeScript is a self-contained unit of code that encapsulates related functionality and provides a way to organize and reuse code across different files and projects. Modules can be imported and exported using the import and export keywords, respectively.",
  },
  {
    id: "7",
    question: "What is a namespace in TypeScript?",
    answer:
      "A namespace in TypeScript is a way to group related types, interfaces, functions, and classes under a single global name, avoiding naming collisions and improving code organization. Namespaces are defined using the namespace keyword.",
  },
  {
    id: "8",
    question:
      "What is the difference between an abstract class and an interface in TypeScript?",
    answer:
      "An abstract class is a special type of class that cannot be instantiated and can only be subclassed, providing a base implementation for its subclasses. An interface is a contract for the shape of an object and cannot have any implementation. However, a class can implement an interface to satisfy its contract.",
  },
  {
    id: "9",
    question:
      "What are some benefits of using TypeScript over JavaScript in large-scale projects?",
    answer:
      "TypeScript can catch common errors at compile-time, provide better tooling support, enable better code organization and reuse, improve code maintainability, reliability, and scalability, and help enforce consistent coding standards across teams and projects. It can also facilitate code analysis and refactoring, and provide a more robust development experience.",
  },
  {
    id: "10",
    question:
      "What is the difference between `any` and `unknown` in TypeScript?",
    answer:
      "`any` is a type that allows any value to be assigned to it, while `unknown` is a type that allows any value to be assigned to it but requires a type assertion or a type guard before it can be used safely.",
  },
  {
    id: "11",
    question: "What are generics in TypeScript?",
    answer:
      "Generics are a way of writing reusable code that works with different types. They allow developers to create functions, classes, and interfaces that can accept any type, and provide better type safety and code reuse.",
  },
  {
    id: "12",
    question: "What are type guards in TypeScript?",
    answer:
      "Type guards are a way of narrowing down the type of a variable or parameter based on a condition. They allow developers to write more precise code that can catch type errors at compile time.",
  },
  {
    id: "13",
    question: "What is the `keyof` operator in TypeScript?",
    answer:
      "The `keyof` operator is a TypeScript feature that allows developers to extract the keys of an object type as a union type. It is often used in combination with generics to create more flexible and reusable code.",
  },
  {
    id: "14",
    question:
      "What is the difference between an interface and a type alias in TypeScript?",
    answer:
      "An interface is a way of defining the shape of an object or class, while a type alias is a way of defining a custom type that can be used to describe any value. Interfaces can be extended and implemented, while type aliases can be used in more complex type expressions.",
  },
  {
    id: "15",
    question: "What is the `readonly` keyword in TypeScript?",
    answer:
      "The `readonly` keyword is a way of marking a property as read-only, meaning it cannot be modified after it has been set. It can be used with properties, index signatures, and array types.",
  },
  {
    id: "16",
    question:
      "What is the difference between an abstract class and an interface in TypeScript?",
    answer:
      "An abstract class is a way of defining a base class that cannot be instantiated directly, while an interface is a way of defining a contract that classes can implement. Abstract classes can contain implementation details and state, while interfaces cannot.",
  },
  {
    id: "17",
    question: "What are decorators in TypeScript?",
    answer:
      "Decorators are a way of adding metadata to classes, methods, properties, and parameters in TypeScript. They allow developers to write cleaner and more modular code by separating cross-cutting concerns from the main logic.",
  },
  {
    id: "18",
    question: "What is the `never` type in TypeScript?",
    answer:
      "The `never` type is a special type in TypeScript that represents a value that will never occur. It is often used to indicate a function that always throws an error or a variable that cannot be assigned any value.",
  },
  {
    id: "19",
    question: "What is the `this` keyword in TypeScript?",
    answer:
      "The `this` keyword in TypeScript refers to the current object or instance that a method is being called on. It is often used in object-oriented programming to access properties and methods of an object.",
  },
  {
    id: "20",
    question: "What is a tuple in TypeScript?",
    answer:
      "A tuple in TypeScript is an array with a fixed number of elements and element types. Tuples can be used to represent a collection of values with different types in a specific order.",
  },
  {
    id: "21",
    question: "What are type assertions in TypeScript?",
    answer:
      "Type assertions are a way of telling the TypeScript compiler that a value should be treated as a specific type, even if its type cannot be inferred or validated. Type assertions can be done using the `as` keyword or the `angle-bracket` syntax.",
  },
  {
    id: "22",
    question:
      "What is the difference between `interface` and `type` in TypeScript?",
    answer:
      "Both `interface` and `type` can be used to define custom types in TypeScript, but `interface` is used to define object shapes and contracts, while `type` is used to define more complex types, such as unions, intersections, and aliases.",
  },
  {
    id: "23",
    question: "What are conditional types in TypeScript?",
    answer:
      "Conditional types are a way of defining a type based on a condition. They allow developers to create more flexible and dynamic types that can change based on the values and types of other types.",
  },
  {
    id: "24",
    question: "What are some benefits of using TypeScript with React?",
    answer:
      "Using TypeScript with React can provide better type safety, more readable and maintainable code, improved code organization and reuse, and better tooling support for refactoring and debugging. It can also help catch common errors at compile-time and enforce coding standards across teams and projects.",
  },
  {
    id: "25",
    question: "What is the `Partial` type in TypeScript?",
    answer:
      "The `Partial` type is a built-in utility type in TypeScript that makes all properties of a type optional. It can be used to create more flexible and reusable types that can handle missing or optional properties.",
  },
  {
    id: "26",
    question: "What is the `Pick` type in TypeScript?",
    answer:
      "The `Pick` type is a built-in utility type in TypeScript that allows developers to select a subset of properties from a type and create a new type with those properties. It can be used to create more focused and precise types that match specific use cases.",
  },
  {
    id: "27",
    question: "What is the `Omit` type in TypeScript?",
    answer:
      "The `Omit` type is a built-in utility type in TypeScript that allows developers to create a new type by omitting one or more properties from an existing type. It can be used to create more specialized and focused types that exclude unnecessary properties.",
  },
  {
    id: "28",
    question: "What is the `Record` type in TypeScript?",
    answer:
      "The `Record` type is a built-in utility type in TypeScript that allows developers to create a new type with specified keys and values. It can be used to create more structured and consistent types that enforce specific key-value pairs.",
  },
  {
    id: "29",
    question: "What is the `Exclude` type in TypeScript?",
    answer:
      "The `Exclude` type is a built-in utility type in TypeScript that allows developers to create a new type by excluding one or more types from another type. It can be used to create more specific and focused types that exclude unwanted values.",
  },
];
export default typescriptFlashcards;
