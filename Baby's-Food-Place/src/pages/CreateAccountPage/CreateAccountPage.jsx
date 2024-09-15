import React from "react";
import styles from "./CreateAccountPage.module.css";
import { Title } from "../../components/Title/Title";

export const CreateAccountPage = () => {
  return (
    <div className={styles.mainContainer}>
      <Title title="Create Account" />
      <div className={styles.containerCreateAccount}>
        <div className={styles.containerCreateAccountleft}>
          <h1>
            Create your <span>account</span>
          </h1>
          <p>
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable.
          </p>
        </div>
        <form className={styles.containerCreateAccountRight}>
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
            <button>CREATE ACCOUNT</button>
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
  );
};
