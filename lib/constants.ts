import { differenceInYears } from "date-fns";
import type { Job } from "./definitions";
import LoopLogo from "@/public/company-logos/loop.svg";
import LancetLogo from "@/public/company-logos/lancet-logo-white.png";
import ITGenieLogo from "@/public/company-logos/itgenie-logo-white.png";

export const EMAIL = "lucangrobler6@gmail.com";

export const CAREER_START_DATE = new Date("2019-06-01");

export const YEARS_EXPERIENCE = differenceInYears(
  new Date(),
  CAREER_START_DATE,
);

export const JOBS: Job[] = [
  {
    companyLogo: LoopLogo,
    companyName: "Loop",
    title: "Intermediate Front-End Developer",
    startDate: new Date("2024-09-01"),
    endDate: null,
    description:
      "Loop is a leading routing and logistics company in South Africa, partnering with major brands like Checkers Sixty60, Kauai, and Nando's, and facilitating over 3 million deliveries per month. I have quickly adapted to a more collaborative environment, working closely within a larger team. I have gained valuable experience in Agile methodologies, including using Jira for ticketing and sprint-based workflows. A key responsibility of mine thus far has been working on one of their core products, the management console, where I focus on frontend code refactoring and cleanup to improve the development experience and resolve existing issues within the application.",
  },
  {
    companyName: "Lancet Laboratories",
    companyLogo: LancetLogo,
    title: "Software Developer",
    startDate: new Date("2023-01-01"),
    endDate: new Date("2024-08-31"),
    description:
      "Coming from my previous role, I transitioned from working independently to collaborating within a team setting, although I remained the sole front-end developer. This allowed me to gain valuable experience working with diverse codebases, ranging from legacy systems to more modern ones. My responsibilities included enhancing functionality, resolving bugs, and ensuring overall system upkeep. Moreover, I had the opportunity to broaden my perspective by understanding how my contributions aligned with broader business objectives, rather than focusing solely on daily tasks. Taking ownership of projects as the sole front-end developer, I closely collaborated with the product team to successfully deliver new features.",
  },
  {
    companyName: "IT Genie",
    companyLogo: ITGenieLogo,
    title: "Web Developer",
    startDate: new Date("2019-06-01"),
    endDate: new Date("2022-12-31"),
    description:
      "As the sole web developer in a small business, I learned to find solutions to various problems and had the opportunity to create websites for different industries. Starting with simple brochure sites, I progressively tackled more advanced web applications with increased features and requirements. This role involved creating, iterating, and maintaining projects, where I learned to build projects from the ground up, continually educating myself on the right tools for each job.",
  },
];

export const TECH_SKILLS = [
  "HTML",
  "CSS",
  "Sass",
  "JavaScript",
  "React",
  "React Router",
  "Gatsby",
  "Contentful",
  "Sanity",
  "Next.js",
  "Firebase",
  "Supabase",
  "TypeScript",
  "Tailwind CSS",
  "Recharts",
  "Figma",
];

export const SOCIALS = {
  twitter: {
    href: "https://twitter.com/@Lucan_G",
    handle: "@Lucan_G",
  },
  bluesky: {
    href: "https://bsky.app/profile/lucan.dev",
    handle: "@lucan.dev",
  },
  gitHub: {
    href: "https://github.com/Lucan616",
    handle: "Lucan616",
  },
  linkedIn: {
    href: "https://linkedin.com/in/lucan-grobler",
    handle: "Lucan Grobler",
  },
} as const;
