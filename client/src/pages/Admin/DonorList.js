import React, { useState, useEffect } from "react";
import Layout from "./../../components/shared/Layout/Layout";
import API from "../../services/API";
import moment from "moment";

const DonorList = () => {
  const [data, setData] = useState([]);
  //Get Donor Details
  const getDonors = async () => {
    try {
      const { data } = await API.get("/admin/donor-list");
      if (data?.success) {
        setData(data?.donorData);
        // console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDonors();
  }, []);

  return (
    <Layout>
      <h1 className="mt-5 mb-4 fw-bold text-success font-sofias">
        Donor - List
      </h1>
      <hr />

      <table className="table table-striped font-Lato">
        <thead>
          <tr className="green">
            <th scope="col">S/N</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">MobileNo. </th>
            <th scope="col">Address </th>
            <th scope="col">Date & Time</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="category-list">
          {data?.map((record, index) => (
            <tr key={record._id}>
              <td>{index + 1}</td>
              <td>{record.name}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{record.address}</td>
              <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              <td><button className="btn btn-danger"><i className="fa-solid fa-trash"></i></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default DonorList;
