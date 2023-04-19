const accessibilityFlashcards = [
    {
      id: '1',
      question: 'What is the purpose of alternative text for images?',
      answer:
        'Alternative text (alt text) provides a textual description of an image for users who cannot see the image, such as screen reader users or when the image fails to load. Alt text should convey the meaning or purpose of the image in the context of the content.',
    },
    {
      id: '2',
      question: 'What is a WAI-ARIA landmark?',
      answer:
        'A WAI-ARIA landmark is an HTML element with a role attribute, such as role="banner" or role="navigation". Landmarks help screen reader users understand the structure of a webpage by providing a way to navigate between different sections of content.',
    },
    {
      id: '3',
      question: 'What are some ways to make a website more keyboard accessible?',
      answer:
        '1. Ensure all interactive elements can be accessed with the keyboard (e.g., Tab, Shift + Tab).\n2. Provide visible focus indicators for focused elements.\n3. Implement keyboard shortcuts for common actions.\n4. Use semantic HTML elements to convey the structure and purpose of the content.',
    },
    {
        id: '4',
        question: 'What is the purpose of tabindex attribute?',
        answer:
          'The tabindex attribute allows you to control the tab order of elements on a page. A positive value places the element in the tab order at the specified position, while a value of -1 removes it from the natural tab order, making it only focusable programmatically.',
      },
      {
        id: '5',
        question: 'What is the difference between ARIA roles, states, and properties?',
        answer:
          'ARIA roles define the type or purpose of an element (e.g., "button" or "navigation"). ARIA states provide information about the current condition of an element (e.g., "aria-expanded" or "aria-checked"). ARIA properties define characteristics or relationships that are not states or roles (e.g., "aria-labelledby" or "aria-describedby").',
      },
      {
        id: '6',
        question: 'What are some common ARIA roles?',
        answer:
          'Some common ARIA roles include: "alert", "button", "checkbox", "dialog", "listbox", "menu", "menuitem", "progressbar", "radio", "slider", "tab", "tabpanel", and "tooltip". These roles help assistive technologies understand the purpose of an element and provide the appropriate user experience.',
      },
      {
        id: '7',
        question: 'What is the role of the Web Content Accessibility Guidelines (WCAG)?',
        answer:
          'The Web Content Accessibility Guidelines (WCAG) provide a set of recommendations for making web content more accessible to people with disabilities. The guidelines are organized around four principles: Perceivable, Operable, Understandable, and Robust (POUR). The WCAG helps developers create websites that are more inclusive and user-friendly for everyone.',
      },
      {
        id: '8',
        question: 'What are the three levels of WCAG conformance?',
        answer:
          'The three levels of WCAG conformance are A, AA, and AAA. Level A represents the minimum level of accessibility, while level AAA represents the highest. Level AA is the intermediate level and is often the target for most websites, as it provides a good balance between accessibility and implementation effort.',
      },
      {
        id: '9',
        question: 'What are some techniques for making text more accessible?',
        answer:
          '1. Ensure sufficient color contrast between text and background.\n2. Use relative units (e.g., em, rem) for font sizes to support user-defined text scaling.\n3. Use clear, simple language and avoid jargon or complex terms.\n4. Use headings and lists to structure content.\n5. Provide text alternatives for non-text content, such as images or multimedia.',
      },
      {
        id: '10',
        question: 'How can you ensure that your website is accessible to people with color vision deficiencies?',
        answer:
          '1. Use sufficient color contrast for text and important visual elements.\n2. Do not rely on color alone to convey information, such as form input validation.\n3. Use patterns, textures, or labels in addition to color for charts and graphs.\n4. Provide alternative ways to access color-dependent information, like a text description or tooltip.',
      },
      {
        id: '11',
        question: 'What is the purpose of a skip link?',
        answer:
          'A skip link is a navigation shortcut that allows keyboard users to bypass repetitive content, such as a website\'s header or navigation menu, and jump directly to the main content or other sections of the page. This improves the usability and efficiency of keyboard navigation for all users, especially those with disabilities.',
      },
      {
        id: '12',
        question: 'How can you make tables more accessible?',
        answer:
          '1. Use proper table markup with <table>, <thead>, <tbody>, <tfoot>, <tr>, <th>, and <td> elements.\n2. Add scope attributes to header cells to associate them with the corresponding data cells.\n3. Provide a descriptive caption using the <caption> element.\n4. Use the <summary> element for more complex tables to give an overview of the table structure.\n5. Ensure adequate color contrast and font size for text in tables.',
      },
      {
        id: '13',
        question: 'How can you make forms more accessible?',
        answer:
          '1. Use appropriate form elements (e.g., <input>, <textarea>, <select>, <label>).\n2. Associate labels with form controls using the "for" attribute (e.g., <label for="name">).\n3. Group related form controls using the <fieldset> element, and provide a descriptive <legend>.\n4. Use ARIA attributes, such as "aria-required", to provide additional information about form controls.\n5. Provide clear error messages and validation feedback.',
      },
      {
        id: '14',
        question: 'What is live region in the context of web accessibility?',
        answer:
          'A live region is an area of a web page that updates dynamically without a page reload and communicates the updates to assistive technologies, such as screen readers. Live regions are used to convey important information to users, like alerts, notifications, or updates. To create a live region, use ARIA attributes such as "aria-live", "aria-atomic", and "aria-relevant".',
      },
      {
        id: '15',
        question: 'What are some best practices for accessible multimedia content?',
        answer:
          '1. Provide transcripts for audio content and captions for video content.\n2. Provide audio descriptions for video content that contains important visual information not conveyed in the audio.\n3. Ensure that multimedia controls are keyboard accessible and clearly labeled.\n4. Avoid auto-playing multimedia content and give users control over playback.\n5. Use media players that support accessibility features.',
      },
      {
        id: '16',
        question: 'How can you test your website for accessibility?',
        answer:
          '1. Use automated testing tools, such as axe, WAVE, or Lighthouse, to identify common accessibility issues.\n2. Test keyboard navigation by navigating through your site using only the keyboard.\n3. Use a screen reader, like NVDA or VoiceOver, to test how your site is perceived by users who rely on these tools.\n4. Test your site with various browsers and devices.\n5. Conduct manual accessibility audits and consult WCAG guidelines for best practices.',
      },
      {
        id: '17',
        question: 'How can you make a React application more accessible?',
        answer:
        '1. Use semantic HTML elements within JSX.\n2. Manage focus when rendering or updating components.\n3. Add appropriate ARIA roles, states, and properties to custom components.\n4. Use React event handlers to handle keyboard interactions.\n5. Implement skip links for keyboard navigation.\n6. Ensure sufficient color contrast and font sizing.\n7. Test your React application with screen readers, keyboard navigation, and automated testing tools.',
        },
        {
        id: '18',
        question: 'What is the purpose of React Fragments?',
        answer:
        'React Fragments allow you to group a list of children elements without adding extra nodes to the DOM. This can be beneficial for accessibility and performance, as it reduces the number of unnecessary wrapper elements and helps maintain a cleaner, more semantic HTML structure.',
        },
        {
        id: '19',
        question: 'How do you handle focus management in a React application?',
        answer:
        'Focus management in React involves programmatically setting focus to elements when components are rendered or updated. You can use the useRef() hook to create a reference to a DOM element, and then use the .focus() method to set focus on that element when needed, such as after rendering a modal, changing routes, or revealing hidden content.',
        },
        {
        id: '20',
        question: 'How can you use PropTypes to improve accessibility in a React application?',
        answer:
        'PropTypes can be used to enforce accessibility best practices by validating that the required accessibility-related props are being passed to a component. For example, you can require an "alt" prop for a custom Image component, or a "label" prop for a custom Input component, to ensure that these critical accessibility attributes are always included.',
        },
        {
        id: '21',
        question: 'How can you use React context to improve accessibility?',
        answer:
        'React context can be used to share accessibility-related data and functionality across your application. For example, you can create a context to store user preferences for font size, color scheme, or other accessibility settings, and then use the useContext() hook to access and apply these preferences in your components.',
        },
        {
        id: '22',
        question: 'How do you create a custom accessible component in React?',
        answer:
        '1. Use semantic HTML elements within the component, when possible.\n2. Add appropriate ARIA roles, states, and properties to the component, if needed.\n3. Implement keyboard event handling for interactive components.\n4. Manage focus when the component is rendered or updated.\n5. Test the component with screen readers, keyboard navigation, and automated accessibility testing tools.',
        },
        {
        id: '23',
        question: 'What are some React-specific accessibility pitfalls to avoid?',
        answer:
        '1. Using non-semantic elements for interactive components.\n2. Not managing focus when rendering or updating components.\n3. Relying on CSS to hide content without considering its impact on assistive technologies.\n4. Using inline styles that may override user-defined styles or cause accessibility issues.\n5. Creating custom components without considering ARIA roles, states, and properties, or keyboard interactions.',
        },
    // ...more flashcards
  ];
  
  export default accessibilityFlashcards;
  