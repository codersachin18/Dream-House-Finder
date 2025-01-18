import React from 'react'
import { useState } from 'react'
import './App.css';
import {Navbar} from './components/Navbar';
import {Card} from './components/Card';
import { Services } from './components/Services';
import { Form } from './components/Form';
import{About} from './components/About';
import Footer from './components/Footer';



export const App = () => {


  return (
   <>
   
    <Navbar/>

   <div className="heading">

    <h1>Your Trusted Partner in Real Estate</h1>
    <h3>Find your perfect property with Dream Home Finder. We offer expert real estate services for buying, selling, and renting, ensuring a seamless experience every step of the way.</h3>
   </div>

   <Card title= "Unlock the Door to Your Future Home" description= { "We specialize in connecting you with the finest homes and luxury properties that suit your lifestyle Whether you're looking for modern apartments or spacious villas, we make finding your dream home effortless and enjoyable"} />
     
     <Services/>
     <Form />
     <About/>
     <Footer/>

    </>
  )
}



export default App
