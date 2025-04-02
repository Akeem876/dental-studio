// src/components/ContactCTA.jsx
import React from 'react';

// Example Icons (using Heroicons - install @heroicons/react if you want to use them)
// yarn add @heroicons/react
// Alternatively, use SVGs directly as before, but update paths/styles.
import { ChatBubbleLeftEllipsisIcon, SparklesIcon } from '@heroicons/react/24/outline';

const ContactCTA = () => {
  return (
    // Use the consistent section padding, but maybe a different BG or none if page has BG
    <section className="py-20 px-6 sm:px-12 lg:px-16 bg-white">
      {/* Consistent container */}
      <div className="max-w-6xl mx-auto">
         {/* Main container with subtle gradient, soft corners, and shadow */}
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2">

            {/* Left Panel: Consultation/Guidance */}
            <div className="flex flex-col justify-center p-8 py-12 md:p-16"> {/* Increased padding */}
              {/* Icon specific to this panel */}
               <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 mb-5">
                <ChatBubbleLeftEllipsisIcon className="h-6 w-6" aria-hidden="true" />
              </div>

              {/* Refined Typography */}
              <h2 className="text-2xl lg:text-3xl font-semibold text-teal-900 mb-3">
                Have a Dental Concern?
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                Our expert team is ready to listen and guide you towards optimal oral health and your brightest smile. Let's chat about your needs.
              </p>

              {/* Info line - simpler, cleaner */}
               <span className="text-lg font-medium text-teal-800 flex items-center">
                 Chat with an Expert Today
                {/* Optional: Add a small arrow icon here */}
               </span>
            </div>

            {/* Right Panel: Transformation/Booking */}
            {/* Contrasting background for visual separation */}
            <div className="bg-gradient-to-br from-cyan-600 to-teal-700 flex flex-col justify-center p-8 py-12 md:p-16 text-white">

               {/* Icon specific to this panel */}
               <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-5">
                <SparklesIcon className="h-6 w-6" aria-hidden="true" />
              </div>

              {/* Refined Typography - Light text on dark background */}
              <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
                Your Smile Transformation Awaits
              </h2>
              <p className="text-base text-cyan-100 leading-relaxed mb-8">
                 Let us create an extraordinary dental experience tailored just for your unique needs and aesthetic goals.
              </p>

              {/* Refined Button */}
              <button className="bg-white hover:bg-gray-100 text-teal-700 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 self-start shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-white">
                Book Your Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

