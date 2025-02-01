import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Flights from './components/Flights/Flights'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Flights/>} />
        <Route path='/flights' element={<Flights />} />
      </Routes>
      
    </Router>
  )
}

export default App
