const responsiveQuiz = [
    {
        id: "1",
        question: "What is responsive web design and why is it important?",
        options: [
          "An approach to create adaptable websites for various devices.",
          "A technique to make websites load faster.",
          "A method to improve the visual appearance of websites.",
        ],
        correctOption: 0,
      },
      {
        id: "2",
        question: "What are the key components of a responsive design?",
        options: [
          "Fluid grid system, flexible media, and CSS media queries.",
          "Fixed layouts, scalable vector graphics, and CSS animations.",
          "Adaptive layouts, image sprites, and CSS transitions.",
        ],
        correctOption: 0,
      },
      {
        id: "3",
        question: "What are CSS media queries and how are they used?",
        options: [
          "CSS techniques to apply styles based on device characteristics.",
          "CSS properties to create animations and transitions.",
          "CSS rules for managing the layout of HTML documents.",
        ],
        correctOption: 0,
      },
      {
        id: "4",
        question: "What is a viewport and how does it affect responsive design?",
        options: [
          "A layout model for organizing web page content.",
          "The visible area of a web page on a device.",
          "A method for controlling the display of elements.",
        ],
        correctOption: 1,
      },
      {
        id: "5",
        question: "What is mobile-first design, and why is it important?",
        options: [
          "A design method to make websites more visually appealing.",
          "A design approach prioritizing mobile user experience.",
          "A technique for optimizing websites for search engines.",
        ],
        correctOption: 1,
      },
      {
        id: "6",
        question: "How do you create a responsive grid system?",
        options: [
          "Using CSS frameworks or Grid and Flexbox techniques.",
          "By employing fixed-width layouts and absolute positioning.",
          "Implementing scalable vector graphics and image sprites.",
        ],
        correctOption: 0,
      },
      {
        id: "7",
        question: "What are some techniques for creating responsive images?",
        options: [
          "Max-width property, srcset attribute, and picture element.",
          "CSS animations, transitions, and transform properties.",
          "Fixed-width layouts, image maps, and background images.",
        ],
        correctOption: 0,
      },
      {
        id: "8",
        question: "How do you handle typography in responsive design?",
        options: [
          "Using relative units and media queries for adjustments.",
          "Implementing fixed-width layouts and absolute positioning.",
          "Employing scalable vector graphics and image sprites.",
        ],
        correctOption: 0,
      },
      {
        id: "9",
        question: "What are some performance considerations for responsive websites?",
        options: [
          "Optimizing images, minifying files, and leveraging caching.",
          "Using fixed-width layouts and absolute positioning.",
          "Implementing scalable vector graphics and image sprites.",
        ],
        correctOption: 0,
      },
      {
        id: "10",
        question: "How do you test the responsiveness of a website?",
        options: [
          "Using browser tools, emulators, real devices, and testing tools.",
          "Checking for proper spelling, grammar, and punctuation.",
          "Measuring the website's loading speed and performance score.",
        ],
        correctOption: 0,
      },
      {
        id: "11",
        question: "What is the difference between adaptive and responsive design?",
        options: [
          "Adaptive uses predefined layouts, while responsive adjusts fluidly.",
          "Adaptive design focuses on performance, while responsive design focuses on aesthetics.",
          "Adaptive design is easier to maintain, while responsive design provides tailored experiences.",
        ],
        correctOption: 0,
      },
      {
        id: "12",
        question: "What are CSS Grid and Flexbox, and how do they help with responsive design?",
        options: [
          "Layout models that enable complex, flexible designs.",
          "Techniques for styling text and typography.",
          "Methods for organizing stylesheets and CSS rules.",
        ],
        correctOption: 0,
      },
      {
        id: "13",
        question: "What is the purpose of using relative units like em and rem in responsive design?",
        options: [
          "Allowing proportional scaling of elements.",
          "Creating fixed-width layouts for web pages.",
          "Defining colors and visual properties of elements.",
        ],
        correctOption: 0,
      },
      {
        id: "14",
        question: "What are some strategies for dealing with navigation menus in responsive design?",
        options: [
          "Collapsing menus, priority-based pattern, and off-canvas menus.",
          "Fixed-width layouts, absolute positioning, and background images.",
          "Scalable vector graphics, image sprites, and responsive images.",
        ],
        correctOption: 0,
      },
      {
        id: "15",
        question: "How can you use CSS breakpoints effectively in responsive design?",
        options: [
          "Create breakpoints based on content and design, use a mobile-first approach.",
          "Focus on breakpoints for specific devices and screen resolutions.",
          "Design breakpoints around color schemes and typography.",
        ],
        correctOption: 0,
      },
      {
        id: "16",
        question: "What is the role of device pixel ratio (DPR) in responsive design?",
        options: [
          "Affects rendering of images and typography on high-resolution screens.",
          "Determines the speed at which websites load on various devices.",
          "Defines the color depth and quality of images on different screens.",
        ],
        correctOption: 0,
      },
      {
        id: "17",
        question: "What are the best practices for handling video content in responsive design?",
        options: [
          "Using HTML5 video, responsive properties, and multiple formats.",
          "Implementing Flash video, fixed-width layouts, and animated GIFs.",
          "Optimizing video content for search engines and social media sharing.",
        ],
        correctOption: 0,
      },
      {
        id: "18",
        question: "What is the importance of touch target size in responsive design?",
        options: [
          "Enhancing mobile user experience by preventing accidental taps.",
          "Improving website load times on touch devices.",
          "Increasing the resolution of images on touchscreens.",
        ],
        correctOption: 0,
      },
      {
        id: "19",
        question: "How can you use CSS variables to simplify responsive design?",
        options: [
          "Storing and reusing values throughout stylesheets.",
          "Creating fixed-width layouts for web pages.",
          "Defining colors and visual properties of elements.",
        ],
        correctOption: 0,
      },
      {
        id: "20",
        question: "What is the purpose of the min-width and max-width properties in responsive design?",
        options: [
          "Defining the minimum and maximum widths of elements.",
          "Creating fixed-width layouts for web pages.",
          "Determining the color depth and quality of images on different screens.",
        ],
        correctOption: 0,
      },
      {
        id: "21",
        question: "What is the difference between fluid and fixed layouts in responsive design?",
        options: [
          "Fluid layouts use percentage-based widths, while fixed layouts have a set width.",
          "Fluid layouts focus on performance, while fixed layouts focus on aesthetics.",
          "Fluid layouts are harder to maintain, while fixed layouts provide tailored experiences.",
        ],
        correctOption: 0,
      },
      {
        id: "22",
        question: "What is the role of accessibility in responsive design?",
        options: [
          "Ensuring a website is usable by all users, including those with disabilities.",
          "Optimizing a website for search engines and social media sharing.",
          "Improving website load times on various devices.",
        ],
        correctOption: 0,
      },
      {
        id: "23",
        question: "How can you optimize responsive design for slow or unreliable network connections?",
        options: [
          "Compressing images, using lazy loading, and leveraging browser caching.",
          "Focusing on fixed-width layouts and absolute positioning.",
          "Designing breakpoints around color schemes and typography.",
        ],
        correctOption: 0,
      },
      {
        id: "24",
        question: "How can you use CSS containment to improve the performance of responsive websites?",
        options: [
          "Isolating a subtree of a document, limiting the scope of layout, style, and paint operations.",
          "Implementing Flash video, fixed-width layouts, and animated GIFs.",
          "Optimizing video content for search engines and social media sharing.",
        ],
        correctOption: 0,
      },
]
export default responsiveQuiz;