import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['HOME', 'ABOUT', 'SERVICES', 'GALLERY', 'DOCUMENT', 'CONTACTS'];

  return (
    <nav className="bg-gradient-to-r from-white to-blue-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Trust Name */}
          <div className="flex items-center space-x-2 md:space-x-4 group">
            {/* Logo Image */}
            <div className="h-12 w-12 md:h-16 md:w-16 transition-all duration-300 transform group-hover:scale-105">
              <img 
                src="https://adinathtrust.org/assets/img/logos/Trust%20Logo.png" 
                alt="Trust Logo"
                className="h-full w-full object-contain drop-shadow-md"
              />
            </div>
            
            {/* Trust Name */}
            <div className="transition-all duration-300 transform group-hover:translate-x-1">
              <img 
                src="https://adinathtrust.org/assets/img/logos/Trust%20Name.webp" 
                alt="Trust Name"
                className="h-8 md:h-10 w-auto object-contain filter drop-shadow-sm"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 shadow-sm border border-gray-100">
            {navItems.map((item) => (
              <a 
                href="#" 
                key={item}
                className="px-3 py-1 text-xs sm:text-sm font-medium text-gray-600 hover:text-blue-600 
                          relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 
                          after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 
                          hover:after:w-3/4 hover:after:left-1/4 hover:after:transform hover:after:-translate-x-1/4"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
          <div className="pt-2 pb-4 space-y-1 bg-white/90 backdrop-blur-sm rounded-lg mt-2 shadow-md border border-gray-100">
            {navItems.map((item) => (
              <a
                href="#"
                key={item}
                className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;