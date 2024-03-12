import { useState } from "react";
import { signup } from "../../utils/fetch";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);

  const changeHandler = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await signup(username, email, password);
    await setUser(data.user);
    setSignupSuccess(true);
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
            placeholder="Username"
            onChange={(e) => changeHandler(e, setUsername)}
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="far fa-envelope"></span>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => changeHandler(e, setEmail)}
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => changeHandler(e, setPassword)}
          />
        </div>
        <button className="btn mt-3" type="submit">
          Sign up
        </button>
      </form>
      <div className="text-center fs-6">
        <Link to="/forgot-password">Forget password?</Link> or{" "}
        <Link to="/Login">Login</Link>
      </div>
      {signupSuccess && (
        <div className="success-popup">
          Successfully signed up {username}. Please log in.
          <Link to="/Login">Login</Link>
        </div>
      )}
    </div>
  );
};

export default Signup;
