import React from "react";
import styles from "./LoginHeader.module.css";
import { Link } from "react-router-dom";

export const LoginHeader = () => {
  return (
    <div className={styles.rightContainer}>
      <Link to="/login">
        <button className={styles.btnLogin}>LOG IN</button>
      </Link>
      <p>or</p>
      <Link to="/createAccount">
        <button className={styles.btnCreateAccount}>CREATE ACCOUNT</button>
      </Link>
    </div>
  );
};
