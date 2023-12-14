import React, { useState, useEffect } from "react";
import AdminMenu from "../components/AdminMenu";
import Layout from "../components/Layout";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  // get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/product/get-product"
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  // lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);

  // Helper function to chunk products into rows
  const chunkArray = (arr, size) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
  };

  const chunkedProducts = chunkArray(products, 3);

  return (
    <Layout>
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Products List</h1>
          <div className="d-flex flex-wrap">
            {chunkedProducts.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="row row-cols-1 row-cols-md-2 row-cols-lg-3"
              >
                {row.map((p) => (
                  <div key={p._id} className="col mb-4">
                    <Link
                      to={`/admin-dashboard/product/${p.slug}`}
                      className="product-link"
                    >
                      <div className="card">
                        <img
                          src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                          className="card-img-top"
                          alt={p.name}
                        />
                        <div className="card-body d-flex flex-column align-items-center">
                          <h5 className="card-title text-center mb-0">
                            {p.name}
                          </h5>
                          <p className="card-text text-center">
                            {p.description}
                            {p.price}
                          </p>
                        </div>
                        <button>Add</button>
                        <button>Remove</button>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
