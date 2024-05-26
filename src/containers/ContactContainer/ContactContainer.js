import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import { NAV_ITEMS } from "../../constants/constants";
import githubLogo from "../../assets/github.svg";
// import linkedInLogo from "../../assets/linkedin.png";
import linkedInLogo from "../../assets/linkedin.svg";
// import linkedInLogo from "../../assets/linkedin-1.svg";
import { GITHUB_URL, LINKEDIN_URL } from "../../constants/constants";

import styles from "./ContactContainer.scss";


export default function ContactContainer(props) {

  return (
    <div>
      <Header location={NAV_ITEMS.contact} />
      <div className={styles.container}>
        <div className={styles.contactDiv}>
          <div className={styles.subHeading}>
            CONTACT
          </div>
          <div className={styles.text}>
            <p>vishal.sharma9597@gmail.com</p>
            <a href={GITHUB_URL}>
              <img className={styles.socialLogo} src={githubLogo} alt="github logo" />
            </a>
            <a href={LINKEDIN_URL}>
              <img className={styles.socialLogo} src={linkedInLogo} alt="linkedIn logo" />
            </a>
          </div>
        </div>
        <div className={styles.formDiv}>
          {/* <div className={styles.about}>

          </div> */}
        </div>
      </div>
      <NavBar location={NAV_ITEMS.contact} />
    </div>
  );
}
