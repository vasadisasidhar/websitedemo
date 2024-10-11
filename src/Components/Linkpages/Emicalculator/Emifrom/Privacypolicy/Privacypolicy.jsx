// TermsAndConditionsModal.js
import React, { useState, useEffect } from 'react';
import './Privacypolicy.css'; // Add styles as needed

const Privacypolicy = ({ onClose }) => {
  const [isBody1Visible, setIsBody1Visible] = useState(false);
  const [isBody2Visible, setIsBody2Visible] = useState(false);
  const [isBody3Visible, setIsBody3Visible] = useState(false);
  const [isBody4Visible, setIsBody4Visible] = useState(false);
  const [isBody5Visible, setIsBody5Visible] = useState(false);
  const [isBody6Visible, setIsBody6Visible] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const toggleBodyVisibility = (setter) => () => {
    setter((prev) => !prev);
  };

  return (
    <div className="modalOverlay1">
      <div className="modalContent1">
        
        <div className="header01">
            <div className="containerbox1">
            <h4>Privacy Policy</h4>
            </div>

            <div className="containerbox2">
                <button onClick={onClose}>X</button>
            </div> 
        </div>

        <div className="body01">
          <p>
            Maruti Statement of Privacy At Maruti we take your privacy seriously.
            Please read the following to learn more about our terms and conditions.
          </p>
        </div>
        <hr className="solidLine" />

        <div className="body02">
          <h3>What the terms and conditions cover
            <button onClick={toggleBodyVisibility(setIsBody2Visible)} className="toggleButton">
              {isBody2Visible ? '-' : '+'}
            </button>
          </h3>
          {isBody2Visible && (
            <p>This covers Maruti's treatment of personally identifiable information that Maruti collects 
              when you are on Maruti Suzuki site and when you use our services. This policy also covers 
              Maruti's treatment of any Personally identifiable information that Maruti shares with you. 
              This policy does not apply to the practices of companies that Maruti does not own or control 
              or Maruti does not own or employ or manage.</p>
          )}
        </div>
        <hr className="solidLine" />

        <div className="body03">
          <h3>Information Collection and Use
            <button onClick={toggleBodyVisibility(setIsBody3Visible)} className="toggleButton">
              {isBody3Visible ? '-' : '+'}
            </button>
          </h3>
          {isBody3Visible && (
            <p>Maruti collects personally identifiable information when you register for a Maruti account. 
              When you choose the services and promotions. Maruti may also receive personally identifiable 
              information from our business partners. When you register with Maruti, we ask for your name, 
              e-mail address, birth date, gender, occupation, industry and personal interest. Once you 
              register with Maruti and sign in to our services, you are not anonymous to us. Maruti uses 
              information for three general purpose: to fulfill your requests for certain products and 
              services and to contact you about specials and new products.</p>
          )}
        </div>
        <hr className="solidLine" />

        <div className="body04">
          <h3>Information Sharing and Disclosure
            <button onClick={toggleBodyVisibility(setIsBody4Visible)} className="toggleButton">
              {isBody4Visible ? '-' : '+'}
            </button>
          </h3>
          {isBody4Visible && (
            <p>Maruti will not sell or rent your Personally Identifiable Information to anyone. Maruti will 
              send Personally Identifiable Information about you when: We have consent to share the information 
              We need to share your information to provide the product or service you have requested We respond 
              to subpoenas, court orders or legal process. When we find your action on the web site violates the 
              Maruti terms and condition or any of your usage guidelines for specific products or services.</p>
          )}
        </div>
        <hr className="solidLine" />

        <div className="body05">
          <h3>Security
            <button onClick={toggleBodyVisibility(setIsBody5Visible)} className="toggleButton">
              {isBody5Visible ? '-' : '+'}
            </button>
          </h3>
          {isBody5Visible && (
            <p>Your Maruti account information is password-protected for your privacy and security We have 
              taken adequate measures to secure access to your personal data?</p>
          )}
        </div>
        <hr className="solidLine" />

        <div className="body06">
          <h3>Changes to this Policy
            <button onClick={toggleBodyVisibility(setIsBody6Visible)} className="toggleButton">
              {isBody6Visible ? '-' : '+'}
            </button>
          </h3>
          {isBody6Visible && (
            <p>Maruti may edit this policy from time to time. If we make any substantial changes ,we will 
              notify you by posting a prominent announcement on our pages.</p>
          )}
        </div>
        <hr className="solidLine" />

        <div className="body07">
          <h3>Email Disclaimer
            <button onClick={toggleBodyVisibility(setIsBody6Visible)} className="toggleButton">
              {isBody6Visible ? '-' : '+'}
            </button>
          </h3>
          {isBody6Visible && (
            <p>This electronic transmission contains information from Maruti Suzuki India Limited (MSIL) 
              which is confidential and proprietary, and is intended for use only by the person named 
              herein. In case, you are not the intended recipient, pls. don’t use this information in any 
              manner, whatsoever, and immediately return it to Sender. Any views or opinions presented in 
              this email are solely those of the author and may not necessarily reflect the opinion of MSIL</p>
          )}
        </div>
        <hr className="solidLine" />
      </div>
    </div>
  );
};

export default Privacypolicy;
