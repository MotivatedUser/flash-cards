const angularQuiz = [
  {
    id: "1",
    question: "What is Angular and how does it differ from AngularJS?",
    options: [
      "Angular is a JavaScript framework for building web and mobile applications using TypeScript, introducing new concepts like component-based architecture and reactive programming with RxJS.",
      "Angular is a CSS framework for building responsive web pages.",
      "Angular is a library for making AJAX requests, and AngularJS is an alternative library for the same purpose.",
    ],
    correctOption: 0,
  },

  {
    id: "2",
    question: "What is a component in Angular?",
    options: [
      "A fundamental building block of an Angular application, consisting of a TypeScript class and a template.",
      "A function used to manipulate the DOM directly.",
      "A configuration file for setting up the Angular environment.",
    ],
    correctOption: 0,
  },

  {
    id: "3",
    question: "What is dependency injection in Angular?",
    options: [
      "A design pattern that passes dependencies into a component or service, allowing for better decoupling of code.",
      "A way to import external libraries into an Angular application.",
      "A method of error handling in Angular applications.",
    ],
    correctOption: 0,
  },

  {
    id: "4",
    question:
      "What is the difference between NgModule and Component in Angular?",
    options: [
      "NgModule defines a module in an Angular application, while Component defines a single UI element.",
      "NgModule is a service for handling HTTP requests, and Component is a directive for manipulating the DOM.",
      "NgModule is a configuration file for Angular, and Component is a CSS preprocessor for styling Angular applications.",
    ],
    correctOption: 0,
  },

  {
    id: "5",
    question: "What is a directive in Angular?",
    options: [
      "A component-like element that adds behavior to an existing DOM element.",
      "A function that returns an Observable in an Angular application.",
      "A configuration object that defines the routing structure of an Angular application.",
    ],
    correctOption: 0,
  },

  {
    id: "6",
    question: "What is a service in Angular?",
    options: [
      "A class that provides common functionality or data across different parts of an application.",
      "An interface that defines the structure of a module in Angular.",
      "A type of Angular component that represents a form input element.",
    ],
    correctOption: 0,
  },

  {
    id: "7",
    question: "What is a route in Angular?",
    options: [
      "A URL pattern that maps to a component or a set of components.",
      "A function that initializes an Angular application.",
      "A method for creating custom animations in Angular.",
    ],
    correctOption: 0,
  },
  {
    id: "8",
    question: "What is change detection in Angular?",
    options: [
      "A method for creating custom animations in Angular.",
      "A mechanism that updates the view of a component when its data changes.",
      "A way to import external libraries into an Angular application.",
    ],
    correctOption: 1,
  },

  {
    id: "9",
    question: "What is Angular Universal and what problem does it solve?",
    options: [
      "Angular Universal ensures that the content is accessible to all users and can be indexed by search engines.",
      "Angular Universal is a CSS preprocessor for styling Angular applications.",
      "Angular Universal is a library for making AJAX requests.",
    ],
    correctOption: 0,
  },

  {
    id: "10",
    question: "What is NgRx and why is it useful?",
    options: [
      "A library for managing state in Angular applications using Redux architecture.",
      "A function that returns an Observable in an Angular application.",
      "A configuration object that defines the routing structure of an Angular application.",
    ],
    correctOption: 0,
  },

  {
    id: "11",
    question: "What is the Angular CLI and how does it work?",
    options: [
      "A type of Angular component that represents a form input element.",
      "A tool for creating, building, and managing Angular applications.",
      "An interface that defines the structure of a module in Angular.",
    ],
    correctOption: 1,
  },

  {
    id: "12",
    question: "What is AOT compilation in Angular?",
    options: [
      "A mode of compiling an Angular application that generates optimized JavaScript code at build time.",
      "A method for creating custom animations in Angular.",
      "A way to import external libraries into an Angular application.",
    ],
    correctOption: 0,
  },

  {
    id: "13",
    question: "What is lazy loading in Angular?",
    options: [
      "A technique that allows modules or components to be loaded on-demand instead of upfront.",
      "A method of error handling in Angular applications.",
      "A function that initializes an Angular application.",
    ],
    correctOption: 0,
  },

  {
    id: "14",
    question: "What is the difference between ngIf and ngSwitch in Angular?",
    options: [
      "A configuration file for setting up the Angular environment.",
      "A function used to manipulate the DOM directly.",
      "ngIf conditionally adds or removes an element based on a boolean expression, while ngSwitch conditionally adds or removes elements based on a switch statement.",
    ],
    correctOption: 2,
  },
  {
    id: "15",
    question: "What is a service in Angular?",
    options: [
      "A class that provides a specific functionality or feature to components in an application.",
      "A directive that conditionally adds or removes elements based on a switch statement.",
      "A method for creating custom animations in Angular.",
    ],
    correctOption: 0,
  },

  {
    id: "16",
    question: "What is dependency injection in Angular?",
    options: [
      "A way to import external libraries into an Angular application.",
      "A design pattern that allows components and services to be loosely coupled by providing dependencies through the constructor.",
      "A configuration object that defines the routing structure of an Angular application.",
    ],
    correctOption: 1,
  },

  {
    id: "17",
    question:
      "What is the difference between template-driven forms and reactive forms in Angular?",
    options: [
      "A method for creating custom animations in Angular.",
      "A configuration file for setting up the Angular environment.",
      "Template-driven forms use two-way data binding, while reactive forms use a reactive programming style to build forms.",
    ],
    correctOption: 2,
  },

  {
    id: "18",
    question:
      "What is the difference between ViewChild and ContentChild in Angular?",
    options: [
      "ViewChild accesses a child component declared in the parent's template, while ContentChild accesses a child component projected into the parent component using ng-content.",
      "ViewChild is a decorator for declaring inputs, while ContentChild is a decorator for declaring outputs.",
      "ViewChild is a directive for creating nested components, while ContentChild is a directive for creating sibling components.",
    ],
    correctOption: 0,
  },

  {
    id: "19",
    question: "What is NgZone in Angular?",
    options: [
      "A service that provides a way to execute code outside or inside of the Angular zone.",
      "A configuration object that defines the routing structure of an Angular application.",
      "A method for creating custom animations in Angular.",
    ],
    correctOption: 0,
  },

  {
    id: "20",
    question: "What is a resolver in Angular?",
    options: [
      "A service that is used to resolve data before a route is activated.",
      "A directive that conditionally adds or removes elements based on a switch statement.",
      "A method for creating custom animations in Angular.",
    ],
    correctOption: 0,
  },

  {
    id: "21",
    question: "What is the purpose of the ActivatedRoute service in Angular?",
    options: [
      "A type of Angular component that represents a form input element.",
      "Used to retrieve information about the current route, including any parameters or query strings.",
      "An interface that defines the structure of a module in Angular.",
    ],
    correctOption: 1,
  },

  {
    id: "22",
    question: "What is the purpose of the router-outlet directive in Angular?",
    options: [
      "A configuration file for setting up the Angular environment.",
      "Used to display the content of a routed component.",
      "A function used to manipulate the DOM directly.",
    ],
    correctOption: 1,
  },
  {
    id: "23",
    question: "What is an Angular pipe?",
    options: [
      "A feature that allows you to transform data in your template.",
      "A directive that conditionally adds or removes elements based on a switch statement.",
      "A service used to manage state in Angular applications using Redux architecture.",
    ],
    correctOption: 0,
  },

  {
    id: "24",
    question:
      "What is the difference between ngOnInit and constructor in Angular?",
    options: [
      "A method for creating custom animations in Angular.",
      "ngOnInit is a lifecycle hook called after the component is initialized, while the constructor is called when a component is created.",
      "A configuration object that defines the routing structure of an Angular application.",
    ],
    correctOption: 1,
  },
];

export default angularQuiz;