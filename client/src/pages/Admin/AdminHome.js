import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container mt-4">
        <div className="d-flex">
          <h1>
            Welcome Admin: <i> {user?.name}</i>
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
