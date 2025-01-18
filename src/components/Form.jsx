import React, { useState } from 'react';
import './form.css';
import formImage from '../assets/form1.jpg'; 

export const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    houseType: '',
    location: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Form submitted:', formData);
    alert('Form submitted')
  };

  return (
    <div className="form-container">
      <div className="form-image">
        <img src={formImage} alt="Form" />
      </div>
      <div className="form-content">
        <h2>Book an Appointment</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="houseType">Type of House</label>
            <select
              id="houseType"
              name="houseType"
              value={formData.houseType}
              onChange={handleChange}
              required
            >
              <option value="">Select a type</option>
              <option value="villa">Villa</option>
              <option value="bungalow">Bungalow</option>
              <option value="apartment">Apartment</option>
              <option value="jungleHouse">Jungle House</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Preferred Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">Book Appointment</button>
        </form>
      </div>
    </div>
  );
};

export default Form;