// components/ParkingSolutions.jsx

import React, { useState } from 'react';

const parkingSolutions = [
  {
    id: 'rotary',
    title: 'Rotary Parking',
    description: 'A vertical carousel system that rotates to bring vehicles to entry/exit level. Ideal for small to medium spaces with high volume needs.',
    features: [
      'Space-efficient vertical design',
      'Low maintenance requirements',
      'Quiet operation',
      'Fast retrieval times'
    ],
    image: '/api/placeholder/800/600'
  },
  {
    id: 'puzzle',
    title: 'Puzzle Parking',
    description: 'A flexible grid-based system where vehicles can be moved horizontally and vertically to optimize space usage and access.',
    features: [
      'Maximum space utilization',
      'Customizable configurations',
      'Expandable design',
      'Suitable for irregular spaces'
    ],
    image: '/api/placeholder/800/600'
  },
  {
    id: 'pit',
    title: 'Pit Parking',
    description: 'Underground parking solutions that utilize hydraulic lifts to store vehicles below ground level, saving valuable surface space.',
    features: [
      'Underground space utilization',
      'Preserves surface area',
      'Weather protection',
      'Robust hydraulic system'
    ],
    image: '/api/placeholder/800/600'
  },
  {
    id: 'stack',
    title: 'Stack Parking',
    description: 'A vertical stacking system that allows multiple vehicles to be parked in the footprint of a single parking space.',
    features: [
      'Simple and reliable design',
      'Cost-effective solution',
      'Easy installation',
      'Minimal maintenance'
    ],
    image: '/api/placeholder/800/600'
  }
];

const ParkingSolutions = () => {
  const [activeSolution, setActiveSolution] = useState(parkingSolutions[0]);

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-16">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Parking Solutions
            </h2>
            <div className="w-16 h-1 mx-auto bg-purple-600 mb-6"></div>
            <p className="text-lg text-gray-600">
              We offer a comprehensive range of multilevel robotic parking systems tailored to meet different spatial and operational requirements.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full lg:w-4/12 px-4 mb-8 lg:mb-0">
            <div className="sticky top-24">
              <ul className="space-y-2">
                {parkingSolutions.map((solution) => (
                  <li key={solution.id}>
                    <button
                      className={`w-full text-left px-6 py-4 rounded-lg transition-all ${
                        activeSolution.id === solution.id
                          ? 'bg-purple-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-purple-100'
                      }`}
                      onClick={() => setActiveSolution(solution)}
                    >
                      <span className="font-medium">{solution.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-8/12 px-4">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <img 
                  src={activeSolution.image} 
                  alt={activeSolution.title} 
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {activeSolution.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {activeSolution.description}
                </p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {activeSolution.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-start">
                  <a
                    href="#contact"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow hover:shadow-lg"
                  >
                    Request Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParkingSolutions;