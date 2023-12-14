import React from "react";
import Layout from "../../components/Layout";

import UserMenu from "../../components/UserMenu";

const Orders = () => {
  return (
    <Layout>
      <div className="fluid-container m-2 p-5">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9 text-center">
            <h1>Orders</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
