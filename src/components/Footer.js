import React from 'react';
import "../styles/Footer.css";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
    <div class="footer-container">
      <div class="footer-section">
        <h3>About Us</h3>
        <p> Travelo Bus offers top-notch bus rental services for private events, corporate travel, and group trips. Your comfort and safety are our priority.</p>
      </div>
      <div class="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/About" className="nav-link">About Us</Link></li>
          
          
          <li><Link to="/Help" className="nav-link">Contact Us</Link></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Contact Us</h3>
        <p>Email: anshumanpandey@gmail.com</p>
        <p>Phone: +91-7389478590</p>
        <p>Address: Arera Colony , Bhopal (462016)</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-bottom-text">&copy; Travelo. All Rights Reserved.</p>
    </div>
  </footer>
  
      
  );
};

export default Footer;
