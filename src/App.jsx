// App.jsx - Main component for the homepage
// Spark Machineries Pvt Ltd - Robotic Parking Solutions

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ParkingSolutions from './components/ParkingSolutions';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar scrollY={scrollY} />
      <Hero />
      <Features />
      <ParkingSolutions />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;