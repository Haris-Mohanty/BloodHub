import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";

const OrganisationList = () => {
  const [data, setData] = useState([]);

  const getOrganisations = async () => {
    const { data } = await API.get("/admin/organisation-list");

    if (data?.success) {
      setData(data?.organisationList);
      console.log(data)
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
    </Layout>
  );
};

export default OrganisationList;
