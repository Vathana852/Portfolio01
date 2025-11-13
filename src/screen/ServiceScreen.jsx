import React from 'react'
import'./style/ServiceScreenStyle.css'
import { FaTrash, FaDumpster, FaRecycle } from 'react-icons/fa';

import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { BsWindowSplit } from "react-icons/bs";





const services = [
  { icon: FiPenTool, title: 'Graphics Designs', description: 'Poster, Flyer, Banner, etc. For social media.' },
  { icon: FaLaptopCode, title: 'Web Development', description: 'E Commercial, News Website, Management System, etc,' },
  { icon: BsWindowSplit, title: 'UX UI Design', description: 'Website, App, Destop App, etc,' },
  
];

const ServicesPage = () => {
  return (
    <div className="services-container" id="service">
      <h2 className="services-subtitle">Features <span>Services</span></h2>
      <h1 className="services-title">My <span>Special Service</span> For your Business Development</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon-wrapper">
              <service.icon className="service-icon" />
            </div>
            <h3 className="card-title">{service.title}</h3>
            <p className="card-description">{service.description}</p>
            <span className="card-arrow">→</span>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ServicesPage;
