// components/Features.jsx

import React from 'react';

const features = [
  {
    title: 'Space Efficiency',
    description: 'Maximize parking capacity in limited spaces with our advanced design systems.',
    icon: (
      <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-4.5-8.599A5 5 0 1015.5 12H9a4.5 4.5 0 00-.9 8.899L20 21l-1-1v-3a4 4 0 00-4-4H5a4 4 0 00-4 4v3l-1 1L9 21z"></path>
      </svg>
    )
  },
  {
    title: 'Automation',
    description: 'Fully automated systems that operate without human intervention, reducing operational costs.',
    icon: (
      <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
      </svg>
    )
  },
  {
    title: 'Enhanced Security',
    description: 'Superior security with restricted access to vehicles, eliminating theft and damage risks.',
    icon: (
      <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
      </svg>
    )
  },
  {
    title: 'Faster Retrieval',
    description: 'Quick vehicle retrieval systems that minimize waiting times for users.',
    icon: (
      <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    )
  },
  {
    title: 'Eco-Friendly',
    description: 'Environmentally conscious design with reduced vehicle emissions and energy-efficient operations.',
    icon: (
      <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    )
  },
  {
    title: 'Smart Integration',
    description: 'Integration with building management systems and mobile applications for seamless user experience.',
    icon: (
      <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
      </svg>
    )
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-16">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Advanced Features
            </h2>
            <div className="w-16 h-1 mx-auto bg-purple-600 mb-6"></div>
            <p className="text-lg text-gray-600">
              Our robotic parking systems incorporate cutting-edge technology to deliver exceptional performance and convenience.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          {features.map((feature, index) => (
            <div key={index} className="w-full md:w-6/12 lg:w-4/12 px-4 mb-12">
              <div className="bg-white rounded-lg shadow-lg px-6 py-8 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;