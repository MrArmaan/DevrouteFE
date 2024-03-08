import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Landing from "./components/landing/Landing";
import JobPage from "./components/jobSearch/Jobsearch";
import Userdash from "./components/userDashboard/Userdash";

const App = () => {
  return (
    <Router>
      <div className="header-nav">
        <header>
          <div className="header-left">
            <div className="logo-container">
              <img className="logo" src="/images/drlogo.png" alt="" />
            </div>
            <div className="slogan">
              <p>The Right Route for Junior Developers</p>
            </div>
          </div>

          <nav className="navbar">
            <div className="navbar-left">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/jobs">Jobs</Link>
                </li>
                <li>
                  <Link to="/login">Log In</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li></li>
              </ul>
            </div>
            <div className="navbar-right">
              <div className="profile-tab">
                <img
                  className="profile-pic"
                  src="/images/profile-circle-icon.png"
                  alt=""
                />
              </div>
            </div>
          </nav>
          <div className="header-right">
            <div className="employ-tab">
              <p>Are you looking to employ?</p>
              <button>Click Here</button>
            </div>
          </div>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/userdashboard" element={<Userdash />} />
      </Routes>
    </Router>
  );
};

export default App;
