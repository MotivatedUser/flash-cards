const designPatternsFlashcards = [
  {
    id: "1",
    question: "What is a design pattern in software development?",
    answer:
      "A design pattern is a reusable solution to a common problem that occurs in software design. Design patterns provide a best-practice approach and a shared vocabulary for solving specific design issues, improving code readability, maintainability, and scalability.",
  },
  {
    id: "2",
    question: "What are the main categories of design patterns?",
    answer:
      "Design patterns are generally categorized into three main groups: creational, structural, and behavioral. Creational patterns deal with object instantiation, structural patterns focus on object composition and relationships, and behavioral patterns define how objects communicate and interact with one another.",
  },
  {
    id: "3",
    question: "What is the Singleton design pattern?",
    answer:
      "The Singleton pattern ensures that a class has only one instance and provides a global point of access to that instance. It is commonly used in scenarios where a single shared resource is needed, such as a configuration manager or a database connection pool.",
  },
  {
    id: "4",
    question: "What is the Factory Method design pattern?",
    answer:
      "The Factory Method pattern is a creational pattern that provides an interface for creating objects in a superclass, allowing subclasses to decide which objects to instantiate. It promotes loose coupling and enables extending the application with new object types without modifying existing code.",
  },
  {
    id: "5",
    question: "What is the Observer design pattern?",
    answer:
      "The Observer pattern is a behavioral pattern that defines a one-to-many dependency between objects, so that when one object (the subject) changes state, all its dependent objects (observers) are notified and updated automatically. This pattern is commonly used in event-driven systems and data binding scenarios.",
  },
  {
    id: "6",
    question: "What is the Strategy design pattern?",
    answer:
      "The Strategy pattern is a behavioral pattern that defines a family of interchangeable algorithms, encapsulates each algorithm in a separate class, and allows clients to select an algorithm at runtime. This pattern promotes flexibility, reusability, and separation of concerns in software design.",
  },
  {
    id: "7",
    question: "What is the Module design pattern in JavaScript?",
    answer:
      "The Module pattern is a structural pattern in JavaScript that uses closures to create private state and methods, while exposing a public API. This pattern promotes encapsulation, organization, and separation of concerns by dividing the application code into self-contained, reusable modules.",
  },
  {
    id: "8",
    question: "What is the Model-View-Controller (MVC) design pattern?",
    answer:
      "The Model-View-Controller (MVC) pattern is an architectural pattern that separates an application into three interconnected components: the Model (data and business logic), the View (user interface), and the Controller (input processing and coordination). This pattern promotes separation of concerns, modularity, and maintainability in software design.",
  },
  {
    id: "9",
    question: "What is the Decorator design pattern?",
    answer:
      "The Decorator pattern is a structural pattern that allows adding new behavior to an object dynamically, without modifying its existing code or structure. It involves wrapping an object with a decorator object that has the same interface but adds or overrides some functionality.",
  },
  {
    id: "10",
    question: "What is the Adapter design pattern?",
    answer:
      "The Adapter pattern is a structural pattern that allows two incompatible interfaces to work together by converting the interface of one class into another interface that the client expects. This pattern promotes reusability and flexibility by enabling the integration of legacy or third-party code without modifying existing components.",
  },
  {
    id: "11",
    question: "What is the Proxy design pattern?",
    answer:
      "The Proxy pattern is a structural pattern that provides a surrogate or placeholder object to control access to another object. Proxies can be used for various purposes, such as security, caching, or remote object access, without modifying the original object's code.",
  },
  {
    id: "12",
    question: "What is the Command design pattern?",
    answer:
      "The Command pattern is a behavioral pattern that encapsulates a request as an object, allowing parameterization, queueing, and logging of requests. It separates the object that invokes an operation from the object that actually performs it, promoting loose coupling and greater flexibility.",
  },
  {
    id: "13",
    question: "What is the Facade design pattern?",
    answer:
      "The Facade pattern is a structural pattern that provides a simplified, unified interface to a complex subsystem or group of interfaces, making it easier to use and understand. Facades can improve the organization, readability, and maintainability of the code by hiding complexity behind a single interface.",
  },
  {
    id: "14",
    question: "What is the Mediator design pattern?",
    answer:
      "The Mediator pattern is a behavioral pattern that defines an object that encapsulates how a set of objects interact. It promotes loose coupling by keeping objects from referring to each other explicitly and allowing their interactions to be changed independently.",
  },
  {
    id: "15",
    question: "What is the State design pattern?",
    answer:
      "The State pattern is a behavioral pattern that allows an object to change its behavior when its internal state changes, as if the object changed its class. It promotes flexibility, organization, and separation of concerns by encapsulating state-specific behavior in separate classes.",
  },
  {
    id: "16",
    question: "What is the Template Method design pattern?",
    answer:
      "The Template Method pattern is a behavioral pattern that defines a skeleton of an algorithm in a base class, deferring some steps to subclasses. This allows subclasses to override certain steps without changing the overall algorithm structure, promoting code reusability and maintainability.",
  },
  {
    id: "17",
    question: "What is the Chain of Responsibility design pattern?",
    answer:
      "The Chain of Responsibility pattern is a behavioral pattern that establishes a chain of objects, each of which can handle a request. If an object cannot handle the request, it passes it to the next object in the chain. This pattern promotes separation of concerns, extensibility, and loose coupling.",
  },
  {
    id: "18",
    question: "What is the Composite design pattern?",
    answer:
      "The Composite pattern is a structural pattern that allows treating individual objects and compositions of objects uniformly. It enables building complex, hierarchical structures and simplifies their manipulation by treating both leaf and composite nodes with the same interface.",
  },
  {
    id: "19",
    question: "What is the Builder design pattern?",
    answer:
      "The Builder pattern is a creational pattern that separates the construction of a complex object from its representation. It allows building different representations of the object using the same construction process, promoting flexibility, reusability, and separation of concerns.",
  },
  {
    id: "20",
    question: "What is the Flyweight design pattern?",
    answer:
      "The Flyweight pattern is a structural pattern that minimizes memory usage by sharing as much data as possible with similar objects. It is particularly useful for managing large numbers of objects that share some common properties, reducing memory overhead and improving performance.",
  },
  {
    id: "21",
    question: "What is the Iterator design pattern?",
    answer:
      "The Iterator pattern is a behavioral pattern that provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation. This pattern promotes encapsulation, separation of concerns, and enables the use of different traversal algorithms for different data structures.",
  },
  {
    id: "22",
    question: "What is the Memento design pattern?",
    answer:
      "The Memento pattern is a behavioral pattern that captures and externalizes an object's internal state without violating encapsulation, so that the object can be restored to that state later. This pattern is useful for implementing features such as undo, redo, or snapshot functionality in applications.",
  },
  {
    id: "23",
    question: "What is the Publish/Subscribe design pattern?",
    answer:
      "The Publish/Subscribe pattern, also known as the Observer pattern, is a messaging pattern that establishes a one-to-many dependency between objects. Publishers broadcast messages to subscribers who have registered interest in a particular topic. This pattern promotes loose coupling, scalability, and efficient communication between components in an application.",
  },
  {
    id: "24",
    question: "What is the Visitor design pattern?",
    answer:
      "The Visitor pattern is a behavioral pattern that allows adding new operations to an object structure without modifying the structure itself. It involves separating the algorithm from the object structure it operates on, promoting flexibility, extensibility, and separation of concerns in software design.",
  },
];
export default designPatternsFlashcards;
