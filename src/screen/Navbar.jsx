import React, { useState } from 'react'
import './style/NavbarStyle.css'
import logo from '../assets/logo/Vath-Logo-Version2.png'

const designCode = logo;

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // smooth scroll effect
      setMenuOpen(false); // close the mobile menu
    }
  };

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
              <li onClick={() => handleScroll('home')}>
                <a href="#home" className="menu-link">Home</a>
              </li>
              <li onClick={() => handleScroll('about')}>
                <a href="#about" className="menu-link">About Us</a>
              </li>
              <li onClick={() => handleScroll('service')}>
                <a href="#service" className="menu-link">Service</a>
              </li>
              <li onClick={() => handleScroll('experience')}>
                <a href="#experience" className="menu-link">Experience</a>
              </li>
              <li onClick={() => handleScroll('education')}>
                <a href="#education" className="menu-link">Education</a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default NavBar
