import React, { useState } from "react";
import { login } from "../../utils/fetch";

import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (e, setter, state) => {
    setter(e.target.value);
    console.log(state);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(`hello ${username} from handle submit`);
    const data = await login(username, password);
    await setUser(data.user);
  };

  return (
    <div className="wrapper">
      <div className="logo">
        <img src="/images/drlogo.png" alt="DevRoute Logo" />
      </div>
      <div className="text-center mt-4 name">Route.Dev</div>
      <form className="p-3 mt-3" onSubmit={handleSubmit}>
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Username"
            onChange={(e) => changeHandler(e, setUsername)}
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
            onChange={(e) => changeHandler(e, setPassword)}
          />
        </div>
        <button className="btn mt-3" type="submit">
          Login
        </button>
      </form>
      <div className="text-center fs-6">
        <a href="#">Forget password?</a> or <a href="#">Sign up</a>
      </div>
    </div>
  );
};

export default Login;
