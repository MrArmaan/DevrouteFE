import { useState } from "react";
import "./Jobsearch.css";

const JobPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [applied, setApplied] = useState(false);

  const jobs = [
    {
      id: 1,
      title: "Junior Frontend Developer",
      company: "Acme Web Solutions",
      location: "New York, NY",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleApply = () => {
    if (!isLoggedIn) {
      alert("User is not logged in. Please log in to apply.");
      return;
    }
    applyForJob(selectedJob.id)
      .then(() => {
        setApplied(true);
        alert("Successfully applied for the job.");
      })
      .catch((error) => {
        console.error("Failed to apply for the job:", error);
        alert("Failed to apply for the job: " + error.message);
      });
  };

  const applyForJob = (jobId) => {
    return fetch("http://localhost:5001/api/applyForJob", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ jobId }),
    });
  };

  const handleClose = () => {
    setSelectedJob(null);
    setApplied(false);
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
        <div className="job-details-popup">
          <div className="job-details-popup-content">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            <h3>{selectedJob.title}</h3>
            <p>Company: {selectedJob.company}</p>
            <p>Location: {selectedJob.location}</p>
            <p>Description: {selectedJob.description}</p>
            {isLoggedIn && !applied && (
              <button onClick={handleApply}>Apply Now</button>
            )}
            {applied && <p>User has successfully applied for this job.</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobPage;
