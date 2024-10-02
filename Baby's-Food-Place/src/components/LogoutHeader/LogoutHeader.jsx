import React from "react";
import styles from "./LogoutHeader.module.css";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

export const LogoutHeader = () => {
  return (
    <>
      <nav className={styles.rightContainer}>
        <ul>
          <li className={styles.myrecipes}>
            <Link to="/myrecipes" className={styles.navLink}>
              MY RECIPES
              <span className={styles.dot}>
                <GoDotFill />
              </span>
            </Link>
          </li>
          <li className={styles.myprofile}>
            <Link to="/myprofile" className={styles.navLink}>
              MY PROFILE
              <span className={styles.dot}>
                <GoDotFill />
              </span>
            </Link>
          </li>

          <li className={styles.logout}>
            <Link to="/" className={styles.navLink}>
              LOGOUT
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
