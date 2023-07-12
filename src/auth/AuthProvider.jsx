import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [userId, setUserId] = useState(localStorage.getItem("userId") || null);


  function logout() {
    setToken(null);
    setUsername("");
    setUserId(null);
  }

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);

  useEffect(() => {
    localStorage.setItem("userId", userId);
  }, [userId]);

  return (
    <AuthContext.Provider value={{ token, setToken, username, userId, setUserId, setUsername, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
