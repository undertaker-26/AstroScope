// src/Pages/Home/Home.jsx
import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Title from '../../Components/Title/Title';
import Programs from '../../Components/Programs/Programs';
import About from '../../Components/About/About';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Appointment from '../../Components/Appointment/Appointment';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Title />
      <Programs />
      <About />
      <Testimonials />
      <Appointment />
      <Contact />
      <Footer/>
    </div>
  );
};

export default Home;
