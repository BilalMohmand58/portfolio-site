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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  CoffeShop,
  weatherApp,
  touristooApp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Front end development",
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
    name: "React JS",
    icon: reactjs,
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Internship",
    company_name: "Sync Interns",
    // icon: starbucks,
    // iconBg: "#383E56",
    date: "March 2023 - April 2021",
    points: [
      "Developed responsive user interfaces using React.js for web applications.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Integrated RESTful APIs to fetch and update data in real-time.",
      "Integrated RESTful APIs to fetch and update data in real-time in my projects.",
      "Implemented user authentication and authorization features using libraries like JWT and Firebase",
      "Utilized Git for version control and collaborated on code repositories using platforms like GitHub",
    ],
  },

  {
    title: "Web Developer",
    company_name: "Freelancing",
    // icon: shopify,
    // iconBg: "#383E56",
    date: "Jan 2022 - Present",
    points: [
      "Transformed client ideas into scalable web solutions, integrating frontend and backend seamlessly",
      "Developed RESTful APIs using Node.js and Express.js for efficient data handling",
      "Collaborated with clients to design robust MERN stack architectures",
      "Created dynamic and interactive user interfaces using React.js, implementing state management solutions like Redux or React Context",
      "Maintained proactive client communication, providing regular updates and addressing feedback",
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
];

const projects = [
  {
    name: "Touristoo App",
    description:
      "Touristoo is full stack web based app where user can post beautiful tourists spots around the world also user can pass comments and reviews on other users posts.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },

      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
    ],
    image: touristooApp,
    source_code_link: "https://github.com/BilalMohmand58/Touristoo-app",
    live_demo_link: "https://touristoo.cyclic.app/",
  },
  {
    name: "Weather Web App",
    description:
      "Web-based weather app Powered by React and styled with Tailwind CSS, it's a simple and user-friendly tool for checking the weather.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "rest api",
        color: "green-text-gradient",
      },
    ],
    image: weatherApp,
    source_code_link: "https://github.com/BilalMohmand58/react-weather-app",
    live_demo_link: "https://bilalmohmand58.github.io/react-weather-app/",
  },

  {
    name: "Blog MERN App",
    description: `Created a MERN stack blog web app with user authentication, comments, and social media sharing. Publish posts, receive feedback, and enjoy features like search bar integration.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "rest api",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/BilalMohmand58/blog-app-mern",
    live_demo_link: "https://github.com/BilalMohmand58/blog-app-mern",
  },

  {
    name: "Coffee Shop UI",
    description: `The React-based Coffee Shop UI is a sleek and modern one-page website that captures the essence of a coffee shop. Its intuitive user interface offers a seamless browsing experience for customers to explore various meals`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "ui design",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: CoffeShop,
    source_code_link: "https://github.com/BilalMohmand58/blog-app-mern",
    live_demo_link: "https://bilalmohmand58.github.io/coffeeShopReact/",
  },

  {
    name: "Expenses Mobile App",
    description: `The Simple Expense Tracker is a user-friendly React Native app for effortless daily expense tracking. Easily add, delete, and update expenses with a clean interface. Stay on top of your finances by viewing recent expenses for the week.`,
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },

      {
        name: "mobile",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/BilalMohmand58/expensesTrackerReactNativeApp",
    live_demo_link:
      "https://github.com/BilalMohmand58/expensesTrackerReactNativeApp",
  },

  {
    name: "GuessNumber Game",
    description: `Guess Number is a thrilling React Native mobile app where players try to guess a secret number within a range. With a sleek interface, input your guesses, receive feedback on whether they're too high or too low`,
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },

      {
        name: "mobile",
        color: "pink-text-gradient",
      },
      {
        name: "game",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/BilalMohmand58/guessNumberReactNativeGame",
    live_demo_link:
      "https://github.com/BilalMohmand58/guessNumberReactNativeGame",
  },
];

export { services, technologies, experiences, testimonials, projects };
