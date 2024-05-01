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
    <div>
      <h1>log in</h1>

      <div className="loginform">
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
            dispatch(login(user));
            nav("/");
          }}
        >
          login
        </button>
      </div>
    </div>
  );
}

export default Login;
