// src/components/CompanyHistory.jsx
import React from 'react';
import teamImage from '../assets/hero-image.jpg';

const CompanyHistory = () => {
  const stats = [
    { heading: 'Precision-Crafted Smile Designs', details: 'Tailored treatment plans for your unique dental needs' },
    { heading: 'Comprehensive Care Continuum', details: 'From first consultation to final restoration' },
    { heading: 'Dedicated Patient Experience', details: 'Where your comfort and satisfaction are always the priority' }
  ];

  return (
    <section className="py-32 px-6 sm:px-12 lg:px-16 max-w-22xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img 
            src={teamImage} 
            alt="Team Photo" 
            className="rounded-lg w-full h-auto shadow-lg"
          />
        </div>
        
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Creating Healthy, Beautiful Smiles Since 2012
          </h2>
          <p className="text-gray-600 mb-8">
          At The Dental Studio, we specialize in personalized dental care tailored 
          to your unique needs and goals. Since 2012, our team has been dedicated to 
          crafting exceptional patient experiences, ensuring every visit is comfortable, 
          seamless, and exceeds expectations. Your smile is our passion, 
          and we take pride in delivering precision, care, and outstanding results.
          </p>
          
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-semibold mb-6">Bespoke Treatment</h3>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-sm md:text-sm font-bold text-blue-700 mb-1">{stat.heading}</div>
                  <div className="text-sm text-gray-500">{stat.details}</div>
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