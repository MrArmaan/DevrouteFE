import React, { useState } from "react";
import { signup } from "../../utils/fetch";
import "./Signup.css";

const Signup = ({ setUser, handleToggle }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (e, setter, state) => {
    setter(e.target.value);
    console.log(state);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let form = document.getElementById("my-form");

    const data = await signup(username, email, password);
    await setUser(data.user);
  };

  return (
    <div className="signup-wrapper">
      <form className="my-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          maxLength="20"
          onChange={(e) => changeHandler(e, setUsername, username)}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(e) => changeHandler(e, setEmail, email)}
        />
        <input
          className="myPassField"
          type="password"
          minLength={8}
          maxLength={12}
          placeholder="password [min 8 max 12]"
          onChange={(e) => changeHandler(e, setPassword, password)}
        />
        <button className="figtree-reg" type="submit">
          Sign up
        </button>
      </form>
      <p className="login figtree-reg" onClick={handleToggle}>
        Log in
      </p>
    </div>
  );
};
export default Signup;
