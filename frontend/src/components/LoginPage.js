import React, { useState } from "react";
import "./LoginPage.css"; // Import your CSS file for styling
import Layout from "./Layout";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/auth";
function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [auth, setAuth] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can handle login logic here, e.g., send data to a server or perform client-side validation.
    console.log("Form data submitted:", formData);
    try {
      // Send a POST request to your backend API
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        formData
      );

      // Handle the response data as needed
      const { user, token } = response.data;

      // localStorage.setItem("auth", JSON.stringify(auth));
      if (response.status === 200) {
        const { user, token } = response.data;
        setAuth({
          ...auth,
          user: user,
          token: token,
        });
        // Set a user's name into local storage
        localStorage.setItem("auth", JSON.stringify(auth));

        console.log("Login successful:", auth);

        toast("Login successful");
        if (auth) {
          navigate("/");
        }
      } else {
        // Handle unsuccessful login, e.g., display an error message
        console.error("Login failed:", response.statusText);
        toast("Login failed");
      }
      // Retrieve data from local storage

      // Optionally, you can redirect the user to a dashboard or perform other actions.
    } catch (error) {
      console.error("Login failed:", error.message);
      // Handle login error, e.g., display an error message to the user.
    }
  };

  return (
    <Layout>
      <div className="login-container">
        {" "}
        {/* Apply a class for styling */}
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email:</label>{" "}
            {/* Change 'username' back to 'email' */}
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>
          <button
            type="button"
            onClick={() => {
              navigate("/forgot-password");
            }}
          >
            Forgot Password
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default LoginPage;
