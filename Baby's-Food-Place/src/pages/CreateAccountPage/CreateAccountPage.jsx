import { useState, useContext } from "react";
import styles from "./CreateAccountPage.module.css";
import { Title } from "../../components/Title/Title";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const CreateAccountPage = () => {
  const { setLoggedIn: setContextLoggedIn, setUsername } =
    useContext(UserContext);
  const initialData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthday: "",
    repeatPassword: "",
  };
  const [data, setData] = useState(initialData);
  const [dataErrors, setDataErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.firstName) {
      errors.firstName = "First Name is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 8) {
      errors.password = "Password should be at least 8 characters";
    }
    if (values.password !== values.repeatPassword) {
      errors.repeatPassword = "Passwords do not match!";
    }
    return errors;
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    const errors = validate(data);
    setDataErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const res = await fetch(
          "http://127.0.0.1:9000/api/v1/auth/createaccount",
          {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
          }
        );

        const jsonData = await res.json();
        console.log("Create Account Response:", jsonData);
        if (res.ok) {
          setContextLoggedIn(true);
          setUsername(jsonData.username);
          localStorage.setItem("loggedIn", "true");
          localStorage.setItem("token", jsonData.token);
          localStorage.setItem("username", jsonData.username);

          alert(
            `Welcome, ${jsonData.username}! Your account was created successfully.`
          );
          navigate("/myprofile");
        } else {
          alert(
            jsonData.message || "Account creation failed. Please try again."
          );
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

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
        <form
          className={styles.containerCreateAccountRight}
          onSubmit={handleCreateAccount}
        >
          <div className={styles.formContainer}>
            <div className={styles.formLeft}>
              <label htmlFor="firstName">First Name</label>
              <br />
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="John"
                value={data.firstName}
                onChange={handleChange}
              />
              {dataErrors.firstName && <p>{dataErrors.firstName}</p>}
              <br />
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="user@domain.com"
                value={data.email}
                onChange={handleChange}
              />
              {dataErrors.email && <p>{dataErrors.email}</p>}
              <br />
              <label htmlFor="password">Password </label>
              <br />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="******"
                value={data.password}
                onChange={handleChange}
              />
              {dataErrors.password && <p>{dataErrors.password}</p>}
              <br />
            </div>

            <div className={styles.formRight}>
              <label htmlFor="lastName">Last Name</label>
              <br />
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Smith"
                value={data.lastName}
                onChange={handleChange}
              />
              {dataErrors.lastName && <p>{dataErrors.lastName}</p>}
              <br />
              <label htmlFor="birthday">Birthday</label>
              <br />
              <input
                type="date"
                name="birthday"
                id="birthday"
                value={data.birthday}
                onChange={handleChange}
              />
              <br />
              <label htmlFor="repeatPassword">Repeat Password </label>
              <br />
              <input
                type="password"
                name="repeatPassword"
                id="repeatPassword"
                placeholder="******"
                value={data.repeatPassword}
                onChange={handleChange}
              />
              {dataErrors.repeatPassword && <p>{dataErrors.repeatPassword}</p>}
              <br />
            </div>
          </div>
          <div>
            <button type="submit">CREATE ACCOUNT</button>
          </div>
        </form>
      </div>
    </div>
  );
};
