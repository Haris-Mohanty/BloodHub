import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "../components/shared/Spinner";
import { toast } from "react-toastify";
import Layout from "../components/shared/Layout/Layout";
import Modal from "../components/shared/modal/Modal";
import API from "../services/API";
import moment from "moment";

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
        
          <h2
            className="main-page mt-5 mb-5 text-info fw-bold"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="fa-solid fa-plus"></i>
            Add Inventory
          </h2>
          <hr/>

          
            <table className="table table-striped">
              <thead>
                <tr className="red">
                  <th scope="col">S/N</th>
                  <th scope="col">BloodGroup</th>
                  <th scope="col">InventoryType</th>
                  <th scope="col">Quantity(ml)</th>
                  <th scope="col">DonorEmail</th>
                  <th scope="col">Date & Time</th>
                </tr>
              </thead>
              <tbody className="category-list">
                {data?.map((record, index) => (
                  <tr key={record._id}>
                    <td>{index+1}</td>
                    <td>{record.bloodGroup}</td>
                    <td>{record.inventoryType}</td>
                    <td>{record.quantity} (ml)</td>
                    <td>{record.email}</td>
                    <td>
                      {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          

          <Modal />
        </>
      )}
    </Layout>
  );
};

export default HomePage;
