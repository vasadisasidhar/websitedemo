import React from 'react'
import './Sidenavbar.css'
import { Link } from 'react-router-dom';
import download from '../../Images/downloadwhite.png'
import compare from '../../Images/compare.png'
import calculator from '../../Images/calculator.png'
import ebook from '../../Images/ebook.png'
import Centerslideshow from '../Centerslideshow/Centerslideshow'
import Emicalculator from '../../../Linkpages/Emicalculator/Emicalculator'

const Sidenavbar = () => {
  return (
    <div className="mainbody">

      <div className="leftside">
        <div className="sideNavBar">

          <ul>
            <img src={download}/>
            <li><span class="nav-text">Download<br></br>Brochure</span></li>
          </ul>

          <ul>
            <img src={compare}/>
            <li><span class="nav-text">Compare<br></br>Variants</span></li>
          </ul>

          <ul>
          <img src={calculator} alt="EMI Calculator" />
            <Link to="/emi-calculator">
              <li><span className="nav-text">EMI<br />Calculator</span></li>
            </Link>
          </ul>

          <ul>
            <img src={ebook}/>
            <li><span class="nav-text">E-Book<br></br>Now</span></li>
          </ul>

        </div>
      </div>
      <div className="center">
        <Centerslideshow/>
        
      </div>
      
    </div>     
  )
}

export default Sidenavbar
