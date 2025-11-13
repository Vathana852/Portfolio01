import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './NavBarStyle.css'
import logo from '../assets/logo/Vath-Logo-Version2.png'


const designCode = logo;

const NavBar = (props) => {
    const logo = designCode;
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
        
        {/* Logo */}
        <div className="navbar-logo">
            <img src={logo} alt="Logo" />
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
              <li onClick={() => setMenuOpen(false)}>
                <NavLink to="/" className={({ isActive }) => isActive ? "active-menu" : ""} end>Home</NavLink>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <NavLink to="/about" className={({ isActive }) => isActive ? "active-menu" : ""}>About Us</NavLink>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <NavLink to="/service" className={({ isActive }) => isActive ? "active-menu" : ""}>Service</NavLink>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <NavLink to="/Experience" className={({ isActive }) => isActive ? "active-menu" : ""}>Experience</NavLink>
              </li>
              {props.children}
            </ul>
          </div>
        

        </div>
      </nav>
    </div>
  )
}

export default NavBar
