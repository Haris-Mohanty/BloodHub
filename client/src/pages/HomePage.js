import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "../components/shared/Spinner";
import { toast } from "react-toastify";
import Layout from "../components/shared/Layout/Layout";
import Modal from "../components/shared/modal/Modal";
import API from "../services/API";

const HomePage = () => {
  const { loading, error } = useSelector((state) => state.auth);

  // **Show records in page ***/
  const [data, setData] = useState([]);
  //get
  const getBloodrecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-inventory");
      if (data?.success) {
        setData(data?.inventory);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //call
  useEffect(() => {
    getBloodrecords();
  }, []);

  return (
    <Layout>
      {error && <span>{toast.error(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h4
            className="main-page mt-5 mb-5"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="fa-solid fa-plus"></i>
            Add Inventory
          </h4>

          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Blood Group</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>

          <Modal />
        </>
      )}
    </Layout>
  );
};

export default HomePage;
