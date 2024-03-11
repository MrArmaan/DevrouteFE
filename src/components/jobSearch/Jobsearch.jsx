import "./Jobsearch.css";
import { useState } from "react";

const Jobs = ({ items }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="menu-container">
      {items.map((item, index) => (
        <a
          key={index}
          className={`item ${active === index ? "active" : ""}`}
          onMouseEnter={() => {
            setActive(index);
          }}
          href={item.href}
        >
          {item.name}
        </a>
      ))}
      <div className="indicator" />
      <div className="indicator" />
    </div>
  );
};

export default Jobs;

// ref = { $indicator2 };
