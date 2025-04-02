// src/components/Testimonials.jsx
import React, { useState } from 'react';
// Import motion components and AnimatePresence from framer-motion
import { motion, AnimatePresence } from 'framer-motion';

// Assuming LxTour was the travel brand. Let's remove specific branding for now.
// const BRAND_NAME = "LxTour";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "The attention to detail was remarkable. From start to finish, the experience was seamless and exceeded all my expectations. Truly first-class service.",
      author: "Alexandra V.",
      // Replace with actual, relevant image paths - Smaller images work better here
      image: "/sara.jpg" // Example path (ensure these images exist)
    },
    {
      id: 2,
      content: "I was hesitant at first, but the team guided me through everything. The results are fantastic, and the process was much easier than I imagined. Highly recommended!",
      author: "Benjamin R.",
      image: "/james.jpg" // Example path
    },
    {
      id: 3,
      content: "An absolutely transformative experience. The professionalism and care shown were outstanding. I felt completely comfortable and supported throughout.",
      author: "Chloe M.",
      image: "/emma.jpg" // Example path
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  // Determine direction for sliding animation
  const [direction, setDirection] = useState(0);

  const handleSetActive = (newIndex) => {
    setDirection(newIndex > activeIndex ? 1 : -1); // 1 for next, -1 for prev
    setActiveIndex(newIndex);
  };

  const activeTestimonial = testimonials[activeIndex];

  // Animation variants for Framer Motion
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100, // Slide in from right or left
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100, // Slide out to right or left
      opacity: 0,
      scale: 0.95
    }),
  };

  return (
    // Consistent section styling
    <section className="py-20 px-6 sm:px-12 lg:px-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden"> {/* Subtle gradient bg */}
      {/* Consistent container */}
      <div className="max-w-4xl mx-auto text-center"> {/* Reduced max-width for focus */}
        {/* Consistent title styling */}
        <h2 className="text-4xl font-bold text-gray-900 mb-16">
          What Our Clients Say
        </h2>

        {/* Main testimonial display area */}
        <div className="relative flex flex-col items-center min-h-[350px] sm:min-h-[300px]"> {/* Min height to prevent layout jumps */}
          {/* AnimatePresence handles enter/exit animations */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex} // Important for AnimatePresence to track changes
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 }
              }}
              className="absolute w-full px-4" // Absolute positioning for transition overlap
            >
              {/* Smaller, centered image */}
              <img
                src={activeTestimonial.image || '/images/placeholder-avatar.png'} // Fallback avatar
                alt={`Portrait of ${activeTestimonial.author}`}
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover shadow-lg border-4 border-white" // Circular, border, shadow
              />
              {/* Quote Icon - Refined */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-300 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              {/* Quote Text */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-5 max-w-2xl mx-auto">
                "{activeTestimonial.content}"
              </p>
              {/* Author */}
              <span className="block font-semibold text-indigo-600 text-lg">
                 {activeTestimonial.author}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots - Placed below the content area */}
        <div className="flex justify-center space-x-3 mt-10">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ease-in-out ${
                index === activeIndex
                  ? 'bg-indigo-600 scale-110' // Active state: color + slight scale
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => handleSetActive(index)}
              aria-label={`View testimonial ${index + 1} from ${testimonial.author}`}
              aria-current={index === activeIndex ? "true" : "false"}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;