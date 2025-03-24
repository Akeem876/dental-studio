// src/components/DestinationsSection.jsx
import React, { useState } from 'react';

const DestinationsSection = () => {
  const destinations = [
    { 
      id: 'whitening', 
      name: 'Teeth Whitening', 
      image: '/images/santorini.jpg',
      featured: true 
    },
    { 
      id: 'preventative', 
      name: 'Preventative Dentistry', 
      image: '/images/bali.jpg'
    },
    { 
      id: 'pediatric', 
      name: 'Pediatric Dentistry', 
      image: '/images/safari.jpg'
    },
    { 
      id: 'restoritive', 
      name: 'Restorative Dentistry', 
      image: '/images/maldives.jpg'
    },
    { 
      id: 'cosmetic', 
      name: 'Cosmetic Dentistry', 
      image: '/images/amalfi.jpg'
    }
  ];

  const [activeDestination, setActiveDestination] = useState(destinations.find(d => d.featured) || destinations[0]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="px-6 sm:px-12 lg:px-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Services</h2>
        
        <div className="relative bg-white rounded-xl shadow-lg p-6 mb-12 overflow-hidden">
          <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
            <img 
              src={activeDestination.image || '/images/placeholder.jpg'} 
              alt={activeDestination.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{activeDestination.name}</h3>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {destinations.map((destination) => (
            <button
              key={destination.id}
              className={`aspect-square overflow-hidden rounded-lg relative transition-all ${activeDestination.id === destination.id ? 'ring-4 ring-blue-500' : 'hover:opacity-90'}`}
              onClick={() => setActiveDestination(destination)}
              aria-label={`View ${destination.name}`}
            >
              <img 
                src={destination.image || '/images/placeholder.jpg'} 
                alt={destination.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
                <div className="text-white text-sm font-medium">{destination.name}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;