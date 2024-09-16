import React from "react";
import styles from "./FreshAndNew.module.css";

export const FreshAndNew = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.card}>
          <div className={styles.cardUp}>
            <img src="homemadePizza.png" alt="" />
            <div className={styles.foodCategory}>breakfast</div>
          </div>
          <div className={styles.cardDown}>
            <h4>Homemade Pizza</h4>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div className={styles.detailsContainer}>
              <div className={styles.detailsContainerLeft}>
                <div className={styles.smallContainer}>
                  <img src="clock.png" alt="" />
                  <p>45min</p>
                </div>
                <div className={styles.smallContainer}>
                  <img src="cutlery.png" alt="" />
                  <p>4 persons</p>
                </div>
                <div className={styles.smallContainer}>
                  <img src="star.png" alt="" />
                  <p>28</p>
                </div>
              </div>
              <div className={styles.detailsContainerRight}>
                <button>&gt;&gt;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
