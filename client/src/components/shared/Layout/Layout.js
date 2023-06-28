import React from "react";
import Header from "./Header";
import Sidebar from "./Menus/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="row g-0 home-con">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-8 category-list-show-h">{children}</div>
      </div>
    </>
  );
};

export default Layout;
