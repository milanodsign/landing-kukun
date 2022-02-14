import React from "react";
import logo from "../assets/logo/kukun-logo.svg";

const TopMenu = () => {
  return (
    <nav className="align-items-center col-12 container d-flex">
      <div className="col-4 d-flex justify-content-start">
        <img src={logo} alt="Kukun" />
      </div>
      <div className="col-8 d-flex justify-content-end">
        <span className="linkMenu">Products</span>
        <span className="linkMenu">Services</span>
        <span className="linkMenu">Enterprise</span>
        <span className="linkMenu">Contractors</span>
        <button className="btn btnKukun">Sign In</button>
      </div>
    </nav>
  );
};

export default TopMenu;
