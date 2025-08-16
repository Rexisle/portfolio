import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com/rex_isle",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com/IamRexisle",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/rexisle",
  },
] as const;





export const PROJECTS = [
  {
    title: "Easyhowz",
    description: "A modern and user-friendly real estate platform interface designed to connect users with properties quickly and efficiently",
    image: "/projects/easye.png",
    link: "https://www.easyhowz.com/",
  },
  {
    title: "Modern Next.js 14 Portfolio",
    description: "A modern portfolio website built with pure HTML, bootsrap and custom CSS.",
    
    image: "/projects/screen6.png",
    link: "https://rexisle.github.io/theweboga/",
  },
  
  {
    title: "Official football fans Website",
    description: "A video-themed football fans website for blog post and videos built with Laravel",
    
    image: "/projects/screen.png",
    link: "https://fanstribehq.com/",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
     
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Work with me",
    link: "#footer",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};
