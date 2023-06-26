import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../components/shared/Spinner";
import { toast } from "react-toastify";
import Layout from "../components/shared/Layout/Layout";
import Modal from "../components/shared/modal/Modal";

const HomePage = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <Layout>
      {error && <span>{toast.error(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h4
            className="main-page"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="fa-solid fa-plus"></i>
            Add Inventory
          </h4>
          <Modal />
        </>
      )}
    </Layout>
  );
};

export default HomePage;
