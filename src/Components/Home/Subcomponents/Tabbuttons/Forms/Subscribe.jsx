import React, { useState } from 'react';
import "../Forms/Subscribe.css"
import Modal from './Modal'; // Import your Modal component

const Subscribe = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [number, setNumber] = useState('');
  const [model, setModel] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isFocused, setIsFocused] = useState({}); // To track focus state of inputs

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

    if (!name || !number || !model) {
      setError('All fields are required...');
      return;
    }

    if (!validatePhoneNumber(number)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    setModalMessage(`Thank You ${name}, we will post new update on +91-${number}`);
    setShowModal(true);
    resetFields();
  };

  const resetFields = () => {
    setName('');
    setMail('');
    setNumber('');
    setModel('');
    setError('');
    setIsFocused({}); // Reset focused state
  };

  const handleFocus = (inputName) => {
    setIsFocused((prev) => ({ ...prev, [inputName]: true }));
  };

  const handleBlur = (inputName) => {
    setIsFocused((prev) => ({ ...prev, [inputName]: false }));
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container1">
      <div className="registration">SUBSCRIBE</div>
      <h3>{error && <div className="error">{error}</div>}</h3>
      <form onSubmit={submitHandler}>
        <div className="container2">
          <div className="inputbox">
            <span className="inputtext">Name:</span>
            <input
              type='text'
              placeholder='Enter Your Name'
              value={name}
              onChange={handleChange(setName)}
              onFocus={() => handleFocus('name')}
              onBlur={() => handleBlur('name')}
              className={isFocused.name || name ? 'focused' : ''}
            />
          </div>
          
          <div className="inputbox">
            <span className="inputtext">Email-id:</span>
            <input
              type='text'
              placeholder='Enter Email-id...'
              value={mail}
              onChange={handleChange(setMail)}
              onFocus={() => handleFocus('mail')}
              onBlur={() => handleBlur('mail')}
              className={isFocused.mail || mail ? 'focused' : ''}
            />
          </div>

          <div className="inputbox">
            <span className="inputtext">Number:</span>
            <input
              type='text'
              placeholder='Enter Number'
              value={number}
              onChange={handleChange(setNumber)}
              onFocus={() => handleFocus('number')}
              onBlur={() => handleBlur('number')}
              className={isFocused.number || number ? 'focused' : ''}
            />
          </div>

          

          <div className="inputbox">
            <span className="inputtext">Model:</span>
            <select
              value={model}
              onChange={handleChange(setModel)}
              onFocus={() => handleFocus('model')}
              onBlur={() => handleBlur('model')}
              className={isFocused.model || model ? 'focused' : ''}
            >
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
          <div className='buttonStyle1'>
            <button type="submit" className="btn btn-primary btn-lg">SUBMIT</button>
          </div>
        </div>
      </form>
      {showModal && <Modal message={modalMessage} onClose={handleCloseModal}/>}
    </div>
  );
};

export default Subscribe;
