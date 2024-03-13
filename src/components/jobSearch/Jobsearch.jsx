import { useState, useEffect } from "react";
import "./Jobsearch.css";

const JobPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [applied, setApplied] = useState(false);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    generateJobs();
  }, []);

  const generateJobs = async () => {
    const sampleJobs = [];
    const jobTitles = [
      "Software Engineer",
      "Data Scientist",
      "Web Developer",
      "Product Manager",
      "UX/UI Designer",
      "Network Engineer",
      "Cybersecurity Analyst",
      "Digital Marketing Manager",
      "Business Analyst",
      "Quality Assurance Tester",
    ];

    const companyNames = [
      "Google",
      "Amazon",
      "Microsoft",
      "Apple",
      "Facebook",
      "Tesla",
      "Netflix",
      "Airbnb",
      "Uber",
      "Salesforce",
    ];

    const locations = [
      "London",
      "Manchester",
      "Birmingham",
      "Edinburgh",
      "Glasgow",
      "Liverpool",
      "Bristol",
      "Leeds",
      "Sheffield",
      "Newcastle",
    ];

    const descriptions = {
      "Software Engineer":
        "We are seeking a talented Software Engineer to join our dynamic team and contribute to the development of cutting-edge software solutions.",
      "Data Scientist":
        "Join us as a Data Scientist and use your analytical skills to extract valuable insights from complex datasets.",
      "Web Developer":
        "We're looking for a skilled Web Developer to build responsive and user-friendly web applications using modern technologies.",
      "Product Manager":
        "As a Product Manager, you will be responsible for defining and executing the product strategy to drive business growth.",
      "UX/UI Designer":
        "Join our team as a UX/UI Designer and create intuitive and visually appealing user interfaces for our products.",
      "Network Engineer":
        "We're hiring a Network Engineer to design, implement, and maintain our network infrastructure for optimal performance and reliability.",
      "Cybersecurity Analyst":
        "Join our cybersecurity team and help protect our organization from cyber threats by implementing robust security measures.",
      "Digital Marketing Manager":
        "As a Digital Marketing Manager, you will develop and execute digital marketing campaigns to promote our products and services.",
      "Business Analyst":
        "We're seeking a skilled Business Analyst to analyze business processes and requirements and provide data-driven insights.",
      "Quality Assurance Tester":
        "Join us as a Quality Assurance Tester and ensure the quality and reliability of our software products through thorough testing.",
    };

    const accessKey = "pw62GmWXAsG7KLfT02PODBSrf4dNsXi0VLbEMNs2P0A";
    const response = await fetch(
      `https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=20&query=tech`
    );
    const data = await response.json();

    for (let i = 0; i < 20; i++) {
      const title = jobTitles[Math.floor(Math.random() * jobTitles.length)];
      const company =
        companyNames[Math.floor(Math.random() * companyNames.length)];
      const location = locations[Math.floor(Math.random() * locations.length)];
      const salary = `${Math.floor(Math.random() * 100000) + 50000}`;

      sampleJobs.push({
        id: i + 1,
        title: title,
        company: company,
        location: location,
        salary: `£${salary}`,
        description: descriptions[title],
        image: data[i].urls.regular, // Get regular sized image from Unsplash
      });
    }

    setJobs(sampleJobs);
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleApply = () => {
    if (!isLoggedIn) {
      alert("User is not logged in. Please log in to apply.");
      return;
    }
    // Simulate applying for a job
    alert("Application submitted successfully!");
    setApplied(true);
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
        <button className="search-button">Search By Title</button>
        <button className="search-button">Search By Location</button>
      </section>

      {selectedJob && (
        <div className="job-details-popup">
          <div className="job-details-popup-content">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            <h3>{selectedJob.title}</h3>
            <p>Company: {selectedJob.company}</p>
            <p>Location: {selectedJob.location}</p>
            <p>Salary: {selectedJob.salary}</p>
            <p>Description: {selectedJob.description}</p>
            <div className="image-container">
              <img src={selectedJob.image} alt="Job" className="job-image" />
            </div>
            {isLoggedIn && !applied && (
              <button className="apply-button" onClick={handleApply}>
                Apply Now
              </button>
            )}
            {applied && <p>User has successfully applied for this job.</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobPage;
