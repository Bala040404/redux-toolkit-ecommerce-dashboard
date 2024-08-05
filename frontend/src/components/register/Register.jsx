import React from "react";
import "./Register.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../slices/UserSlice";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({ email: "", password: "", name: "" });

  const nav = useNavigate();

  const dispatch = useDispatch();
  return (
    <div className="register">
      <h1>Register</h1>

      <div className="registerform">
        <div className="inputsection">
          <label htmlFor="name">Enter the username </label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={(e) => {
              setUser({ ...user, [e.target.name]: e.target.value });
            }}
          ></input>
        </div>

        <div className="inputsection">
          <label htmlFor="email">Enter the email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={(e) => {
              setUser({ ...user, [e.target.name]: e.target.value });
            }}
          ></input>
        </div>

        <div className="inputsection">
          <label htmlFor="password">Enter the password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={(e) => {
              setUser({ ...user, [e.target.name]: e.target.value });
            }}
          ></input>
        </div>

        <button
          className="registerbutton"
          onClick={() => {
            dispatch(register(user));
            nav("/");
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
