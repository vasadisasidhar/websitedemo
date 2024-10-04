import React from 'react'
import './Emicalculator.css'
import img1 from "../Images/Arena_Finance.png"
import img2 from "../Images/second img.png"
import Emiform from './Emifrom/Emiform'



const Emicalculator = () => {
  return (
    <div>

      <div className="mainImage">
        <img src={img1}/>
      </div>

      <div className="container3">
        <div className='containerImages'>
          <img src={img2}/>
        </div>
      </div>

      <div className="loanContainers">
        <div className="loanHeadingContainer">
            <h1>Please confirm your details to check your pre approved loan offer.</h1>
        </div>

        <div className="loanFormContainer">
          <Emiform/>
        </div> 
      </div>     
    </div>
    

    
 
  )
}
export default Emicalculator
