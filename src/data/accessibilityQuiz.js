const accessibilityQuiz = [
    {
        id: "1",
        question: "What is the purpose of alternative text for images?",
        options: [
          "To provide a textual description for users who cannot see the image",
          "To add a caption under the image",
          "To make the image load faster"
        ],
        correctOption: 0
      },
      {
        id: "2",
        question: "What is a WAI-ARIA landmark?",
        options: [
          "An HTML element with a role attribute",
          "A geographic feature on a map",
          "A specific location in a building"
        ],
        correctOption: 0
      },
      {
        id: "3",
        question: "What are some ways to make a website more keyboard accessible?",
        options: [
          "Using only images for navigation",
          "Removing all text content",
          "Ensure all interactive elements can be accessed with the keyboard"
        ],
        correctOption: 2
      },
      {
        id: "4",
        question: "What is the purpose of the tabindex attribute?",
        options: [
          "To specify the font size of an element",
          "To control the tab order of elements on a page",
          "To set the background color of an element"
        ],
        correctOption: 1
      },
      {
        id: "5",
        question: "What is the difference between ARIA roles, states, and properties?",
        options: [
          "Roles define the type, states define the current condition, and properties define characteristics or relationships",
          "Roles define the current condition, states define characteristics or relationships, and properties define the type",
          "Roles define characteristics or relationships, states define the type, and properties define the current condition"
        ],
        correctOption: 0
      },
      {
        id: "6",
        question: "What are some common ARIA roles?",
        options: [
          "Alert, button, checkbox, and tooltip",
          "Bold, italic, underline, and strikethrough",
          "Header, footer, article, and section"
        ],
        correctOption: 0
      },
      {
        id: "7",
        question: "What is the role of the Web Content Accessibility Guidelines (WCAG)?",
        options: [
          "To provide recommendations for making web content more accessible",
          "To optimize website performance",
          "To enforce strict coding standards"
        ],
        correctOption: 0
      },
      {
        id: "8",
        question: "What are the three levels of WCAG conformance?",
        options: [
          "A, AA, AAA",
          "Basic, Intermediate, Advanced",
          "Bronze, Silver, Gold"
        ],
        correctOption: 0
      },
      {
        id: "9",
        question: "What are some techniques for making text more accessible?",
        options: [
          "Use sufficient color contrast and clear language",
          "Use only uppercase letters",
          "Use complex fonts and background patterns"
        ],
        correctOption: 0
      },
      {
        id: "10",
        question: "How can you ensure that your website is accessible to people with color vision deficiencies?",
        options: [
          "Use sufficient color contrast and do not rely on color alone",
          "Use only black and white colors",
          "Use as many colors as possible"
        ],
        correctOption: 0
      },
      {
        id: "11",
        question: "What is the purpose of a skip link?",
        options: [
          "To allow keyboard users to bypass repetitive content",
          "To provide a direct link to download the website's source code",
          "To navigate to a random page on the website"
        ],
        correctOption: 0
      },
      {
        id: "12",
        question: "How can you make tables more accessible?",
        options: [
          "Use proper table markup and ensure adequate color contrast",
          "Hide table borders and remove table headings",
          "Use tables for layout purposes only"
        ],
        correctOption: 0
      },
      {
        id: "13",
        question: "How can you make forms more accessible?",
        options: [
          "Use appropriate form elements and provide clear error messages",
          "Remove all labels and fieldsets",
          "Use only image-based form controls"
        ],
        correctOption: 0
      },
      {
        id: "14",
        question: "What is a live region in the context of web accessibility?",
        options: [
          "An area of a web page that updates dynamically and communicates updates to assistive technologies",
          "A region that contains advertisements and pop-ups",
          "A region that constantly changes its position on the page"
        ],
        correctOption: 0
      },
      {
        id: "15",
        question: "What are some best practices for accessible multimedia content?",
        options: [
          "Provide transcripts, captions, and accessible controls",
          "Auto-play multimedia content without user control",
          "Use inaccessible media players"
        ],
        correctOption: 0
      },
      {
        id: "16",
        question: "How can you test your website for accessibility?",
        options: [
          "Use automated testing tools and test with keyboard navigation and screen readers",
          "Rely solely on visual inspection",
          "Test only in one browser"
        ],
        correctOption: 0
      },
      {
        id: "17",
        question: "How can you make a React application more accessible?",
        options: [
          "Use semantic HTML elements and manage focus",
          "Ignore ARIA roles and keyboard interactions",
          "Avoid testing the application with screen readers"
        ],
        correctOption: 0
      },
      {
        id: "18",
        question: "What is the purpose of React Fragments?",
        options: [
          "To group elements without adding extra nodes to the DOM",
          "To replace the need for ARIA roles",
          "To create custom event handlers"
        ],
        correctOption: 0
      },
      {
        id: "19",
        question: "How do you handle focus management in a React application?",
        options: [
          "Use the useRef() hook and the .focus() method",
          "Rely on the browser's default focus behavior",
          "Disable focus for all elements"
        ],
        correctOption: 0
      },
      {
        id: "20",
        question: "How can you use PropTypes to improve accessibility in a React application?",
        options: [
          "By validating required accessibility-related props",
          "By removing the need for ARIA attributes",
          "By disabling keyboard navigation"
        ],
        correctOption: 0
      },
      {
        id: "21",
        question: "How can you use React context to improve accessibility?",
        options: [
          "Share accessibility-related data and functionality across the application",
          "Ignore user preferences for font size and color scheme",
          "Disable React context for better performance"
        ],
        correctOption: 0
      },
      {
        id: "22",
        question: "How do you create a custom accessible component in React?",
        options: [
          "Use semantic HTML elements, manage focus, and implement keyboard event handling",
          "Create components without considering ARIA roles or keyboard interactions",
          "Avoid testing the component with screen readers and automated tools"
        ],
        correctOption: 0
      },
      {
        id: "23",
        question: "What are some React-specific accessibility pitfalls to avoid?",
        options: [
          "Using non-semantic elements and not managing focus",
          "Testing the application in multiple browsers",
          "Using semantic HTML elements and ARIA attributes"
        ],
        correctOption: 0
      },
      {
        id: "24",
        question: "How can you use React hooks to improve accessibility?",
        options: [
          "Manage focus, store and retrieve user preferences, and handle keyboard interactions",
          "Ignore keyboard navigation and user preferences",
          "Avoid using hooks in functional components"
        ],
        correctOption: 0
      },
      {
        id: "25",
        question: "What is the role of keyboard navigation in web accessibility?",
        options: [
          "Allows users to navigate, interact with, and control web content using only the keyboard",
          "Exclusively for users who prefer mouse navigation",
          "Used only for navigation in form elements"
        ],
        correctOption: 0
      },
      {
        id: "26",
        question: "How can you ensure that your React application meets accessibility standards?",
        options: [
          "Use automated testing tools, test with screen readers and keyboard navigation, and follow WCAG guidelines",
          "Rely solely on visual inspection of the application",
          "Avoid testing the application with screen readers and different browsers"
        ],
        correctOption: 0
      }
      
]

export default accessibilityQuiz;