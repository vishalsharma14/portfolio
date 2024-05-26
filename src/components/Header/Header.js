import React from "react";

import MobileNavBar from "../MobileNavBar/MobileNavBar";
import history from "../../history";
import styles from "./Header.scss";


const homePageLink = () => {
  history.push("/");
}

export default function Header(props) {
  const location = props.location;

  return (
    <div className={styles.container}>
      <div className={styles.heading} onClick={homePageLink}>
        VISHAL
      </div>
      <div className={styles.mobileNav}>
        <MobileNavBar location={location} />
      </div>
    </div>
  );
}
