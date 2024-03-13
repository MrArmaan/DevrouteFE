import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navmenu from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Landing from "./components/landing/Landing";
import Jobs from "./components/jobSearch/Jobsearch";
import Userdash from "./components/UserDashboard/Userdash";

const items = [
  {
    name: "Home",
    color: "#e5e5e5",
    path: "/",
  },
  {
    name: "Jobs",
    color: "#e5e5e5",
    path: "/jobs",
  },
  {
    name: "Log In",
    color: "#e5e5e5",
    path: "/login",
  },
  {
    name: "Sign Up",
    color: "#e5e5e5",
    path: "/signup",
  },
  {
    name: "User",
    color: "#e5e5e5",
    path: "/userdashboard",
  },
];

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="header-nav">
        <header>
          <div className="header-left">
            <div className="logo-container">
              <img className="logo" src="/images/newlogo.png" alt="" />
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
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/jobs" element={<Jobs items={[]} />} />
        <Route path="/userdashboard" element={<Userdash />} />
      </Routes>
    </Router>
  );
};

export default App;
