import { Link } from "react-router-dom";
import "./Landing.css";
import Carousel from "../carousel/Carousel";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="topbody-group">
        <div className="carousel-container">
          <Carousel />
        </div>

        <div className="main-body">
          <div className="landing-text">
            <h1 className="landing-heading">
              <span className="empower-text">Define Your Development With</span>{" "}
              <Link to="/route.dev" className="junior-link">
                Dev.Route
              </Link>
            </h1>
            <p className="landing-subheading">
              The Right Route for Junior Developers! Find the Right .Route for
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
        <div className="under-body">
          <div className="section-container">
            <div className="section">
              <div className="box1">
                <img src="/images/manbkgrd.png" alt="Looking to Employ?" />
                <div className="text-overlay1">
                  <h3>Looking to Employ?</h3>
                  <p>
                    Uncover exceptional junior talent and sculpt the destiny of
                    your team with Dev.Route.
                  </p>
                  <button>Register Now</button>
                </div>
              </div>
              <div className="box2">
                <img
                  src="/images/manwomanbkgrd.png"
                  alt="Looking for Employment?"
                />
                <div className="text-overlay1">
                  <h3>Looking for Employment?</h3>
                  <p className="right-text">
                    Display your talents and propel your technology career
                    forward with Dev.Route. Your forthcoming opportunity is on
                    the horizon!
                  </p>
                  <button>Register Now</button>
                </div>
              </div>
            </div>
          </div>
          <div class="trending">
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
              <div class="job-box">
                <h3>Job Title 3</h3>
                <p>Description of Job 2</p>
              </div>
              <div class="job-box">
                <h3>Job Title 4</h3>
                <p>Description of Job 2</p>
              </div>
            </div>
          </div>
          <div className="location-container">
            <div className="location">
              <h2>Locations</h2>
              <p>
                Streamline your employment journey by discovering roles in the
                UK's leading tech centers. Whether in London or Manchester,
                customize your exploration to focus on renowned cities, ensuring
                you secure a position that aligns perfectly with your expertise
                and career goals within the vibrant tech sector.
              </p>
              <div className="location-group">
                <div className="location-box1">
                  <img src="/images/manny.jpg" alt="Manchester" />
                  <div className="text-overlay">
                    <h3>Manchester</h3>
                  </div>
                </div>
                <div className="location-box2">
                  <img src="/images/landan.jpg" alt="London" />
                  <div className="text-overlay">
                    <h3>London</h3>
                  </div>
                </div>
                <div className="location-box3">
                  <img src="/images/glasgor.jpg" alt="Glasgow" />
                  <div className="text-overlay">
                    <h3>Glasgow</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
