import React from "react";
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Dream Home Finder</h2>
          <p>Your trusted partner in finding your dream home globally.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email:sachinraj18sj@gail.com</p>
          <p>Phone:+91-7387574762</p>
          <p>Address:INDIA ,DUBAI ,US</p>
        </div>
       
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Dream Home Finder. All rights reserved.</p>
        <p>Designed and Developed by Sachin Jagtap</p>
      </div>
    </footer>
  );
};

export default Footer;
