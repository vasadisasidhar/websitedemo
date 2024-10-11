// TermsAndConditionsModal.js
import React, { useState,useEffect } from 'react';
import './TermsAndConditionsModal.css'; // Add styles as needed

const TermsAndConditionsModal = ({ onClose }) => {
    
  const [isBody1Visible, setIsBody1Visible] = useState(false);
  const [isBody2Visible, setIsBody2Visible] = useState(false);
  const [isBody3Visible, setIsBody3Visible] = useState(false);
  const [isBody4Visible, setIsBody4Visible] = useState(false);
  const [isBody5Visible, setIsBody5Visible] = useState(false);
  const [isBody6Visible, setIsBody6Visible] = useState(false);


  useEffect(() => {
    // Disable scrolling on body when modal is open
    document.body.style.overflow = 'hidden';
    
    // Clean up function to re-enable scrolling
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const toggleBody1Visibility = () => {
    setIsBody1Visible(!isBody1Visible);
  };
  const toggleBody2Visibility = () => {
    setIsBody2Visible(!isBody2Visible);
  };
  const toggleBody3Visibility = () => {
    setIsBody3Visible(!isBody3Visible);
  };
  const toggleBody4Visibility = () => {
    setIsBody4Visible(!isBody4Visible);
  };
  const toggleBody5Visibility = () => {
    setIsBody5Visible(!isBody5Visible);
  };
  const toggleBody6Visibility = () => {
    setIsBody6Visible(!isBody6Visible);
  };

  return (
    <div className="modalOverlay">
      <div className="modalContent">

        <div className="headeres">
          <div className="containerBoxes1">
            <h5>Terms and Use</h5>
          </div>

          <div className="containerBoxes2">
              <button onClick={onClose}>X</button>
          </div>
        </div>
  
        <div className="body1">
            <p>
              Please read these terms and conditions carefully. By accessing this site and any pages 
              thereof, you agree to be bound by the terms and conditions below, in addition to terms 
              applicable to Auto Card Loyalty Program. Usage of any Maruti Web Site indicates 
              unconditional acceptance of these terms.
            </p>
          
        </div>
        <hr className="solidLine" />



        <div className="body2">
          <h3>Eligibility
          <button onClick={toggleBody2Visibility} className="toggleButton">
              {isBody2Visible ? '-' : '+'}
            </button>
          </h3>
          {isBody2Visible && (
            <p>You warrant that you are competent to contract as per Indian Contract Act, 1872 in 
              accordance with all terms and conditions of booking, sale and delivery of vehicle(s) 
              manufactured and marketed by Maruti Suzuki India Limited (hereinafter referred to as 
              "MSIL").</p>
            )}
        </div>
        <hr className="solidLine" />



        <div className="body3">
          <h3>Copyright© Maruti Suzuki India limited 2017.
            <button onClick={toggleBody3Visibility} className='toggleButton'>
                {isBody3Visible ? '-' : '+'}
            </button>
          </h3>
          {isBody3Visible && (
          <p>Copyright in the pages and in the screens displaying the pages, in the information 
              and material therein and in their arrangement, is owned by MSIL unless otherwise 
              indicated.</p>
          )}
        </div>
        <hr className="solidLine" />


        <div className="body4">
          <h3>Trademarks
            <button onClick={toggleBody4Visibility} className='toggleButton'>
                {isBody4Visible ? '-' : '+'}
            </button>
          </h3>
          {isBody4Visible && (
          <p>Maruti Suzuki used severally or in conjunction with SUZUKI or other mark(s), 
              Wing device, S device, model names and other marks developed by MSIL in relation 
              to services are marks and service marks owned by MSIL and Suzuki Motor Corporation, 
              Japan.</p>
          )}
        </div>
        <hr className="solidLine" />

        <div className="body5">
          <h3>Use of information and materials
            <button onClick={toggleBody5Visibility} className='toggleButton'>
                {isBody5Visible ? '-' : '+'}
            </button>
          </h3>
          {isBody5Visible && (
          <p>The information and materials contained in these pages, and the terms, conditions, 
              and descriptions that appear, are subject to change. Unauthorized use of MSIL's 
              web sites and systems including but not limited to unauthorized entry into MSIL's 
              systems, misuse of passwords, or misuse of any information posted on a site is 
              strictly prohibited. Not all products and services are available in all geographic 
              areas. Your eligibility for particular products and services is subject to final 
              determination by MSIL and/or its affiliates.</p>
          )}
        </div>
        <hr className="solidLine" />


        <div className="body6">
          <h3>Links
            <button onClick={toggleBody6Visibility} className='toggleButton'>
                {isBody6Visible ? '-' : '+'}
            </button>
          </h3>
          {isBody6Visible && (
          <p>This site may contain links to web sites controlled or offered by third parties 
              (non-affiliates of MSIL). MSIL hereby disclaims liability for any information, 
              materials, and products or services posted or offered at any of the third party 
              sites linked to this web site. By creating a link to a third party web site, MSIL 
              does not endorse or recommend any products or services offered or information 
              contained at that web site, nor is MSIL liable for any failure of products or 
              services offered or advertised at those sites. Such third party may have a privacy 
              policy different from that of MSIL and the third party website may provide less 
              security than the MSIL site.</p>
              )}
        </div>
        <hr className="solidLine"/>

        
      </div>
    </div>
  );
};

export default TermsAndConditionsModal;
