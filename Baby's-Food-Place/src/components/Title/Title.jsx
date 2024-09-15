import React from "react";
import styles from "./Title.module.css";

export const Title = ({ title }) => {
  return (
    <div className={styles.mainContainer}>
      <h1>{title}</h1>
      <hr />
    </div>
  );
};
