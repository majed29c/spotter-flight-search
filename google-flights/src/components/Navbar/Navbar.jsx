import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../assets/SKYQUESTL.png';
import { FaPlane, FaGlobe, FaSuitcase, FaHotel, FaHome, FaBars, FaTimes, FaUser, FaUserPlus } from "react-icons/fa"; 
import classNames from 'classnames'; 
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const [active, setActive] = useState("Flights");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 890);
  const [isAnimate, setIsAnimate] = useState(false);
  const [isAnimateClose, setIsAnimateClose] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 890);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenu = () => {
    setIsAnimate(true);
    setToggled(true);
  };

  const closeMenu = () => {
    setIsAnimateClose(true);
    setTimeout(() => {
      setIsAnimateClose(false);
      setToggled(false); 
      setIsAnimate(false);
    }, 500); 
  };

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="SkyQuest Logo" className="logo" />
        </div>
        {!isMobile && (
          <div className="navbar-elements">
            <NavLink to="/travel" className={`nav-button ${active === "Travel" ? "active" : ""}`} onClick={() => setActive("Travel")}>
              <FaSuitcase /> Travel
            </NavLink>
            <NavLink to="/explore" className={`nav-button ${active === "Explore" ? "active" : ""}`} onClick={() => setActive("Explore")}>
              <FaGlobe /> Explore
            </NavLink>
            <NavLink to="/flights" className={`nav-button ${active === "Flights" ? "active" : ""}`} onClick={() => setActive("Flights")}>
              <FaPlane /> Flights
            </NavLink>
            <button
              className={`nav-button ${active === "Hotels" ? "active" : ""}`}
              onClick={() => setActive("Hotels")}
            >
              <FaHotel /> Hotels
            </button>
            <button
              className={`nav-button ${active === "Vacation Rentals" ? "active" : ""}`}
              onClick={() => setActive("Vacation Rentals")}
            >
              <FaHome /> Vacation Rentals
            </button>
          </div>
        )}
        <div className="menu-container">
          <FaBars className="menu-icon" onClick={handleMenu} />
        </div>
      </div>

      {toggled && (
        <div className={classNames("menu", { "animate": isAnimate }, { "animate-close": isAnimateClose })}>
          <div className="close-menu">
            <FaTimes className="close-icon" onClick={closeMenu} />
          </div>
          <ul>
            <li className="nav-item" onClick={() => setActive("Travel")}>
              <FaSuitcase /> Travel
            </li>
            <li className="nav-item" onClick={() => setActive("Explore")}>
              <FaGlobe /> Explore
            </li>
            <li className="nav-item" onClick={() => setActive("Flights")}>
              <FaPlane /> Flights
            </li>
            <li className="nav-item" onClick={() => setActive("Hotels")}>
              <FaHotel /> Hotels
            </li>
            <li className="nav-item" onClick={() => setActive("Vacation Rentals")}>
              <FaHome /> Vacation Rentals
            </li>
            <li className="nav-item sign-in" onClick={() => setActive("Sign In")}>
              <FaUser /> Sign In
            </li>
            <li className="nav-item sign-up" onClick={() => setActive("Sign Up")}>
              <FaUserPlus /> Sign Up
            </li>
          </ul>
        </div>
      )}
      
    </>
  );
};

export default Navbar;
