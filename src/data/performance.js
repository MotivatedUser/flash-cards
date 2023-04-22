const performanceFlashcards = [
    {
    id: '1',
    question: 'What are some common techniques to optimize web performance?',
    answer: 'Common techniques include: minifying and compressing files, optimizing images, using a CDN, caching, lazy loading, code splitting, and reducing HTTP requests.'
    },
    {
    id: '2',
    question: 'How does browser caching improve web performance?',
    answer: 'Browser caching stores files on the client side, reducing server requests and latency, thus speeding up page load times for subsequent visits to the same site.'
    },
    {
    id: '3',
    question: 'What is the critical rendering path and why is it important?',
    answer: 'The critical rendering path is the sequence of steps taken by the browser to render the initial view of a page. Optimizing it minimizes load time and improves user experience.'
    },
    {
    id: '4',
    question: 'What is lazy loading and how does it improve web performance?',
    answer: 'Lazy loading defers the loading of non-critical resources until they are needed, reducing initial load time and saving bandwidth for both the server and client.'
    },
    {
    id: '5',
    question: 'What are some best practices for optimizing image performance?',
    answer: 'Best practices include: using proper formats, compressing images, using responsive images, implementing lazy loading, and using CSS sprites for icons.'
    },
    {
    id: '6',
    question: 'What is code splitting and how does it improve web performance?',
    answer: 'Code splitting is the process of dividing a single large bundle into smaller chunks that are loaded on demand, reducing initial load time and improving user experience.'
    },
    {
    id: '7',
    question: 'How can you use HTTP/2 to improve web performance?',
    answer: 'HTTP/2 provides features like multiplexing, header compression, and server push, which reduce latency, speed up content delivery, and improve overall performance.'
    },
    {
    id: '8',
    question: 'What is the role of a Content Delivery Network (CDN) in web performance?',
    answer: 'A CDN is a network of servers that caches and delivers content from the server closest to the user, reducing latency, improving load times, and minimizing server load.'
    },
    {
    id: '9',
    question: 'What are some performance metrics to consider when evaluating web performance?',
    answer: 'Key metrics include: Time to First Byte (TTFB), First Contentful Paint (FCP), First Meaningful Paint (FMP), Time to Interactive (TTI), and Speed Index (SI).'
    },
    {
    id: '10',
    question: 'How can you monitor web performance and identify potential bottlenecks?',
    answer: 'Use browser dev tools, profiling tools, and performance monitoring services to analyze performance, identify bottlenecks, and gather insights for optimization.'
    },
    {
        id: '11',
        question: 'What is the purpose of DNS prefetching and how does it improve web performance?',
        answer: 'DNS prefetching resolves domain names in advance, reducing DNS lookup time and improving page load speed.'
      },
      {
        id: '12',
        question: 'What is the purpose of preloading and prefetching in web performance optimization?',
        answer: 'Preloading and prefetching are techniques that load resources in advance, reducing latency and improving load times for subsequent user actions.'
      },
      {
        id: '13',
        question: 'What is the difference between client-side and server-side rendering and how does it impact web performance?',
        answer: 'Client-side rendering (CSR) loads data and HTML after page load, whereas server-side rendering (SSR) loads data and HTML on the server before sending it to the client. SSR can improve performance by reducing the amount of work done on the client side.'
      },
      {
        id: '14',
        question: 'What are some techniques for reducing the size of JavaScript and CSS files?',
        answer: 'Techniques include: minifying, compressing, and obfuscating code, as well as using tree shaking and dead code elimination to remove unused code.'
      },
      {
        id: '15',
        question: 'What is the purpose of the rel="preload" attribute in HTML?',
        answer: 'The rel="preload" attribute is used to load resources that are needed later, such as fonts or large images, in advance, improving page load speed.'
      },
      {
        id: '16',
        question: 'What is the purpose of the "defer" and "async" attributes in JavaScript script tags?',
        answer: 'The "defer" attribute tells the browser to download the script while HTML parsing continues, but execute it after the HTML parsing is complete, whereas the "async" attribute tells the browser to download and execute the script asynchronously, without blocking HTML parsing.'
      },
      {
        id: '17',
        question: 'What are some techniques for optimizing CSS performance?',
        answer: 'Techniques include: using proper selectors, avoiding expensive selectors, reducing the number of HTTP requests, and using CSS animations instead of JavaScript.'
      },
      {
        id: '18',
        question: 'What is the purpose of the "keep-alive" header in HTTP requests?',
        answer: 'The "keep-alive" header is used to keep a connection between the server and the client open, reducing the overhead of opening a new connection for each subsequent request.'
      },
      {
        id: '19',
        question: 'What is the impact of file size on web performance, and how can it be optimized?',
        answer: 'Larger file sizes can slow down page load times and increase bandwidth usage. Techniques for optimization include: compressing files, using proper formats, and reducing file size through code optimization.'
      },
      {
        id: '20',
        question: 'What is the impact of third-party scripts on web performance, and how can it be optimized?',
        answer: 'Third-party scripts can increase page load time and reduce performance. Techniques for optimization include: limiting the number of third-party scripts, using asynchronous loading, and monitoring their impact on performance metrics.'
      },
      {
        id: '21',
        question: 'What is Time to First Byte (TTFB) and why is it important for web performance?',
        answer: 'TTFB is the time between the client sending a request and the server sending the first byte of the response. It is important because it reflects the server’s responsiveness and network performance, and can impact overall load times.'
      },
      {
        id: '22',
        question: 'What is First Contentful Paint (FCP) and why is it important for web performance?',
        answer: 'FCP is the time it takes for the browser to render the first piece of content on a page. It is important because it provides a good indicator of perceived load time and user engagement.'
      },
      {
        id: '23',
        question: 'What is First Meaningful Paint (FMP) and why is it important for web performance?',
        answer: 'FMP is the time it takes for the browser to render the first piece of meaningful content on a page, such as the main text or images. It is important because it reflects the time when the user can actually start consuming the content, and can impact user engagement and conversion rates.'
      },
      {
        id: '24',
        question: 'What is Time to Interactive (TTI) and why is it important for web performance?',
        answer: 'TTI is the time it takes for the page to become fully interactive, meaning that all the required elements are loaded and the user can interact with the page without any delays. It is important because it impacts user engagement and satisfaction, and can affect conversion rates.'
      }
    ];
    export default performanceFlashcards;