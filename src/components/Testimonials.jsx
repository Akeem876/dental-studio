// src/components/Testimonials.jsx
import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "Our trip to the Maldives was nothing short of magical. The attention to detail, from our private villa to the personalized excursions, was impeccable.",
      author: "Sarah L.",
      image: "/images/testimonial1.jpg"
    },
    {
      id: 2,
      content: "The safari experience LxTour arranged for us exceeded all expectations. The accommodations were luxurious, and the guides were exceptionally knowledgeable.",
      author: "James M.",
      image: "/images/testimonial2.jpg"
    },
    {
      id: 3,
      content: "From the moment we landed in Santorini, everything was taken care of. The private yacht tour around the caldera was the highlight of our trip.",
      author: "Emma R.",
      image: "/images/testimonial3.jpg"
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);

  return (
    <section className="py-16 px-6 sm:px-12 lg:px-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">Hear From Our Clients</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative rounded-lg overflow-hidden">
          <img 
            src={activeTestimonial.image || '/images/maldives.jpg'} 
            alt="Testimonial location" 
            className="w-full h-full object-cover aspect-square"
          />
        </div>
        
        <div className="flex flex-col justify-center">
          <div className="mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-gray-700 text-lg mb-4">{activeTestimonial.content}</p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
              <span className="font-medium">{activeTestimonial.author}</span>
            </div>
          </div>
          
          <div className="flex space-x-2">
            {testimonials.map((testimonial) => (
              <button
                key={testimonial.id}
                className={`w-3 h-3 rounded-full ${testimonial.id === activeTestimonial.id ? 'bg-blue-600' : 'bg-gray-300'}`}
                onClick={() => setActiveTestimonial(testimonial)}
                aria-label={`View testimonial from ${testimonial.author}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;