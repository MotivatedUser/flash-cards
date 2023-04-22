const webSecurityQuiz = [
    {
        id: "1",
        question: "What is Cross-Site Scripting (XSS), and how can you prevent it?",
        options: [
          "A type of attack where the user's browser is tricked into running malicious code.",
          "XSS is a security vulnerability that allows an attacker to inject malicious scripts into web pages viewed by other users. Prevention includes encoding user-generated content, validating input, using Content Security Policy (CSP), and using secure libraries for rendering user content.",
          "A security feature that helps prevent unauthorized access to user data.",
        ],
        correctOption: 1,
      },
      {
        id: "2",
        question: "What is Cross-Site Request Forgery (CSRF), and how can you prevent it?",
        options: [
          "CSRF is a type of attack that tricks users into performing unintended actions on a website they are authenticated to. Prevention includes using anti-CSRF tokens, validating the origin and referrer headers, and implementing same-site cookies.",
          "A security vulnerability that allows an attacker to inject malicious scripts into web pages viewed by other users.",
          "A security feature that helps prevent unauthorized access to user data.",
        ],
        correctOption: 0,
      },
      {
        id: "3",
        question: "What is Content Security Policy (CSP), and how does it work?",
        options: [
          "A security vulnerability that allows an attacker to inject malicious scripts into web pages viewed by other users.",
          "CSP is a security feature that helps prevent cross-site scripting and other code injection attacks by specifying allowed sources of content for a web page. It is implemented using HTTP headers or meta tags to define a whitelist of trusted content sources.",
          "A security feature that helps prevent unauthorized access to user data.",
        ],
        correctOption: 1,
      },
      {
        id: "4",
        question: "What is a Same-Origin Policy (SOP), and why is it important?",
        options: [
          "SOP is a web security policy that restricts web pages from accessing data or resources from another origin. It prevents malicious websites from making unauthorized requests to a different site on behalf of the user, protecting sensitive data and user information.",
          "A security vulnerability that allows an attacker to inject malicious scripts into web pages viewed by other users.",
          "A security feature that helps prevent unauthorized access to user data.",
        ],
        correctOption: 0,
      },
      {
        id: "5",
        question: "What are some techniques for securely storing user credentials?",
        options: [
          "A security vulnerability that allows an attacker to inject malicious scripts into web pages viewed by other users.",
          "A security feature that helps prevent unauthorized access to user data.",
          "Use secure password hashing algorithms like bcrypt or Argon2, apply a salt to the password before hashing, and store the hashed password and salt securely. Never store plain-text passwords, and use HTTPS to encrypt communication between client and server.",
        ],
        correctOption: 2,
      },
      {
        id: "6",
        question: "What is Clickjacking, and how can it be prevented?",
        options: [
          "Clickjacking is an attack where an invisible or disguised element is placed over a legitimate clickable element, tricking users into performing unintended actions. Prevention includes using the X-Frame-Options header, implementing frame-busting techniques, and using the Content Security Policy frame-ancestors directive.",
          "A security vulnerability that allows an attacker to inject malicious scripts into web pages viewed by other users.",
          "A security feature that helps prevent unauthorized access to user data.",
        ],
        correctOption: 0,
      },
      {
        id: "7",
        question: "What is a JSON Web Token (JWT), and how is it used?",
        options: [
          "JWT is a compact, URL-safe token format used for secure data transfer between parties. It is commonly used for authentication and authorization purposes, as it can securely store user information and can be signed to verify its authenticity.",
          "A security vulnerability that allows an attacker to inject malicious scripts into web pages viewed by other users.",
          "A security feature that helps prevent unauthorized access to user data.",
        ],
        correctOption: 0,
      },
      {
        id: "8",
        question: "How can you protect against SQL Injection attacks?",
        options: [
          "A security feature that helps prevent unauthorized access to user data.",
          "A security vulnerability that allows an attacker to inject malicious scripts into web pages viewed by other users.",
          "To protect against SQL Injection, use prepared statements or parameterized queries, validate and sanitize user input, limit the privileges of the database user, and employ web application firewalls to block malicious requests.",
        ],
        correctOption: 2,
      },
      {
        id: "9",
        question: "What is the difference between authentication and authorization?",
        options: [
          "Authentication is the process of verifying the identity of a user, while authorization is the process of determining what actions or resources a user is allowed to access based on their identity or role.",
          "A security vulnerability that allows an attacker to inject malicious scripts into web pages viewed by other users.",
          "A security feature that helps prevent unauthorized access to user data.",
        ],
        correctOption: 0,
      },
      {
        id: "10",
        question: "What is HTTPS, and why is it important?",
        options: [
          "A security feature that helps prevent unauthorized access to user data.",
          "A security vulnerability that allows an attacker to inject malicious scripts into web pages viewed by other users.",
          "HTTPS is a secure version of HTTP that encrypts data transmitted between a client and a server using Transport Layer Security (TLS) or Secure Sockets Layer (SSL). It is important for protecting sensitive data, ensuring data integrity, and building user trust.",
        ],
        correctOption: 2,
      },
      {
        id: "11",
        question: "What is CORS (Cross-Origin Resource Sharing), and why is it important?",
        options: [
          "CORS is a security feature that allows web applications to request resources from a different origin. It enables secure cross-origin data sharing while maintaining the Same-Origin Policy to protect users from malicious websites. CORS is important for modern web applications that rely on APIs hosted on different domains or subdomains.",
          "A security vulnerability that allows an attacker to inject malicious scripts into web pages viewed by other users.",
          "A security feature that helps prevent unauthorized access to user data.",
        ],
        correctOption: 0,
      },
      {
        id: "12",
        question: "What are secure cookies, and when should they be used?",
        options: [
          "A security feature that helps prevent unauthorized access to user data.",
          "Secure cookies are cookies transmitted only over HTTPS connections, preventing interception and tampering by malicious actors. They should be used when storing sensitive information, like session identifiers or authentication tokens, to protect user data and maintain the integrity of the application.",
          "A security vulnerability that allows an attacker to inject malicious scripts into web pages viewed by other users.",
        ],
        correctOption: 1,
      },
      {
        id: "13",
        question: "What is the principle of least privilege, and why is it important for web security?",
        options: [
          "The principle of least privilege states that users and applications should have the minimum permissions necessary to perform their tasks. This reduces the potential impact of security breaches and limits the attack surface by minimizing the access attackers can gain through compromised accounts or vulnerabilities.",
          "A security vulnerability that allows an attacker to inject malicious scripts into web pages viewed by other users.",
          "A security feature that helps prevent unauthorized access to user data.",
        ],
        correctOption: 0,
      },
      {
        id: "14",
        question: "What are some best practices for securely transmitting data between the client and the server?",
        options: [
          "A security feature that helps prevent unauthorized access to user data.",
          "A security vulnerability that allows an attacker to inject malicious scripts into web pages viewed by other users.",
          "Use HTTPS to encrypt data in transit, implement secure authentication mechanisms like OAuth or JWT, use secure cookie settings (Secure and HttpOnly flags), and validate and sanitize all user input to protect against injection attacks.",
        ],
        correctOption: 2,
      },
      {
        id: "15",
        question: "What is a web application firewall (WAF), and how does it help with web security?",
        options: [
          "A WAF is a security solution that monitors and filters incoming HTTP/HTTPS traffic to a web application. It protects against common web-based attacks like SQL Injection, XSS, and CSRF by analyzing requests, blocking malicious traffic, and providing customizable security rules.",
          "A security vulnerability that allows an attacker to inject malicious scripts into web pages viewed by other users.",
          "A security feature that helps prevent unauthorized access to user data.",
        ],
        correctOption: 0,
      },
      {
        id: "16",
        question: "What is a security vulnerability disclosure policy, and why is it important?",
        options: [
          "A security feature that helps prevent unauthorized access to user data.",
          "A security vulnerability disclosure policy is a document that provides guidelines for reporting and handling security vulnerabilities found in a web application. It is important because it encourages responsible disclosure, fosters cooperation between developers and security researchers, and helps maintain the security and integrity of the application.",
          "A security vulnerability that allows an attacker to inject malicious scripts into web pages viewed by other users.",
        ],
        correctOption: 1,
      },
      {
        id: "17",
        question: "What are the OWASP Top Ten security risks, and why are they important?",
        options: [
          "The OWASP Top Ten is a list of the most critical web application security risks identified by the Open Web Application Security Project (OWASP). It is important because it helps developers, security professionals, and organizations understand and address common security vulnerabilities and improve the overall security of their applications.",
          "A security vulnerability that allows an attacker to inject malicious scripts into web pages viewed by other users.",
          "A security feature that helps prevent unauthorized access to user data.",
        ],
        correctOption: 0,
      },
      {
        id: "18",
        question: "What is subresource integrity (SRI), and how does it help with web security?",
        options: [
          "A security vulnerability that allows an attacker to inject malicious scripts into web pages viewed by other users.",
          "SRI is a security feature that allows browsers to verify the integrity of external resources, like scripts or stylesheets, by comparing their content against a cryptographic hash provided by the website. It helps prevent attacks like supply chain compromises and malicious tampering of third-party resources.",
          "A security feature that helps prevent unauthorized access to user data.",
        ],
        correctOption: 1,
      },
      {
        id: "19",
        question: "What is the difference between server-side rendering (SSR) and client-side rendering (CSR) in terms of security?",
        options: [
          "In SSR, HTML is generated on the server and sent to the client, reducing the attack surface for XSS attacks. In CSR, HTML is generated on the client, making it more vulnerable to XSS attacks. However, both approaches have their security risks and require proper input validation, output encoding, and other security best practices.",
          "A security vulnerability that allows an attacker to inject malicious scripts into web pages viewed by other users.",
          "A security feature that helps prevent unauthorized access to user data.",
        ],
        correctOption: 0,
      },
      {
        id: "20",
        question: "What is a security header, and how can it help improve web security?",
        options: [
          "A security feature that helps prevent unauthorized access to user data.",
          "A security vulnerability that allows an attacker to inject malicious scripts into web pages viewed by other users.",
          "Security headers are HTTP response headers that provide additional security measures for web applications. They help improve web security by enforcing security policies, preventing attacks like clickjacking, XSS, and content sniffing, and enabling features like secure cookies and strict transport security.",
        ],
        correctOption: 2,
      },
      {
        id: "21",
        question: "What is a brute force attack, and how can you protect against it?",
        options: [
          "A brute force attack is an attempt to gain access to a system by systematically trying all possible combinations of credentials until the correct one is found. Protection includes using strong passwords, implementing account lockout policies, CAPTCHAs, rate limiting, and two-factor authentication.",
          "A security vulnerability that allows an attacker to inject malicious scripts into web pages viewed by other users.",
          "A security feature that helps prevent unauthorized access to user data.",
        ],
        correctOption: 0,
      },
      {
        id: "22",
        question: "What is a man-in-the-middle (MITM) attack, and how can you prevent it?",
        options: [
          "A security vulnerability that allows an attacker to inject malicious scripts into web pages viewed by other users.",
          "A MITM attack occurs when an attacker intercepts communication between two parties, allowing them to read, modify, or inject new data. Prevention includes using HTTPS, implementing certificate pinning, using secure Wi-Fi connections, and employing encrypted communication protocols like TLS.",
          "A security feature that helps prevent unauthorized access to user data.",
        ],
        correctOption: 1,
      },
      {
        id: "23",
        question: "What is input validation, and why is it important for web security?",
        options: [
          "Input validation is the process of ensuring that user-supplied data conforms to expected formats and values. It is important for web security because it helps prevent attacks like SQL injection, XSS, and command injection by filtering out potentially harmful input and reducing the attack surface.",
          "A security vulnerability that allows an attacker to inject malicious scripts into web pages viewed by other users.",
          "A security feature that helps prevent unauthorized access to user data.",
        ],
        correctOption: 0,
      },
      {
        id: "24",
        question: "What are some key security considerations when working with third-party libraries or APIs?",
        options: [
          "A security vulnerability that allows an attacker to inject malicious scripts into web pages viewed by other users.",
          "A security feature that helps prevent unauthorized access to user data.",
          "Considerations include assessing the security reputation of the library or API, keeping them up-to-date, using secure connections (HTTPS), verifying the integrity of external resources (e.g., with Subresource Integrity), and implementing proper error handling and input validation to prevent security vulnerabilities.",
        ],
        correctOption: 2,
      },
]
export default webSecurityQuiz;