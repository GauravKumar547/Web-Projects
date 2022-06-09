import React from "react";
import { NavLink } from "react-router-dom";
import "./page404.css";
const Page404 = () => {
  return (
    <div id="navBarHidden">
      <h1 id="h1">404</h1>
      <h4 id="h2">Page Not Found</h4>
      <p id="h3">
        <NavLink exact="true" to="/" className="btn btn-primary">
          Go to Home Page
        </NavLink>
      </p>
    </div>
  );
};

export default Page404;
