import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useSelector } from "react-redux";
function Navbar() {
  const isAuthenticated =
    useSelector((store) => {
      return store.user.user;
    }) !== "";
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

      {isAuthenticated && (
        <NavLink className="lnks" to="/addproducts">
          Addproduct
        </NavLink>
      )}

      <NavLink className="lnks" to="/login">
        Login
      </NavLink>

      {isAuthenticated && (
        <NavLink className="lnks" to="/logout">
          Logout
        </NavLink>
      )}

      <NavLink className="lnks" to="/register">
        Register
      </NavLink>

      <NavLink className="lnks" to="/cart">
        Cart
      </NavLink>
    </nav>
  );
}

export default Navbar;
