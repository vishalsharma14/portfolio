import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import { NAV_ITEMS } from "../../constants/constants";
import PROFILE_PIC from "../../assets/vishal.jpg";
import { navigate } from "../../utils/utils";

import styles from "./AboutContainer.scss";


export default function AboutContainer() {

  return (
    <div>
      <Header location={NAV_ITEMS.about} />
      <div className={styles.container}>
        <div className={styles.picDiv}>
          <img className={styles.picture} src={PROFILE_PIC} alt="profile pic" />
        </div>
        <div className={styles.content}>
          <div className={styles.about}>
            <div className={styles.subHeading}>
              ABOUT
            </div>
            <div className={styles.text}>
              I am a software engineer with 3+ years of experience. My passion lies in
              Web Development and problem solving.
              {/* <p className={styles.connectBtn} onClick={() => navigate(NAV_ITEMS.contact)}>Connect with me</p> */}
              <div className={styles.skillSubHeading}>
                SKILLS
              </div>
              <p className={styles.skillText}>
                <b>Languages/Frameworks:</b> Django, Python, NodeJS (Express), ReactJS, Flask, JavaScript (ES6).
              </p>
              <p>
                <b>Databases:</b> MySQL, PostGreSQL, MongoDB, Redis, Elastic Cache, Elastic Search
              </p>
              <p>
                <b>Other:</b> HTML5, CSS3, Git, Web Development, Integrations, Unix/Linux, AWS Services.
              </p>
            </div>
          </div>
        </div>
      </div>
      <NavBar location={NAV_ITEMS.about} />
    </div>
  );
}
