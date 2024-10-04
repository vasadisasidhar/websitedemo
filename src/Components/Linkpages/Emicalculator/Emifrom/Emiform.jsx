import React, { useState } from 'react';
import './Emiform.css';

const Emiform = () => {
  // State to manage the selected model
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedVarient, setVarient] = useState('');

  // Handler for model selection
  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  const handleVarientChange =(event) => {
    setVarient(event.target.value)
  }

  return (
    <div>
      <form>
        <div className="containerBox">
          <div className="inputBox">
            <span className="inputtext"></span>
            <select onChange={handleModelChange} value={selectedModel}>
              <option value=''>Select Model...</option>
              <option value='CELERIO'>CELERIO</option>
              <option value='NEW WAGONR'>NEW WAGONR</option>
              <option value='ALTO K10'>ALTO K10</option>
              <option value='TOUR H3'>TOUR H3</option>
              <option value='TOUR V'>TOUR V</option>
              <option value='TOUR M'>TOUR M</option>
              <option value='TOUR S'>TOUR S</option>
              <option value='TOUR H1'>TOUR H1</option>
              <option value='DZIRE'>DZIRE</option>
              <option value='ERTIGA'>ERTIGA</option>
              <option value='BREZZA'>BREZZA</option>
              <option value='EECO'>EECO</option>
              <option value='S.PRESSO'>S.PRESSO</option>
              <option value='SWIFT'>SWIFT</option>
            </select>
          </div>

          <div className="inputBox">
            <span className="inputtext"></span>
            <select disabled={!selectedModel} onChange={handleVarientChange} value={selectedVarient}>
              <option value=''>Select Variant...</option>
              <option value='ZXI'>ZXI</option>
              <option value='ZXI+'>ZXI+</option>
            </select>
          </div>

          <div className="inputBox">
            <span className="inputtext"></span>
            <select disabled={!selectedVarient}>
              <option value=''>Select Color</option>
              <option value='White'>White</option>
              <option value='Red'>Red</option>
            </select>
          </div>
        </div>

        <div className="containerBox2">
          <div className="inputBox">
            <span className="inputtext">Name:</span>
            <input type='text' placeholder='Enter Your Name...' />
          </div>

          <div className="inputBox">
            <span className="inputtext">Email:</span>
            <input type='text' placeholder='Enter Your Email-id...' />
          </div>

          <div className="inputBox">
            <span className="inputtext">DOB:</span>
            <input type='text' placeholder='Enter Your DOB...' />
          </div>

          <div className="inputBox">
            <span className="inputtext">Mobile:</span>
            <input type='text' placeholder='Enter Your Mobile Number...' />
          </div>
        </div>

        <div className="containerBox3">
          <h2>Enter your Full Name & Details as per valid ID proof like PAN Card etc.</h2>
        </div>
      </form>
    </div>
  );
}

export default Emiform;
