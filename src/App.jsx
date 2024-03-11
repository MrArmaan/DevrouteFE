import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navmenu from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Landing from "./components/landing/Landing";
import Jobs from "./components/jobSearch/Jobsearch";
import Userdash from "./components/userDashboard/Userdash";

const items = [
  {
    name: "Home",
    color: "#f44336",
    path: "/",
  },
  {
    name: "Jobs",
    color: "#e91e63",
    path: "/jobs",
  },
  {
    name: "Log In",
    color: "#9c27b0",
    path: "/login",
  },
  {
    name: "Sign Up",
    color: "#673ab7",
    path: "/signup",
  },
  {
    name: "User",
    color: "#3f51b5",
    path: "/userdashboard",
  },
];

const App = () => {
  const [jobs, setJobs] = useState([]);
  return (
    <Router>
      <div className="header-nav">
        <header>
          <div className="header-left">
            <div className="logo-container">
              <img className="logo" src="/images/drlogo.png" alt="" />
            </div>
            <div className="slogan"></div>
          </div>

          <Navmenu items={items} />

          <div className="profile-tab">
            <img
              className="profile-pic"
              src="/images/profile-circle-icon.png"
              alt=""
            />
          </div>
        </header>
      </div>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobs" element={<Jobs items={jobs} />} />
        <Route path="/userdashboard" element={<Userdash />} />
      </Routes>
    </Router>
  );
};

export default App;
