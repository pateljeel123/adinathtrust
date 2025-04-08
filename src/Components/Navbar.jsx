import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-white to-blue-50 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Logo and Trust Name with subtle animation */}
          <div className="flex items-center space-x-4 group">
            {/* Logo Image with hover effect */}
            <div className="h-16 w-16 transition-all duration-300 transform group-hover:scale-105">
              <img 
                src="https://adinathtrust.org/assets/img/logos/Trust%20Logo.png" 
                alt="Trust Logo"
                className="h-full w-full object-contain drop-shadow-md"
              />
            </div>
            
            {/* Trust Name with elegant typography */}
            <div className="transition-all duration-300 transform group-hover:translate-x-1">
              <img 
                src="https://adinathtrust.org/assets/img/logos/Trust%20Name.webp" 
                alt="Trust Name"
                className="h-10 w-auto object-contain filter drop-shadow-sm"
              />
            </div>
          </div>

          {/* Right side - Navigation Links with modern styling */}
          <div className="flex space-x-1 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 shadow-sm border border-gray-100">
            {['HOME', 'ABOUT', 'SERVICES', 'CALLERY', 'DOCUMENT', 'CONTACTS'].map((item) => (
              <a 
                href="#" 
                key={item}
                className="px-4 py-1 text-sm font-medium text-gray-600 hover:text-blue-600 
                          relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 
                          after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 
                          hover:after:w-3/4 hover:after:left-1/4 hover:after:transform hover:after:-translate-x-1/4"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Main Function section with decorative elements */}
       
      </div>
    </nav>
  );
};

export default Navbar;