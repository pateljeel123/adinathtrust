import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { smoothScrollTo } from '../utiles/smoothScroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  const navItems = [
    { name: 'HOME', path: '#hero', isHash: true },
    { name: 'ABOUT', path: '#story', isHash: true },
    { name: 'SERVICES', path: '#service', isHash: true },
    { name: 'GALLERY', path: '#gallery', isHash: true },
    { name: 'DOCUMENT', path: '/document', isHash: false },
    { name: 'CONTACTS', path: '#contact', isHash: true }
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
          (!dropdownRef.current || !dropdownRef.current.contains(event.target))) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    const checkViewport = () => setIsMobileView(window.innerWidth < 1024);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkViewport);

    handleScroll();
    checkViewport();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkViewport);
    };
  }, []);

  // Smooth scroll when URL has a hash
  useEffect(() => {
    if (location.hash && location.pathname === '/') {
      const timer = setTimeout(() => {
        smoothScrollTo(location.hash);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  const handleNavigation = (path, isHash, e, itemName) => {
    setActiveItem(itemName);

    if (isHash) {
      e?.preventDefault();
      if (location.pathname === '/') {
        smoothScrollTo(path);
      } else {
        navigate('/', { state: { scrollTo: path } });
      }
    } else {
      navigate(path);
    }

    if (isMobileView) {
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 300);
    }
  };

  // Animation variants
  const logoVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0, 
      y: -20,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0, 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 ${scrolled ? 'bg-[#F6F5EC] shadow-md' : 'bg-[#F6F5EC]'} transition-all duration-300`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div
              className="flex items-center space-x-2 md:space-x-4"
              variants={logoVariants}
              initial="initial"
              animate="animate"
            >
              <motion.div
                className="h-12 w-12 md:h-16 md:w-16"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src="https://adinathtrust.org/assets/img/logos/Trust%20Logo.png"
                  alt="Trust Logo"
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </motion.div>
              <img
                src="https://adinathtrust.org/assets/img/logos/Trust%20Name.webp"
                alt="Trust Name"
                className="h-8 md:h-10 w-auto object-contain"
                loading="lazy"
              />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <motion.div
            className="hidden lg:flex items-center space-x-1 bg-[#F6F5EC] rounded-full px-6 py-2"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item) => (
              <React.Fragment key={item.name}>
                {item.isHash ? (
                  <a
                    href={item.path}
                    onClick={(e) => handleNavigation(item.path, item.isHash, e, item.name)}
                    className={`px-3 py-2 rounded-full text-sm font-medium ${activeItem === item.name ? 'text-[#d4a017]' : 'text-[#5a4d3e]'} hover:text-[#d4a017] transition-colors duration-200`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-full text-sm font-medium ${activeItem === item.name ? 'text-[#d4a017]' : 'text-[#5a4d3e]'} hover:text-[#d4a017] transition-colors duration-200`}
                    onClick={() => setActiveItem(item.name)}
                  >
                    {item.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Desktop Buttons */}
          <motion.div
            className="hidden lg:flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="relative" ref={dropdownRef}>
              <motion.button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 bg-white border border-[#e8e6da] hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.03 }}
              >
                <span>🚑 Ambulance</span>
                <motion.span
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  className="text-xs"
                >
                  ▼
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full right-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200"
                  >
                    <div className="py-1">
                      {["+91 78250 96000", "+91 74340 96000"].map((number) => (
                        <button
                          key={number}
                          className="w-full px-4 py-2.5 text-left hover:bg-amber-50 transition-colors flex items-center justify-between"
                          onClick={() => {
                            console.log(`Calling ${number}`);
                            setIsDropdownOpen(false);
                          }}
                        >
                          <span>{number}</span>
                          <span className="text-amber-500">🚑</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-4 py-2.5 bg-gradient-to-r from-[#ef8a17] to-[#d4a017] text-white font-medium rounded-full text-sm shadow-md"
            >
            Show Your Blessing by donation
            </motion.button>
          </motion.div>

          {/* Mobile menu toggle */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex items-center justify-center p-2 rounded-full bg-white border border-[#e8e6da]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6 text-[#5a4d3e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6 text-[#5a4d3e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/30 z-40 lg:hidden"
                onClick={() => setIsMenuOpen(false)}
              />

              <motion.div
                ref={menuRef}
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed lg:hidden w-full left-0 right-0 bg-[#F6F5EC] shadow-xl z-50"
                style={{ top: '80px' }}
              >
                <div className="container mx-auto px-4 py-4">
                  <motion.div className="space-y-2 mb-4">
                    {navItems.map((item) => (
                      <motion.div
                        key={item.name}
                        variants={itemVariants}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.isHash ? (
                          <a
                            href={item.path}
                            onClick={(e) => handleNavigation(item.path, item.isHash, e, item.name)}
                            className={`block px-4 py-3 text-base font-medium rounded-lg ${activeItem === item.name ? 'bg-[#e8e6da] text-[#d4a017]' : 'text-[#5a4d3e] hover:bg-[#e8e6da]'} transition-colors`}
                          >
                            {item.name}
                          </a>
                        ) : (
                          <Link
                            to={item.path}
                            className={`block px-4 py-3 text-base font-medium rounded-lg ${activeItem === item.name ? 'bg-[#e8e6da] text-[#d4a017]' : 'text-[#5a4d3e] hover:bg-[#e8e6da]'} transition-colors`}
                            onClick={() => setActiveItem(item.name)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>

                  <div className="space-y-3 pt-2 border-t border-[#e8e6da]">
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      className="w-full px-4 py-3 bg-gradient-to-r from-[#ef8a17] to-[#d4a017] text-white font-medium rounded-full text-sm shadow-md"
                    >
                      Show Your Blessing by donation
                    </motion.button>

                    <div className="relative">
                      <motion.button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        whileTap={{ scale: 0.97 }}
                        className="w-full px-4 py-3 bg-white border border-[#e8e6da] text-[#5a4d3e] font-medium rounded-full text-sm shadow-md flex items-center justify-center gap-2"
                      >
                        <span>🚑 Ambulance</span>
                        <motion.span
                          animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                        >
                          ▼
                        </motion.span>
                      </motion.button>

                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-1 bg-white rounded-lg shadow-md border border-[#e8e6da] overflow-hidden"
                          >
                            {["+91 78250 96000", "+91 74340 96000"].map((number) => (
                              <button
                                key={number}
                                className="w-full px-4 py-2.5 text-left hover:bg-amber-50 transition-colors flex items-center justify-between"
                                onClick={() => {
                                  console.log(`Calling ${number}`);
                                  setIsDropdownOpen(false);
                                }}
                              >
                                <span>{number}</span>
                                <span className="text-amber-500">🚑</span>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
