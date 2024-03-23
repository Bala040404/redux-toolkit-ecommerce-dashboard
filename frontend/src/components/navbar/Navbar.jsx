import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img
        className="logo"
        src="https://image.spreadshirtmedia.com/image-server/v1/designs/1021620159,width=178,height=178.png"
      ></img>
      <h1 className="brand">Armoury</h1>
      <NavLink className="lnks" to="/">
        Home
      </NavLink>
      <NavLink className="lnks" to="/addproducts">
        Addproduct
      </NavLink>
    </nav>
  );
}

export default Navbar;
