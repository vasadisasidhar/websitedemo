import React from 'react'
import './Home.css';
import Slideshow from './Slideshow'
import Sidenavbar from './Subcomponents/Sidenavbar/Sidenavbar';
import Centerimage from './Subcomponents/Centerimage/Centerimage';
import Centerslideshow from './Subcomponents/Centerslideshow/Centerslideshow';
const Home = () => {
  return (
    <div>
      <Slideshow/>
      <div className="carrange">
        <h1>CAR RANGE</h1>
        <Sidenavbar/>
        {/*<Centerimage/>*/}
      
      </div>
    </div>
  )
}

export default Home
