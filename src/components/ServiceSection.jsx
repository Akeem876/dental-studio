// src/components/ServicesSection.jsx
import React from 'react';

// --- SVG Icons (Consider making these separate components for better maintainability) ---
// It's generally better practice to define SVGs elsewhere or as separate components,
// but keeping them here as per your original structure for now.
// Added aria-hidden="true" as they are decorative alongside text.

const PlanningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
);

const AccommodationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const JetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
     <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);

const AdventureIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);
// --- End SVG Icons ---


const ServicesSection = () => {
  const services = [
    {
      title: 'Every Detail Effortlessly',
      description: 'We handle all the planning so you can focus on enjoying your journey.',
      icon: <PlanningIcon />
    },
    {
      title: 'Luxury Accommodations',
      description: 'Handpicked five-star hotels, stunning private villas, and unique boutique stays.',
      icon: <AccommodationIcon />
    },
    {
      title: 'Private Jet Charters',
      description: 'Travel in ultimate comfort and privacy, bypassing crowds and schedules.',
      icon: <JetIcon /> // Replaced with a more relevant plane icon concept
    },
    {
      title: 'Lifetime Adventures',
      description: 'Access unique, exclusive experiences worldwide that create lasting memories.',
      icon: <AdventureIcon />
    }
  ];

  return (
    // Increased vertical padding, added a subtle background color for contrast
    <section className="py-20 px-6 sm:px-12 lg:px-16 bg-gray-50">
      {/* Centered content container */}
      <div className="max-w-7xl mx-auto">
        {/* Larger, centered title with more bottom margin */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          What We Offer
        </h2>

        {/* Grid layout with adjusted gap */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              // Card styling: slightly larger padding, softer rounding, enhanced shadow & hover effect
              className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 flex flex-col items-center text-center cursor-default" // Added flex centering & cursor
            >
              {/* Icon container: larger, different background/text color, more bottom margin */}
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mb-6 shrink-0">
                {/* Render the icon component passed in the service object */}
                {service.icon}
              </div>
              {/* Title: slightly adjusted color, margin */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              {/* Description: lighter text color, relaxed line height for readability, smaller text size */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;