import React from 'react';
import './Card.css';
import adImage from '../assets/ad1.jpg'; 

export const Card = (props) => {
  return (
    <div>
      <div className="container">
        <div className="card">
          <h1>{props.title}</h1>
          <h2>{props.description}</h2>
        </div>

        <div className="ad">
          <img src={adImage}  width="800" height="500" alt="Ad" />
        </div>
      </div>
    </div>
  );
};

export default Card;