import React, { useState } from "react";
import "./RegistrationForm.css"; // Import your CSS file for styling
import Layout from "./Layout";
import axios from "axios";
import { toast } from "react-toastify";
function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    answer: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can handle registration logic here, e.g., send data to a server or perform client-side validation.
    console.log("Form data submitted:", formData);
    // registrationService.js

    // const BASE_URL = "http://localhost:8080/api/v1/auth";
    try {
      // Send a POST request to your backend API
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        formData
      );

      // Handle the response data as needed
      console.log("Registration successful:", response.data);
      toast("Registration successful");
      // Optionally, you can redirect the user to a success page or perform other actions.
    } catch (error) {
      console.error("Registration failed:", error.message);
      // Handle registration error, e.g., display an error message to the user.
    }
  };

  return (
    <Layout>
      <div className="registration-container">
        {" "}
        {/* Apply a class for styling */}
        <form className="registration-form" onSubmit={handleSubmit}>
          <h2>Registration Form</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
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
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="answer">Answer:</label>
            <textarea
              id="answer"
              name="answer"
              value={formData.answer}
              onChange={handleChange}
              placeholder="what is ur pet name"
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </Layout>
  );
}

export default RegistrationForm;
