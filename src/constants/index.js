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
  reactl,
  cplus,
  python,
  bash,
  opengli

  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "1. About",
  },
  {
    id: "work",
    title: "2. Work",
  },
  {
    id: "contact",
    title: "3. Contact",
  },
  {
    id: "tech",
    title: "4. Tech",
  },
  {
    id: "services",
    title: "5. Services",
  },
  {
    id: "projects",
    title: "6. Projects",
  }
];

const services = [
  {
    title: "Project 1",
    icon: mobile,
  },
  {
    title: "Project 2",
    icon: mobile,
  },
  {
    title: "Project 3",
    icon: backend,
  },
  {
    title: "Project 4",
    icon: mobile,
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
    name: "React JS",
    icon: reactjs,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "OpenGl",
    icon: opengli,
  },
  {
    name: "CPlusPlus",
    icon: cplus,
  },
  {
    name: "Pthon",
    icon: python,
  },
  {
    name: "bash",
    icon: bash,
  }

];

const experiences = [
  {
    title: "Base2 Lenovo",
    company_name: "Lenovo Qualified PC Service Technician",
    icon: reactl,
    iconBg: "#383E56",
    date: "Nov 2024 - Present",
    points: [
      "Provided technical support and troubleshooting for Lenovo PC products, ensuring customer satisfaction.",
      "Diagnosed hardware and software issues, performed repairs, and conducted system upgrades.",
    ],
  },
  {
    title: "Javali",
    company_name: "Drupal 9 Programmer",
    icon: reactl,
    iconBg: "#383E56",
    date: "Sep 2022 - Feb 2023",
    points: [
      "Developed and maintained Drupal-based websites, themes, and modules.",
      "Customized and extended Drupal functionalities using PHP, HTML, CSS, JavaScript, and other relevant technologies.",
      "Ensured adherence to Drupal coding standards and best practices.",
      "Managed codebase using version control systems such as Git.",
      "Collaborated with cross-functional teams including designers, content creators, and project managers to deliver high-quality Drupal solutions."
    ],
  },

  {
    title: "Web Developer",
    company_name: "Freelancer",
    icon: python,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "IT Technician",
    company_name: "Strong Answer",
    icon: tailwind,
    iconBg: "#383E56",
    date: "Sep 2019 - Sep 2021",
    points: [
      "Assembled custom-built computers according to client specifications.",
      "Diagnosed hardware and software issues and repaired computers efficiently.",
      "Performed hardware upgrades and replacements as necessary.",
      "Installed and configured wired and wireless networks for clients, ensuring optimal performance and security.",
      "Installed point-of-sale (POS) systems in restaurants, including hardware and software components.",
      "Configured POS software, menu items, pricing, and user accounts according to restaurant requirements.",
      "Provided technical support to clients via phone, email, or in-person visits.",
      "Trained clients on how to use computer systems, networks, POS systems, and CCTV systems effectively."
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
