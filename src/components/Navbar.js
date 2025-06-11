import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';  // Import Link for routing
import icon from './images/logo.png';
import user from './images/user.jpg'; 
import hm from './images/home.png';
import hp from './images/help.png';
import ab from './images/about.png';


const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className='nav-logo-cont'>
          <img src={icon} className="nav-logo" alt="logo" />
          <h1 className='nav-logo-text'>Travelo</h1>
        </div>
        <div className="navcomp">
          <Link to="/" className="nav-link"><img src={hm} className="user-logo" alt="user" /></Link>  {/* Link to Home */}
          <Link to="/Help" className="nav-link"><img src={hp} className="user-logo" alt="user" /></Link>  {/* Link to Help */}
          <Link to="/About" className="nav-link"><img src={ab} className="user-logo" alt="user" /></Link>  {/* Link to About */}
          <Link to="/Login" className="nav-link"><img src={user} className="user-logo" alt="user" /></Link>
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
