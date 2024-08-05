import React from "react";
import "./Login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../slices/UserSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });

  const nav = useNavigate();

  const dispatch = useDispatch();
  return (
    <div className="login">
      <h1>Login</h1>

      <div className="loginform">
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
          className="loginbutton"
          onClick={() => {
            dispatch(login(user));
            nav("/");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
