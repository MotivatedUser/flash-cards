const cssFlashcards = [
  {
    id: "1",
    question: "What is the CSS box model?",
    answer:
      "The CSS box model is a layout model with content area, padding, border, and margin. It defines how elements are rendered on a web page.",
  },
  {
    id: "2",
    question: "What is a CSS selector?",
    answer:
      "A CSS selector is a pattern used to select and style elements on a web page based on element name, class name, ID, attributes, or other criteria.",
  },
  {
    id: "3",
    question: "What is the difference between a class and an ID in CSS?",
    answer:
      "A class is a reusable selector for styling multiple elements, while an ID is a unique selector for styling a single element.",
  },
  {
    id: "4",
    question: "What is the CSS float property?",
    answer:
      "The CSS float property positions an element to the left or right, allowing other content to flow around it, and is used for creating multi-column layouts or positioning media.",
  },
  {
    id: "5",
    question: "What is the CSS display property?",
    answer:
      'The CSS display property controls how an element is displayed, with values like "block", "inline", "inline-block", "flex", and "grid", affecting sizing, positioning, and interaction with other elements.',
  },
  {
    id: "6",
    question: "What is the CSS specificity hierarchy?",
    answer:
      "CSS specificity determines which style rules are applied when multiple rules compete, with a hierarchy of: inline styles, IDs, classes and pseudo-classes, and element names.",
  },
  {
    id: "7",
    question: "What is a CSS pseudo-class?",
    answer:
      "A CSS pseudo-class is a keyword for selecting and styling an element based on its state or position in the document, such as :hover, :active, :focus, :first-child, and :nth-child.",
  },
  {
    id: "8",
    question: "What is a CSS pseudo-element?",
    answer:
      "A CSS pseudo-element is a keyword for selecting and styling a specific part of an element or generating content, such as ::before, ::after, ::first-letter, and ::first-line.",
  },
  {
    id: "9",
    question: "What is the CSS position property and its values?",
    answer:
      'The CSS position property controls element positioning with values: "static", "relative", "absolute", "fixed", or "sticky", each defining a different type of positioning behavior.',
  },
  {
    id: "10",
    question: 'What is the difference between "em" and "rem" units in CSS?',
    answer:
      '"em" units are relative to the font size of the closest parent, while "rem" units are relative to the font size of the root element, both used for flexible sizing in responsive designs.',
  },
  {
    id: "11",
    question: "What is the CSS Grid Layout?",
    answer:
      "CSS Grid Layout is a two-dimensional system for creating complex and responsive layouts using columns and rows, allowing control over the size, position, and layering of elements.",
  },
  {
    id: "12",
    question:
      "How do you create a grid container and define its columns and rows?",
    answer:
      'Create a grid container with "display: grid;", then define columns and rows using "grid-template-columns" and "grid-template-rows" properties, setting size values for each column and row.',
  },
  {
    id: "13",
    question: "How do you place items in a CSS Grid Layout?",
    answer:
      'To place items in a CSS Grid Layout, you can use the "grid-column-start", "grid-column-end", "grid-row-start", and "grid-row-end" properties. These properties define the starting and ending grid lines for an item"s column and row placement.',
  },
  {
    id: "14",
    question: "What is a media query in CSS?",
    answer:
    "A media query is a CSS technique used to apply different styles based on the characteristics of the device, such as screen width, height, or orientation, allowing responsive designs for various devices.",
    },
    {
    id: "15",
    question: "What is the CSS Flexbox Layout?",
    answer:
    "The CSS Flexbox Layout is a one-dimensional layout model for creating flexible and responsive layouts by distributing space along a single axis, either horizontally or vertically, within a container.",
    },
    {
    id: "16",
    question: "How do you create a flex container and flex items in CSS?",
    answer:
    'Create a flex container with "display: flex;" or "display: inline-flex;", then add child elements as flex items, which automatically adjust their size and position based on the flex container properties.',
    },
    {
    id: "17",
    question: "What is the difference between 'min-width' and 'max-width' in CSS?",
    answer:
    "'min-width' sets the minimum width of an element, while 'max-width' sets the maximum width, both used to constrain element sizing for responsive designs.",
    },
    {
    id: "18",
    question: "What is the 'viewport' meta tag and why is it important for responsive design?",
    answer:
    "The 'viewport' meta tag controls the scaling and dimensions of the web page on different devices, ensuring the content fits and adapts to the screen size for a responsive design.",
    },
    {
    id: "19",
    question: "What is the difference between 'vh' and 'vw' units in CSS?",
    answer:
    "'vh' units are relative to the viewport height, while 'vw' units are relative to the viewport width, both used for sizing elements in responsive designs based on the screen size.",
    },
    {
    id: "20",
    question: "What is the purpose of the 'calc()' function in CSS?",
    answer:
    "The 'calc()' function in CSS allows you to perform calculations with different units to create dynamic and responsive values, such as widths, heights, and font sizes, based on the screen size or other factors.",
    },
    {
      id: "21",
      question: "What is the difference between 'width' and 'max-content' values in CSS?",
      answer:
      "'width' sets the width of an element, while 'max-content' represents the maximum intrinsic width of an element, where it grows to fit its content without wrapping or overflow, useful for responsive designs.",
      },
      {
      id: "22",
      question: "How can you use CSS to create a responsive image gallery?",
      answer:
      "Use CSS Grid or Flexbox to create a responsive image gallery, adjusting column and row sizes with percentages, 'fr' units, or media queries to adapt to different screen sizes and orientations.",
      },
      {
      id: "23",
      question: "What are CSS breakpoints and how are they used in responsive design?",
      answer:
      "CSS breakpoints are specific screen sizes or device characteristics where styles are changed using media queries, providing an optimal layout and user experience across different devices and screen sizes.",
      },
      {
      id: "24",
      question: "What is the purpose of the 'object-fit' property in CSS?",
      answer:
      "The 'object-fit' property in CSS controls how an image, video, or other media element is resized to fit its container while maintaining its aspect ratio, useful for creating responsive designs without distortion.",
      }      
];
export default cssFlashcards;
