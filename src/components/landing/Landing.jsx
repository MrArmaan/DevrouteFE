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
          <div className="search-boxes">
            <input type="text" placeholder="Search job by name..." />
            <input type="text" placeholder="Search job by location..." />
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

      <footer className="footer">
        <p>Footer info will go here</p>
      </footer>
    </div>
  );
};

export default Landing;
