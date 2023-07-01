import React, { useState, useEffect } from "react";
import Layout from "./../../components/shared/Layout/Layout";
import API from "../../services/API";
import { useSelector } from "react-redux";
import moment from "moment";

const OrganisationPage = () => {
  //Get Current User
  
  
  const [data, setData] = useState([]);

  //find org data
  const getOrganisations = async () => {
    try {
      const { data } = await API("/inventory/get-organisation");
      if (data?.success) {
        setData(data?.organisations);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrganisations();
  }, []);

  return (
    <Layout>
      <h2 className="mt-5 mb-4 fw-bold text-primary">Organisation Details</h2>
      <hr />

      <table className="table table-striped">
        <thead>
          <tr className="blue">
            <th scope="col">S/N</th>
            <th scope="col">OrgName</th>
            <th scope="col">OrgEmail</th>
            <th scope="col">MobileNo. </th>
            <th scope="col">Address </th>
            <th scope="col">Date & Time</th>
          </tr>
        </thead>
        <tbody className="category-list">
          {data?.map((record, index) => (
            <tr key={record._id}>
              <td>{index + 1}</td>
              <td>{record.organisationName}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{record.address}</td>
              <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default OrganisationPage;
