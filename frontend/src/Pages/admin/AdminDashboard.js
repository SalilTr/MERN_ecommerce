import React from "react";
import Layout from "./../../components/Layout";
import AdminMenu from "../../components/AdminMenu";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 p-3">
            <div className="card w-75">
              <>
                {" "}
                <h1>AdminName:{auth?.user?.name}</h1>
                <h4>Admin Email:{auth?.user?.email}</h4>
                <h5>Admin Email:{auth?.user?.phone}</h5>
              </>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
