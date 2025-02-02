import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'; 
import './signup.css';
import logo from "../../assets/SKYQUESTL.png";

const Signup = () => {
  const [userdata, setUserdata] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserdata((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userdata.password !== userdata.confirm_password) {
      alert("Passwords do not match!");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: userdata.first_name,
          last_name: userdata.last_name,
          email: userdata.email,
          password: userdata.password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Signup successful!");
        setUserdata({
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          confirm_password: ''
        });
      } else {
        alert(data.message || "Signup failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong! Please try again.");
    }
  };
  

  return (
    <div className='signup-container'>
      <div className='signup-box'>
        <div className='signup-image'>
          <img src={logo} alt="logo" className='signup-logo'/>
        </div>
        <h1>Sign Up</h1>
        <form className='signup-form' onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className='icon'/> 
            <input 
              type='text' 
              placeholder='First Name' 
              name='first_name' 
              value={userdata.first_name} 
              onChange={handleChange} 
            />
          </div>
          <div className="input-group">
            <FaUser className='icon'/> 
            <input 
              type='text' 
              placeholder='Last Name' 
              name='last_name' 
              value={userdata.last_name} 
              onChange={handleChange} 
            />
          </div>
          <div className="input-group">
            <FaEnvelope className='icon'/> 
            <input 
              type='email' 
              placeholder='Email' 
              name='email' 
              value={userdata.email} 
              onChange={handleChange} 
            />
          </div>
          <div className="input-group">
            <FaLock className='icon'/>
            <input 
              type='password' 
              placeholder='Password' 
              name='password' 
              value={userdata.password} 
              onChange={handleChange} 
            />
          </div>
          <div className="input-group">
            <FaLock className='icon'/> 
            <input 
              type='password' 
              placeholder='Confirm Password' 
              name='confirm_password' 
              value={userdata.confirm_password} 
              onChange={handleChange} 
            />
          </div>
          <button type='submit'>Signup</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
