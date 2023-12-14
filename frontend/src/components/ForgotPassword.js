import React, { useState } from "react";
import "./ForgotPassword.css"; // Import your CSS file for styling
import Layout from "./Layout";
import axios from "axios";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    answer: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement logic to send the reset request to the server
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/forgot-password",
        formData
      );

      // Handle the response data as needed
      console.log("Password reset successful:", response.data);
      toast("Password reset successful");
      // Optionally, you can redirect the user to a login page or display a success message.
    } catch (error) {
      console.error("Password reset failed:", error.message);
      // Handle the error, e.g., display an error message to the user.
    }
  };

  return (
    <Layout>
      <div className="forgot-password-container">
        <form className="forgot-password-form" onSubmit={handleSubmit}>
          <h2>Forgot Password</h2>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="newPassword">New Password:</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="answer">Answer to Security Question:</label>
            <input
              type="text"
              id="answer"
              name="answer"
              value={formData.answer}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
