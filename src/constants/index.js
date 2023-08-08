import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  // redux,
  // tailwind,
  nodejs,
  mongodb,
  git,
  // figma,
  docker,
  // meta,
  // starbucks,
  iiith,
  jnv,
  // tesla,
  // shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  greddit,
  github,
} from "../assets";
import instagram from "./instagram.png";
import linkden from "./linkeden.png"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Academics & Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Junior @IIITH",
    icon: web,
  },
  {
    title: "Software developer",
    icon: mobile,
  },
  {
    title: "Cyber Security Enthusiast",
    icon: backend,
  },
  {
    title: "Cricket Lover",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
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
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "B.Tech.(CSE)",
    company_name: "IIIT-Hyderabad",
    icon: iiith,
    iconBg: "#383E56",
    date: "Nov 2021 - Present",
    points: [
      "Programm: Computer Science and Engineering",
      "C,C++,Data Structure & Algorithm,operating System,Computer Networks",
      "Machine and Data Learning,Design Analysis & System Software ",
    ],
  },
  {
    title: "Senior High School",
    company_name: "JNV Bahraich,UP",
    icon: jnv,
    iconBg: "#E6DEDD",
    date: "July 2018 - Jun 2020",
    points: [
      "Score: 94.4%",
      "Physic,Chemistry,Mathematics,Biology",
    ],
  },
  {
    title: "High Hchool",
    company_name: "JNV Bahraich,UP",
    icon: jnv,
    iconBg: "#383E56",
    date: "July 2016 - Jun 2018",
    points: [
      "Score: 93.4%",
      "English,Hindi,Science,Social Science,Mathematics",
  
    ],
  },
  // {
    // title: "Full stack Developer",
    // company_name: "Meta",
    // icon: meta,
    // iconBg: "#E6DEDD",
    // date: "Jan 2023 - Present",
    // points: [
    //   "Developing and maintaining web applications using React.js and other related technologies.",
    //   "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //   "Implementing responsive design and ensuring cross-browser compatibility.",
    //   "Participating in code reviews and providing constructive feedback to other developers.",
    // ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I am thrilled to connect with you",
    name: "abhinay-maurya",
    // designation: "",
    company: "Linkden",
    image: linkden,
    link:"https://www.linkedin.com/in/abhinay-maurya/"
  },
  {
    testimonial:
      "Lets connect and Share Ideas",
    name: "abhinay-301",
    // designation: "",
    company: "Github",
    image: github,
    link:"https://github.com/abhinay-301",
  },
  {
    testimonial:
      "for latest updates and posts ",
    name: "a.abhinay.m",
    // designation: "",
    company: "instagram",
    image: instagram,
    link:"https://instagram.com/a.abhinay.m"
  },
];

const projects = [
  {
    name: "P2P Vedio Calling App",
    description:
      "Web-based platform that allows users to create and join vedio call,message in real time using link",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/abhinay-301/p2p_Video-Calling-App",
  },
  {
    name: "C-Shell",
    description:
      "CLI same as linux terminal with limited functionality",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "UNIX/Linux",
        color: "green-text-gradient",
      },
      {
        name: "Bash script",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/abhinay-301/C-SHELL",
  },
  {
    name: "GREDDIT",
    description:
      "Social Media app same as reddid with limited functionality",
    tags: [
      {
        name: "MERN stack",
        color: "pink-text-gradient",
      },
      {
        name: "MondoDb",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJs&nodeJs",
        color: "green-text-gradient",
      },
      {
        name: "ReactJs",
        color: "orange-text-gradient",
      },
      // {
      //   name: "NodeJs",
      //   color: "pink-text-gradient",
      // },
    ],
    image: greddit,
    source_code_link: "https://github.com/abhinay-301/DASS_Assgnment-MERN-stack",
  },
  
  {
    name: "AirPort Database",
    description:
      "The database is a CENTRAL AIRPORTS DATABASE MANAGEMENT and its users are the personnel at the airport, the air travellers and their relatives",
    tags: [
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Rational Database",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/abhinay-301/Airport_database",
  },
];

export { services, technologies, experiences, testimonials, projects };
