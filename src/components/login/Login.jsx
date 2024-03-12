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
      password: password,
    };

    try {
      const response = await fetch("http://localhost:5001/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const user = await response.json();
        setUser(user);
        setLoginSuccess(true);
        navigate("/userdashboard");
      } else {
        console.error("Login failed");
        setLoginSuccess(false);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setLoginSuccess(false);
    }
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
            value={username}
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
            value={password}
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
        </div>
      )}
    </div>
  );
};

export default Login;
