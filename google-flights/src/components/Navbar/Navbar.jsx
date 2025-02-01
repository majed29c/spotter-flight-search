import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/SKYQUESTL.png';
import { FaPlane, FaGlobe, FaSuitcase, FaHotel, FaHome, FaBars } from "react-icons/fa"; 
import { useEffect } from 'react';
const Navbar = () => {
  const [active, setActive] = useState("Flights");
  const [isMobile,setIsMobile] = useState(window.innerWidth < 800);
  useEffect(() => {
    const handleResize = () =>{
      setIsMobile(window.innerWidth < 800);
    }
    handleResize();
    window.addEventListener('resize',handleResize);
    return () => {
      window.removeEventListener('resize',handleResize);
    }
  }, []);

  const handleMenu = () => {
    console.log('Menu Clicked');
  }
  return (
    <div className='navbar-container'>
      <div className='navbar-logo'>
        <img src={logo} alt='SkyQuest Logo' className='logo' />
      </div>
      {!isMobile &&
      <div className='navbar-elements'>
        <button className={`nav-button ${active === "Travel" ? "active" : ""}`} onClick={() => setActive("Travel")}>
          <FaSuitcase /> Travel
        </button>
        <button className={`nav-button ${active === "Explore" ? "active" : ""}`} onClick={() => setActive("Explore")}>
          <FaGlobe /> Explore
        </button>
        <button className={`nav-button ${active === "Flights" ? "active" : ""}`} onClick={() => setActive("Flights")}>
          <FaPlane /> Flights
        </button>
        <button className={`nav-button ${active === "Hotels" ? "active" : ""}`} onClick={() => setActive("Hotels")}>
          <FaHotel /> Hotels
        </button>
        <button className={`nav-button ${active === "Vacation Rentals" ? "active" : ""}`} onClick={() => setActive("Vacation Rentals")}>
          <FaHome /> Vacation Rentals
        </button>
      </div>}
      <div className='menu'>
        <FaBars className='menu-icon' onClick={handleMenu}/> 
      </div>
    </div>
  );
};

export default Navbar;
