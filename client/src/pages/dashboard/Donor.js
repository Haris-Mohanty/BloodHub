import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import moment from "moment";

const Donor = () => {
  const [data, setData] = useState([]);
  //find donor records
  const getDonors = async () => {
    try {
      const { data } = await API.get("/inventory/get-donors");
    //   console.log(data);
        if (data?.success) {
          setData(data?.donors);
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
      <h1 className="mt-5 mb-4">Donor Page</h1>

      <table className="table table-striped">
        <thead>
          <tr className="green">
            <th scope="col">S/N</th>
            <th scope="col">Name</th>
            <th scope="col">EmailID</th>
            <th scope="col">MobileNo. </th>
            <th scope="col">Date & Time</th>
          </tr>
        </thead>
        <tbody className="category-list">
          {data?.map((record, index) => (
            <tr key={record._id}>
              <td>{record._id}</td>
              <td>{record.name || record.organisationName + " (Org) "}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Donor;
