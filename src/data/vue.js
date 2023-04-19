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
    ];
    export default vueFlashcards;