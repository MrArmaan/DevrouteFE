import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="main-body">
        <div className="joblist-container">
          <div className="job-one">
            <img src="" alt="" />
          </div>
          <div className="job-two">
            <img src="" alt="" />
          </div>
        </div>

        <div className="rightside">
          <div className="search-container">
            <div className="input-container">
              <input
                type="text"
                className="search-boxes"
                placeholder="Search job by name..."
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                className="search-boxes"
                placeholder="Search job by location..."
              />
            </div>
          </div>

          <div className="happy-image-container">
            <img
              className="happy-image"
              src="/images/Designer (5).png"
              alt=""
            />
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-left">
          <div className="footer-one">
            <p>Dev.Route</p>
            <p>About us Privacy</p>
            <p>policy Terms and Conditions</p>
          </div>
          <div className="footer-two">
            <p>People looking for jobs.</p>
            <p>contact us</p>
            <p>Login</p>
          </div>
          <div className="footer-three">
            <p>Recruiter</p>
            <p>Advertise Job</p>
            <p>Recruiter Login in</p>
          </div>
        </div>
        <div className="footer-right">
          <div className="social-one">
            <img src="/images/social-1-removebg-preview.png" alt="" />
          </div>
          <div className="social-two">
            <img src="/images/social-2-removebg-preview.png" alt="" />
          </div>
          <div className="soial-three">
            <img src="/images/social-3-removebg-preview.png" alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
