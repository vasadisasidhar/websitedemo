import React, { useState } from 'react';
import './Contactpage.css';
import { CONTACT_DETAILS } from './Data';
import { PropsSending } from './PropsSending';



const ContactPage = () => {
  const [formData, setFormData] = useState({name: '',email: '',num: '',msg: ''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitUserData = () => {
    const { name, email, num, msg } = formData;
    if (!name || !email || !num || !msg) {
      alert('Please fill out all fields.');
      return;
    }
    
    const message = `Name: ${name}\nEmail: ${email}\nPhone: ${num}\nMessage: ${msg}`;
    alert(message);
    setFormData({ name: '', email: '', num: '', msg: '' });
  };

  return (
    <div>
      
      <mainSection>
        <div className='mainname'> 
          <br></br><br></br><br></br>
          <h1>CONTACT US...</h1>
        </div>
        
        <div>
          <main>
            <section id='core-concepts'>
              <ul>
                {CONTACT_DETAILS.map((item) => (<PropsSending {...item} />))}
              </ul>
            </section>  
          </main>
        </div>

   {/*  <div className='contactForm'>
      <h1>Contact Us</h1>
      <label>
        Name:
        <input type='text'name='name'placeholder='Enter Name...'value={formData.name}onChange={handleChange} />
      </label>

      <label>
        Email:
        <input type='text'name='email'placeholder='Enter Email...'value={formData.email}onChange={handleChange}/>
      </label>

      <label>
        Number:
        <input type='text'name='num'placeholder='Enter Number...'value={formData.num}onChange={handleChange}/>
      </label>

      <label>
        Message:
        <input type='text'name='msg'placeholder='Enter Message...'value={formData.msg}onChange={handleChange}/>
      </label>

      <button type="button" className="btnn btn-success" onClick={submitUserData}>
        Submit
      </button>

     <div className="headOffice">
        <h1>Head Office</h1>
        <h3>Phone: +91-9492724945</h3>
        <h3>Email: vs@gmail.com</h3>
        <h3>Fax: 08922-224945</h3>
      </div>

      <div className="branchOffice">
        <h1>Branch Office</h1>
        <h3>Phone: +91-9492724945</h3>
        <h3>Email: vs@gmail.com</h3>
        <h3>Fax: 08922-224945</h3>
      </div>
    </div>*/}

        
</mainSection>

    </div>
    
  );
};

export default ContactPage;
