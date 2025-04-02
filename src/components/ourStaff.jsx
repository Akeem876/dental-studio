// src/components/ourStaff.jsx
import React, { useState } from 'react';
// Import framer-motion
import { motion, AnimatePresence } from 'framer-motion';

// Keeping original component name convention as requested
const ourStaff = () => {
  // Keeping original variable name convention as requested
  const collegues = [
    {
      id: 'meshel',
      name: 'Dr. Meshel McIntosh',
      role: 'Lead Dentist & Founder', // Added role
      // Using placeholder image paths from your snippet, update if needed
      image: '/images/santorini.jpg',
      featured: true
    },
    {
      id: 'kirk',
      name: 'Dr. Kirk Samuels',
      role: 'Associate Dentist', // Added role
      image: '/images/bali.jpg'
    },
    {
      id: 'lisa',
      name: 'Dr. Lisa Beck',
      role: 'Orthodontist', // Added role
      image: '/images/safari.jpg'
    },
    {
      id: 'carol',
      // Adjusted name/role to match previous examples, update if needed
      name: 'Carol Phillips',
      role: 'Lead Dental Hygienist', // Added role
      image: '/images/maldives.jpg'
    },
    {
      id: 'novia',
       // Adjusted name/role to match previous examples, update if needed
      name: 'Novia Williams',
      role: 'Dental Assistant', // Added role
      image: '/images/amalfi.jpg'
    }
  ];

  // Keeping original state variable names as requested
  const [activecollegue, setActivecollegues] = useState(
    collegues.find(d => d.featured) || collegues[0]
  );

  // Define animation variants
  const featuredVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // Define transition settings
  const transitionSettings = { duration: 0.4, ease: 'easeInOut' };

  return (
    <section className="py-16 bg-gray-50">
      <div className="px-6 sm:px-12 lg:px-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Staff</h2>

        {/* Featured Area Container - Added relative positioning for potential animation needs, adjust min-height if needed */}
        <div className="relative bg-white rounded-xl shadow-lg p-6 mb-12 overflow-hidden min-h-[300px]"> {/* Added min-height */}
          {/* AnimatePresence wraps the element that appears/disappears */}
          <AnimatePresence mode="wait">
            {/* motion.div wraps the changing content, applying the key */}
            <motion.div
              key={activecollegue.id} // Key identifies the changing element
              variants={featuredVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transitionSettings}
            >
              {/* Original image structure */}
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                <img
                  src={activecollegue.image || '/images/placeholder.jpg'}
                  alt={activecollegue.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Original name structure */}
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{activecollegue.name}</h3>
              {/* Added Role Display */}
              <p className="text-md text-gray-600">{activecollegue.role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnail Grid - structure preserved */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {collegues.map((collegue) => (
            <button
              key={collegue.id}
              // Preserving original classes + active state logic
              className={`aspect-square overflow-hidden rounded-lg relative transition-all ${activecollegue.id === collegue.id ? 'ring-4 ring-blue-500' : 'hover:opacity-90 focus:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-400'}`} // Added focus styles
              // Using original setter name
              onClick={() => setActivecollegues(collegue)}
              aria-label={`View ${collegue.name}`}
              // Added aria-current for better accessibility
              aria-current={activecollegue.id === collegue.id ? "true" : "false"}
            >
              <img
                src={collegue.image || '/images/placeholder.jpg'}
                alt={collegue.name}
                className="w-full h-full object-cover"
              />
              {/* Overlay modified slightly to stack text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end items-start p-3 text-left"> {/* Changed to flex-col, items-start */}
                <div className="text-white text-sm font-medium leading-tight">{collegue.name}</div>
                {/* Added Role Display in Thumbnail */}
                <div className="text-white text-xs opacity-80 mt-0.5">{collegue.role}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ourStaff; // Keeping original export name