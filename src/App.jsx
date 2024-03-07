import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Landing from "./components/landing/Landing";

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-left">
          <ul>
            <li>
              <Link to="/jobsearch">Jobs</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <div className="profile-tab">{/* profile pic */}</div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
