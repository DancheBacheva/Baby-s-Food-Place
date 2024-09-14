import React from "react";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <img src="logo.png" alt="" />
        </div>
        <div className={styles.middleContainer}>
          <p>
            BREAKFAST<span className={styles.dot}>·</span>
          </p>
          <p>
            BRUNCH<span className={styles.dot}>·</span>
          </p>
          <p>
            LUNCH<span className={styles.dot}>·</span>
          </p>
          <p>DINNER</p>
        </div>
        <div className={styles.rightContainer}>
          <button className={styles.btnLogin}>LOG IN</button>
          <p>or</p>
          <button className={styles.btnCreateAccount}>CREATE ACCOUNT</button>
        </div>
      </div>
    </>
  );
};
