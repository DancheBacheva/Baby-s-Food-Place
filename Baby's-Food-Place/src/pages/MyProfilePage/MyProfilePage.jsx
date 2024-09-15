import React from "react";
import styles from "./MyProfilePage.module.css";
import { Title } from "../../components/Title/Title";

export const MyProfilePage = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <Title title="My profile" />
        <div className={styles.containerMyProfile}>
          <div className={styles.containerMyProfileleft}>
            <img src="avatar.jpg" alt="" />
            <button>CHANGE AVATAR</button>
          </div>
          <form className={styles.containerMyProfileRight}>
            <div className={styles.formLeft}>
              <label htmlFor="firstName">Email</label>
              <br />
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="John"
              />
              <br />
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="user@domain.com"
              />
              <br />
              <label htmlFor="password">Password </label>
              <br />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="******"
              />
              <br />
              <button>SAVE</button>
            </div>

            <div className={styles.formRight}>
              <label htmlFor="lastName">Last Name</label>
              <br />
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Smith"
              />
              <br />
              <label htmlFor="birthday">Birthday</label>
              <br />
              <input
                type="date"
                name="birthday"
                id="birthday"
                placeholder="22-12-1999"
              />
              <br />
              <label htmlFor="repeatPassword">Repeat Password </label>
              <br />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="******"
              />
              <br />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
