const progressiveWebAPIQuiz = [
  {
    id: "1",
    question: "What are Progressive Web Apps (PWAs)?",
    options: [
      "Web applications that provide a fast, reliable, and engaging user experience by combining the best of the web and native apps.",
      "Applications that can only be accessed from a single device or platform.",
      "Mobile applications that run natively on iOS or Android devices.",
    ],
    correctOption: 0,
  },
  {
    id: "2",
    question: "What are some benefits of using PWAs?",
    options: [
      "Faster load times, offline support, push notifications, home screen installation, and better user engagement and retention.",
      "Better security, access to more device features, and improved performance compared to traditional web apps.",
      "Improved cross-platform compatibility, reduced development costs, and easier maintenance compared to native apps.",
    ],
    correctOption: 0,
  },
  {
    id: "3",
    question: "What is a Service Worker in the context of PWAs?",
    options: [
      "A JavaScript script that runs in the background of a web page and enables offline caching, push notifications, and other advanced features.",
      "A tool for analyzing and improving the performance, accessibility, and SEO of web apps.",
      "A design pattern for separating the core application logic from the content and user interface.",
    ],
    correctOption: 0,
  },
  {
    id: "4",
    question: "What is caching in the context of PWAs?",
    options: [
      "The process of storing web assets, such as HTML, CSS, JavaScript, and images, on the user's device for offline use.",
      "The process of optimizing web pages for faster load times and better performance.",
      "The process of separating the core application logic from the content and user interface in a PWA.",
    ],
    correctOption: 0,
  },
  {
    id: "5",
    question: "What is a Web App Manifest in the context of PWAs?",
    options: [
      "A JSON file that contains metadata about a PWA, such as its name, icon, start URL, theme color, and display mode.",
      "A tool for controlling the display of elements on a web page.",
      "A layout model for organizing web page content.",
    ],
    correctOption: 0,
  },
  {
    id: "6",
    question: "What are push notifications in the context of PWAs?",
    options: [
      "Notifications that can be sent to the user's device even when the PWA is not open.",
      "Notifications that can only be sent when the PWA is open and running.",
      "Notifications that are displayed as part of the web page content.",
    ],
    correctOption: 0,
  },
  {
    id: "7",
    question: "What is the difference between a traditional web app and a PWA?",
    options: [
      "PWAs can be installed on the user's device, work offline, and have access to native device features, while traditional web apps do not.",
      "Traditional web apps have a more app-like interface and can provide a better user experience than PWAs.",
      "Traditional web apps are faster and more reliable than PWAs.",
    ],
    correctOption: 0,
  },
  {
    id: "8",
    question: "What are some challenges of building PWAs?",
    options: [
      "Ensuring cross-browser compatibility and optimizing for different network conditions",
      "A model for organizing stylesheets",
      "Handling server-side rendering",
    ],
    correctOption: 0,
  },
  {
    id: "9",
    question:
      "What is the Lighthouse tool and how can it help with PWA development?",
    options: [
      "A tool for creating animations",
      "A tool for optimizing images",
      "An open-source tool from Google that can be used to audit and improve the performance, accessibility, and SEO of web apps, including PWAs. It provides a detailed report of best practices, opportunities, and diagnostics, as well as suggestions for optimization.",
    ],
    correctOption: 2,
  },
  {
    id: "10",
    question: "What are some benefits of using a Progressive Web App?",
    options: [
      "They offer slow loading times and limited functionality",
      "They can only be accessed on desktop computers",
      "They offer fast loading times, offline accessibility, push notifications, and the ability to add to the home screen. They also provide a seamless user experience across devices and platforms, and are discoverable by search engines.",
    ],
    correctOption: 2,
  },
  {
    id: "11",
    question: "What is service workers in Progressive Web Apps?",
    options: [
      "A type of employee who works at a PWA company",
      "A feature that allows users to change the color scheme of a PWA",
      "A core feature of Progressive Web Apps that allows developers to cache and serve resources, handle push notifications, and enable offline functionality. They run in the background and are separate from the web page, providing a way to add native app-like features to a web app.",
    ],
    correctOption: 2,
  },
  {
    id: "12",
    question: "What is the App Shell model in Progressive Web Apps?",
    options: [
      "A design pattern for separating the content from the user interface in a PWA",
      "A model for organizing server-side code",
      "A design pattern for separating the core application architecture, including the user interface and logic, from the data and content. It allows for fast loading times, even on slow or unreliable networks, by caching the application shell and updating only the dynamic content.",
    ],
    correctOption: 2,
  },
  {
    id: "13",
    question: "What is the difference between a web app and a native app?",
    options: [
      "A web app is a type of fruit, while a native app is a type of seafood",
      "A web app runs on a web browser and is accessed via a URL, while a native app is downloaded and installed on a device from an app store",
      "A web app is a type of software used for accounting, while a native app is used for social media",
    ],
    correctOption: 1,
  },
  {
    id: "14",
    question: "What is a web app manifest in Progressive Web Apps?",
    options: [
      "A file that describes the history of a web app",
      "A JSON file that describes the web app's metadata, including its name, icon, theme, and other properties. It provides a way for the app to be installed on the user's device and added to the home screen, and enables the app to launch in full-screen mode without a browser interface.",
      "A file that contains user data for a web app",
    ],
    correctOption: 1,
  },
  {
    id: "15",
    question:
      "What are some common pitfalls to avoid when developing a Progressive Web App?",
    options: [
      "Designing for offline usage, optimizing for mobile devices, providing a seamless user experience, leveraging push notifications effectively, and providing clear installation instructions",
      "Not using enough JavaScript, optimizing for desktop devices, providing a poor user experience, ignoring push notifications, and making installation instructions difficult to find",
      "Not using enough images, optimizing for slow network speeds, providing a cluttered user interface, ignoring push notifications, and not providing installation instructions",
    ],
    correctOption: 0,
  },
  {
    id: "16",
    question:
      "What is the Lighthouse tool and how can it be used in Progressive Web Apps?",
    options: [
      "A tool for creating server-side code",
      "An open-source tool developed by Google that analyzes web pages and provides insights and recommendations for improving their performance, accessibility, and other aspects. It can be used to audit and optimize Progressive Web Apps for a better user experience, and can be run from the Chrome DevTools or as a command-line tool.",
      "A tool for creating animations in web apps",
    ],
    correctOption: 1,
  },
  {
    id: "17",
    question: "What is the importance of HTTPS in Progressive Web Apps?",
    options: [
      "It is not important to use HTTPS in PWAs",
      "It provides a way to run a PWA on a local machine",
      "HTTPS is an important security measure that helps protect user data and prevent attacks, such as man-in-the-middle attacks and eavesdropping. It is also a requirement for many of the features of Progressive Web Apps, such as service workers, push notifications, and add-to-home-screen.",
    ],
    correctOption: 2,
  },
  {
    id: "18",
    question:
      "What are some common techniques for improving the performance of a Progressive Web App?",
    options: [
      "Using large images, increasing the amount of JavaScript used, and increasing the number of HTTP requests",
      "Using lazy loading, minimizing the use of JavaScript, and using service workers to cache content",
      "Using large images, minimizing the use of CSS, and increasing the number of HTTP requests",
    ],
    correctOption: 1,
  },
  {
    id: "19",
    question: "What is the Web App Manifest in Progressive Web Apps?",
    options: [
      "A tool for creating animations in PWAs",
      "A JSON file that provides metadata about a Progressive Web App, such as its name, icons, theme color, and start URL. It allows users to add the app to their home screen and provides a native-like experience.",
      "A tool for optimizing images in PWAs",
    ],
    correctOption: 1,
  },
  {
    id: "20",
    question: "What is a service worker in Progressive Web Apps?",
    options: [
      "A tool for creating animations in web apps",
      "A type of employee who works on a PWA",
      "A JavaScript file that runs separately from the main browser thread and can intercept network requests, cache responses, and provide offline functionality. It can be used to improve performance, reliability, and user experience in Progressive Web Apps.",
    ],
    correctOption: 2,
  },
  {
    id: "21",
    question: "What is the difference between a web app and a native app?",
    options: [
      "A web app runs in a web browser and is accessed through a URL, while a native app is installed on a device and runs natively using the device's operating system. Native apps can have more access to device features and provide a more seamless user experience, but web apps can be accessed on any device with a web browser and do not require installation or updates.",
      "A web app is a type of food, while a native app is a type of clothing",
      "A web app is a type of car, while a native app is a type of house",
    ],
    correctOption: 0,
  },
  {
    id: "22",
    question: "What are some examples of Progressive Web Apps?",
    options: [
      "Microsoft Office, Adobe Photoshop, Slack",
      "Twitter, Facebook, LinkedIn",
      "Twitter Lite, Starbucks, Pinterest, and Flipboard. These apps provide a fast and engaging user experience and work across different devices and platforms.",
    ],
    correctOption: 2,
  },
  {
    id: "23",
    question: "What is the App Shell architecture in Progressive Web Apps?",
    options: [
      "An architecture that separates the data from the logic of a PWA",
      "An architecture that separates the content and user interface from the core application logic, allowing for faster loading times and better performance. The shell is loaded once and contains the essential elements of the app, such as the header, footer, and navigation, while the content is dynamically loaded as the user interacts with the app.",
      "An architecture that combines the logic and user interface of a PWA",
    ],
    correctOption: 1,
  },
  {
    id: "24",
    question: "What are some benefits of using Progressive Web Apps?",
    options: [
      "Slow loading times, poor user experience, and difficulty in reaching users",
      "Faster development time and lower cost",
      "Fast and engaging user experience, offline access, cross-platform compatibility, and seamless updates",
    ],
    correctOption: 2,
  },
];
export default progressiveWebAPIQuiz;
