import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Services from './components/Services';
import Form from './components/Form';
import About from './components/About';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';

const App = () => {
  return (
    <Router basename="/Dream-House-Finder">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <div className="heading">
              <h1>Your Trusted Partner in Real Estate</h1>
              <h3>Discover a wide range of properties including villas, houses, jungle houses, luxury homes, and cabins at unbeatable prices. With our extensive experience in the real estate sector, we ensure you find the perfect property that meets your needs and budget.</h3>
            </div>
            <Card 
              title="Unlock the Door to Your Future Home" 
              description="We specialize in connecting you with the finest homes and luxury properties that suit your lifestyle. Whether you're looking for modern apartments, spacious villas, or cozy cabins, we make finding your dream home effortless and enjoyable. Our properties are available at competitive prices, ensuring you get the best value for your investment."
            />
            <Services />
            <Form />
            <About />
          </>
        } />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;