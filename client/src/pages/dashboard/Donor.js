import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";

const Donor = () => {
  const { data, setData } = useState("");
  //find donor records
  const getDonors = async () => {
    try {
      const { data } = await API.get("/inventory/get-donors");
      console.log(data);
      //   setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDonors();
  }, []);

  return (
    <Layout>
      <h1 className="mt-5 mb-4">Donor Page</h1>

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
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default Donor;
