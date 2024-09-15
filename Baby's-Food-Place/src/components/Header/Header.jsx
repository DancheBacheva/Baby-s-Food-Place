import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img src="logo.png" alt="" />
          </Link>
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
          <Link to="/login">
            <button className={styles.btnLogin}>LOG IN</button>
          </Link>
          <p>or</p>
          <Link to="/createAccount">
            <button className={styles.btnCreateAccount}>CREATE ACCOUNT</button>
          </Link>
        </div>
      </div>
    </>
  );
};
