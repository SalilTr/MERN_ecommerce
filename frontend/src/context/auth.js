import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  // default axios
  axios.defaults.headers.common["Authorization"] = auth?.token;

  useEffect(() => {
    const data = localStorage.getItem("auth");
    console.log(data);
    if (data) {
      const parsedData = JSON.parse(data);
      setAuth({ ...auth, user: parsedData.user, token: parsedData.token });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <authContext.Provider value={[auth, setAuth]}>
      {children}
    </authContext.Provider>
  );
};

// custom hook

const useAuth = () => {
  return useContext(authContext); // Use useContext to access the context value
};

export { useAuth, AuthProvider };
