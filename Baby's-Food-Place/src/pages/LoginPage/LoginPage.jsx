import { useState, useEffect, useContext } from "react";
import styles from "./LoginPage.module.css";
import { Title } from "../../components/Title/Title";
import { Navigate, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { UserContext } from "../../context/UserContext";

export const LoginPage = () => {
  const { setLoggedIn: setContextLoggedIn, setUsername } =
    useContext(UserContext);
  const initialData = { email: "", password: "" };

  const [data, setData] = useState(initialData);
  const [dataErrors, setDataErrors] = useState({});
  const [decodedToken, setDecodedToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = (values) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 8) {
      errors.password = "Password should be at least 8 characters";
    }
    return errors;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const errors = validate(data);
    setDataErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const res = await fetch("http://127.0.0.1:9000/api/v1/auth/login", {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        });

        const jsonData = await res.json();
        console.log("Login Response:", jsonData);
        if (res.ok) {
          setContextLoggedIn(true);
          setUsername(jsonData.username);
          localStorage.setItem("loggedIn", "true");
          localStorage.setItem("token", jsonData.token);
          localStorage.setItem("username", jsonData.username);
          alert(`Welcome, ${jsonData.username}!`);
          navigate("/");
        } else {
          alert(jsonData.message || "Login failed. Please try again.");
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setDecodedToken(decoded);
        setIsLoggedIn(true);
        setUsername(localStorage.getItem("username") || "");
      } catch (error) {
        console.error("Failed to decode token", error);
      }
    }
  }, [setUsername]);

  useEffect(() => {
    setContextLoggedIn(isLoggedIn);
  }, [isLoggedIn, setContextLoggedIn]);

  return (
    <div>
      <Title title="Log In" />
      <div className={styles.containerLogin}>
        <div className={styles.containerLoginleft}>
          <h1>
            Welcome to <span>Baby's</span>
          </h1>
          <p>
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary...
          </p>
        </div>
        {isLoggedIn ? (
          <Navigate to="/myprofile" />
        ) : (
          <form className={styles.containerLoginRight} onSubmit={handleLogin}>
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
            <button type="submit">LOG IN</button>
          </form>
        )}
      </div>
    </div>
  );
};
