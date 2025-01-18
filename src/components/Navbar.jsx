import React, { useState } from 'react';
import './navbar.css';

export const Navbar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="navbar-container">
      <div className="logo">
        <a href="#">Dream Home Finder</a>
      </div>
      <div className="nav-links">
        <a className='navs' href="#home">Home</a>
        <a className='navs' href="#about">About</a>
        <a className='navs' href="#services">Services</a>
        <a className='navs' href="#contact">Contact</a>
        <button className="menu-button" onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="white">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
          </svg>
        </button>
        <button className="login-button">Login</button>
      </div>

      <div className={`sidebar ${isSidebarVisible ? 'show' : 'hide'}`}>
        <a href="#" onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="white">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
          </svg>
        </a>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;