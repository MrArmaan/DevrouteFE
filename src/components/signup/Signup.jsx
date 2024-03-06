import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Signup form submitted");
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          placeholder="username"
          type="text"
          value={username}
          onChange={handleUsernameChange}
          required
        />

        <input
          placeholder="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <button type="submit" className="submit-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
