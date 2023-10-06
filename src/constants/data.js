import { MdOutlineScreenshotMonitor, MdPayments } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import {
  FaDatabase,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";

export const SKILLS = {
  Frontend: [
    {
      title: "Three.js",
      level: 60,
    },
    {
      title: "React.js & React Native",
      level: 90,
    },
    {
      title: "TypeScript",
      level: 70,
    },
  ],
  Backend: [
    {
      title: "Express.js",
      level: 40,
    },
    {
      title: "Node.js",
      level: 70,
    },
  ],
  Database: [
    {
      title: "MongoDB",
      level: 70,
    },
    {
      title: "MySQL",
      level: 70,
    },
  ],
  DevOps: [
    {
      title: "Docker",
      level: 20,
    },
    {
      title: "Git",
      level: 90,
    },
    {
      title: "Heroku",
      level: 80,
    },
  ],
  Payment: [
    {
      title: "Stripe",
      level: 70,
    },
    {
      title: "Paypal",
      level: 70,
    },
  ],
};

export const STACKS = [
  {
    title: "Frontend / Mobile",
    skills: "Frontend",
    icon: MdOutlineScreenshotMonitor,
  },
  {
    title: "Backend / API",
    skills: "Backend",
    icon: TbApi,
  },
  {
    title: "Database",
    skills: "Database",
    icon: FaDatabase,
  },
  {
    title: "DevOps",
    skills: "DevOps",
    icon: AiOutlineApi,
  },
  {
    title: "Payment / Tools",
    skills: "Payment",
    icon: MdPayments,
  },
];

export const SOCIALS = [
  {
    title: "Phone",
    icon: FaPhone,
    link: "tel:+628953555555",
  },
  {
    title: "Github",
    icon: FaGithub,
    link: "https://github.com/vignalbrice",
  },
  {
    title: "Linkedin",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/brice-vignal-302307146",
  },
  {
    title: "Twitter",
    icon: FaTwitter,
    link: "https://twitter.com/WholeEver",
  },
];
