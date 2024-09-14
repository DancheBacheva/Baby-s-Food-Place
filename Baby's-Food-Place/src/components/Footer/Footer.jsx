import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.logoContainer}>
          <img src="logo-footer.png" alt="" />
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
        <div className={styles.rightContainerFooter}>
          <p>Baby's Food Place</p>
          <p>copyright &#169; 2021</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
