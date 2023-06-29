import React from "react";
import { UserMenu } from "./userMenus";
import { useLocation, Link } from "react-router-dom";
import "../../../../styles/Layout.css"

const Sidebar = () => {
  const location = useLocation();
  return (
    <div>
      <div className="sidebar">
        <div className="menu">
          {UserMenu.map((menu) => {
            const isActive = location.pathname === menu.path;
            return (
              <div className={`menu-item ${isActive && "active"}`} key={menu.name}>
                <i className={menu.icon}></i>
                <Link to={menu.path}>{menu.name}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
