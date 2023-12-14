import React, { useState } from "react";
import axios from "axios";

const CategoryForm = () => {
  const [categoryName, setCategoryName] = useState("");

  const handleCategoryChange = (e) => {
    setCategoryName(e.target.value);
    console.log(categoryName);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to your backend to create the category
      const response = await axios.post(
        "http://localhost:8080/api/v1/category/create-category",
        {
          name: categoryName,
        }
      );

      if (response.data.success) {
        // Category created successfully
        console.log(`Category "${categoryName}" created.`);
        // You can reset the input field here if needed
        setCategoryName("");
      } else {
        // Handle the case when the category creation fails
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Category Name:
        <input
          type="text"
          value={categoryName}
          onChange={handleCategoryChange}
        />
      </label>
      <button type="submit">Create Category</button>
    </form>
  );
};

export default CategoryForm;
