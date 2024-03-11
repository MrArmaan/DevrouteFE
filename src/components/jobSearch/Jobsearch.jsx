import "./Jobsearch.css";

const JobPage = () => {
  return (
    <div className="jobsearch-wrapper">
      {/* Job Listings */}
      <section className="job-listings">
        {/* Display job listings here */}
        {/* Example: */}
        <div className="job-card">
          <h3>Junior Frontend Developer</h3>
          <p>Company: Acme Web Solutions</p>
          <p>Location: New York, NY</p>
          <button>Apply Now</button>
        </div>
        <div className="job-card">
          <h3>Junior Frontend Developer</h3>
          <p>Company: Acme Web Solutions</p>
          <p>Location: New York, NY</p>
          <button>Apply Now</button>
        </div>
        <div className="job-card">
          <h3>Junior Frontend Developer</h3>
          <p>Company: Acme Web Solutions</p>
          <p>Location: New York, NY</p>
          <button>Apply Now</button>
        </div>
        <div className="job-card">
          <h3>Junior Frontend Developer</h3>
          <p>Company: Acme Web Solutions</p>
          <p>Location: New York, NY</p>
          <button>Apply Now</button>
        </div>
        <div className="job-card">
          <h3>Junior Frontend Developer</h3>
          <p>Company: Acme Web Solutions</p>
          <p>Location: New York, NY</p>
          <button>Apply Now</button>
        </div>

        {/* Repeat for other job listings */}
      </section>

      {/* Search Options */}
      <section className="search-options">
        <button className="search-button">Search By Name</button>
        <button className="search-button">Search By Location</button>
      </section>

      {/* Workplace Image */}
      <img
        src="path/to/workplace-image.jpg"
        alt="Workplace"
        className="workplace-image"
      />
    </div>
  );
};
export default JobPage;
