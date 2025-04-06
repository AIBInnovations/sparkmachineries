// components/Navbar.jsx

import React, { useState } from 'react';
import logo from "../assets/logo.png";

const Navbar = ({ scrollY }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white shadow-md py-2' : 'bg-purple-600 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Spark Machineries Logo" className="h-16" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className={`${scrollY > 50 ? 'text-gray-800 hover:text-purple-700' : 'text-white hover:text-purple-200'} font-medium transition-colors`}>Home</a>
            <a href="#solutions" className={`${scrollY > 50 ? 'text-gray-800 hover:text-purple-700' : 'text-white hover:text-purple-200'} font-medium transition-colors`}>Solutions</a>
            <a href="#features" className={`${scrollY > 50 ? 'text-gray-800 hover:text-purple-700' : 'text-white hover:text-purple-200'} font-medium transition-colors`}>Features</a>
            <a href="#about" className={`${scrollY > 50 ? 'text-gray-800 hover:text-purple-700' : 'text-white hover:text-purple-200'} font-medium transition-colors`}>About</a>
            <a href="#contact" className={`${scrollY > 50 ? 'text-gray-800 hover:text-purple-700' : 'text-white hover:text-purple-200'} font-medium transition-colors`}>Contact</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="#contact" 
              className={`${scrollY > 50 ? 'bg-purple-600 text-white' : 'bg-white text-purple-700'} px-6 py-2 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl`}
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${scrollY > 50 ? 'text-gray-800 hover:text-purple-700' : 'text-white hover:text-purple-200'}`}
            >
              {!mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-2 py-4 px-4">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="text-gray-800 hover:text-purple-700 font-medium transition-colors">Home</a>
            <a href="#solutions" className="text-gray-800 hover:text-purple-700 font-medium transition-colors">Solutions</a>
            <a href="#features" className="text-gray-800 hover:text-purple-700 font-medium transition-colors">Features</a>
            <a href="#about" className="text-gray-800 hover:text-purple-700 font-medium transition-colors">About</a>
            <a href="#contact" className="text-gray-800 hover:text-purple-700 font-medium transition-colors">Contact</a>
            <a 
              href="#contact" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;