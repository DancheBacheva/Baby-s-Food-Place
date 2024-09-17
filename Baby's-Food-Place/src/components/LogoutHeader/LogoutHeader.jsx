import React from "react";
import styles from "./LogoutHeader.module.css";
import { GoDotFill } from "react-icons/go";

export const LogoutHeader = () => {
  return (
    <>
      <nav className={styles.rightContainer}>
        <ul>
          <li className={styles.myrecipes}>
            MY RECIPES
            <span className={styles.dot}>
              <GoDotFill />
            </span>
          </li>
          <li className={styles.myprofile}>
            MY PROFILE
            <span className={styles.dot}>
              <GoDotFill />
            </span>
          </li>
          <li className={styles.logout}>LOGOUT</li>
        </ul>
      </nav>
    </>
  );
};
