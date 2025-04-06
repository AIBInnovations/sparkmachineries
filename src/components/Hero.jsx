// components/Hero.jsx

import React from 'react';

const Hero = () => {
  return (
    <div id="home" className="relative pt-24 pb-32 flex content-center items-center justify-center">
      {/* Purple background */}
      <div className="absolute top-0 w-full h-full bg-purple-600 z-0"></div>
      
      {/* Curved bottom with more pronounced wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg className="fill-current text-gray-50 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,170.7C672,181,768,235,864,234.7C960,235,1056,181,1152,170.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Hero content */}
      <div className="container relative mx-auto px-4 z-20">
        <div className="flex flex-wrap justify-center">
          <div className="w-full text-center">
            <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Revolutionary<br />
              Robotic Parking<br />
              Solutions
            </h1>
            <p className="text-white text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-12">
              Maximize space efficiency with our state-of-the-art multilevel
              robotic parking systems. Designed for urban environments where
              space is at a premium.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#solutions" 
                className="bg-white text-purple-700 px-8 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
              >
                Explore Solutions
              </a>
              <a 
                href="#contact" 
                className="bg-purple-500 text-white border border-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl hover:bg-purple-400"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;