import React from "react";
import { NAV_BAR_ITEMS } from "../../constants/constants";

import styles from "./NavBar.scss";


const renderNavBarItems = (location) => {

  return NAV_BAR_ITEMS.map((item, index) => {
    return (
      <div className={`${styles.item} ${location === item.link ? styles.selectedItem : null}`} key={index}>
        {item.name}
      </div>
    )
  })
}

export default function LandingPage(props) {

  const location = props.location;

  return (
    <div className={styles.navbar}>
      <div className={styles.items}>
        {renderNavBarItems(location)}
      </div>
    </div>
  );
}
