import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import moment from "moment";

const OrganisationList = () => {
  const [data, setData] = useState([]);

  const getOrganisations = async () => {
    const { data } = await API.get("/admin/organisation-list");

    if (data?.success) {
      setData(data?.organisationList);
    }
  };

  useEffect(() => {
    getOrganisations();
  }, []);

  return (
    <Layout>
      <h2 className="mt-5 mb-4 fw-bold text-primary font-sofias">
        Organisation - List
      </h2>
      <hr />

      <table className="table table-striped font-Lato">
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

export default OrganisationList;
