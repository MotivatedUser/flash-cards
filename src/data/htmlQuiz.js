const htmlQuiz = [
    {
        id: "1",
        question: "What is HTML and its purpose?",
        options: [
          "Markup language for styling web pages.",
          "Markup language for creating web pages, structuring content with elements and tags.",
          "Programming language for web development."
        ],
        correctOption: 1
      },
      {
        id: "2",
        question: "What are HTML elements and tags?",
        options: [
          "Web page parts, marked by opening and closing tags.",
          "CSS keywords to target elements.",
          "Programming constructs for dynamic websites."
        ],
        correctOption: 0
      },
      {
        id: "3",
        question: "What is the structure of an HTML document?",
        options: [
          "Nested functions and objects.",
          "Collection of CSS rules and declarations.",
          "Doctype, root <html> element, <head> for metadata, and <body> for content."
        ],
        correctOption: 2
      },
      {
        id: "4",
        question: "What is the difference between block-level and inline elements?",
        options: [
          "How they are nested within elements.",
          "Block-level: full width, inline: needed space only.",
          "How they are targeted in JavaScript."
        ],
        correctOption: 1
      },
      {
        id: "5",
        question: "What is an HTML attribute?",
        options: [
          "Method for selecting elements in JS.",
          "Info about elements, modifying behavior or appearance.",
          "Property specifying styling of an element."
        ],
        correctOption: 1
      },
      {
        id: "6",
        question: "What are some common HTML5 semantic elements?",
        options: [
          "Elements for structure and meaning, e.g., <header>, <nav>, <section>.",
          "Styling properties for text elements.",
          "Methods for web page interaction in JS."
        ],
        correctOption: 0
      },
      {
        id: "7",
        question: "What is the purpose of the <!DOCTYPE> declaration?",
        options: [
          "Define the version of JavaScript used.",
          "Inform browser about the HTML version used.",
          "Specify the CSS version for the document."
        ],
        correctOption: 1
      },
      {
        id: "8",
        question: "What is the difference between a relative and an absolute URL?",
        options: [
          "Relative: different domain, partial address. Absolute: same domain, complete web address.",
          "Relative: same directory, partial address. Absolute: complete web address.",
          "Relative: includes protocol, domain. Absolute: without protocol, domain."
        ],
        correctOption: 1
      },
      {
        id: "9",
        question: "How do you create a hyperlink in HTML?",
        options: [
          "Using CSS to style a text element as a hyperlink.",
          "<a> element with 'href' attribute, specifying target URL.",
          "Using JavaScript to create a link dynamically."
        ],
        correctOption: 1
      },
      {
        id: "10",
        question: "How do you insert an image in HTML?",
        options: [
          "Using CSS background-image property.",
          "Inserting an image using JavaScript.",
          "<img> element with 'src' and 'alt' attributes, specifying image URL."
        ],
        correctOption: 2
      },
      {
        id: "11",
        question: "What are HTML forms and their purpose?",
        options: [
          "HTML forms are used to collect user input and submit data to a server.",
          "HTML forms are used for styling and positioning elements on a web page.",
          "HTML forms are used for storing data on the client-side."
        ],
        correctOption: 0
      },
      {
        id: "12",
        question: "What is an HTML comment and how do you create one?",
        options: [
          "A piece of text that is displayed on the webpage.",
          "A piece of text that is ignored by the browser and not displayed on the webpage.",
          "A type of hyperlink that links to another web page."
        ],
        correctOption: 1
      },
      {
        id: "13",
        question: "What is the purpose of the <meta> tag in HTML?",
        options: [
          "To define the structure of the webpage.",
          "To provide metadata about the webpage, such as character encoding and author information.",
          "To create links to other web pages."
        ],
        correctOption: 1
      },
      {
        id: "14",
        question: "What is an iframe in HTML and how do you create one?",
        options: [
          "An image element used to display images on a webpage.",
          "A type of hyperlink that links to another web page.",
          "An inline frame that embeds another HTML document within the current document."
        ],
        correctOption: 2
      },
      {
        id: "15",
        question: 'What is the difference between the "id" and "class" attributes in HTML?',
        options: [
          '"id" attribute groups multiple elements with the same style or behavior, while "class" attribute uniquely identifies an HTML element.',
          '"id" attribute uniquely identifies an HTML element, while "class" attribute groups multiple elements with the same style or behavior.',
          '"id" and "class" attributes have the same purpose in HTML.'
        ],
        correctOption: 1
      },
      {
        id: "16",
        question: "How do you create an unordered and ordered list in HTML?",
        options: [
          "Create an unordered list with the <ul> element and list items using <li> elements. Create an ordered list with the <ol> element and list items using <li> elements.",
          "Create an unordered list with the <ol> element and list items using <li> elements. Create an ordered list with the <ul> element and list items using <li> elements.",
          "Create an unordered list with the <li> element and list items using <ul> elements. Create an ordered list with the <li> element and list items using <ol> elements."
        ],
        correctOption: 0
      },
      {
        id: "17",
        question: "What is the purpose of the <table> element in HTML?",
        options: [
          "To create a list of items on a webpage.",
          "To display tabular data on a webpage.",
          "To group elements with the same style or behavior."
        ],
        correctOption: 1
      },
      {
        id: "18",
        question: 'What is the difference between the "GET" and "POST" methods in HTML forms?',
        options: [
          'The "GET" method sends form data as URL parameters, making it hidden and more secure for sensitive data. The "POST" method submits form data within the request body, making it visible and suitable for non-sensitive data or bookmarking.',
          'The "GET" method submits form data as a query string in the URL, making it visible and suitable for non-sensitive data or bookmarking. The "POST" method submits data within the request body, making it hidden and more secure for sensitive data.',
          'The "GET" method submits form data within the request body, making it hidden and more secure for sensitive data. The "POST" method sends form data as a query string in the URL, making it visible and suitable for non-sensitive data or bookmarking.'
        ],
        correctOption: 1
      },
      {
        id: "19",
        question: "What are some common input types used in HTML forms?",
        options: [
          '"text", "password", "checkbox", "radio", "email", "number", "date", "submit", "reset", and "button"',
          '"select", "textarea", "search", "tel", "url", "color", and "range"',
          '"image", "hidden", "file", and "datetime"'
        ],
        correctOption: 0
      },
      {
        id: "20",
        question: 'What is the difference between the "method" attribute values "GET" and "POST" in HTML forms?',
        options: [
          'The "GET" method sends form data as URL parameters, visible in the browser address bar, and is limited in size. It is suitable for non-sensitive data and simple search queries. The "POST" method sends form data within the HTTP request body, not visible in the address bar, and has no size limitations. It is more secure and suitable for sensitive data or large amounts of information.',
          'The "GET" method sends form data within the HTTP request body, not visible in the address bar, and has no size limitations. It is more secure and suitable for sensitive data or large amounts of information. The "POST" method sends form data as URL parameters, visible in the browser address bar, and is limited in size. It is suitable for non-sensitive data and simple search queries.',
          'The "GET" method and "POST" method are identical in functionality and security, and can be used interchangeably.'
        ],
        correctOption: 0
      },
      {
        id: "21",
        question: 'What is the purpose of the "required" attribute in HTML forms?',
        options: [
          'To specify the format and type of the input field.',
          'To restrict the number of characters that can be entered into the input field.',
          'To enforce a form input field to be filled out before the form can be submitted.'
        ],
        correctOption: 2
      },
      {
        id: "22",
        question: "What is an HTML entity and why are they used?",
        options: [
          'HTML entities are special characters used to identify form elements in HTML, such as <form> and <input>.',
          'HTML entities are special tags used to format text and apply styles to web pages.',
          'HTML entities are special characters represented by a code that starts with an ampersand (&) and ends with a semicolon (;). They are used to display reserved characters in HTML, such as < (<) and > (>), or characters that cannot be easily typed on a keyboard, like © (©).'
        ],
        correctOption: 2
      },
      {
        id: "23",
        question: 'What is the purpose of the "lang" attribute in the <html> tag?',
        options: [
          'To specify the character encoding of the HTML document.',
          'To specify the version of the HTML standard used.',
          'The "lang" attribute in the <html> tag specifies the language of the content within the HTML document. It helps search engines understand the content language, and screen readers use it to apply the correct pronunciation rules for better accessibility.'
        ],
        correctOption: 2
      },
      {
        id: "24",
        question: "How do you create an HTML button and associate it with a JavaScript function?",
        options: [
          'Create an HTML button using the <button> element (e.g., <button id="myButton">Click me</button>). To associate it with a JavaScript function, use the "onclick" attribute (e.g., <button onclick="myFunction()">Click me</button>) and define the "myFunction()" JavaScript function elsewhere in the document.',
          'Create an HTML button using the <button> element (e.g., <button id="myButton">Click me</button>). To associate it with a JavaScript function, add an event listener in your JavaScript code, like document.getElementById("myButton").addEventListener("click", myFunction); where "myFunction" is the name of the function to be executed.',
          'Create an HTML button using the <input> element and set its type attribute to "button" (e.g., <input type="button" value="Click me" onclick="myFunction()">). Define the "myFunction()" JavaScript function elsewhere in the document.'
        ],
        correctOption: 1
      },
]
export default htmlQuiz;