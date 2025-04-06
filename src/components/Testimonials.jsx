// components/Testimonials.jsx

import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Robert Chen',
    position: 'Operations Director',
    company: 'Urban Development Corp',
    testimonial: 'The rotary parking system has revolutionized how we utilize space in our downtown projects. Installation was smooth, and the system has operated flawlessly for over two years.',
    avatar: '/api/placeholder/100/100'
  },
  {
    name: 'Sarah Martinez',
    position: 'Facility Manager',
    company: 'Metropolis Heights',
    testimonial: 'We installed the puzzle parking system in our residential complex, and it has increased our parking capacity by 70% while improving security. The residents love the convenience.',
    avatar: '/api/placeholder/100/100'
  },
  {
    name: 'Michael Johnson',
    position: 'Project Manager',
    company: 'Future City Developers',
    testimonial: 'The pit parking solution was perfect for our limited footprint. The installation team was professional, and the ongoing support has been exceptional.',
    avatar: '/api/placeholder/100/100'
  },
  {
    name: 'Emily Richards',
    position: 'Sustainability Officer',
    company: 'Green Urban Spaces',
    testimonial: 'Not only has the stack parking system maximized our space, but it has also helped reduce our carbon footprint by minimizing vehicle emissions within our building complex.',
    avatar: '/api/placeholder/100/100'
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-16">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Our Clients Say
            </h2>
            <div className="w-16 h-1 mx-auto bg-purple-600 mb-6"></div>
            <p className="text-lg text-gray-600">
              Hear from businesses and organizations that have transformed their parking infrastructure with our solutions.
            </p>
          </div>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Testimonial Slides */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
                <img src={testimonials[activeIndex].avatar} alt={testimonials[activeIndex].name} className="w-full h-full object-cover" />
              </div>
              <div className="mb-6">
                <svg className="h-10 w-10 text-purple-300 mx-auto mb-3" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-xl text-gray-600 italic">
                  "{testimonials[activeIndex].testimonial}"
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-purple-600">
                  {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button 
              onClick={prevTestimonial}
              className="bg-white text-purple-700 p-3 rounded-full shadow-md hover:bg-purple-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-purple-600' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="bg-white text-purple-700 p-3 rounded-full shadow-md hover:bg-purple-100 transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;