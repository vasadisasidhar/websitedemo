import React from 'react';
import './PropsSending.css';

export const PropsSending = (props) => {
  return (
    <li className="container">
      <h2>{props.title}</h2>
      <h3>{props.Address1}</h3>
      <p>{props.Address2}</p>
      <h3><span className="outlet">Working Hours: </span>{props.Time}</h3>
      <h3><span className="outlet">Outlet Type: </span>{props.Type}</h3>
      <div className="button-container">
        <button className="button">VIEW DETAILS</button>
        <button className="button">VISIT WEBSITE</button>
      </div>
    </li>
  );
};
