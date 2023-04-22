const vueQuiz = [
    {
        id: '1',
        question: 'What is Vue.js and why would you use it?',
        options: [
          'A library for managing application state',
          'A progressive JavaScript framework for building user interfaces',
          'A tool for optimizing JavaScript code'
        ],
        correctOption: 1,
      },
      {
        id: '2',
        question: 'Explain the Vue.js component lifecycle and its hooks.',
        options: [
          'beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, beforeDestroy, and destroyed',
          'init, update, render, and destroy',
          'onCreate, onUpdate, onRender, and onDestroy'
        ],
        correctOption: 0,
      },
      {
        id: '3',
        question: 'What are props in Vue.js and how are they used?',
        options: [
          'Custom attributes for passing data from parent to child components',
          'A way to store local state within components',
          'A pattern for sharing code between components'
        ],
        correctOption: 0,
      },
      {
        id: '4',
        question: 'What is the difference between computed properties and watchers in Vue.js?',
        options: [
          "A method for handling user input",
          "Computed properties are reactive, cached, and used for complex data manipulation, while watchers are for side effects, asynchronous operations, or when the result doesn't need to be cached.",
          "A pattern for sharing data between components"
        ],
        correctOption: 1,
      },
      {
        id: '5',
        question: 'What are Vue.js directives and give some examples.',
        options: [
          'v-model, v-if, v-else, v-show, v-for, v-on, and v-bind',
          'Mixin, custom directive, and scoped slot',
          'computed, watch, and provide/inject'
        ],
        correctOption: 0,
      },
      {
        id: '6',
        question: 'Explain the difference between v-if and v-show.',
        options: [
          'v-if handles user input, while v-show handles form submission',
          'v-if conditionally renders an element and removes it from the DOM if false, while v-show toggles the CSS display property, keeping the element in the DOM regardless of the condition',
          'v-if is a directive for iterating over arrays, while v-show is a directive for binding attributes to elements'
        ],
        correctOption: 1,
      },
      {
        id: '7',
        question: 'How do you handle user input and form submission in Vue.js?',
        options: [
          'Use v-model for two-way data binding, v-on or @event for event handling, and methods for processing form data and handling submission logic, like making API calls or validating input',
          'Use v-if for conditionally rendering elements and v-show for toggling CSS display property',
          'Use computed properties for complex data manipulation and watchers for side effects or asynchronous operations'
        ],
        correctOption: 0,
      },
      {
        id: '8',
        question: 'What is Vuex and why is it used in Vue.js applications?',
        options: [
          'A routing library for Vue.js',
          'A CSS preprocessor for Vue.js',
          'A state management library for Vue.js applications that centralizes and manages state, enforces a predictable data flow, and makes it easier to track and debug state changes'
        ],
        correctOption: 2,
      },
      {
        id: '9',
        question: 'Explain the difference between Vue.js mixins and custom directives.',
        options: [
          'Mixins are reusable pieces of Vue component logic, while custom directives are reusable DOM manipulations. Mixins are merged into components, whereas custom directives are applied as attributes',
          'Mixins are custom attributes for passing data between components, while custom directives are a way to store local state within components',
          'Mixins are a way to handle user input and form submission, while custom directives are for conditionally rendering elements and managing CSS display property'
        ],
        correctOption: 0,
      },
      {
        id: '10',
        question: 'What is Vue Router and how does it work?',
        options: [
          'The official routing library for Vue.js that enables navigation, manages routes, and maps them to components, handling transitions, and maintaining a history of navigation events',
          'A state management library for Vue.js applications',
          'A library for handling user input and form submission in Vue.js'
        ],
        correctOption: 0,
      },
      {
        id: '11',
        question: 'What are Vue.js slots and how are they used?',
        options: [
          'Slots are placeholders in a Vue component that allow content to be injected from parent components. They enable the creation of reusable and flexible components with customizable content',
          'A pattern for sharing code between components',
          'A way to store local state within components'
        ],
        correctOption: 0,
      },
      {
        id: '12',
        question: 'What is the difference between a Vue.js plugin and a mixin?',
        options: [
          'A plugin is a reusable piece of code that can extend or add global functionality to Vue, while a mixin is a reusable piece of Vue component logic that can be merged into individual components',
          'A plugin is a way to handle user input and form submission, while a mixin is a pattern for sharing data between components',
          'A plugin is a directive for iterating over arrays, while a mixin is a directive for binding attributes to elements'
        ],
        correctOption: 0,
      },
      {
        id: '13',
        question: 'How do you create transitions and animations in Vue.js?',
        options: [
          'Vue.js provides the transition and transition-group components to create CSS transitions and animations for elements or components when they are inserted, updated, or removed from the DOM',
          'By using the v-animate directive in templates',
          'By applying the Vue.js animation library to the components'
        ],
        correctOption: 0,
      },
      {
        id: '14',
        question: 'What is server-side rendering (SSR) in Vue.js and why is it used?',
        options: [
          'A method for optimizing JavaScript code',
          'SSR is the process of rendering Vue.js components on the server and sending the rendered HTML to the client. It improves performance, SEO, and the initial loading experience for users',
          'A pattern for sharing code between components'
        ],
        correctOption: 1,
      },
      {
        id: '15',
        question: 'How do you use Vue.js filters?',
        options: [
          'Filters are used to apply common text formatting within Vue.js templates. They can be applied using the pipe symbol (|) in expressions or in v-bind and v-model directives',
          'By using the v-filter directive in templates',
          'By creating a filter function in the methods section of a component'
        ],
        correctOption: 0,
      },
      {
        id: '16',
        question: 'How do you validate props in Vue.js components?',
        options: [
          'Props validation is done using the "props" option in a component definition, where you can specify the type, required status, default value, and custom validation functions for each prop',
          'By using the v-validate directive in templates',
          'By creating a validation function in the methods section of a component'
        ],
        correctOption: 0,
      },
      {
        id: '17',
        question: 'What is scoped CSS in Vue.js components?',
        options: [
          'A feature that limits the styles in a Vue.js single-file component to only affect that component, preventing global style leaks and ensuring style encapsulation',
          'A method for optimizing CSS code',
          'A pattern for sharing CSS code between components'
        ],
        correctOption: 0,
      },
      {
        id: '18',
        question: 'What is the provide/inject pattern in Vue.js?',
        options: [
          'The provide/inject pattern is a way to pass data from an ancestor component to its descendants without using props. The ancestor component provides the data, and the descendant components can inject it',
          'A pattern for handling user input and form submission',
          'A method for optimizing data flow between components'
        ],
        correctOption: 0,
      },
      {
        id: '19',
        question: 'What are custom events in Vue.js and how are they used?',
        options: [
          'Custom events are user-defined events that enable communication between components. They can be emitted using the $emit method and listened for using v-on or the @event syntax in parent components',
          'A pattern for handling user input and form submission',
          'A method for optimizing data flow between components'
        ],
        correctOption: 0,
      },
      {
        id: '20',
        question: 'What are dynamic components in Vue.js?',
        options: [
          'Dynamic components are a way to switch between different components at runtime using the <component> element and the "is" attribute, which is bound to a data property or computed property that determines which component to render',
          'A pattern for sharing code between components',
          'A method for optimizing the DOM updates in a Vue.js application'
        ],
        correctOption: 0,
      },
      {
        id: '21',
        question: 'What is the virtual DOM in Vue.js?',
        options: [
          'The virtual DOM is a lightweight, in-memory representation of the actual DOM. Vue.js uses it to track changes in components and efficiently update the real DOM to minimize browser layout and rendering work, improving performance',
          'A pattern for sharing code between components',
          'A method for optimizing data flow between components'
        ],
        correctOption: 0,
      },
      {
        id: '22',
        question: 'What are render functions in Vue.js?',
        options: [
          'Render functions are an alternative to using templates for defining a Vue.js component\'s structure. They are JavaScript functions that return virtual DOM nodes, providing more control and flexibility over the component\'s rendering process',
          'A pattern for handling user input and form submission',
          'A method for optimizing the DOM updates in a Vue.js application'
        ],
        correctOption: 0,
      },
      {
        id: '23',
        question: 'What is Nuxt.js?',
        options: [
          'A higher-level framework built on top of Vue.js that simplifies the development of universal, server-rendered, and single-page Vue.js applications by providing a set of conventions and best practices',
          'A library for handling user input and form submission in Vue.js',
          'A method for optimizing JavaScript code in a Vue.js application'
        ],
        correctOption: 0,
      },
      {
        id: '24',
        question: 'What is Vue.js lifecycle and what are its hooks?',
        options: [
          'The lifecycle of a Vue.js component is a series of events and stages that occur from creation to destruction. Lifecycle hooks are special methods that get called at different stages, allowing you to execute custom logic, such as fetching data, setting up event listeners, or cleaning up resources',
          'A pattern for handling user input and form submission',
          'A method for optimizing the DOM updates in a Vue.js application'
        ],
        correctOption: 0,
      }
]
export default vueQuiz