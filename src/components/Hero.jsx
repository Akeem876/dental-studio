// src/components/Hero.jsx
import React from 'react';
import heroImage from '../assets/hero-image.jpg';

const Hero = () => {
  return (
    <section className="relative h-screen max-h-[600px] overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Our Dental Studio Family" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative h-full flex flex-col justify-center px-6 sm:px-12 lg:px-16 max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1 bg-white text-blue-900 font-medium text-sm rounded-full mb-4">
            New
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Discover The World In Luxury And Style
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 max-w-lg">
            Experience luxury travel experiences crafted exclusively for discerning individuals seeking unprecedented adventures.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#explore" className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-3 px-6 rounded-lg transition-colors">
              Plan Your Journey
            </a>
            <a href="#destinations" className="bg-white hover:bg-gray-100 text-blue-900 font-medium py-3 px-6 rounded-lg transition-colors">
              Explore Destinations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;