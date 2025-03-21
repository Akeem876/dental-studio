// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import logoLight from "../assets/logo-light.jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="px-6 sm:px-12 lg:px-16 max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          <div className="flex justify-center items-center">
            <p className="text-white max-w-2xl text-center">
              We create personalized travel experiences for discerning travelers
              seeking premium experiences, unmatched service, and thoughtful
              adventures.
            </p>
          </div>
        </div>

        <div className="flex items-center mb-8">
          <a
            href="mailto:contact@lxtour.com"
            className="flex items-center text-gray-300 hover:text-white"
          >
            <span>contact@lxtour.com</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        <div className="flex space-x-4 mb-8">
          <a
            href="#"
            aria-label="Facebook"
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-blue-700 hover:border-blue-700 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm4.227-2.162a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.195A4.92 4.92 0 0016.953 2a4.928 4.928 0 00-4.926 4.926c0 .386.043.763.128 1.124A13.98 13.98 0 011.66 3.25a4.93 4.93 0 001.524 6.572A4.887 4.887 0 01.96 9.116v.062a4.926 4.926 0 003.951 4.827 4.917 4.917 0 01-2.223.085 4.93 4.93 0 004.598 3.42A9.875 9.875 0 010 19.54a13.94 13.94 0 007.549 2.213c9.059 0 14.01-7.503 14.01-14.01 0-.213-.005-.426-.014-.637A10.012 10.012 0 0024 4.59z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row md:justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={logoLight} alt="LxTour Logo" className="h-8 mr-3" />
            <span className="text-xl font-semibold">The Dental Studio</span>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <Link to="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
