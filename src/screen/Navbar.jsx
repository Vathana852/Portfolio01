import React, { useState } from 'react'
import { useEffect } from "react";
import './style/NavbarStyle.css'
import logo from '../assets/logo/Vath-Logo-Version2.png'

const designCode = logo;

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
      setActive(id); // set active on click
    }
  };


    useEffect(() => {
    const ids = ['home','about','service','experience','education','LatestProject','ContactSections'];
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, { threshold: 0.6 });

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);


  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">

          {/* Logo */}
          <div className="navbar-logo">
            <img src={designCode} alt="Logo" />
          </div>

          {/* Hamburger icon */}
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          </div>

          {/* Menu Items */}
          <div className={`navbar-menu ${menuOpen ? 'open' : 'desktop-menu'}`}>
            <ul>
              <li className={active === 'home' ? 'active' : ''} onClick={() => handleScroll('home')}>
                <a href="#home" className={`menu-link ${active === 'home' ? 'active' : ''}`}>Home</a>
              </li>
              <li className={active === 'about' ? 'active' : ''} onClick={() => handleScroll('about')}>
                <a href="#about" className={`menu-link ${active === 'about' ? 'active' : ''}`}>About Us</a>
              </li>
              <li className={active === 'service' ? 'active' : ''} onClick={() => handleScroll('service')}>
                <a href="#service" className={`menu-link ${active === 'service' ? 'active' : ''}`}>Service</a>
              </li>
              <li className={active === 'experience' ? 'active' : ''} onClick={() => handleScroll('experience')}>
                <a href="#experience" className={`menu-link ${active === 'experience' ? 'active' : ''}`}>Experience</a>
              </li>
              <li className={active === 'education' ? 'active' : ''} onClick={() => handleScroll('education')}>
                <a href="#education" className={`menu-link ${active === 'education' ? 'active' : ''}`}>Education</a>
              </li>
              <li className={active === 'LatestProject' ? 'active' : ''} onClick={() => handleScroll('LatestProject')}>
                <a href="#LatestProject" className={`menu-link ${active === 'LatestProject' ? 'active' : ''}`}>Latest Project</a>
              </li>
              <li className={active === 'ContactSections' ? 'active' : ''} onClick={() => handleScroll('ContactSections')}>
                <a href="#ContactSections" className={`menu-link ${active === 'ContactSections' ? 'active' : ''}`}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>  
  )
}

export default NavBar
