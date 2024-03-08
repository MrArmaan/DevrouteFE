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
      <form className="logsign-form" onSubmit={handleSubmit}>
        <input
          className="logsign-input"
          type="text"
          placeholder="username"
          onChange={(e) => changeHandler(e, setUsername, username)}
        />
        <input
          className="my-pass-field"
          type="password"
          minLength={8}
          maxLength={12}
          placeholder="password"
          onChange={(e) => changeHandler(e, setPassword, password)}
        />
        <button className="login-form-button figtree-reg" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
