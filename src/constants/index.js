import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  chartbar,
  ace,
  pchat,
  jobaii,
  threejs,
  terraformLogo,
  jenkinsLogo,
  reviewSenseEdit,
  JobaiShot,
  aceShot,
  ACEshot,
} from "../assets";

import aws from "../assets/tech/awsb.png";

export const socialIcons = [
  { icon: figma, link: "/" },
  { icon: docker, link: "/" },
  { icon: threejs, link: "/" },
  { icon: git, link: "/" },
];

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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "AI Generalist",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AWS Devops",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "Terraform",
    icon: terraformLogo,
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
    name: "jenkins",
    icon: jenkinsLogo,
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
    name: "aws",
    icon: aws,
  },
];

const experiences = [
  {
    title: "FullStack Developer",
    company_name: "Review Sense",
    icon: chartbar,
    iconBg: "#383E56",
    date: " July 2025 - Oct 2025",
    link: "https://review-sense-pro.vercel.app/",
    points: [
      "Full-stack web application featuring AI-powered review summarization, real-time analytics dashboards, and comprehensive admin panel.",
      "Built with React, TypeScript, Express, Prisma, and PostgreSQL. Deployed on Vercel and Render serving 50+ products and 500+ reviews.",
      "Integrated OpenAI for intelligent review summarization, reducing analysis time by 80%",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "React Next.Js Developer",
    company_name: "ACE-Pharmacy",
    icon: ace,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - June 2025",
    link: "https://acepharmacy.vercel.app/",
    points: [
      "A Next.Js e-commerce web application for a pharmacy firm to sell physical products and offer paid consultations.",
      "Integrate and develop a prescription management system that helps both the patient and pharmacy firm keeps track of the recommended drug prescribed",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Added features for blog management, order processing, and service booking.",
    ],
  },
  {
    title: "Express | AI Chatbot",
    company_name: "Pharmacy Chatbot",
    icon: pchat,
    iconBg: "#383E56",
    date: "sept 2024 - Nov 2024",
    link: "https://pharmacy-chat-pro.vercel.app/",
    points: [
      "An intelligent chatbot for a pharmaceutical e-commerce platform using React and TypeScript, providing 24/7 customer support for medication inquiries and prescription services",
      "Engineered a RESTful API with Express.js integrating OpenAI's GPT model with custom prompt engineering to deliver accurate, HIPAA-compliant pharmaceutical information.",
      "Architected a full-stack monorepo using Bun, React 19, Express, and serverless deployment",
      "Designed responsive UI with React Hook Form and Tailwind CSS, featuring real-time chat, auto-resizing inputs, and animated pharmacy-themed backgrounds",
    ],
  },
  {
    title: "AI Career Guardian system",
    company_name: "Job-AI",
    icon: jobaii,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    link: "https://job-ai-dvzd.vercel.app/",
    points: [
      "A JavaScript, Next.js, PostgreSQL, Tailwind, Shacdn UI, Clerk auth, Node.js, Docker and Germini AI API project.",
      "A Roburst AI data-driven career guidance system that helps users make updated/informed professional decisions.",
      "A fully functional AI-powered platform that assists users in job searching, resume building, and interview preparation.",
      "Incorporates key Industry Insights feature for Users Stay ahead with real-time industry trends, salary data, and market analysis.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "From UI design to backend architecture, Oreva demonstrated outstanding technical ability. Their problem-solving skills and dedication made all the difference for our team.",
    name: "Ruth Reff",
    designation: "CEO",
    company: "Rutharine",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Professional, reliable, and highly skilled! Oreva delivered our project on time and provided valuable insights that improved our platform’s performance and scalability.",
    name: "Mudi Spooky ",
    designation: "Chief Manager",
    company: "DRCi",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "If you need a developer who truly understands how to build robust and user-friendly applications, Oreva is the one. Their work on our inventory management system was nothing short of excellent!",
    name: "Emmanuel Jude",
    designation: "CTO",
    company: "403 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Review-Sense",
    description:
      "An AI-powered review summarization solution with real-time analytics dashboards, and comprehensive admin panel.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "blue-text-gradient",
      },
    ],
    image: reviewSenseEdit,
    source_code_link: "https://github.com/Oreva-J/review-sense",
  },
  {
    name: "Job AI",
    description:
      "A Roburst AI data-driven career guidance system that helps users make updated/informed professional decisions.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
      {
        name: "Gemini API",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "red-text-gradient",
      },
    ],
    image: JobaiShot,
    source_code_link: "https://github.com/Oreva-J/job-ai",
  },
  {
    name: "ACE-Pharmacy",
    description:
      "A Roburts e-commerce web application for pharmacy firm to sell physical products and offer paid consultations with Integrated prescription management system",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Claudinary",
        color: "pink-text-gradient",
      },
      {
        name: "Clark",
        color: "blue-text-gradient",
      },
    ],
    image: ACEshot,
    source_code_link: "https://acepharmacy.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
