import React from "react";
import "./Register.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../slices/UserSlice";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({ email: "", password: "", name: "" });
  const use = useSelector((store) => {
    return store.user.user;
  });

  const nav = useNavigate();

  const dispatch = useDispatch();
  return (
    <div>
      <h1>register</h1>

      <div className="registerform">
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

        <button
          onClick={() => {
            dispatch(register(user));
            nav("/");
          }}
        >
          register
        </button>
      </div>
    </div>
  );
}

export default Register;
