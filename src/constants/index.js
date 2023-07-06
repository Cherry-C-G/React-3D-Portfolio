import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    // meta,
    //  starbucks,
    // tesla,
    // shopify,
    //carrent,
    // jobit,
    // tripguide,
    threejs,
    Antra1,
    jagoLink,
    beaconFire1,
    ASP,
    angular,
    celia_logo,
    HR_Github,
    QuizApp,
    e_bookstore,
    //gym_management,
    gymNET,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "ASP .NET Developer",
      icon: backend,
    },

    {
      title: "ASP .NET Full-Stack Developer",
      icon: creator,
    },
    {
      title: "Angular/React Frontend Developer",
      icon: mobile,
    },
    // {
    //   title: "React Frontend Developer",
    //   icon: mobile,
    // },


    {
      title: "C# Backend Developer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "ASP",
      icon: ASP,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    // {
    //   title: "React.js Developer",
    //   company_name: "Starbucks",
    //   icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "March 2020 - April 2021",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "ASP .NET Full-Stack Developer",
      company_name: "Antra Inc.",
      icon: Antra1,
      iconBg: "#383E56",
      date: "April 2022 - October 2022",
      points: [
        "Used MVC framework for developing the application as it will distribute the development in Model, Views, and Controllers supporting stateless development.",
        "Implemented .NET classes for Business Logic Layer using C# and used Entity Framework to implement a data access layer. ",
        "Created and maintained database objects like complex Stored Procedures, Triggers, Virtual Tables, Views, and SQL Joins. ",
        "Implemented Data Access Object for application to access and manipulate the data in SQL Server database.",
        "Developed complex MVC Controller and ViewModels linked to the backend database. ",
        "Used ASP.NET MVC Page Controller pattern to add functionality to individual pages such that to accept input from the page request and invoke the requested actions.  ",
        "Created Client-side validations with jQuery selectors, Events, and Server-side validations with ASP.NET. ",
        "Performed asynchronous controllers / methods in ASP.NET Web API using Tasks, Async, and Await.",
        "Performed Unit Testing and wrote unit tests using XUnit and MOQ as the mocking framework.",
        "Employed Agile (SCRUM) methodology during development and took responsibility for attending daily scrum meetings to cater to the client’s requirements.",

        // "Developing and maintaining web applications using ASP.NET and other related technologies.",
        // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "ASP .NET Full-Stack Developer",
      company_name: "JagoLink Inc.",
      icon: jagoLink,
      iconBg: "#E6DEDD",
      date: "October 2022 - Present",
      points: [
        "Designed and developed the application using Angular 14, HTML5, CSS3, Bootstrap, TypeScript, ASP.NET Core, Web API, and Entity Framework Core.",
        "Utilized Route Guard to determine whether it should allow navigation to a requested route based on different user roles.",
        "Used Two-way data binding for synchronization of data between model and view components, string interpolation to present data to the user, and event binding to call functions as a response to user actions in templates.",
        "Utilized Angular CLI to generate services for data accessing and implemented Dependency Injection to inject services into the component. ",
        "Implemented Code-First Entity Framework Core with Fluent API to configure the mapping between database schema and the objects in the application.",
        "Participated in daily scrum meetings and applied Agile methodologies to ensure everyone in the team cooperated well and communicated efficiently.",
        "Tested ASP.NET Core Web API service by using Postman to troubleshoot the issues in the application.",
        "Utilized RabbitMQ to push reminder messages when users need to write a business assessment and rating for services.",
        "Performed MS Test framework to write and execute unit tests to verify the functionality of the application components.",

        // "Developing and maintaining web applications using React.js and other related technologies.",
        // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "ASP .NET Full-Stack Developer",
      company_name: "BeaconFire Inc.",
      icon: beaconFire1,
      iconBg: "#383E56",
      date: "Dec 2022 - Present",
      points: [
        "Responsible for designing and developing the UI using Angular 15, Bootstrap, TypeScript, HTML, CSS, and JavaScript.",
        "Performed Single Page Applications (SPA) using Angular 10, Dependency Injection, Routing, Components, Services, Lazy Loading, Custom Directives, Pipes, and Promises.  ",
        "Implemented routing using Angular 15 Router module for navigating in different components of the application and protected routes using Route Guards.  ",
        "Created JWT-based Authorization and Authentication in.NET Web API using Auth Guard.",
        "Developed web applications with Microsoft SQL Server databases, including creating tables, views, stored procedures, and complex queries to efficiently store and retrieve data.",
        "Engineered Dependency Injection (DI) to improve modularity, extensibility, and testability of the application.",
        "Built REST APIs with CRUD operation and made calls to the web services using URLs, which would perform GET, PUT, POST, and DELETE operations on the server. ",
        "Maintained different layers of the application using MVC structure including Controller, Service, and DTO. ",
        "Utilized HTTPClient and interceptors for error handling, authentication, and authorization.",
        "Configured CORS using ASP.NET Core CORS Middleware and diagnostic logging with Authentication and Serilog, respectively.",
        "Performed Microsoft Azure Service Bus to send and receive messages from a queue and Azure Function to store into various Azure data services such as Azure SQL DB and DocumentDB.",
        "Utilized Azure Blob Storage to store and manage image files for the web application.",
        "Implemented Code First approach in Entity Framework Core using Fluent API and Data Annotations to configure mappings, relationships, constraints, and other aspects of the data model.",
        "Employed xUnit and MOQ framework for unit testing to improve code quality, catch errors early, and facilitate regression testing.",
        "Utilized the GIT source control software to keep track of new and past versions of code written in the application.",
        "Performed Agile (SCRUM) methodology for the development and was responsible for attending daily scrum meetings to accommodate clients' requirements.",


        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Personal Porfolio Website",
      company_name: "React with 3D animation",
      icon: celia_logo,
      iconBg: "#383E56",
      date: " Present",
      points: [
        "Responsible for designing and developing the UI using React, Redux TypeScript, HTML, CSS, and JavaScript.",
        "Utilized React Hooks to manage application life-cycle processes such as useEffect, useState, useNavigate, and useHistory.",
        "Implemented routing using React Router for navigating different components of the application.",
        "Implemented Responsive Web Design(RWD) techniques such as flexible grids and layouts, and CSS Media Queries for users’ experience on different screens.",
        "Engineered Dependency Injection (DI) to improve modularity, extensibility, and testability of the application.",
        "Built 3D graphs with ThreeJS for rendering and nimating the 3D model ",
        "Utilized Reat Three Fiber for creating 3D graphics with ThressJS in React",
        "Employed TialwindCSS for utility-first CSS stylling framework",
        "Implemented Framer Motion to bring React website to life with animations",
        "Created and cusomized 3D models and geometries with various lights, as well as understand the 3D world with a camera and positioning of an object in space.",
        "Wrote resuable and scalable code with Higher Order Components(HOCs) and other industry-standard best practices.",
        "Implemented sending emails through a form on the website via emailjs.",
        "Ensured responsiveness across all devices and improve your site's performance using Suspense and Preload.",
       
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "HR System Web Application",
      description:
        "Web-based platform that allows HR manages employees, onboarding, housing, and other HR-related tasks.",
      tags: [
        {
          name: "ASP .NET",
          color: "blue-text-gradient",
        },
        {
          name: "Azure SQL Server Database",
          color: "green-text-gradient",
        },
        {
          name: "Azure Service Bus",
          color: "blue-text-gradient",
        },
        {
          name: "Azure Blob Storage",
          color: "green-text-gradient",
        },
        {
          name: "C#",
          color: "pink-text-gradient",
        },
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "REST API",
          color: "pink-text-gradient",
        },
      ],
      image: HR_Github,
      source_code_link: "https://github.com/Cherry-C-G/HR-Managemnet-System.git",
    },
    {
      name: "Quiz App",
      description:
        "Web application that allows users to take quizzes and view their scores. Admin may add, delete, and update quizzes and answers.",
      tags: [
        {
          name: "ASP .NET",
          color: "blue-text-gradient",
        },
        {
          name: "SQL Server Database",
          color: "green-text-gradient",
        },
        {
          name: "Entity Framework",
          color: "pink-text-gradient",
        },
        {
          name: "MVC",
          color: "blue-text-gradient",
        },
      ],
      image: QuizApp,
      source_code_link: "https://github.com/Cherry-C-G/QuizApp2.git",
    },
    {
      name: "E-Bookstore Website",
      description:
        "Customers may brows books on the website and purchase them. Admins may add, delete, and update books on the website.",
      tags: [
        {
          name: "MVC",
          color: "blue-text-gradient",
        },
        {
          name: "SQL Server Database",
          color: "green-text-gradient",
        },
        {
          name: "ASP.NET",
          color: "pink-text-gradient",
        },
        {
          name: "Fluent API",
          color: "blue-text-gradient",
        },
        {
          name: "Entity Framework",
          color: "green-text-gradient",
        },
        
      ],
      image: e_bookstore,
      source_code_link: "https://github.com/Cherry-C-G/E-Bookstore.git",
    },
    {
      name: "Gym Management System",
      description:
        "Customers may brows books on the website and purchase them. Admins may add, delete, and update books on the website.",
      tags: [
        {
          name: "MVC",
          color: "blue-text-gradient",
        },
        {
          name: "SQL Server Database",
          color: "green-text-gradient",
        },
        {
          name: "ASP .NET",
          color: "pink-text-gradient",
        },
        {
          name: "Fluent API",
          color: "blue-text-gradient",
        },
        {
          name: "Entity Framework",
          color: "green-text-gradient",
        },
      ],
      image: gymNET,
      source_code_link: "https://github.com/Cherry-C-G/Gym-Managemnet-.NET7.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  