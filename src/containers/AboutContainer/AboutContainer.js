import React from "react";
import history from "../../history";
import NavBar from "../../components/NavBar/NavBar";
import { NAV_ITEMS } from "../../constants/constants";
import PROFILE_PIC from "../../assets/vishal.jpg";

import styles from "./AboutContainer.scss";

const homePageLink = () => {
  history.push("/");
}

export default function AboutContainer() {

  return (
    <div>
      <p className={styles.heading} onClick={homePageLink}>
        VISHAL
      </p>
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
            </div>
          </div>
        </div>
      </div>
      <NavBar location={NAV_ITEMS.about} />
    </div>
  );
}
