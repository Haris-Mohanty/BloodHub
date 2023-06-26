import React from "react";

const Header = () => {
  return (
    <div>
      <div className="bg-light shadow-sm container-fluid">
        <nav className="navbar navbar-expand-sm fixed-top shadow-lg navbar-light bg-white">
          <div className="container">
            <a href="#" className="navbar-brand">
              <img src="./assets/images/nav.png" className="w-50" /> 
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="navbar-collapse collapse" id="myNavbar">
              <ul className="navbar-nav w-100 justify-content-end">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    About
                  </a>
                </li>
                <div className="dropdown btn-group shadow-sm ml-auto">
                  <button className="btn">
                    <i className="fa fa-user" data-bs-toggle="dropdown" />
                    <div className="dropdown-menu">
                      <a href="#" className="dropdown-item">
                        <i className="fa fa-user"></i>
                        Register
                      </a>
                      <a href="#" className="dropdown-item">
                        <i className="fa fa-sign-in"></i>
                        Login
                      </a>
                    </div>
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
