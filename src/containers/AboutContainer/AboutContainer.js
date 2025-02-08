import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import { NAV_ITEMS, ABOUT_ME, HEADLINE } from "../../constants/constants";

import PROFILE_PIC from "../../assets/vishal.jpg";

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
              ABOUT ME
            </div>
            <div className={styles.text}>
              <p>
                {HEADLINE}
              </p>
              <p className={styles.aboutMe}>
                {ABOUT_ME}
              </p>
              <div className={styles.skillSubHeading}>
                SKILLS
              </div>
              <p className={styles.skillText}>
                <b>Languages/Frameworks:</b> Python, Flask, Django, NodeJS (Express), ReactJS, Flask, JavaScript (ES6).
              </p>
              <p>
                <b>Databases:</b> MySQL, PostGreSQL, MongoDB, Redis, Elastic Cache, Elastic Search
              </p>
              <p>
                <b>AWS:</b> Amazon EC2, Amazon EKS, Amazon S3, Amazon Route 53, Elastic Load Balancing (ELB), Amazon CloudFront, AWS IAM, AWS Identity Center, Amazon ElastiCache, Amazon RDS, Amazon Aurora, AWS CloudWatch
              </p>
              <p>
                <b>Other:</b> HTML5, CSS3, C++, PHP, Git, Web Development, Integrations, Unix/Linux, AWS Services.
              </p>
            </div>
          </div>
        </div>
      </div>
      <NavBar location={NAV_ITEMS.about} />
    </div>
  );
}
