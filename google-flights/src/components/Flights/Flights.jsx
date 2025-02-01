import React, { useState } from 'react';
import { FaSearch, FaExchangeAlt, FaCalendarAlt, FaUser } from 'react-icons/fa';
import flightimage from '../../assets/flightsimage.png';
import './flights.css';
import { useEffect } from 'react';
import mobileflightimage from "../../assets/mobileflightsimage.png";
const Flights = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departure, setDeparture] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [isMobile,setIsMobile]= useState(window.innerWidth<890);
  const handleFromChange = (e) => setFrom(e.target.value);
  const handleToChange = (e) => setTo(e.target.value);
  const handleDepartureChange = (e) => setDeparture(e.target.value);
  const handleReturnDateChange = (e) => setReturnDate(e.target.value);
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

  return (
    <div className="flights-container">
      {!isMobile && <img src={flightimage} alt="flightimage" className="flightimage" /> }
      {isMobile && <img src={mobileflightimage} alt="flightimage" className='mobileflightimage'/>}

      <div className="flight-search-box">
        <div className="search-options">
          <span>Round trip ▼</span>
          <span><FaUser /> 1</span>
          <span>Economy ▼</span>
        </div>

        <div className="search-fields">
            <div className='text-inputs'>
          <input 
            type="text" 
            placeholder='From' 
            value={from} 
            onChange={handleFromChange} 
            className="flight-input" 
          />

          <FaExchangeAlt className="swap-icon" />
          <input 
            type="text" 
            placeholder="Where to?" 
            value={to} 
            onChange={handleToChange} 
            className="flight-input"
          />
          </div>
          <div className='date-inputs'>
          <input 
            type="date" 
            value={departure} 
            onChange={handleDepartureChange} 
            className="flight-input"
          />
          <input 
            type="date" 
            value={returnDate} 
            onChange={handleReturnDateChange} 
            className="flight-input"
          />
          </div>
        </div>

        <button className="explore-button">
          <FaSearch /> Explore
        </button>
      </div>
    </div>
  );
};

export default Flights;
