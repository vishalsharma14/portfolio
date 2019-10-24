
import React, { useState } from "react";
import { NAV_BAR_ITEMS } from "../../constants/constants";
import { navigate } from "../../utils/utils";

import menuIcon from "../../assets/menu-icon.svg";
import styles from "./MobileNavBar.scss";


const renderNavBarItems = (location) => {

  return NAV_BAR_ITEMS.map((item, index) => {
    return (
      <div className={`${styles.item} ${location === item.link ? styles.selectedItem : ''}`}
        key={index}
        onClick={() => { navigate(item.link) }}>
        {item.name}
      </div>
    )
  })
}

export default function MobileNavBar(props) {

  const [showNav, updateShowNavBar] = useState(false);

  const showNavBar = () => {
    updateShowNavBar(true);
  }

  const hideNavBar = () => {
    updateShowNavBar(false);
  }

  const location = props.location;

  return (
    <div className={styles.container}>
      {showNav ?
        <div className={styles.sidepanel}>
          <div className={styles.closebtn} onClick={hideNavBar}>×</div>
          <div className={styles.navItems}>
            {renderNavBarItems(location)}
          </div>
        </div>
        : null
      }


      <div className={styles.openbtn} onClick={showNavBar}>
        <img src={menuIcon} alt="menu icon" />
      </div>
    </div>
  );
}
