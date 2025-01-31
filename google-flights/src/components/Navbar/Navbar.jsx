import React from 'react';
import './navbar.css';
import logo from '../../assets/SKYQUESTL.png';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-logo'>
        <img src={logo} alt='SkyQuest Logo' className='logo' />
      </div>
      <div className='navbar-elements'>
        <button className='nav-button'>
          Travel
        </button>
        <button className='nav-button'>
          Explore
        </button>
        <button className='nav-button'>
          Flights
        </button>
        <button className='nav-button'>
          Hotels
        </button>
        <button className='nav-button'>
          Vacation Rentals
        </button>
      </div>
      <div className='buttons'>
        <button className='signup-button'>
            Sign Up
        </button>   
        <p className='signin-button'>
            Sign In
        </p>
      </div>
    </div>
  );
};

export default Navbar;