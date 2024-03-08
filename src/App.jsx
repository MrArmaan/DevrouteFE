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
      <header className="header">
        <div className="header-left">
          <div className="logo-container">
            <img className="logo" src="/images/Designer (4).png" alt="" />
          </div>
          <div className="slogan">
            <p>The Right Route for Junior Developers</p>
          </div>
        </div>

        <div className="header-right">
          <div className="employ-tab">
            <p>Are you looking to employ?</p>
            <button>Click Here</button>
          </div>
        </div>
      </header>

      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/">Home</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/userdashboard"> User Dashboard</Link>
        </div>
        <div className="navbar-right"></div>
      </nav>

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
