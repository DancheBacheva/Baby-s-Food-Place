import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { LoginHeader } from "../LoginHeader/LoginHeader";
import { LogoutHeader } from "../LogoutHeader/LogoutHeader";
import { GoDotFill } from "react-icons/go";

export const Header = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img src="logo.png" alt="" />
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
        <div className={styles.rightContainer}>
          <LoginHeader />
          {/* <LogoutHeader /> */}
        </div>
      </div>
    </>
  );
};
