import React, { useState } from 'react';
import './Contactpage.css';
import { CONTACT_DETAILS } from './Data';
import { PropsSending } from './PropsSending';
import facebook from './Images/facebook.png'


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

      <div className="buttomMessage">
        <div className="box1">
          <div className="box01">
            <h1>Cars...</h1>
            <li>Alto K10</li>
            <li>Celerio</li>
            <li>Dzire</li>
            <li>Brezza</li>
            <li>S-Presso</li>
          </div>
          <div className="box02">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <li>WagonR</li>
            <li>Swift</li>
            <li>Ertiga</li>
            <li>Eeco</li>
          </div>
        </div>

        <div className="box2">
          <h1>Business Hours</h1>
          <p>Mon - Fri : 10:00 AM - 08:00 PM</p>
          <p>Sat : 10:00 AM - 05:00 PM</p>
          <p>Sun : Holiday</p>
        </div>

        <div className="box3">
          <h1>Showroom Address</h1>
          <h2>Maruti Suzuki ARENA, Gachibowli</h2>
          <p>Jayabheri Automotives Pvt. Ltd.Plot No.113,114 And 115, LumbiniEnclave, CB Square, Near Bio DiversityPark, Gachibowli, Hyderabad,Telangana - 500032</p>
          <h2>+918062216214</h2>
        </div>

        <div className="box4">
          <h1>Google Reviews</h1>
            <div className="review">
            <button type="button" class="btn btn-primary btn-lg">Review Us</button>
            </div><br></br>
            <div className="facebook">
            <img src={facebook}/>
            </div>
        </div>
        {/*<div className="left">
          <h1>Cars...</h1>
          <li>Alto K10</li>
          <li>Celerio</li>
          <li>Dzire</li>
          <li>Brezza</li>
          <li>S-Presso</li>
          </div>
          
          <div className="left1">
            <br></br>
            <br></br>
            <br></br>
          <li>WagonR</li>
          <li>Swift</li>
          <li>Ertiga</li>
          <li>Eeco</li>
          </div>

          <div className="timeslot">
            <h1>Business Hours</h1>
          </div>*/} 
      </div>
      <div className="footerbox">
        <h2>Copyright © Maruti Suzuki India Limited</h2>
        <h3>Privacy Policy</h3>
      </div>  
</mainSection>

    </div>
    
  );
};

export default ContactPage;
