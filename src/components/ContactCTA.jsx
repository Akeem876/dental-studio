// src/components/ContactCTA.jsx
import React from 'react';

const ContactCTA = () => {
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-16 max-w-6xl mx-auto">
      <div className="bg-gray-100 rounded-2xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col justify-center p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-2">Have a Question?</h2>
            <p className="text-gray-600 mb-8">
              Our travel experts are ready to assist you in planning your dream vacation.
            </p>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <span className="text-lg font-medium">Chat with an expert</span>
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-2">Your Journey Awaits</h2>
            <p className="text-gray-600 mb-8">
              Let us craft an extraordinary travel experience tailored just for you.
            </p>
            
            <button className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-3 px-6 rounded-lg transition-colors self-start">
              Start Planning Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;