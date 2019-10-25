import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import githubIcon from "../../assets/github.svg";
import { NAV_ITEMS, PROJECTS } from "../../constants/constants";

import styles from "./ProjectContainer.scss";


const renderProject = (project, key) => {
  return (
    <div className={styles.project} key={key}>
      <img className={styles.projectImage} src={project.image} alt="project" />
      <p className={styles.proejctHeading}>{project.name}</p>
      <p className={styles.text}>
        {project.description}
      </p>
      <div className={styles.seeMoreDiv}>
        <a className={styles.seeMoreBtn} href={project.link}>
          <p>See more &#8594;</p>
        </a>
        <a href={project.githubLink} title="Check github repo">
          <img className={styles.githubLink} src={githubIcon} alt="github link" />
        </a>
      </div>

    </div >
  )
}

const renderProjects = () => {
  return (
    PROJECTS.map((project, index) => { return renderProject(project, index) })
  );
}

export default function AboutContainer() {

  return (
    <div>
      <Header location={NAV_ITEMS.projects} />
      <div className={styles.container}>
        <div className={styles.subHeading}>
          PROJECTS
        </div>
        <div className={styles.projects}>
          {renderProjects()}
        </div>

      </div>
      <NavBar location={NAV_ITEMS.projects} />
    </div>
  );
}
