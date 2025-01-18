import React from 'react';
import './servises.css';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';

export const Services = () => {
  return (
    <>

     <div className='offer' > Here's a quick overview of <span className='hg1' > popular options:</span></div>

    <div className="services-wrapper">

            
      <div className="service-card">
        <img src={img1} alt="Service 1" />
        <div className="service-card-content">
          <h3>Villas</h3>
          <p>Luxurious standalone homes with private gardens and pools, ideal for privacy and upscale living..</p>
          <button className="view-more-button">View More</button>
        </div>
      </div>
      <div className="service-card">
        <img src={img2} alt="Service 2" />
        <div className="service-card-content">
          <h3>Bungalows</h3>
          <p>Single-story houses with open spaces, perfect for retirees or families seeking accessibility.
          </p>
          <button className="view-more-button">View More</button>
        </div>
      </div>

      <div className="service-card">
        <img src={img3} alt="Service 2" />
        <div className="service-card-content">
          <h3>Apartments</h3>
          <p>Multi-unit buildings offering compact living with shared amenities like gyms or pools.</p>
          <button className="view-more-button">View More</button>
        </div>
      </div>

      <div className="service-card">
        <img src={img4} alt="Service 3" />
        <div className="service-card-content">
          <h3>Jungle House</h3>
          <p> Eco-friendly homes in forested areas, blending with nature.</p>
          <button className="view-more-button">View More</button>
        </div>
      </div>
    </div>
    </>
  );
};