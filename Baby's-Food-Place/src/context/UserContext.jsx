import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }

    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
      } catch (error) {
        console.error("Failed to decode token", error);
      }
    }

    setLoggedIn(isLoggedIn);
  }, []);

  return (
    <UserContext.Provider
      value={{ loggedIn, username, setLoggedIn, setUsername }}
    >
      {children}
    </UserContext.Provider>
  );
};
