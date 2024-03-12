import { Link } from "react-router-dom";
import "./Landing.css";
import Carousel from "../carousel/Carousel";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="carousel-container">
        <Carousel />
      </div>

      <div className="main-body">
        <h1 className="landing-heading">
          <span className="empower-text">Define Your Development With</span>{" "}
          <Link to="/route.dev" className="junior-link">
            Dev.Route
          </Link>
        </h1>
        <p className="landing-subheading">
          The Right Route for Junior Developers! Find the Right .Route for You!
        </p>

        <div className="search-container">
          <input
            type="text"
            className="search-box"
            placeholder="Search jobs by name or location..."
          />
          <button className="search-button">Search</button>
        </div>
        <div>
          <section>
            <div class="section">
              <div class="box1">
                <h3>Looking to Employ?</h3>
                <p>
                  Uncover exceptional junior talent and sculpt the destiny of
                  your team with Dev.Route.
                </p>
              </div>
              <div class="box2">
                <h3>Looking for Employment?</h3>
                <p>
                  Display your talents and propel your technology career forward
                  with Dev.Route. Your forthcoming opportunity is on the
                  horizon!
                </p>
              </div>
            </div>
          </section>
          <section class="trending">
            <h2>Trending Jobs</h2>
            <div class="job-container">
              <div class="job-box">
                <h3>Job Title 1</h3>
                <p>Description of Job 1</p>
              </div>
              <div class="job-box">
                <h3>Job Title 2</h3>
                <p>Description of Job 2</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Landing;
