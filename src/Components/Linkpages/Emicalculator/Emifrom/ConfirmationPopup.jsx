import React from 'react';
import './ConfirmationPopup.css';

const ConfirmationPopup = ({ message, onClose }) => {
  return (
    <div className="modal-overlay1">
      <div className="modal-content1">
        <div className="modal-header1">
          <i className="fas fa-check-circle" style={{ color: '#28a745', fontSize: '40px' }}></i>
          <h2>Thank You!</h2>
        </div>
        <div className="modal-body">
          <pre><h3>{message}</h3></pre>
        </div>
        <div className="modal-footer">
          <button className="modal-close" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;





