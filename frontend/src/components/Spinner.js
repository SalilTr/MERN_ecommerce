// import React from "react";
import Layout from "./Layout";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => --prev); // Corrected the state update
    }, 1000);

    if (count === 0) {
      navigate(`/${path}`, {
        state: location.pathname,
      });
    }

    return () => {
      clearInterval(interval);
    };
  }, [count, navigate, location, path]);

  return (
    <Layout>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <h1 className="text-center">Redirecting to you in... {count}</h1>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </Layout>
  );
};

export default Spinner;
