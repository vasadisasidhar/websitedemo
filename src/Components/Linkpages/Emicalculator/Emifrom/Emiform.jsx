import React, { useState } from 'react';
import './Emiform.css';
import modelData from './modelData'; // Import the model data




const Emiform = () => {
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedVariant, setSelectedVariant] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [mobile, setMobile] = useState('');
  const [isAgreed, setIsAgreed] = useState(false); // State for checkbox
  

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
    setSelectedVariant(''); // Reset variant and color on model change
    setSelectedColor('');
  };

  const handleVariantChange = (event) => {
    setSelectedVariant(event.target.value);
    setSelectedColor(''); // Reset color on variant change
  };

  const submitHandler = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Create a formatted message with the input values
    const message = `
      Model: ${selectedModel}
      Variant: ${selectedVariant}
      Color: ${selectedColor}
      Name: ${name}
      Email: ${email}
      DOB: ${dob}
      Mobile: ${mobile}
      Agreed to Terms: ${isAgreed ? 'Yes' : 'No'}
    `;

    alert(message); // Display the alert with the message
  };

  // Get variants as an array
  const variants = selectedModel ? Object.keys(modelData[selectedModel].variants) : [];
  
  // Get colors based on the selected variant
  const colors = selectedVariant ? modelData[selectedModel].variants[selectedVariant] : [];

  return (
    <div>
      <form>
        <div className="containerBox">
          <div className="inputBox">
            <select onChange={handleModelChange} value={selectedModel}>
              <option value=''>Select Model*</option>
              {Object.keys(modelData).map((model) => (
                <option key={model} value={model}>{model}</option>
              ))}
            </select>
          </div>

          <div className="inputBox">
            <select onChange={handleVariantChange} value={selectedVariant}>
              <option value=''>Select Variant*</option>
              {variants.map(variant => (
                <option key={variant} value={variant}>{variant}</option>
              ))}
            </select>
          </div>

          <div className="inputBox">
            <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
              <option value=''>Select Color*</option>
              {colors.map(color => (
                <option key={color} value={color}>{color}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="containerBox2">
          <div className="inputBox">
            <span className="inputtext">Name:</span>
            <input type='text' placeholder='Enter Your Name...' value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="inputBox">
            <span className="inputtext">Email:</span>
            <input type='email' placeholder='Enter Your Email-id...' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="inputBox">
            <span className="inputtext">DOB:</span>
            <input type='date' value={dob} onChange={(e) => setDob(e.target.value)} />
          </div>

          <div className="inputBox">
            <span className="inputtext">Mobile:</span>
            <input type='tel' placeholder='Enter Your Mobile Number...' value={mobile} onChange={(e) => setMobile(e.target.value)} />
          </div>
        </div>

        <div className="containerBox3">
          <h2>Enter your Full Name & Details as per valid ID proof like PAN Card etc.</h2>
        </div>


        <div className="containerRow">
            <div className="containerBox4">
                <label>
                    <input type="checkbox" checked={isAgreed} onChange={(e) => setIsAgreed(e.target.checked)}/>
                </label>
                    <p>Disclaimer: I Accept the Terms of use.I am explicitly soliciting a call message via whatsapp and other medium & am 
                        allowing this information to be used by Maruti Suzuki & its partners to customize car loan 
                        offering to my profile in accordance with the MSIL privacy policy. 
                        The loan process would be subject to these terms.</p>
            </div>
        </div>

            <div className='buttonContainer'>
                <button type="submit" className="btn btn-primary btn-lg" onClick={submitHandler}>PROCEED</button>  
          </div> 

      </form>
    </div>
  );
};

export default Emiform;
