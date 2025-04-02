// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 px-6 shadow-sm sticky top-0 z-50">
  <div className="container mx-auto flex justify-between items-center">
    {/* Logo section */}
    <div>
      <Link to="/" className="flex items-center">
        <img src={logo} alt="The Dental Studio Logo" className="h-8" />
        <span className="ml-2 text-xl font-semibold text-gray-800">The Dental Studio</span>
      </Link>
    </div>

    {/* Desktop Navigation */}
    <div className="hidden md:block">
      <div className="flex space-x-6">
        <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
        <Link to="/destinations" className="text-gray-600 hover:text-gray-900">Destinations</Link>
        <Link to="/services" className="text-gray-600 hover:text-gray-900">Services</Link>
        <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
        <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
      </div>
    </div>

    {/* Mobile menu button */}
    <div className="md:hidden">
      <button 
        aria-label="Menu" 
        className="p-2 rounded-full hover:bg-gray-100 transition-all"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile Navigation */}
  {isMenuOpen && (
    <div className="md:hidden absolute top-16 right-0 left-0 bg-white shadow-md p-4 z-50">
      <div className="flex flex-col space-y-3">
        <Link to="/" className="text-gray-600 hover:text-gray-900 px-4 py-2 hover:bg-gray-100 rounded">Home</Link>
        <Link to="/destinations" className="text-gray-600 hover:text-gray-900 px-4 py-2 hover:bg-gray-100 rounded">Destinations</Link>
        <Link to="/services" className="text-gray-600 hover:text-gray-900 px-4 py-2 hover:bg-gray-100 rounded">Services</Link>
        <Link to="/about" className="text-gray-600 hover:text-gray-900 px-4 py-2 hover:bg-gray-100 rounded">About</Link>
        <Link to="/contact" className="text-gray-600 hover:text-gray-900 px-4 py-2 hover:bg-gray-100 rounded">Contact</Link>
      </div>
    </div>
  )}
</nav>
  );
};

export default Navbar;
