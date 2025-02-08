import pythonIcon from "../assets/python.svg";
import portfolioIcon from "../assets/vishal.jpg";
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

export const HEADLINE = "Engineering Manager | Software Engineer | Cloud Solutions Architect (AWS & Kubernetes)"

export const ABOUT_ME = `Vishal is a seasoned Staff Engineer and Engineering Manager with over nine years of experience in designing, developing, and optimizing scalable software solutions. Based in Kitchener, ON, Vishal has a strong background in backend development, cloud infrastructure, and distributed systems. He excels in leading cross-functional teams, architecting robust systems, and driving technical innovation.

Vishal is also passionate about mentoring his team, fostering a culture of continuous learning and collaboration, and ensuring high-quality software development through rigorous code reviews, automated testing, and adherence to best practices. His commitment to technical excellence and innovation has not only streamlined operations but also contributed significantly to cost-efficiency and performance improvements in his projects.

With a keen interest in leveraging data-driven solutions and AI technologies, Vishal continues to push the boundaries of what’s possible in software engineering, always striving to create impactful, reliable, and efficient systems that meet evolving business needs.
`
