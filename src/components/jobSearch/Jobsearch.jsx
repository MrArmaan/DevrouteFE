import { useState } from "react";
import "./Jobsearch.css"; // Import the CSS file

const JobDetailsPopup = ({ job, onClose, onApply, isLoggedIn, applied }) => {
  return (
    <div className="job-details-popup">
      <div className="job-details-popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3>{job.title}</h3>
        <p>Company: {job.company}</p>
        <p>Location: {job.location}</p>
        {isLoggedIn && <button onClick={onApply}>Apply Now</button>}
        {applied && <p>User has successfully applied for this job.</p>}
      </div>
    </div>
  );
};

const JobPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [applied, setApplied] = useState(false);

  const jobs = [
    {
      id: 1,
      title: "Junior Frontend Developer",
      company: "Acme Web Solutions",
      location: "New York, NY",
    },
  ];

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleApply = () => {
    fetch("api/applyForJob", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ jobId: selectedJob.id }),
    })
      .then((response) => {
        if (response.ok) {
          setApplied(true);
        } else {
          console.error("Failed to apply for the job.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleClose = () => {
    setSelectedJob(null);
  };

  return (
    <div className="jobsearch-wrapper">
      <section className="job-listings">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="job-card"
            onClick={() => handleJobClick(job)}
          >
            <h3>{job.title}</h3>
            <p>Company: {job.company}</p>
            <p>Location: {job.location}</p>
            {isLoggedIn && <button onClick={handleApply}>Apply Now</button>}
            {applied && <p>User has successfully applied for this job.</p>}
          </div>
        ))}
      </section>

      <section className="search-options">
        <button className="search-button">Search By Name</button>
        <button className="search-button">Search By Location</button>
      </section>

      <img
        src="path/to/workplace-image.jpg"
        alt="Workplace"
        className="workplace-image"
      />

      {selectedJob && (
        <JobDetailsPopup
          job={selectedJob}
          onClose={handleClose}
          onApply={handleApply}
          isLoggedIn={isLoggedIn}
          applied={applied}
        />
      )}
    </div>
  );
};

export default JobPage;
