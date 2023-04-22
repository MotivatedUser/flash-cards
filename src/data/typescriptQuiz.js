const typescriptQuiz = [
  {
    id: "1",
    question:
      "What is TypeScript and why would you use it for front-end development?",
    options: [
      "TypeScript is a superset of JavaScript that adds optional static typing, interfaces, and other features to improve code maintainability, reliability, and scalability. It can catch common errors at compile-time, provide better tooling support, and enable better code organization and reuse.",
      "TypeScript is a programming language specifically designed for front-end development, with features tailored to web development tasks such as DOM manipulation, event handling, and Ajax requests.",
      "TypeScript is a JavaScript library for building user interfaces, similar to popular front-end libraries such as React and Angular.",
    ],
    correctOption: 0,
  },
  {
    id: "2",
    question:
      "What are some benefits of using TypeScript over JavaScript in large-scale projects?",
    options: [
      "TypeScript can catch common errors at compile-time, enable better code organization and reuse, and improve code maintainability and reliability. It can also help enforce consistent coding standards across teams and projects.",
      "TypeScript is faster and more lightweight than JavaScript, making it ideal for performance-critical applications.",
      "TypeScript is more compatible with older web browsers than JavaScript, ensuring maximum accessibility for users.",
    ],
    correctOption: 0,
  },
  {
    id: "3",
    question: "What is a module in TypeScript?",
    options: [
      "A self-contained unit of code that encapsulates related functionality and provides a way to organize and reuse code across different files and projects.",
      "A layout model for styling web page content, similar to CSS.",
      "A method for controlling the display of elements on a web page, such as through CSS or JavaScript.",
    ],
    correctOption: 0,
  },
  {
    id: "4",
    question: "What is the keyof operator in TypeScript?",
    options: [
      "An operator that allows developers to extract the keys of an object type as a union type, making it easier to work with complex types.",
      "An operator that allows developers to create more flexible and dynamic types based on conditions, using conditional types.",
      "An operator that allows developers to select a subset of properties from a type and create a new type with those properties, using the Pick utility type.",
    ],
    correctOption: 0,
  },
  {
    id: "5",
    question:
      "What is the difference between an interface and a type alias in TypeScript?",
    options: [
      "An interface is a way of defining the shape of an object or class, while a type alias is a way of defining a custom type that can be used to describe any value. Interfaces can be extended and implemented, while type aliases can be used in more complex type expressions.",
      "An interface and a type alias are two different names for the same concept in TypeScript.",
      "An interface is a way of defining a layout model for styling web page content, while a type alias is a method for organizing stylesheets in a modular way.",
    ],
    correctOption: 0,
  },
  {
    id: "6",
    question: "What is a module in TypeScript?",
    options: [
      "A way to declare variables.",
      "A way to define types.",
      "A self-contained unit of code that encapsulates related functionality and provides a way to organize and reuse code across different files and projects.",
    ],
    correctOption: 2,
  },
  {
    id: "7",
    question: "What is a namespace in TypeScript?",
    options: [
      "A way to group related types, interfaces, functions, and classes under a single global name, avoiding naming collisions and improving code organization.",
      "A way to define a custom type that can be used to describe any value.",
      "A way to declare variables.",
    ],
    correctOption: 0,
  },
  {
    id: "8",
    question:
      "What is the difference between an abstract class and an interface in TypeScript?",
    options: [
      "An abstract class is a way to define a contract that classes can implement, while an interface is a special type of class that cannot be instantiated directly.",
      "An abstract class is a way to define a base class that cannot be instantiated directly, while an interface is a way of defining a contract that classes can implement.",
      "An abstract class is a way of defining a contract that classes can implement, while an interface is a way to define a base class that cannot be instantiated directly.",
    ],
    correctOption: 1,
  },
  {
    id: "9",
    question:
      "What are some benefits of using TypeScript over JavaScript in large-scale projects?",
    options: [
      "TypeScript provides better support for animations.",
      "TypeScript can catch common errors at compile-time, provide better tooling support, enable better code organization and reuse, improve code maintainability, reliability, and scalability, and help enforce consistent coding standards across teams and projects.",
      "TypeScript is easier to learn than JavaScript.",
    ],
    correctOption: 1,
  },
  {
    id: "10",
    question: "What is the difference between any and unknown in TypeScript?",
    options: [
      "any is a type that allows any value to be assigned to it, while unknown is a type that allows any value to be assigned to it but requires a type assertion or a type guard before it can be used safely.",
      "any is a type that only allows values of a specific type to be assigned to it, while unknown is a type that allows any value to be assigned to it.",
      "any is a type that only allows null or undefined to be assigned to it, while unknown is a type that allows any value to be assigned to it.",
    ],
    correctOption: 0,
  },
  {
    id: "11",
    question: "What are generics in TypeScript?",
    options: [
      "Generics are a way of writing reusable code that works with different types. They allow developers to create functions, classes, and interfaces that can accept any type, and provide better type safety and code reuse.",
      "Generics are a way of defining the shape of an object, specifying its properties and types. They can be used to enforce consistency across related objects, enable duck typing, and make code more readable and maintainable.",
      "Generics are a way to group related types, interfaces, functions, and classes under a single global name, avoiding naming collisions and improving code organization.",
    ],
    correctOption: 0,
  },
  {
    id: "12",
    question: "What are type guards in TypeScript?",
    options: [
      "Statements that determine the type of a value at compile-time.",
      "Statements that determine the type of a value at runtime and enable type-specific behavior.",
      "Statements that determine the type of a value at runtime and disable type-specific behavior.",
    ],
    correctOption: 1,
  },
  {
    id: "13",
    question: "What is the keyof operator in TypeScript?",
    options: [
      "A feature that allows developers to extract the values of an object type as a union type.",
      "A feature that allows developers to extract the keys of an object type as a union type.",
      "A feature that allows developers to extract the values of an object type as an intersection type.",
    ],
    correctOption: 1,
  },
  {
    id: "14",
    question:
      "What is the difference between an interface and a type alias in TypeScript?",
    options: [
      "An interface is a way of defining the shape of an object or class, while a type alias is a way of defining a custom type that can be used to describe any value.",
      "A type alias is a way of defining the shape of an object or class, while an interface is a way of defining a custom type that can be used to describe any value.",
      "There is no difference between an interface and a type alias in TypeScript.",
    ],
    correctOption: 0,
  },
  {
    id: "15",
    question: "What is the readonly keyword in TypeScript?",
    options: [
      "A way of marking a property as read-only, meaning it can only be modified after it has been set.",
      "A way of marking a property as write-only, meaning it can only be read after it has been set.",
      "A way of marking a property as read-write, meaning it can be modified and read at any time.",
    ],
    correctOption: 0,
  },
  {
    id: "16",
    question:
      "What is the difference between an abstract class and an interface in TypeScript?",
    options: [
      "An abstract class is a way of defining a contract that classes can implement, while an interface is a way of defining a base class that cannot be instantiated directly.",
      "An abstract class is a way of defining a base class that cannot be instantiated directly, while an interface is a way of defining a contract that classes can implement.",
      "There is no difference between an abstract class and an interface in TypeScript.",
    ],
    correctOption: 1,
  },
  {
    id: "17",
    question: "What are decorators in TypeScript?",
    options: [
      "Statements that modify the behavior of functions at runtime.",
      "Statements that add metadata to classes, methods, properties, and parameters in TypeScript.",
      "Statements that allow developers to define custom syntax for the language.",
    ],
    correctOption: 1,
  },
  {
    id: "18",
    question: "What is the never type in TypeScript?",
    options: [
      "A special type that represents a value that will always occur.",
      "A special type that represents a value that will never occur.",
      "A special type that represents a value that can occur but should never be used.",
    ],
    correctOption: 1,
  },
  {
    id: "19",
    question: "What is the this keyword in TypeScript?",
    options: [
      "The keyword used to declare a new variable in TypeScript.",
      "The keyword used to refer to the current object or instance that a method is being called on.",
      "The keyword used to indicate the type of a variable or parameter.",
    ],
    correctOption: 1,
  },
  {
    id: "20",
    question: "What is a tuple in TypeScript?",
    options: [
      "A way of defining a custom type that can be used to describe any value.",
      "An array with a variable number of elements and element types.",
      "An array with a fixed number of elements and element types.",
    ],
    correctOption: 2,
  },
  {
    id: "21",
    question: "What are type assertions in TypeScript?",
    options: [
      "Statements that declare a variable and its type.",
      "Statements that tell the TypeScript compiler that a value should be treated as a specific type.",
      "Statements that check if a value is of a certain type at runtime.",
    ],
    correctOption: 1,
  },
  {
    id: "22",
    question:
      "What is the difference between interface and type in TypeScript?",
    options: [
      "interface is used to define object shapes and contracts, while type is used to define more complex types, such as unions, intersections, and aliases.",
      "type is used to define object shapes and contracts, while interface is used to define more complex types, such as unions, intersections, and aliases.",
      "interface and type are interchangeable and can be used to define any type in TypeScript.",
    ],
    correctOption: 1,
  },
  {
    id: "23",
    question: "What are conditional types in TypeScript?",
    options: [
      "A way of defining a type based on a condition.",
      "A way of defining a type that can change based on the values and types of other types.",
      "A way of defining a type that is always the same, regardless of its values and types.",
    ],
    correctOption: 1,
  },
  {
    id: "24",
    question: "What are some benefits of using TypeScript with React?",
    options: [
      "Improved page loading times and performance.",
      "Better type safety, more readable and maintainable code, improved code organization and reuse, and better tooling support for refactoring and debugging.",
      "More consistent and standardized UI across different browsers and devices.",
    ],
    correctOption: 1,
  },
];
export default typescriptQuiz;
