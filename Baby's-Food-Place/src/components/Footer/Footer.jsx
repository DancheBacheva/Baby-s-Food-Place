import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

function Footer() {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img src="/logo-footer.png" alt="" />
          </Link>
        </div>
        <nav className={styles.middleContainer}>
          <ul>
            <li>
              <Link to="/recipes/breakfast" className={styles.navLink}>
                BREAKFAST
                <span className={styles.dot}>
                  <GoDotFill />
                </span>
              </Link>
            </li>
            <li>
              <Link to="/recipes/brunch" className={styles.navLink}>
                BRUNCH
                <span className={styles.dot}>
                  <GoDotFill />
                </span>
              </Link>
            </li>
            <li>
              <Link to="/recipes/lunch" className={styles.navLink}>
                LUNCH
                <span className={styles.dot}>
                  <GoDotFill />
                </span>
              </Link>
            </li>
            <li>
              <Link to="/recipes/dinner" className={styles.navLink}>
                DINNER
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.rightContainerFooter}>
          <p>Baby's Food Place</p>
          <p>copyright &#169; 2021</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
