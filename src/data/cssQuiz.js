const cssQuiz = [
  {
    id: "1",
    question: "What is the CSS box model?",
    options: [
      "A model for organizing stylesheets.",
      "The CSS box model is a layout model with content area, padding, border, and margin. It defines how elements are rendered on a web page.",
      "A layout model for styling text.",
    ],
    correctOption: 1,
  },
  {
    id: "2",
    question: "What is a CSS selector?",
    options: [
      "A pattern used to select and style elements on a web page based on element name, class name, ID, attributes, or other criteria.",
      "A method for controlling the display of elements.",
      "A layout model for organizing web page content.",
    ],
    correctOption: 0,
  },
  {
    id: "3",
    question: "What is the difference between a class and an ID in CSS?",
    options: [
      "A method for organizing stylesheets.",
      "A class is a reusable selector for styling multiple elements, while an ID is a unique selector for styling a single element.",
      "A layout model for styling text.",
    ],
    correctOption: 1,
  },
  {
    id: "4",
    question: "What is the CSS float property?",
    options: [
      "A layout model for organizing web page content.",
      "A method for controlling the display of elements.",
      "The CSS float property positions an element to the left or right, allowing other content to flow around it, and is used for creating multi-column layouts or positioning media.",
    ],
    correctOption: 2,
  },
  {
    id: "5",
    question: "What is the CSS display property?",
    options: [
      'The CSS display property controls how an element is displayed, with values like "block", "inline", "inline-block", "flex", and "grid", affecting sizing, positioning, and interaction with other elements.',
      "A layout model for styling text.",
      "A model for organizing stylesheets.",
    ],
    correctOption: 0,
  },
  {
    id: "6",
    question: "What is the CSS specificity hierarchy?",
    options: [
      "A layout model for organizing web page content.",
      "A method for controlling the display of elements.",
      "CSS specificity determines which style rules are applied when multiple rules compete, with a hierarchy of: inline styles, IDs, classes and pseudo-classes, and element names.",
    ],
    correctOption: 2,
  },
  {
    id: "7",
    question: "What is a CSS pseudo-class?",
    options: [
      "A method for organizing stylesheets.",
      "A CSS pseudo-class is a keyword for selecting and styling an element based on its state or position in the document, such as :hover, :active, :focus, :first-child, and :nth-child.",
      "A layout model for styling text.",
    ],
    correctOption: 1,
  },
  {
    id: "8",
    question: "What is a CSS pseudo-element?",
    options: [
      "A CSS pseudo-element is a keyword for selecting and styling a specific part of an element or generating content, such as ::before, ::after, ::first-letter, and ::first-line.",
      "A layout model for organizing web page content.",
      "A method for controlling the display of elements.",
    ],
    correctOption: 0,
  },
  {
    id: "9",
    question: "What is the CSS position property and its values?",
    options: [
      "A layout model for organizing web page content.",
      'The CSS position property controls element positioning with values: "static", "relative", "absolute", "fixed", or "sticky", each defining a different type of positioning behavior.',
      "A method for controlling the display of elements.",
    ],
    correctOption: 1,
  },
  {
    id: "10",
    question: 'What is the difference between "em" and "rem" units in CSS?',
    options: [
      "A layout model for organizing web page content.",
      "A method for controlling the display of elements.",
      '"em" units are relative to the font size of the closest parent, while "rem" units are relative to the font size of the root element, both used for flexible sizing in responsive designs.',
    ],
    correctOption: 2,
  },
  {
    id: "11",
    question: "What is the CSS Grid Layout?",
    options: [
      "A layout model for organizing web page content.",
      "CSS Grid Layout is a two-dimensional system for creating complex and responsive layouts using columns and rows, allowing control over the size, position, and layering of elements.",
      "A method for controlling the display of elements.",
    ],
    correctOption: 1,
  },
  {
    id: "12",
    question:
      "How do you create a grid container and define its columns and rows?",
    options: [
      'Create a grid container with "display: grid;", then define columns and rows using "grid-template-columns" and "grid-template-rows" properties, setting size values for each column and row.',
      "A layout model for organizing web page content.",
      "A method for controlling the display of elements.",
    ],
    correctOption: 0,
  },
  {
    id: "13",
    question: "How do you place items in a CSS Grid Layout?",
    options: [
      "A layout model for organizing web page content.",
      'To place items in a CSS Grid Layout, you can use the "grid-column-start", "grid-column-end", "grid-row-start", and "grid-row-end" properties. These properties define the starting and ending grid lines for an item"s column and row placement.',
      "A method for controlling the display of elements.",
    ],
    correctOption: 1,
  },
  {
    id: "14",
    question: "What is a media query in CSS?",
    options: [
      "A layout model for organizing web page content.",
      "A media query is a CSS technique used to apply different styles based on the characteristics of the device, such as screen width, height, or orientation, allowing responsive designs for various devices.",
      "A method for controlling the display of elements.",
    ],
    correctOption: 1,
  },
  {
    id: "15",
    question: "What is the CSS Flexbox Layout?",
    options: [
      "The CSS Flexbox Layout is a one-dimensional layout model for creating flexible and responsive layouts by distributing space along a single axis, either horizontally or vertically, within a container.",
      "A method for controlling the display of elements.",
      "A layout model for organizing web page content.",
    ],
    correctOption: 0,
  },
  {
    id: "16",
    question: "How do you create a flex container and flex items in CSS?",
    options: [
      "A layout model for organizing web page content.",
      'Create a flex container with "display: flex;" or "display: inline-flex;", then add child elements as flex items, which automatically adjust their size and position based on the flex container properties.',
      "A method for controlling the display of elements.",
    ],
    correctOption: 1,
  },
  {
    id: "17",
    question:
      "What is the difference between 'min-width' and 'max-width' in CSS?",
    options: [
      "'min-width' sets the minimum width of an element, while 'max-width' sets the maximum width, both used to constrain element sizing for responsive designs.",
      "A layout model for organizing web page content.",
      "A method for controlling the display of elements.",
    ],
    correctOption: 0,
  },
  {
    id: "18",
    question:
      "What is the 'viewport' meta tag and why is it important for responsive design?",
    options: [
      "A layout model for organizing web page content.",
      "The 'viewport' meta tag controls the scaling and dimensions of the web page on different devices, ensuring the content fits and adapts to the screen size for a responsive design.",
      "A method for controlling the display of elements.",
    ],
    correctOption: 1,
  },
  {
    id: "19",
    question: "What is the difference between 'vh' and 'vw' units in CSS?",
    options: [
      "'vh' units are relative to the viewport height, while 'vw' units are relative to the viewport width, both used for sizing elements in responsive designs based on the screen size.",
      "A layout model for organizing web page content.",
      "A method for controlling the display of elements.",
    ],
    correctOption: 0,
  },
  {
    id: "20",
    question: "What is the purpose of the 'calc()' function in CSS?",
    options: [
      "A layout model for organizing web page content.",
      "A method for controlling the display of elements.",
      "The 'calc()' function in CSS allows you to perform calculations with different units to create dynamic and responsive values, such as widths, heights, and font sizes, based on the screen size or other factors.",
    ],
    correctOption: 2,
  },
  {
    id: "21",
    question:
      "What is the difference between 'width' and 'max-content' values in CSS?",
    options: [
      "A layout model for organizing web page content.",
      "'width' sets the width of an element, while 'max-content' represents the maximum intrinsic width of an element, where it grows to fit its content without wrapping or overflow, useful for responsive designs.",
      "A method for controlling the display of elements.",
    ],
    correctOption: 1,
  },
  {
    id: "22",
    question: "How can you use CSS to create a responsive image gallery?",
    options: [
      "Use CSS Grid or Flexbox to create a responsive image gallery, adjusting column and row sizes with percentages, 'fr' units, or media queries to adapt to different screen sizes and orientations.",
      "A layout model for organizing web page content.",
      "A method for controlling the display of elements.",
    ],
    correctOption: 0,
  },
  {
    id: "23",
    question:
      "What are CSS breakpoints and how are they used in responsive design?",
    options: [
      "A method for controlling the display of elements.",
      "CSS breakpoints are specific screen sizes or device characteristics where styles are changed using media queries, providing an optimal layout and user experience across different devices and screen sizes.",
      "A layout model for organizing web page content.",
    ],
    correctOption: 1,
  },
  {
    id: "24",
    question: "What is the purpose of the 'object-fit' property in CSS?",
    options: [
      "A layout model for organizing web page content.",
      "A method for controlling the display of elements.",
      "The 'object-fit' property in CSS controls how an image, video, or other media element is resized to fit its container while maintaining its aspect ratio, useful for creating responsive designs without distortion.",
    ],
    correctOption: 2,
  },
];
export default cssQuiz;