import React, { useState, useEffect } from "react";
import Header from "../../components/shared/Layout/Header";
import API from "./../../services/API";
// import Layout from "../../components/shared/Layout/Layout";

const Analytics = () => {
  const [data, setData] = useState([]);
  //Get Blood Group Data
  const getBloodGroupData = async () => {
    try {
      const { data } = await API.get("/analytics/bloodGroups-data");
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      <h1 className="mt-5">Analytics Page</h1>
    </>
  );
};

export default Analytics;
