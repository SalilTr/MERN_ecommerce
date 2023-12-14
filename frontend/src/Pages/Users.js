import React from "react";
import Layout from "../components/Layout";
import AdminMenu from "../components/AdminMenu";

const Users = () => {
  return (
    <Layout>
      <div className="fluid-container m-2 p-5">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 text-center">
            <h1>All Users</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
