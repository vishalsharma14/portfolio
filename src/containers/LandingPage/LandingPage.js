import React from "react";
import history from "../../history";
import NavBar from "../../components/NavBar/NavBar";
import { NAV_ITEMS } from "../../constants/constants";

import styles from "./LandingPage.scss";

const homePageLink = () => {
  history.push("/");
}

export default function LandingPage() {

  return (
    <div className={styles.container}>
      <p className={styles.heading} onClick={homePageLink}>
        VISHAL
      </p>
      <NavBar location={NAV_ITEMS.about} />
    </div>
  );
}
