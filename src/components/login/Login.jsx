import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      username: username,
      email: `${username}@example.com`,
    };
    setUser(userData);
    setLoginSuccess(true);
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
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn mt-3" type="submit">
          Login
        </button>
      </form>
      <div className="text-center fs-6">
        <a href="#">Forget password?</a> or <a href="#">Sign up</a>
      </div>
      {loginSuccess && (
        <div className="success-popup">
          Successfully logged in as {username}. Please go to your dashboard.
          <button onClick={() => navigate("/userdashboard")}>
            Go to Dashboard
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
