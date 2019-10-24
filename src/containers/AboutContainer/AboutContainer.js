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
              <p className={styles.connectBtn} onClick={() => navigate(NAV_ITEMS.contact)}>Connect with me</p>
            </div>
          </div>
        </div>
      </div>
      <NavBar location={NAV_ITEMS.about} />
    </div>
  );
}
