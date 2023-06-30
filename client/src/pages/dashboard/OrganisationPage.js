import React, { useState, useEffect } from "react";
import Layout from "./../../components/shared/Layout/Layout";
import API from "../../services/API";

const OrganisationPage = () => {
  const [data, setData] = useState([]);

  //find org data
  const getOrganisations = async () => {
    try {
      const { data } = await API("/inventory/get-organisation");
        if (data?.success) {
          setData(data?.organisations);
        }
      console.log(data);
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
    </Layout>
  );
};

export default OrganisationPage;
