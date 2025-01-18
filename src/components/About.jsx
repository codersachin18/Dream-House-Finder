import React from 'react';
import './about.css';
import aboutImage from '../assets/form2.jpg'; 

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>We Provide 100% Guarantee and Customer Satisfaction</h2>
        <p>
        We are committed to providing 100% guarantee and complete customer satisfaction in all our real estate services. Our dedicated team ensures a seamless experience, whether you are buying, selling, or investing in properties.

With a strong presence and offices across India, the United States, Canada, and Dubai, we operate on a global scale, offering personalized services tailored to meet the unique needs of clients from different regions. Our commitment to excellence and attention to detail have made us a trusted name in the real estate industry worldwide.
        </p>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="About Us" />
      </div>
    </div>
  );
};

export default About;