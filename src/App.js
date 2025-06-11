import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Help from './pages/help';
import About from './pages/about';
import Login from './pages/Login';
import Footer from './components/Footer.js';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar Component */}
        <Navbar />
        
        
        {/* Routing setup for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} /> 
        </Routes>
<Footer/>
      </div>
    </Router>
  );
}

export default App;
