import React from "react";
import styles from "./LoginPage.module.css";
import { Title } from "../../components/Title/Title";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <>
      <div>
        <Title title="Log In" />
        <div className={styles.containerLogin}>
          <div className={styles.containerLoginleft}>
            <h1>
              Welcome to <span>Baby's</span>
            </h1>
            <p>
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures, to
              generate Lorem Ipsum which looks reasonable. The generated Lorem
              Ipsum is therefore always free from repetition, injected humour,
              or non-characteristic words etc.
            </p>
          </div>
          <form className={styles.containerLoginRight}>
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

            <Link to="/myprofile">
              <button>LOG IN</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};
