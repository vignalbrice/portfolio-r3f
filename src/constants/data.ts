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
import threejs from "../assets/skills/threejs.png";
import react from "../assets/skills/react.png";
import vue from "../assets/skills/vue.png";
import expressjs from "../assets/skills/expressjs.png";
import nodejs from "../assets/skills/nodejs.png";
import mongodb from "../assets/skills/mongodb.png";
import mysql from "../assets/skills/mysql.png";
import docker from "../assets/skills/docker.png";
import git from "../assets/skills/git.png";
import heroku from "../assets/skills/heroku.png";
import stripe from "../assets/skills/stripe.png";
import paypal from "../assets/skills/paypal.png";



type Project = {
  title: string;
  url: string;
}

type Skill = {
  Frontend: Project[];
  Backend: Project[];
  Database: Project[];
  DevOps: Project[];
  Payment: Project[];
}

export const SKILLS = {
  Frontend: [
    {
      title: "Three.js",
      url: threejs
    },
    {
      title: "React.js & React Native",
      url: react,
    },
    {
      title: "Vue.js",
      url: vue,
    },
  ],
  Backend: [
    {
      title: "Express.js",
      url: expressjs,
    },
    {
      title: "Node.js",
      url: nodejs,
    },
  ],
  Database: [
    {
      title: "MongoDB",
      url: mongodb,
    },
    {
      title: "MySQL",
      url: mysql,
    },
  ],
  DevOps: [
    {
      title: "Docker",
      url: docker,
    },
    {
      title: "Git",
      url: git,
    },
    {
      title: "Heroku",
      url: heroku,
    },
  ],
  Payment: [
    {
      title: "Stripe",
      url: stripe,
    },
    {
      title: "Paypal",
      url: paypal,
    },
  ],
};

export type SkillType = keyof Skill;


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
