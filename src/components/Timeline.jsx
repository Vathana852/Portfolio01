import React from "react";
import "./Timeline.css"; // keep your CSS in this file

const timelineData = [
  {
    date: "June / 2025 - Present",
    title: "Staff of Website and Design Unit",
    description: "Graphic Design, Video Editing, Photographer...",
    organization: "ACLEDA University Institute of Business",
    location: "Phnom Penh, Cambodia",
  },
  {
    date: "July / 2024 - June / 2025",
    title: "Clerk of Website and Design Unit",
    description: "Graphic Design, Video Editing, Photographer...",
    organization: "ACLEDA University Institute of Business",
    location: "Phnom Penh, Cambodia",
  },
  {
    date: "May / 2023 - July / 2024",
    title: "Full time contract employee",
    description: "Graphic Design, Video Editing, Photographer...",
    organization: "ACLEDA University Institute of Business",
    location: "Phnom Penh, Cambodia",
  },
];


// ...existing code...
const Timeline = () => {
  return (
    <div className="timeline">
      
      {timelineData.map((item, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-date">
            <div>{item.date}</div>
          </div>

          <div className="timeline-content">
            <h2>{item.title}</h2>
            <p className="timeline-paragraph">

              <span className="inline-row">
                {/* Work Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-briefcase-fill"
                  viewBox="0 0 16 16"
                  style={{ color: "#FDC101" }}
                >
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
                  <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
                </svg>
                <span className="inline-text">{item.description}</span>
              </span>

              <span className="inline-row">
                {/* Location Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                  style={{ color: "#FDC101" }}
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>

                <span className="inline-text">
                  {item.organization}
                  <span className="location"> <br/> {item.location}</span>
                </span>
              </span>

              <button type="button" className="visit">
                See more ›
              </button>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
// ...existing code...
export default Timeline;