import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-left">
          <ul>
            <li>
              <Link to="/">Jobs</Link>
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

      <Switch>
        <Route path="/Jobsearch">
          <Jobsearch />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
