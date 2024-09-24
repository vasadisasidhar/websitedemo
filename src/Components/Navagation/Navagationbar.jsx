import React, { useState } from 'react';
import "./Navagation.css";
import { Link } from 'react-router-dom';
import logo from '../Images/logo.jpg';

const Navagationbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuthToggle = () => {
    if (isLoggedIn) {
      alert('You have signed out successfully...');
    } else {
      alert('You have signed in successfully...');
    }
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="headersection">
      <div className="left">
        <div className="title">
            <Link to='/home'><img src={logo} className='logo' alt="Logo" /></Link>
            <Link to='/home'><h2>VS VEHICAL SHOWROOM</h2></Link> 
        </div>
      </div>

      <div className="navSection">
        <ul>
          <Link to="/home"><button type="button" className="btn btn-primary">Home</button></Link>
          <Link to="/cars"><button type="button" className="btn btn-primary">Cars</button></Link>
          <Link to="/bikes"><button type="button" className="btn btn-primary">Bikes</button></Link>
          <Link to="/contact"><button type="button" className="btn btn-primary">Contact Us</button></Link>
        </ul>
      </div>

      <div className="search">
        <input type='text' placeholder='Search....' />
      </div>

      <div className="right">
        <div className="signin" onClick={handleAuthToggle}>
          {isLoggedIn ? "Logout" : "Signin / Signup"}
        </div>
        <div className="cart">(Add +91/0 before calling) <h1>9492724945</h1></div>
      </div>
    </div>
  );
};

export default Navagationbar;
