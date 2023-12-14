import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { ToastContainer } from "react-toastify";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        {children}

        <ToastContainer />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
