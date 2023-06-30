import React, { useState, useEffect } from "react";
import Layout from "./../../components/shared/Layout/Layout";

const OrganisationPage = () => {
  const [data, setData] = useState([]);

  //find org data
  const getOrganisations = async () => {
    
  };
  return (
    <Layout>
      <h2 className="mt-5 mb-4 fw-bold text-primary">Organisation Details</h2>
    </Layout>
  );
};

export default OrganisationPage;
