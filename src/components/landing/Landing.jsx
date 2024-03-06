import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <header className="header">
        <div className="header-left">
          <div className="logo">{/* logo */}</div>
          <div className="slogan">{/* slogan */}</div>
        </div>
        <div className="site-name">
          <h1>DEV.ROUTE</h1>
        </div>
        <div className="header-right">
          <div className="employ-tab">
            <p>Are you looking to employ?</p>
            <button>Click Here</button>
          </div>
        </div>
      </header>

      {/* navbar will be here */}

      <div className="main-body">
        <div className="search-boxes">
          <input type="text" placeholder="Search job by name..." />
          <input type="text" placeholder="Search job by location..." />
        </div>
        <div className="job-listings">
          {/* random job listings from API?? */}
        </div>
        <div className="image-container">{/* happy image */}</div>
      </div>

      {/* footer */}
      <footer className="footer">{/* footer content */}</footer>
    </div>
  );
};

export default Landing;
