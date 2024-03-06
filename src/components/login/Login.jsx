import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-wrapper">
      <form className="my-form">
        <input placeholder="email" />
        <input placeholder="password" />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
