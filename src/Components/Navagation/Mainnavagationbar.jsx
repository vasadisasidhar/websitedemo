import React from 'react'
import './Mainnavagationbar.css';
import { Link } from 'react-router-dom';
import home from './Images/Home.png'

const Mainnavagationbar = () => {
  return (
    <div className="mainNavBar">
        <ul>
            <Link to="/home"><img src={home}/></Link>
            <li>ABOUT US</li>
            <li>CARS</li>
            <li>SERVICES</li>
            <li>ACCESSORIES</li>
            <li>FINANCE</li>
            <li>INSURANCE</li>
            <li>DRIVING SCHOOL</li>
            <li>CAREERS</li>
            <li><Link to="/contact">CONTACT US</Link></li>
            <li>E BOOK NOW</li>
            <li>VIEDO CONNECT</li>
            <li>SUBSCRIBE</li>
        </ul>
    </div>
  )
}

export default Mainnavagationbar
