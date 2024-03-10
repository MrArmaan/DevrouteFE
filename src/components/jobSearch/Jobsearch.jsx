import "./Jobsearch.css";

const Jobs = ({ items }) => {
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
      <div ref={$indicator1} className="indicator" />
      <div ref={$indicator2} className="indicator" />
    </div>
  );
};

export default Jobs;
