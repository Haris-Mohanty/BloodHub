import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import { useSelector } from "react-redux";

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
      <h1>Consumer Details</h1>
    </Layout>
  );
};

export default Consumer;
