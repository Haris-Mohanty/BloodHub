import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import { useSelector } from "react-redux";
import moment from "moment";

const Consumer = () => {
  //get current user
  const { user } = useSelector((state) => state.auth);

  const [data, setData] = useState([]);
  //find donor records
  const getDonors = async () => {
    try {
      const { data } = await API.post("/inventory/get-inventory-hospital", {
        filters: {
          inventoryType: "out",
          hospital: user?._id,
        },
      });
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
      <h1 className="mt-5 mb-4 fw-bold text-success">Consumer Details</h1>
      <hr />

      <table className="table table-striped">
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

            <td></td>

            <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default Consumer;
