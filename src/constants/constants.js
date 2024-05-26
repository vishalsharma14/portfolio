import pythonIcon from "../assets/python.svg";
import portfolioIcon from "../assets/portfolio.png";
import onboardIcon from "../assets/onboard.png";

export const NAV_ITEMS = {
  about: "",
  projects: "projects",
  skills: "skills",
  contact: "contact"
};


export const NAV_BAR_ITEMS = [
  {
    name: "ABOUT",
    link: NAV_ITEMS.about
  },
  {
    name: "PROJECTS",
    link: NAV_ITEMS.projects
  },
  // {
  //   name: "SKILLS",
  //   link: NAV_ITEMS.skills
  // },
  {
    name: "CONTACT",
    link: NAV_ITEMS.contact
  },
];

export const PROJECTS = [
  {
    name: "Py-Data-Structures",
    description: "A python package with implementation of abstract data structures published on PYPI.",
    link: "https://pypi.org/project/py-data-structures/",
    githubLink: "https://github.com/vishalsharma14/py-data-structures",
    image: pythonIcon,
  },
  {
    name: "Onboard Canada",
    description: "Web application for helping immigrants to connect. Built using NodeJS, Mongo, VueJS, AWS.",
    link: "https://onboard.projects.sharmavishal.co/",
    githubLink: "https://github.com/vishalsharma14/onboard-canada",
    image: onboardIcon,
  },
  {
    name: "Portfolio",
    description: "My portfolio built using ReactJS, React Hooks & AWS.",
    link: "https://sharmavishal.co",
    githubLink: "https://github.com/vishalsharma14/portfolio",
    image: portfolioIcon,
  }
];

export const GITHUB_URL = "https://github.com/vishalsharma14";

export const LINKEDIN_URL = "https://linkedin.com/in/vishal1401/";