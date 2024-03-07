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
    <div className="login-wrapper">
      <form className="my-form" onSubmit={handleSubmit}>
        <strong>DEV.Login</strong>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => changeHandler(e, setUsername, username)}
        />
        <input
          className="myPassField"
          type="password"
          minLength={8}
          maxLength={12}
          placeholder="password"
          onChange={(e) => changeHandler(e, setPassword, password)}
        />
        <button className="figtree-reg" type="submit">
          Log in
        </button>
      </form>
      <div className="forgpass figtree-reg">Forgotten your password?</div>
    </div>
  );
};

export default Login;
