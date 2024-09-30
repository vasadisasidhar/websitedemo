import React, { useState } from 'react';
import "../Forms/Submitenquiry.css";
import Modal from './Modal'; // Import your Modal component

const Submitenquiry = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [number, setNumber] = useState('');
  const [model, setModel] = useState('');
  const [type, setType] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const validatePhoneNumber = (phone) => {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setError(''); // Reset error state

    if (!name || !number || !model || !type) {
      setError('All fields are required.');
      return;
    }

    if (!validatePhoneNumber(number)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    const message = `Name: ${name}\nEmail-id: ${mail}\nPhone: ${number}\nModel: ${model}\nPurchase Type: ${type}`;
    setModalMessage(`Thank You ${name}, we will contact you shortly on +91-${number}`);
    setShowModal(true);
    resetFields();
  };

  const resetFields = () => {
    setName('');
    setMail('');
    setNumber('');
    setModel('');
    setType('');
    setError('');
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container1">
      <div className="registration">CAR ENQUIRY</div>
      {error && <div className="error">{error}</div>}
      <form onSubmit={submitHandler}>
        <div className="container2">
          <div className="inputbox">
            <span className="inputtext">Name:</span>
            <input type='text' placeholder='Enter Your Name...' value={name} onChange={handleChange(setName)} />
          </div>

          <div className="inputbox">
            <span className="inputtext">Number:</span>
            <input type='text' placeholder='Enter Number...' value={number} onChange={handleChange(setNumber)} />
          </div>

          <div className="inputbox">
            <span className="inputtext">Email-id:</span>
            <input type='text' placeholder='Enter Email-id...' value={mail} onChange={handleChange(setMail)} />
          </div>

          <div className="inputbox">
            <span className="inputtext">Model:</span>
            <select value={model} onChange={handleChange(setModel)}>
              <option value=''>Select Model...</option>
              <option value='Alto K10'>Alto K10</option>
              <option value='WagonR'>WagonR</option>
              <option value='Celerio'>Celerio</option>
              <option value='Swift'>Swift</option>
              <option value='Dzire'>Dzire</option>
              <option value='Ertiga'>Ertiga</option>
              <option value='Brezza'>Brezza</option>
              <option value='Eeco'>Eeco</option>
              <option value='S-Presso'>S-Presso</option>
            </select>
          </div>

          <div className="inputbox1">
            <span className="inputtext">Looking to Exchange Your Car?</span>
            <select value={type} onChange={handleChange(setType)}>
              <option value=''>Select...</option>
              <option value='Yes'>YES</option>
              <option value='No'>NO</option>
            </select>
          </div>

          <div className='buttonStyle'>
            <button type="submit" className="btn btn-primary btn-lg">SUBMIT</button>
            <button type="button" className="btn btn-primary btn-lg" onClick={resetFields}>RESET</button>
          </div>
        </div>
      </form>
      {showModal && <Modal message={modalMessage} onClose={handleCloseModal} />}
    </div>
  );
};

export default Submitenquiry;
