import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="main-body">
        <div className="logo-container">
          <img
            src="/images/drlogo.png"
            alt="Your Logo"
            className="landing-logo"
          />
        </div>

        <div className="rightside">
          <h1 className="landing-heading">
            <span className="empower-text">Empower Your Tech Journey</span> with{" "}
            <Link to="/route.dev" className="junior-link">
              Dev.Route
            </Link>
          </h1>
          <p className="landing-subheading">
            The Right Route for Junior Developers. Find the Right .Route for
            You!
          </p>

          <div className="search-container">
            <input
              type="text"
              className="search-box"
              placeholder="Search jobs by name or location..."
            />
            <button className="search-button">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
