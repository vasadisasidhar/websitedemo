import React, { useState } from 'react';
import './Emiform.css';
import modelData from './modelData'; // Import the model data
import ConfirmationPopup from './ConfirmationPopup';
import TermsAndConditionsModal from './Termsandconditions/TermsAndConditionsModal';

const Emiform = () => {
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedVariant, setSelectedVariant] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [mobile, setMobile] = useState('');
  const [isAgreed, setIsAgreed] = useState(false); // State for checkbox

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // Error states
  const [errors, setErrors] = useState({});
  // New state for terms modal
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
    setSelectedVariant(''); // Reset variant and color on model change
    setSelectedColor('');
  };

  const handleVariantChange = (event) => {
    setSelectedVariant(event.target.value);
    setSelectedColor(''); // Reset color on variant change
  };

  const validateForm = () => {
    const newErrors = {};
    if (!selectedModel) newErrors.model = "Model is required.";
    if (!selectedVariant) newErrors.variant = "Variant is required.";
    if (!selectedColor) newErrors.color = "Color is required.";
    if (!name) newErrors.name = "Name is required.";
    if (!email) newErrors.email = "Email is required.";
    if (!dob) newErrors.dob = "Date of Birth is required.";
    if (!mobile) newErrors.mobile = "Mobile number is required.";
    if (!isAgreed) newErrors.agreed = "You must accept the terms.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const submitHandler = (event) => {
    event.preventDefault(); // Prevent the default form submission

    if (validateForm()) {
      // Create a formatted message with the input values
      const output = `
        Model: ${selectedModel}
        Variant: ${selectedVariant}
        Color: ${selectedColor}
        Name: ${name}
        Email: ${email}
        DOB: ${dob}
        Mobile: ${mobile}
        Agreed to Terms: ${isAgreed ? 'Yes' : 'No'}`;

      // Display the alert with the message
      setModalMessage(`Thank you ${name} for choosing a ${selectedVariant}. Our representative will call you shortly. `);
      setShowModal(true);
      setErrors({}); // Clear errors on successful submission
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  const handleOpenTermsModal = () => {
    setShowTermsModal(true);
  };

  const handleCloseTermsModal = () => {
    setShowTermsModal(false);
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
            {errors.model && <span className="error">{errors.model}</span>}
          </div>

          <div className="inputBox">
            <select onChange={handleVariantChange} value={selectedVariant}>
              <option value=''>Select Variant*</option>
              {variants.map(variant => (
                <option key={variant} value={variant}>{variant}</option>
              ))}
            </select>
            {errors.variant && <span className="error">{errors.variant}</span>}
          </div>

          <div className="inputBox">
            <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
              <option value=''>Select Color*</option>
              {colors.map(color => (
                <option key={color} value={color}>{color}</option>
              ))}
            </select>
            {errors.color && <span className="error">{errors.color}</span>}
          </div>
        </div>

        <div className="containerBox2">
          <div className="inputBox">
            <span className="inputtext">Name:</span>
            <input type='text' placeholder='Enter Your Name...' value={name} onChange={(e) => setName(e.target.value)} />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="inputBox">
            <span className="inputtext">Email:</span>
            <input type='email' placeholder='Enter Your Email-id...' value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="inputBox">
            <span className="inputtext">DOB:</span>
            <input type='date' value={dob} onChange={(e) => setDob(e.target.value)} />
            {errors.dob && <span className="error">{errors.dob}</span>}
          </div>

          <div className="inputBox">
            <span className="inputtext">Mobile:</span>
            <input type='tel' placeholder='Enter Your Mobile Number...' value={mobile} onChange={(e) => setMobile(e.target.value)} />
            {errors.mobile && <span className="error">{errors.mobile}</span>}
          </div>
        </div>

        <div className="containerBox3">
          <h2>Enter your Full Name & Details as per valid ID proof like PAN Card etc.</h2>
        </div>

        <div className="containerRow">
          <div className="containerBox4">
            <label>
              <input type="checkbox" checked={isAgreed} onChange={(e) => setIsAgreed(e.target.checked)} />
            </label>
            <p>Disclaimer: 
              <span onClick={handleOpenTermsModal} style={{ cursor: 'pointer', color: 'blue' }}> 
                <strong className="terms-strong"> I Accept the Terms of use.   </strong></span>
                 I am explicitly soliciting a call message via whatsapp and other medium & am 
                allowing this information to be used by Maruti Suzuki & its partners to customize 
                car loan offering to my profile in accordance with the MSIL privacy policy. 
                The loan process would be subject to these terms.</p>
            {errors.agreed && <span className="error">{errors.agreed}</span>}
          </div>
        </div>

        <div className='buttonContainer'>
          <button type="submit" className="btn btn-primary btn-lg" onClick={submitHandler}>PROCEED</button>  
        </div> 
      </form>
      {showModal && <ConfirmationPopup message={modalMessage} onClose={handleCloseModal} />}
      {showTermsModal && <TermsAndConditionsModal onClose={handleCloseTermsModal} />}
    </div>
  );
};

export default Emiform;
