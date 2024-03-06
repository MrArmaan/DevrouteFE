import React from "react";
import "./.css";

const JobPage = () => {
  return (
    <div className="jobpage-wrapper">
      <div className="job-wrapper">
        on click will expand to show full description
        <div className="job-title">JOB TITLE</div>
        <div className="job-desc">
          <>SECTOR</>
          <>POSTED</>
          <>SALARY</>
        </div>
        <div className="job-action">SAVE OR APPLY</div>
      </div>
    </div>
  );
};

export default JobPage;
