import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Flights from './components/Flights/Flights'
import { useEffect } from 'react';
import Signup from './containers/Signup/Signup';
function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Flights/>} />
        <Route path='/flights' element={<Flights />} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
      
    </Router>
  )
}

export default App
