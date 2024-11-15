import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login.jsx';
import Home from './Pages/Home.jsx'
import Signup from './Pages/Signup.jsx'
import Menu from './Pages/Menu.jsx'

function App() {
  return (
    <Router>
      {/* Navbar stays at the top with fixed position */}
      <Navbar />
      
      {/* This div ensures content starts below the fixed navbar */}
      <div style={{ marginTop: "60px" }}> 
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/menu" element={<Menu/>} />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
