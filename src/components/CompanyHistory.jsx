// src/components/CompanyHistory.jsx
import React from 'react';
import coastImage from '../assets/coast-image.jpg';

const CompanyHistory = () => {
  const stats = [
    { percentage: '81%', label: 'From concept to completion' },
    { percentage: '95%', label: '24/7 Concierge Service' },
    { percentage: '100%', label: 'Customer Satisfaction' }
  ];

  return (
    <section className="py-16 px-6 sm:px-12 lg:px-16 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img 
            src={coastImage} 
            alt="Luxury yachts in a beautiful bay" 
            className="rounded-lg w-full h-auto shadow-lg"
          />
        </div>
        
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Crafting Unforgettable Journeys Since 2012
          </h2>
          <p className="text-gray-600 mb-8">
            We specialize in crafting bespoke travel experiences, tailored to your unique desires and preferences. Since our inception in 2012, we have been dedicated to creating beautiful journeys that surpass expectations. Our team of travel artisans ensures a seamless execution ensuring that every moment of your trip is nothing short of perfection.
          </p>
          
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-semibold mb-6">Bespoke Itineraries</h3>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-1">{stat.percentage}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;