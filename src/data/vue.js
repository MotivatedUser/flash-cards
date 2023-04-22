const vueFlashcards = [
    {
    id: '1',
    question: 'What is Vue.js and why would you use it?',
    answer: 'Vue.js is a progressive JavaScript framework for building user interfaces. It is lightweight, flexible, and easy to integrate with other libraries or existing projects for a better development experience.'
    },
    {
    id: '2',
    question: 'Explain the Vue.js component lifecycle and its hooks.',
    answer: 'Vue components have lifecycle hooks like beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, beforeDestroy, and destroyed for running code at different stages of the component lifecycle.'
    },
    {
    id: '3',
    question: 'What are props in Vue.js and how are they used?',
    answer: 'Props are custom attributes for passing data from parent components to child components. They maintain a one-way data flow and are validated using prop types for better maintainability.'
    },
    {
    id: '4',
    question: 'What is the difference between computed properties and watchers in Vue.js?',
    answer: "Computed properties are reactive, cached, and used for complex data manipulation, while watchers are for side effects, asynchronous operations, or when the result doesn't need to be cached."
    },
    {
    id: '5',
    question: 'What are Vue.js directives and give some examples.',
    answer: 'Directives are special attributes in Vue.js templates that apply reactive behavior to the DOM. Examples include v-model, v-if, v-else, v-show, v-for, v-on, and v-bind.'
    },
    {
    id: '6',
    question: 'Explain the difference between v-if and v-show.',
    answer: 'v-if conditionally renders an element and removes it from the DOM if false, while v-show toggles the CSS display property, keeping the element in the DOM regardless of the condition.'
    },
    {
    id: '7',
    question: 'How do you handle user input and form submission in Vue.js?',
    answer: 'Use v-model for two-way data binding, v-on or @event for event handling, and methods for processing form data and handling submission logic, like making API calls or validating input.'
    },
    {
    id: '8',
    question: 'What is Vuex and why is it used in Vue.js applications?',
    answer: 'Vuex is a state management library for Vue.js applications. It centralizes and manages state, enforces a predictable data flow, and makes it easier to track and debug state changes.'
    },
    {
    id: '9',
    question: 'Explain the difference between Vue.js mixins and custom directives.',
    answer: 'Mixins are reusable pieces of Vue component logic, while custom directives are reusable DOM manipulations. Mixins are merged into components, whereas custom directives are applied as attributes.'
    },
    {
    id: '10',
    question: 'What is Vue Router and how does it work?',
    answer: 'Vue Router is the official routing library for Vue.js. It enables navigation, manages routes, and maps them to components, handling transitions, and maintaining a history of navigation events.'
    },
    {
        id: '11',
        question: 'What are Vue.js slots and how are they used?',
        answer: 'Slots are placeholders in a Vue component that allow content to be injected from parent components. They enable the creation of reusable and flexible components with customizable content.'
    },
    {
        id: '12',
        question: 'What is the difference between a Vue.js plugin and a mixin?',
        answer: 'A plugin is a reusable piece of code that can extend or add global functionality to Vue, while a mixin is a reusable piece of Vue component logic that can be merged into individual components.'
    },
    {
        id: '13',
        question: 'How do you create transitions and animations in Vue.js?',
        answer: 'Vue.js provides the transition and transition-group components to create CSS transitions and animations for elements or components when they are inserted, updated, or removed from the DOM.'
    },
    {
        id: '14',
        question: 'What is server-side rendering (SSR) in Vue.js and why is it used?',
        answer: 'SSR is the process of rendering Vue.js components on the server and sending the rendered HTML to the client. It improves performance, SEO, and the initial loading experience for users.'
    },
    {
        id: '15',
        question: 'How do you use Vue.js filters?',
        answer: 'Filters are used to apply common text formatting within Vue.js templates. They can be applied using the pipe symbol (|) in expressions or in v-bind and v-model directives.'
    },
    {
        id: '16',
        question: 'How do you validate props in Vue.js components?',
        answer: 'Props validation is done using the "props" option in a component definition, where you can specify the type, required status, default value, and custom validation functions for each prop.'
    },
    {
        id: '17',
        question: 'What is scoped CSS in Vue.js components?',
        answer: 'Scoped CSS is a feature that limits the styles in a Vue.js single-file component to only affect that component, preventing global style leaks and ensuring style encapsulation.'
    },
    {
        id: '18',
        question: 'What is the provide/inject pattern in Vue.js?',
        answer: 'The provide/inject pattern is a way to pass data from an ancestor component to its descendants without using props. The ancestor component provides the data, and the descendant components can inject it.'
    },
    {
        id: '19',
        question: 'What are custom events in Vue.js and how are they used?',
        answer: 'Custom events are user-defined events in Vue.js used for communication from child components to parent components. Child components emit events using $emit, while parent components listen for events using v-on or @event.'
    },
    {
        id: '20',
        question: 'How do you handle errors in Vue.js?',
        answer: 'Error handling in Vue.js can be done using try-catch blocks, Vue.config.errorHandler, errorCaptured lifecycle hook, or custom error handling components that use scoped slots to display errors.'
    },
    {
        id: '21',
        question: 'What is the role of Vue.js directives?',
        answer: 'Directives are used to attach special reactive behaviors to the DOM elements in Vue.js templates. They enable dynamic updates to the DOM when the underlying data changes.'
    },
    {
        id: '22',
        question: 'What are dynamic components in Vue.js?',
        answer: 'Dynamic components are used to dynamically switch between different components at runtime using the reserved <component> tag with the "is" attribute, which is bound to a data property that determines the component to render.'
    },
    {
        id: '23',
        question: 'How do you manage local state in Vue.js components?',
        answer: 'Local state is managed using the "data" function in a Vue.js component. The function returns an object containing the initial state properties, which can be accessed and updated within the component instance.'
    },
    {
        id: '24',
        question: 'How do you make API calls in a Vue.js application?',
        answer: 'API calls in Vue.js applications can be made using libraries like Axios or the native Fetch API. API calls are typically performed within component methods, lifecycle hooks, or Vuex actions, depending on the application structure and requirements.'
    }
];
    export default vueFlashcards;