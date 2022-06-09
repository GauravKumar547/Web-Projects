import React from "react";
import { NavLink } from "react-router-dom";
export const NavigationBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" exact="true" to="/">
            UMS
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-NavLink home text-decoration-none m-2 text-white active"
                  aria-current="page"
                  exact="true"
                  to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-NavLink active text-decoration-none text-white m-2"
                  exact="true"
                  to="/aboutus">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact="true"
                  to="/contact"
                  className="nav-NavLink active m-2 text-decoration-none text-white">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink exact="true" to="/addUser" className="btn btn-secondary">
            Add User
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
