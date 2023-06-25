import React from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
