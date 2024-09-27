import React from 'react'
import './Home.css';
import Slideshow from './Slideshow'
import Sidenavbar from './Subcomponents/Sidenavbar/Sidenavbar';
import Buttons from './Subcomponents/Tabbuttons/Buttons';
const Home = () => {
  return (
    <div>
      <Slideshow/>
      <div className="carrange">
        <h1>CAR RANGE</h1>
        <Sidenavbar/>
        <Buttons/>
      
      </div>
    </div>
  )
}

export default Home
