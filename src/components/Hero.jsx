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
    {/* Enhanced gradient overlay for better text readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-blue-900/50 to-black/30"></div>
  </div>
  
  {/* Hero Content - centered both horizontally and vertically */}
  <div className="relative h-full flex items-center justify-center px-6 sm:px-12 lg:px-16">
    <div className="max-w-2xl backdrop-blur-sm bg-black/10 p-6 rounded-lg text-center">
      {/* <span className="inline-block px-4 py-1 bg-white text-blue-900 font-medium text-sm rounded-full mb-4 shadow-md">
        New
      </span> */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-shadow">
        Discover The World In Luxury And Style
      </h1>
      <p className="text-white text-lg md:text-xl mb-8 mx-auto">
        Experience luxury travel experiences crafted exclusively for discerning individuals seeking unprecedented adventures.
      </p>
      
      <div className="flex flex-wrap gap-4 justify-center">
        <a href="#explore" className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-lg">
          Plan Your Journey
        </a>
        <a href="#destinations" className="bg-white hover:bg-gray-100 text-blue-900 font-medium py-3 px-6 rounded-lg transition-colors shadow-lg">
          Explore Destinations
        </a>
      </div>
    </div>
  </div>
</section>
  );
};

export default Hero;