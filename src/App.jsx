import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Landing from "./components/landing/Landing";
import JobPage from "./components/jobSearch/Jobsearch";
import Userdash from "./components/userDashboard/Userdash";
import Menu from "./components/navbar/Navbar";

/*--------------------
Items
--------------------*/
const items = [
  {
    name: "Home",
    color: "#f44336",
    href: "#",
  },
  {
    name: "Jobs",
    color: "#e91e63",
    href: "#",
  },
  {
    name: "Log In",
    color: "#9c27b0",
    href: "/components/login/Login",
  },
  {
    name: "Sign Up",
    color: "#673ab7",
    href: "#",
  },
  {
    name: "User",
    color: "#3f51b5",
    href: "#",
  },
];

const App = () => {
  return (
    <div className="header-nav">
      <header>
        <div className="header-left">
          <div className="logo-container">
            <img className="logo" src="/images/drlogo.png" alt="" />
          </div>
          <div className="slogan"></div>
        </div>

        <Menu items={items} />
        <div className="profile-tab">
          <img
            className="profile-pic"
            src="/images/profile-circle-icon.png"
            alt=""
          />
        </div>
      </header>
    </div>
  );
};

export default App;
