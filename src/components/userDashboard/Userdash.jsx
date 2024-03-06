import React from "react";
import "./Userdash.css";

const Login = () => {
  return (
    <div className="userdash-wrapper">
      <div className="userimage-wrapper">
        <img src="" alt="user profile image" />
        <button type="submit">Edit</button>
      </div>
      <form className="userdash-form" title="First Name Surname">
        <input placeholder="update name" />
        <input placeholder="update email" />
        <input placeholder="update address" />
        <input placeholder="update phone no" />
        <input placeholder="update password" />
        <button type="submit">Submit</button>
      </form>
      <div className="userdash-footer">
        <button type="submit">DELETE ACC</button>
      </div>
    </div>
  );
};

export default Login;
