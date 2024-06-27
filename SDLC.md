# Software Development Life Cycle (SDLC) Plan

This document outlines the high-level strategy and plan for developing the front end of the Transposit system.

## Table of Contents <a name="table-of-contents"></a>

1. [Inception](#inception)
2. [Design](#design)
3. [Implementation](#implementation)
4. [Testing](#testing)
5. [Deployment & Maintenance](#d-m)
   - [Deployment](#deployment)
   - [Maintenance](#maintenance)

---

## Inception Overview <a name="inception"></a>

1. **Identified the key stakeholders**:
   - The main stakeholders of this project are myself, Dalron J. Robertson, and other users who will interact with the system. The front end is designed for personal use and to enhance the user experience for financial transaction management.
2. **Gathered requirements**:
   - Through my experience and analysis of user needs, I determined the essential features for the front end. These included user-friendly interfaces for managing accounts, handling deposits, creating and editing distribution rules, and viewing transaction reports.
3. **Defined the system's scope**:
   - Based on the requirements, I defined the scope of the front end application to ensure it would fully support the functionalities required for an advanced money transfer system.
4. **Outlined initial resources and timelines**:
   - I determined the resources needed, such as development tools and technologies, and created a preliminary timeline for the development process.
5. **Designed the system architecture**:
   - A crucial step was designing a comprehensive component structure to ensure efficient development and maintenance. The architecture was built with a focus on scalability and reusability.

---

## Design <a name="design"></a>

1. **Component Design**:
   - Using the requirements I gathered, I designed a component-based architecture in React. The structure includes several components to efficiently manage user interfaces, such as pages for account management, transaction handling, and distribution rules.
2. **Routing Design**:
   - I implemented React Router for client-side routing. This ensures that users can navigate between different pages seamlessly.
3. **Application Architecture Design**:
   - I adopted a modular architecture for the application. With React as the main framework, I structured the front end into reusable components, pages, and utilities to handle various aspects of the application.
4. **State Management**:
   - I planned for the use of React's useState and useEffect hooks for local state management. Additionally, for global state management, I considered integrating a state management library like Redux if needed in the future.
5. **Error Handling and Logging Design**:
   - To enhance maintainability and debuggability, I planned for comprehensive error handling and logging using tools like console and potential integration with logging services.
6. **Performance Considerations**:
   - While designing the front end, I considered the system's performance. I made provisions for optimizing component rendering and minimizing network requests.

---

## Implementation <a name="implementation"></a>

During the implementation phase of the project, I translated the application design and plan into actual code. I adopted a modular approach, focusing on implementing one feature at a time, which improved the clarity of the code and facilitated easier debugging and testing. The implementation phase was divided into various stages, as detailed below:

1. **Environment Setup**:
   - I started by setting up the development environment. This involved installing the necessary software and libraries such as Node.js, React, and others. I also initialized the project using create-react-app, creating a package.json file to track the project's dependencies and metadata.
2. **Component Creation**:
   - I built the necessary components using React. Each component was designed to handle specific functionality, such as displaying account details, managing transactions, and editing distribution rules.
3. **Routing Implementation**:
   - I integrated React Router to manage client-side routing. This allowed for seamless navigation between different pages of the application.
4. **State Management**:
   - I implemented local state management using React hooks (useState and useEffect). For more complex state management, I planned to integrate Redux or another state management library if needed.
5. **Integration**:
   - After completing the individual components, I focused on integrating all parts of the application. I ensured that the components correctly interacted with each other and the backend API.
6. **Performance Optimization**:
   - I optimized the application for better performance. This included optimizing component rendering, minimizing network requests, and implementing lazy loading for components.

---

## Testing <a name="testing"></a>

Testing is a critical phase in the software development lifecycle. It helps ensure the functionality, reliability, performance, and user experience of the application. For this project, manual and automated testing were conducted through extensive logging and step-by-step verification of each functionality.

### Testing Approach

1. **Component Testing**: Each React component was tested to ensure it rendered correctly and handled user interactions as expected.
2. **Routing Testing**: The routing functionality was tested to ensure that navigation between pages worked correctly.
3. **Integration Testing**: The interactions between components and with the backend API were tested to ensure data was fetched and displayed correctly.
4. **Performance Testing**: The performance of the application was tested to ensure it loaded quickly and handled user interactions smoothly.

### Example Testing Process

For example, to test the **Account Details** component:

1. **Rendering Test**:

   - Use a testing library like React Testing Library to render the component and verify that it displays the correct information.

   ```javascript
   import { render, screen } from "@testing-library/react";
   import AccountDetails from "./AccountDetails";

   test("renders account details", () => {
     render(
       <AccountDetails account={{ name: "Savings Account", balance: 5000 }} />
     );
     expect(screen.getByText("Savings Account")).toBeInTheDocument();
     expect(screen.getByText("5000")).toBeInTheDocument();
   });
   ```

2. **User Interaction Test**:

   - Simulate user interactions, such as clicking a button, and verify the expected behavior.

   ```javascript
   import { render, screen, fireEvent } from "@testing-library/react";
   import AccountDetails from "./AccountDetails";

   test("handles edit button click", () => {
     render(
       <AccountDetails account={{ name: "Savings Account", balance: 5000 }} />
     );
     fireEvent.click(screen.getByText("Edit"));
     expect(screen.getByText("Edit Account")).toBeInTheDocument();
   });
   ```

By following this detailed testing process, you can ensure each part of the system works as intended and catch any issues early.

---

## Deployment & Maintenance <a name="d-m"></a>

### Deployment <a name="deployment"></a>

Deployment is the phase where the application is made available to end users. For the Transposit project, I've chosen [Netlify](https://www.netlify.com) as the deployment platform, given its simplicity, reliability, and excellent support for React applications.

Netlify enables automatic deployments from your GitHub or GitLab repositories, along with integrated support for HTTPS, custom domains, and continuous integration/continuous deployment (CI/CD).

Here's a snapshot of the deployment process:

1. **Push to Repository**: I commit and push the finalized application code to the repository.
2. **Connect to Netlify**: Link the GitHub repository to the Netlify account. This sets up Netlify to watch for changes in the repository.
3. **Automatic Deployments**: Netlify automatically deploys the application whenever I push to the selected branch of the repository. This ensures the application is always up-to-date with the latest changes.
4. **Verify Deployment**: Once Netlify deploys the application, I thoroughly test it to ensure it functions correctly in the live environment.

### Maintenance <a name="maintenance"></a>

Maintenance is an ongoing process of monitoring, updating, and improving the application post-deployment. I use Netlify's integrated metrics and analytics to continually monitor the application's performance and health.

1. **Monitor Performance**: I continuously keep tabs on the application's performance, reliability, and usage patterns using Netlify's analytics tools.
2. **Updates and Improvements**: As I collect user feedback and data, I iterate on the application, making updates and improvements as necessary. These changes are tested in the development environment before being deployed to the live site.
3. **Security Updates**: I stay alert to any potential security vulnerabilities and promptly update the application with necessary security patches.

Through these Deployment and Maintenance procedures, I ensure that the application is not only always accessible to users but also continues to meet and exceed their needs over time. This also helps maintain a robust, secure, and high-performing application that aligns with industry best practices.

---

## Credits <a name="credits"></a>

Transposit was designed and developed by Dalron J. Robertson, showcasing his expertise in front-end development and his commitment to creating efficient, user-friendly, and scalable solutions for financial transaction management.

**Project Lead and Developer**: Dalron J. Robertson

## Contact Information <a name="contact-information"></a>

For any questions, feedback, or contributions, please contact:

- Email: dalronj.robertson@gmail.com
- Github: [AGuyNamedDJ](https://github.com/AGuyNamedDJ)
- LinkedIn: [Dalron J. Robertson](https://www.linkedin.com/in/dalronjrobertson/)
- Website: [dalronjrobertson.com](https://dalronjrobertson.com)
- YouTube: [AGNDJ](https://youtube.com/@AGNDJ)
