import React from 'react'
import Navagationbar from './Navagation/Navagationbar'
import Home from './Home/Home'
import Cars from './Landingpages/Cars'
import Bikes from './Landingpages/Bikes'
import { Route, Routes } from 'react-router-dom'
import ContactPage from './Contact/Contact'
import Mainnavagationbar from './Navagation/Mainnavagationbar'
import Footer from './Headerandfooters/Footer'


const Mainhomepage = () => {
  return (
    <div>
      <Navagationbar/>
      <Mainnavagationbar/>
      <Routes>
      <Route path='/home' element = {<Home/>}/>
        <Route path='/cars' element = {<Cars/>}/>
        <Route path='/bikes' element = {<Bikes/>}/>
        <Route path='/contact' element = {<ContactPage/>}/> 
      </Routes>
      <Footer/>
      
      
     
    </div>
  )
}

export default Mainhomepage
