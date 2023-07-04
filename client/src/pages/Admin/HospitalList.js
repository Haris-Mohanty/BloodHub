import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import moment from "moment";

const HospitalList = () => {
  const [data, setData] = useState([]);

  //Get Hospital Details
  const getHospitalDetails = async () => {
    try {
      const { data } = await API.get("/admin/hospital-list");
      if (data?.success) {
        setData(data?.hospitalData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHospitalDetails();
  }, []);

  return (
    <Layout>
      <h1 className="mt-5 mb-4 fw-bold text-warning font-sofias">
        Hospital - List
      </h1>
      <hr />

      <table className="table table-striped font-Lato">
        <thead>
          <tr className="yellow">
            <th scope="col">S/N</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">MobileNo. </th>
            <th scope="col">Address </th>
            <th scope="col">Date & Time</th>
          </tr>
        </thead>
        <tbody className="category-list">
          {data?.map((record, index) => (
            <tr key={record._id}>
              <td>{index + 1}</td>
              <td>{record.hospitalName}</td>
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

export default HospitalList;
