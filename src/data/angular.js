const angularFlashcards = [
  {
    id: "1",
    question: "What is Angular and how does it differ from AngularJS?",
    answer:
      "Angular is a JavaScript framework for building web and mobile applications using TypeScript. It is a complete rewrite of AngularJS and introduces several new concepts, including a component-based architecture, reactive programming with RxJS, and a more modular approach to building applications. Unlike AngularJS, Angular is designed to work with modern web standards and supports the latest versions of TypeScript and JavaScript.",
  },
  {
    id: "2",
    question: "What is a component in Angular?",
    answer:
      "A component is a fundamental building block of an Angular application. It consists of a TypeScript class that defines the component's behavior and a template that defines its presentation. Components can be used to encapsulate functionality and create reusable UI elements that can be composed to build more complex applications. Each component typically has its own view, controller, and set of styles.",
  },
  {
    id: "3",
    question: "What is dependency injection in Angular?",
    answer:
      "Dependency injection is a design pattern in which a class or object depends on other objects or services to perform its functions. In Angular, dependency injection is used to provide a way to pass dependencies into a component or service. This allows for better decoupling of code and makes it easier to test and maintain an application. Angular's DI system is based on TypeScript interfaces and uses a hierarchical injection tree to manage dependencies.",
  },
  {
    id: "4",
    question:
      "What is the difference between NgModule and Component in Angular?",
    answer:
      "NgModule is a decorator that is used to define a module in an Angular application. It can contain multiple components, services, directives, and pipes, and is used to organize and configure an application. A Component, on the other hand, is a decorator that is used to define a single UI element in an Angular application. It consists of a TypeScript class that defines the component's behavior and a template that defines its presentation. Components are typically used within a module to build a more complex user interface.",
  },
  {
    id: "5",
    question: "What is a directive in Angular?",
    answer:
      "A directive is a component-like element in Angular that adds behavior to an existing DOM element. It can be used to manipulate the structure, styling, or behavior of an element or its children. Directives can be classified into three categories: structural directives, attribute directives, and component directives. Structural directives change the structure of the DOM, attribute directives change the appearance or behavior of an element, and component directives create new components that can be used as custom elements in the DOM.",
  },
  {
    id: "6",
    question: "What is a service in Angular?",
    answer:
      "A service is a class in Angular that provides a common functionality or data across different parts of an application. Services can be used to handle data access, business logic, communication with external APIs, and more. They are typically injected into components or other services using dependency injection, and can be used to share data between components or to encapsulate complex functionality in a separate module.",
  },
  {
    id: "7",
    question: "What is a route in Angular?",
    answer:
      "A route in Angular is a URL pattern that maps to a component or a set of components. It is used to define the navigation structure of an application and provide a way for users to navigate between different views. Routes are defined in the RouterModule and can contain parameters, guards, and other configuration options. They can be used to implement lazy loading, nested routes, and other advanced navigation features.",
  },
  {
    id: "8",
    question: "What is change detection in Angular?",
    answer:
      "Change detection is a mechanism in Angular that updates the view of a component when its data changes. It detects changes to properties, events, or async operations and updates the view accordingly. Angular uses a zone to run change detection, which is a way to track asynchronous operations and trigger change detection when they complete. Change detection can be customized using the OnPush change detection strategy, which improves performance by reducing the number of times change detection is triggered.",
  },
  {
    id: "9",
    question: "What is Angular Universal and what problem does it solve?",
    answer:
      "Angular Universal is a framework for server-side rendering of Angular applications. It allows an application to be rendered on the server and sent to the client as a complete HTML page, which can improve performance, SEO, and accessibility. Angular Universal solves the problem of slow initial page loads and poor SEO for single-page applications, which rely on JavaScript to generate content on the client-side. By rendering the page on the server, Angular Universal ensures that the content is accessible to all users and can be indexed by search engines.",
  },
  {
    id: "10",
    question: "What is NgRx and why is it useful?",
    answer:
      "NgRx is a library for managing state in Angular applications using Redux architecture. It provides a set of tools for creating a centralized store of application data, which can be accessed and modified by components using actions and reducers. NgRx is useful for complex applications that have a lot of shared data and state transitions, as it provides a way to manage these interactions in a predictable and scalable way. It can also improve performance by reducing the number of times change detection is triggered and simplifying the data flow between components.",
  },
  {
    id: "11",
    question: "What is the Angular CLI and how does it work?",
    answer:
      "The Angular CLI (Command Line Interface) is a tool for creating, building, and managing Angular applications. It provides a set of commands for generating components, services, modules, and other artifacts, as well as for building and testing an application. The CLI works by generating a set of configuration files and scripts that define the structure and behavior of an application. It uses webpack and other tools to bundle and optimize an application for production deployment.",
  },
  {
    id: "12",
    question: "What is AOT compilation in Angular?",
    answer:
      "AOT (Ahead of Time) compilation is a mode of compiling an Angular application that generates optimized JavaScript code at build time. It eliminates the need for a just-in-time (JIT) compiler in the browser, which can improve performance and reduce the size of the application. AOT compilation can also catch errors and improve the security of an application by detecting issues at build time instead of runtime. AOT compilation is enabled by default in Angular and can be further optimized using tools like Tree shaking and Lazy loading.",
  },
  {
    id: "13",
    question: "What is lazy loading in Angular?",
    answer:
      "Lazy loading is a technique in Angular that allows modules or components to be loaded on-demand instead of upfront. It can improve the performance of an application by reducing the initial load time and loading only the necessary components when needed. Lazy loading is typically used for large or complex applications that have a lot of different views or components, or for applications that are deployed in environments with limited bandwidth or resources. Lazy loading can be implemented using the loadChildren method in the router configuration.",
  },
  {
    id: "14",
    question: "What is the difference between ngIf and ngSwitch in Angular?",
    answer:
      "ngIf is a directive in Angular that conditionally adds or removes an element from the DOM based on a boolean expression. It is useful for showing or hiding elements based on a condition. ngSwitch, on the other hand, is a directive that conditionally adds or removes elements based on a switch statement. It is useful for displaying different content based on a set of conditions. ngSwitch can be more efficient than ngIf for complex conditions or multiple conditions, as it evaluates the condition only once and then displays the appropriate content based on the value of the switch statement.",
  },
  {
    id: "15",
    question: "What is a service in Angular?",
    answer:
      "A service in Angular is a class that provides a specific functionality or feature to components in an application. Services are typically used to share data or functionality across multiple components, and can be injected into components using dependency injection. Services can be used to make HTTP requests, handle user authentication, perform data validation, or provide access to third-party libraries or APIs. Services can also be used to manage state in an application using observables or NgRx.",
  },
  {
    id: "16",
    question: "What is dependency injection in Angular?",
    answer:
      "Dependency injection is a design pattern in Angular that allows components and services to be loosely coupled by providing dependencies through the constructor. Instead of creating or managing dependencies within a component or service, Angular injects the dependencies at runtime using a hierarchical injector. This allows for greater flexibility and maintainability of an application, as components and services can be easily tested and modified without affecting other parts of the application. Dependency injection is also useful for sharing common functionality across an application, such as logging or error handling.",
  },
  {
    id: "17",
    question:
      "What is the difference between template-driven forms and reactive forms in Angular?",
    answer:
      "Template-driven forms and reactive forms are two approaches to building forms in Angular. Template-driven forms use two-way data binding to synchronize the form model and view, and rely on directives like ngModel to handle form input validation and submission. Template-driven forms are simpler to implement and are useful for smaller or simpler forms. Reactive forms, on the other hand, use a reactive programming style to build forms, and rely on observable streams to handle form input validation and submission. Reactive forms provide greater flexibility and control over form validation and data manipulation, and are useful for complex or dynamic forms.",
  },
  {
    id: "18",
    question:
      "What is the difference between ViewChild and ContentChild in Angular?",
    answer:
      "ViewChild and ContentChild are two decorators in Angular that are used to access child components or elements within a parent component. ViewChild is used to access a child component or element that is declared in the parent component's template using the #reference syntax. ContentChild, on the other hand, is used to access a child component or element that is projected into the parent component using ng-content. ViewChild is useful for accessing child components or elements directly, while ContentChild is useful for accessing projected content that may be dynamic or conditional.",
  },
  {
    id: "19",
    question: "What is NgZone in Angular?",
    answer:
      "NgZone is a service in Angular that provides a way to execute code outside or inside of the Angular zone, which is a mechanism for tracking asynchronous tasks and triggering change detection. NgZone is useful for managing performance and avoiding change detection issues caused by long-running or synchronous tasks. Code that is executed outside of the Angular zone, using NgZone.runOutsideAngular(), is not tracked by Angular's change detection, which can improve performance. Code that is executed inside the Angular zone, using NgZone.run(), is tracked by Angular's change detection, which can trigger updates to the view.",
  },
  {
    id: "20",
    question: "What is a resolver in Angular?",
    answer:
      "A resolver in Angular is a service that is used to resolve data before a route is activated. Resolvers are useful for fetching data from a server or performing other asynchronous tasks that are required for a route to be displayed. Resolvers can be used to preload data for a component, or to prevent a component from being displayed until all of its required data has been fetched. Resolvers are typically implemented as a separate service, and are added to the route definition as a property of the route.",
  },
  {
    id: "21",
    question: "What is the purpose of the ActivatedRoute service in Angular?",
    answer:
      "The ActivatedRoute service in Angular is used to retrieve information about the current route, including any parameters or query strings. ActivatedRoute is typically used in a component that is associated with a particular route, and is injected into the component using dependency injection. ActivatedRoute provides access to the current route's parameters, query strings, data, and any child routes, which can be used to update the component's view or state.",
  },
  {
    id: "22",
    question: "What is the purpose of the router-outlet directive in Angular?",
    answer:
      "The router-outlet directive in Angular is used to display the content of a routed component. When a route is activated, the component associated with the route is loaded into the router-outlet directive, replacing any previously displayed content. router-outlet is typically used in the parent component template, and can be used to display multiple routed components in the same template.",
  },
  {
    id: "23",
    question: "What is an Angular pipe?",
    answer:
      "An Angular pipe is a feature that allows you to transform data in your template. Pipes are used to format or filter data, and can be applied to any binding expression or template statement. Angular provides several built-in pipes, such as the DatePipe, which formats a date according to a specified format, or the UpperCasePipe, which converts text to uppercase. You can also create custom pipes to transform data in a specific way, such as sorting or filtering an array.",
  },
  {
    id: "24",
    question:
      "What is the difference between ngOnInit and constructor in Angular?",
    answer:
      "The constructor in Angular is a class method that is called when a component is created. The constructor is typically used to inject dependencies, such as services or other components, that the component requires. ngOnInit, on the other hand, is a lifecycle hook that is called after the component has been initialized and all of its inputs have been set. ngOnInit is typically used to perform initialization tasks, such as fetching data from a server or setting default property values. ngOnInit is only called once per component instance, while the constructor is called every time a component is created.",
  },
];
export default angularFlashcards;
