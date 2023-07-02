import React, { useState, useEffect } from "react";
import Header from "../../components/shared/Layout/Header";
import API from "./../../services/API";

const Analytics = () => {
  const [data, setData] = useState([]);

  const [inventoryData, setInventoryData] = useState([]);
  const colors = [
    "#884A39",
    "#C38154",
    "#FFC26F",
    "#22A299",
    "#4F709C",
    "#4942E4",
    "#0079FF",
    "#FF0060",
    "#22A699",
  ];
  //Get Blood Group Data
  const getBloodGroupData = async () => {
    try {
      const { data } = await API.get("/analytics/bloodGroups-data");
      if (data?.success) {
        setData(data?.bloodGroupData);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //LifeCycle method
  useEffect(() => {
    getBloodGroupData();
  }, []);
  return (
    <>
      <Header />

      <div className="row mt-4">
        <div className="col-md-2"></div>
        <div className="col-md-8 mt-5 d-flex flex-row flex-wrap">
          {data?.map((record, i) => (
            <div className="card m-2 p-1" key={i} style={{ width: "18rem", backgroundColor:`${colors[i]}` }}>
              <div className="card-body">
                <h1 className="card-title bg-light text-dark text-center mb-3 fw-bold">
                  {record.bloodGroup}
                </h1>
                <p className="card-text text-light">
                  Total In : <b>{record.totalIn}</b> (ML)
                </p>
                <p className="card-text text-light">
                  Total Out : <b>{record.totalOut}</b> (ML)
                </p>
              </div>
              <div className="card-footer text-light bg-dark text-center">
                Total Available : <b>{record.availableBlood}</b> (ML)
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-2"></div>
      </div>
    </>
  );
};

export default Analytics;
