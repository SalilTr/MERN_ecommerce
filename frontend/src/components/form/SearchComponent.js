import React from "react";
import Layout from "../Layout";
import { useSearch } from "../../context/searchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SeachComponent = () => {
  const [value, setValue] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/search/${value.keyword}`
      );
      setValue({ ...value, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <form className="d-flex" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          value={value.keyword}
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setValue({ ...value, keyword: e.target.value })}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </Layout>
  );
};

export default SeachComponent;
