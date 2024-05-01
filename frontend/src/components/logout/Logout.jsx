import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../slices/UserSlice";
function Logout() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const logoff = () => {
    dispatch(logout());
    localStorage.removeItem("id");
    localStorage.removeItem("accesstoken");
    nav("/");
  };
  useEffect(logoff, []);
  return (
    <div>
      <h1>logging out</h1>
    </div>
  );
}

export default Logout;
