import React from "react";
import logo from "../images/logo.png";
import  "../components/style.css"
const navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="app.logo" className="logo-image" />
        </div>
        <div className="division-line"></div>
        <div className="logo-text">STORIES</div>
        <div className="nav-btn">
          <a href="www.google.com" className="btn-text">
            Courses
          </a>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
