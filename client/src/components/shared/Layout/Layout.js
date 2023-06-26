import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="row g-0 home-con">
        <div className="col-md-3">SIDEBAR</div>
        <div className="col-md-9">{children}</div>
      </div>
    </>
  );
};

export default Layout;
