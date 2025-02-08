import React from 'react';
import './servises.css';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Services = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle "View More" button click
  const handleViewMoreClick = () => {
    navigate('/about'); // Navigate to the About page
  };

  return (
    <>
      <div className='offer'> Here's a quick overview of <span className='hg1'> popular options:</span></div>
      <div className="services-wrapper">
        <div className="service-card">
          <img src={img1} alt="Service 1" />
          <div className="service-card-content">
            <h3>Villas</h3>
            <p>Luxurious standalone homes with private gardens and pools, ideal for privacy and upscale living.</p>
            <button className="view-more-button" onClick={handleViewMoreClick}>View More</button>
          </div>
        </div>
        <div className="service-card">
          <img src={img2} alt="Service 2" />
          <div className="service-card-content">
            <h3>Houses</h3>
            <p>Comfortable and spacious houses perfect for families, located in serene neighborhoods.</p>
            <button className="view-more-button" onClick={handleViewMoreClick}>View More</button>
          </div>
        </div>
        <div className="service-card">
          <img src={img3} alt="Service 3" />
          <div className="service-card-content">
            <h3>Jungle Houses</h3>
            <p>Unique homes nestled in the heart of nature, offering a tranquil and adventurous lifestyle.</p>
            <button className="view-more-button" onClick={handleViewMoreClick}>View More</button>
          </div>
        </div>
        <div className="service-card">
          <img src={img4} alt="Service 4" />
          <div className="service-card-content">
            <h3>Luxury Homes</h3>
            <p>Exquisite homes with top-notch amenities and stunning architecture, designed for luxury living.</p>
            <button className="view-more-button" onClick={handleViewMoreClick}>View More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;