import React from 'react'
import './Footer.css';
import facebook from './Images/facebook.png';


const Footer = () => {
  return (
    <div>
      <div className="buttomMessage">
        <div className="box1">
          <div className="box01">
            <h1>Cars...</h1>
            <li>Alto K10</li>
            <li>Celerio</li>
            <li>Dzire</li>
            <li>Brezza</li>
            <li>S-Presso</li>
          </div>
          <div className="box02">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <li>WagonR</li>
            <li>Swift</li>
            <li>Ertiga</li>
            <li>Eeco</li>
          </div>
        </div>

        <div className="box2">
          <h1>Business Hours</h1>
          <p>Mon - Fri : 10:00 AM - 08:00 PM</p>
          <p>Sat : 10:00 AM - 05:00 PM</p>
          <p>Sun : Holiday</p>
        </div>

        <div className="box3">
          <h1>Showroom Address</h1>
          <h2>Maruti Suzuki ARENA, Gachibowli</h2>
          <p>Jayabheri Automotives Pvt. Ltd.Plot No.113,114 And 115, LumbiniEnclave, CB Square, Near Bio DiversityPark, Gachibowli, Hyderabad,Telangana - 500032</p>
          <h2>+918062216214</h2>
        </div>

        <div className="box4">
          <h1>Google Reviews</h1>
            <div className="review">
            <button type="button" class="btn btn-primary btn-lg">Review Us</button>
            </div><br></br>
            <div className="facebook">
            <img src={facebook}/>
            </div>
        </div>
      </div>
      <div className="footerbox">
        <h2>Copyright © Maruti Suzuki India Limited</h2>
        <h3>Privacy Policy</h3>
      </div>
    </div>
  )
}

export default Footer
