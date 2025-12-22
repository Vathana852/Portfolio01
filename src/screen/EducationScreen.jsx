import React from "react";
import './style/EducationScreenStyle.css';

import htmlIcon from "../assets/icon/html-icon.png";
import cssIcon from "../assets/icon/css-icon.png";
import jsIcon from "../assets/icon/javascript-programming-language-icon.png";
import kotlinIcon from "../assets/icon/Kotlin.png";
import psIcon from "../assets/icon/adobe-photoshop-icon.png";
import lrIcon from "../assets/icon/adobe-lightroom-icon.png";
import aiIcon from "../assets/icon/adobe-illustrator-icon.png";
import xdIcon from "../assets/icon/adobe-xd-icon.png";
import animateIcon from "../assets/icon/adobe-animate-icon.png";
import davinciIcon from "../assets/icon/Davanci.png";

const dotStyle = {
  display: "inline-block",
  width: "8px",
  height: "8px",
  background: "#FDC101",
  borderRadius: "50%",
  marginRight: "10px",
};

const Education = () => {
  return (
    <section id="education" className="education_header">

        <h2 className='education-subtitle'>My <span>Education</span></h2>
        <h1 className='education-title'>Education <span>Journey</span> </h1>

      <div className="container_education">
        {/* Left Section */}
        <div className="education_part">
          {/* Bachelor's Degree */}
          <div className="education_part_header">
            <h2>Bachelor's Degree</h2>
            <p>
              <span style={dotStyle}></span>Fintech
            </p>
            <p>
              <span style={dotStyle}></span>ACLEDA University of Business
              (2020–2025)
            </p>
            <div style={{ margin: "50px 0 10px 0" }}>
              <a href="#">E-Certification</a>
            </div>
          </div>

          {/* Technical Skill */}
          <div className="education_part_header" >
            <h2>Technical Skill</h2>
            <div className="technical_skill_items">
              <img src={htmlIcon} alt="HTML" />
              <img src={cssIcon} alt="CSS" />
              <img src={jsIcon} alt="JavaScript" />
              <img src={kotlinIcon} alt="Kotlin" />
            </div>
          </div>

          {/* Programming Framework */}
          <div className="education_part_header">
            <h2>Programming Framework</h2>
            <div style={{ display: "flex" }}>
              <p>
                <span style={dotStyle}></span>React JS
              </p>
              <p style={{ marginLeft: "20px" }}>
                <span style={dotStyle}></span>Django
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="education_part_right">
          <h2>Editing Skill</h2>
          <div className="technical_skill_items">
            <img src={psIcon} alt="Photoshop" />
            <img src={lrIcon} alt="Lightroom" />
            <img src={aiIcon} alt="Illustrator" />
            <img src={xdIcon} alt="XD" />
            <img src={animateIcon} alt="Animate" />
            <img src={davinciIcon} alt="Davinci Resolve" />
          </div>

          {/* Soft Skills */}
          <h2 style={{ paddingTop: "40px" }}>Soft Skill</h2>

          <div style={{ display: "flex", color: "#fff" }}>
            <p>
              <span style={dotStyle}></span>Teamwork
            </p>
            <p style={{ marginLeft: "20px" }}>
              <span style={dotStyle}></span>Communication
            </p>
          </div>

          <div style={{ display: "flex", color: "#fff", paddingTop: "20px" }}>
            <p>
              <span style={dotStyle}></span>Critical Thinking
            </p>
            <p style={{ marginLeft: "20px" }}>
              <span style={dotStyle}></span>Time Management
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
