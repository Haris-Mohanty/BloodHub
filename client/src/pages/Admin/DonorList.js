import React, { useState, useEffect } from "react";
import Layout from "./../../components/shared/Layout/Layout";
import API from "../../services/API";

const DonorList = () => {
  const [data, setData] = useState([]);
  //Get Donor Details
  const getDonors = async () => {
    try {
      const { data } = await API.get("/admin/donor-list");
      console.log(data);
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
    </Layout>
  );
};

export default DonorList;
