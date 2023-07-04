import React, { useState, useEffect } from "react";
import Layout from "./../../components/shared/Layout/Layout";
import API from "../../services/API";

const DonorList = () => {
  const [data, setData] = useState([]);
  //Get Donor Details
  const getDonors = async () => {
    try {
      const { data } = await API.get("/admin/donor-list");
      if (data?.success) {
        setData(data?.donosr);
        console.log(data);
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
      <h1 className="mt-5 mb-4 fw-bold text-success font-sofias">Donor List</h1>
      <hr />

      <table className="table table-striped font-Lato">
        <thead>
          <tr className="green">
            <th scope="col">S/N</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">MobileNo. </th>
            <th scope="col">Date & Time</th>
          </tr>
        </thead>
        <tbody className="category-list">
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default DonorList;
