const htmlFlashcards = [
  {
    id: "1",
    question: "What is HTML and its purpose?",
    answer:
      "HTML (Hypertext Markup Language) is the standard markup language for creating web pages. It structures content on the web using elements and tags, defining the appearance and layout of a web page.",
  },
  {
    id: "2",
    question: "What are HTML elements and tags?",
    answer:
      "HTML elements represent parts of a web page, and tags are used to mark the beginning and end of an element. Elements are enclosed by an opening tag and a closing tag, containing content and/or other nested elements.",
  },
  {
    id: "3",
    question: "What is the structure of an HTML document?",
    answer:
      "An HTML document has a doctype declaration, a root <html> element containing two main parts: a <head> element for metadata and a <body> element for the actual content of the page.",
  },
  {
    id: "4",
    question: "What is the difference between block-level and inline elements?",
    answer:
      "Block-level elements take up the full width available, creating a new line before and after the element. Inline elements only take up the space needed for their content and do not create new lines.",
  },
  {
    id: "5",
    question: "What is an HTML attribute?",
    answer:
      'HTML attributes provide additional information about elements, modifying their behavior or appearance. They are included in the opening tag and usually have a name-value pair (e.g., href="https://example.com").',
  },
  {
    id: "6",
    question: "What are some common HTML5 semantic elements?",
    answer:
      "Common HTML5 semantic elements include: <header>, <footer>, <nav>, <article>, <section>, <aside>, and <main>. These elements provide better structure and meaning to web content.",
  },
  {
    id: "7",
    question: "What is the purpose of the <!DOCTYPE> declaration?",
    answer:
      "The <!DOCTYPE> declaration informs the browser about the HTML version used in the document, ensuring proper rendering and compatibility with HTML standards.",
  },
  {
    id: "8",
    question: "What is the difference between a relative and an absolute URL?",
    answer:
      'A relative URL is a partial address referring to a resource within the same directory or website. An absolute URL is a complete web address, including the protocol (e.g., "https://") and domain, pointing to a specific resource.',
  },
  {
    id: "9",
    question: "How do you create a hyperlink in HTML?",
    answer:
      'Create a hyperlink using the <a> element with the "href" attribute, specifying the target URL. Place the clickable text or content between the opening and closing tags (e.g., <a href="https://example.com">Click me</a>).',
  },
  {
    id: "10",
    question: "How do you insert an image in HTML?",
    answer:
      'Insert an image using the <img> element with the "src" attribute, specifying the image URL. Include the "alt" attribute for accessibility and fallback text (e.g., <img src="image.jpg" alt="Description of image">).',
  },
  {
    id: "11",
    question: "What are HTML forms and their purpose?",
    answer:
      "HTML forms are used to collect user input and submit data to a server for processing. Forms can include various input types like text, checkboxes, radio buttons, and buttons for submission.",
  },
  {
    id: "12",
    question: "What is an HTML comment and how do you create one?",
    answer:
      "An HTML comment is a piece of text that is ignored by the browser and not displayed on the webpage. It is used to provide notes or explanations within the code. Create a comment using the syntax <!-- comment text here -->.",
  },
  {
    id: "13",
    question: "What is the purpose of the <meta> tag in HTML?",
    answer:
      "The <meta> tag in HTML provides metadata about the web page, such as character encoding, viewport settings, author information, and description for search engines. It is placed within the <head> element of the HTML document.",
  },
  {
    id: "14",
    question: "What is an iframe in HTML and how do you create one?",
    answer:
      'An iframe is an inline frame that embeds another HTML document within the current document. Create an iframe using the <iframe> element with the "src" attribute specifying the embedded document URL (e.g., <iframe src="https://example.com"></iframe>).',
  },
  {
    id: "15",
    question:
      'What is the difference between the "id" and "class" attributes in HTML?',
    answer:
      'The "id" attribute uniquely identifies an HTML element, while the "class" attribute groups multiple elements with the same style or behavior. "id" values must be unique within a page, while "class" values can be reused on multiple elements.',
  },
  {
    id: "16",
    question: "How do you create an unordered and ordered list in HTML?",
    answer:
      "Create an unordered list with the <ul> element and list items using <li> elements (e.g., <ul><li>Item 1</li><li>Item 2</li></ul>). Create an ordered list with the <ol> element and list items using <li> elements (e.g., <ol><li>Item 1</li><li>Item 2</li></ol>).",
  },
  {
    id: "17",
    question: "What is the purpose of the <table> element in HTML?",
    answer:
      "The <table> element in HTML is used to create a table for displaying tabular data. It is structured using elements like <thead>, <tbody>, <tr>, <th>, and <td> to define table headers, rows, and cells.",
  },
  {
    id: "18",
    question:
      'What is the difference between the "GET" and "POST" methods in HTML forms?',
    answer:
      'The "GET" method submits form data as a query string in the URL, making it visible and suitable for non-sensitive data or bookmarking. The "POST" method submits data within the request body, making it hidden and more secure for sensitive data.',
  },
  {
    id: "19",
    question: "What are some common input types used in HTML forms?",
    answer:
      'Common input types in HTML forms include: "text", "password", "checkbox", "radio", "email", "number", "date", "submit", "reset", and "button". These input types provide different ways of collecting user data.',
  },
  {
    id: "20",
    question:
      'What is the difference between the "method" attribute values "GET" and "POST" in HTML forms?',
    answer:
      'The "GET" method sends form data as URL parameters, visible in the browser address bar, and is limited in size. It is suitable for non-sensitive data and simple search queries. The "POST" method sends form data within the HTTP request body, not visible in the address bar, and has no size limitations. It is more secure and suitable for sensitive data or large amounts of information.',
  },
  {
    id: "21",
    question: 'What is the purpose of the "required" attribute in HTML forms?',
    answer:
      'The "required" attribute in HTML forms enforces a form input field to be filled out before the form can be submitted. It helps ensure that necessary information is provided by the user.',
  },
  {
    id: "22",
    question: "What is an HTML entity and why are they used?",
    answer:
      "HTML entities are special characters represented by a code that starts with an ampersand (&) and ends with a semicolon (;). They are used to display reserved characters in HTML, such as < (<) and > (>), or characters that cannot be easily typed on a keyboard, like © (©).",
  },
  {
    id: "23",
    question: 'What is the purpose of the "lang" attribute in the <html> tag?',
    answer:
      'The "lang" attribute in the <html> tag specifies the language of the content within the HTML document. It helps search engines understand the content language, and screen readers use it to apply the correct pronunciation rules for better accessibility.',
  },
  {
    id: "24",
    question:
      "How do you create an HTML button and associate it with a JavaScript function?",
    answer:
      'Create an HTML button using the <button> element (e.g., <button id="myButton">Click me</button>). To associate it with a JavaScript function, add an event listener in your JavaScript code, like document.getElementById("myButton").addEventListener("click", myFunction); where "myFunction" is the name of the function to be executed.',
  },
];
export default htmlFlashcards;
