import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import DonateButton from '../utiles/DonateButton';
import { smoothScrollTo } from '../utiles/smoothScroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

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
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] } }
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1, y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1, y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0, y: -20,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0, opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
      className={`fixed w-full z-50 ${scrolled ? 'bg-[#F6F5EC]/95 backdrop-blur-md shadow-lg border-b border-[#e8e6da]' : 'bg-[#F6F5EC]'} transition-all duration-300 ease-in-out`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div
              className="flex items-center space-x-2 md:space-x-4 group"
              variants={logoVariants}
              initial="initial"
              animate="animate"
            >
              <motion.div
                className="h-12 w-12 md:h-16 md:w-16"
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={'#hero'}><img
                  src="https://adinathtrust.org/assets/img/logos/Trust%20Logo.png"
                  alt="Trust Logo"
                  className="h-full w-full object-contain drop-shadow-md"
                  loading="lazy"
                /></Link>
              </motion.div>

              <motion.div whileHover={{ x: 5 }}>
                <Link to={'#hero'}><img
                  src="https://adinathtrust.org/assets/img/logos/Trust%20Name.webp"
                  alt="Trust Name"
                  className="h-8 md:h-10 w-auto object-contain filter drop-shadow-sm"
                  loading="lazy"
                /></Link>
              </motion.div>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <motion.div
            className="hidden lg:flex items-center space-x-1 bg-[#F6F5EC]/80 backdrop-blur-sm rounded-full px-6 py-2"
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
                    className={`px-2 py-2 rounded-full text-sm font-medium ${activeItem === item.name ? 'text-[#d4a017]' : 'text-[#5a4d3e]'} hover:text-[#d4a017] hover:bg-[#F6F5EC]/60 transition-colors duration-200`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-full text-sm font-medium ${activeItem === item.name ? 'text-[#d4a017]' : 'text-[#5a4d3e]'} hover:text-[#d4a017] hover:bg-[#F6F5EC]/60 transition-colors duration-200`}
                    onClick={() => {
                      setActiveItem(item.name);
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Desktop Donate */}
          <motion.div
            className="hidden lg:flex items-center gap-4 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
          >

            <div className="relative group"
              onMouseLeave={() => setIsDropdownOpen(false)}>
              <motion.button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
                className="px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                whileHover={{ scale: 1.03 }}
              >
                <motion.span
                  animate={{
                    scale: [1, 1.1, 1],
                    transition: { duration: 1.5, repeat: Infinity }
                  }}
                >
                  🚑
                </motion.span>
                <span>Ambulance</span>
                <motion.span
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-1 text-xs"
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
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-1 w-56 bg-white rounded-md shadow-lg z-50 border border-gray-200"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                  >
                    <div className="py-1" role="menu">
                      <button
                        className="w-full px-4 py-2.5 text-left text-gray-700 hover:bg-amber-50 flex items-center justify-between transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log('Primary number selected');
                          setIsDropdownOpen(false);
                        }}
                        role="menuitem"
                      >
                        <span className="truncate">+91 78250 96000</span>
                        <span className="text-amber-500 ml-2">🚑</span>
                      </button>
                      <div className="border-t border-gray-100 my-1"></div>
                      <button
                        className="w-full px-4 py-2.5 text-left text-gray-700 hover:bg-amber-50 flex items-center justify-between transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log('Secondary number selected');
                          setIsDropdownOpen(false);
                        }}
                        role="menuitem"
                      >
                        <span className="truncate">+91 74340 96000</span>
                        <span className="text-amber-500 ml-2">🚑</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Show Your Blessing Button */}
            <motion.button
              whileHover={{
                y: -2,
                boxShadow: "0 5px 15px rgba(220, 38, 38, 0.3)"
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className="px-3 py-2.5 bg-gradient-to-r from-[#ef8a17] to-[#d4a017] text-white font-medium rounded-full text-sm shadow-lg relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                <motion.span
                  animate={{
                    rotate: [0, 15, -15, 0],
                    transition: {
                      duration: 0.6,
                      repeat: Infinity,
                      repeatDelay: 3
                    }
                  }}
                >
                  ❤️
                </motion.span>
                Show Your Blessing With Donation
              </span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>

          </motion.div>

          {/* Mobile menu toggle */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex items-center justify-center p-2 rounded-full bg-[#F6F5EC]/90 backdrop-blur-sm shadow-sm border border-[#e8e6da]"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(246, 245, 236, 0.7)" }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 }
              }}
              transition={{ duration: 0.3 }}
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
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu with Backdrop */}
        {/* Mobile Menu with Backdrop */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/30 z-40 lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Mobile Menu Content */}
              <motion.div
                ref={menuRef}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed lg:hidden w-full left-0 right-0 bg-[#F6F5EC] shadow-xl z-50"
                style={{ top: '80px' }}
              >
                <div className="container mx-auto px-4 py-4">
                  {/* Navigation Items */}
                  <motion.div className="space-y-2 mb-4">
                    {navItems.map((item) => (
                      <motion.div
                        key={item.name}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.isHash ? (
                          <a
                            href={item.path}
                            onClick={(e) => handleNavigation(item.path, item.isHash, e, item.name)}
                            className={`block px-4 py-3 text-base font-medium rounded-lg ${activeItem === item.name
                              ? 'bg-[#e8e6da] text-[#d4a017]'
                              : 'text-[#5a4d3e] hover:bg-[#e8e6da]/50'
                              } transition-colors duration-200`}
                          >
                            {item.name}
                          </a>
                        ) : (
                          <Link
                            to={item.path}
                            className={`block px-4 py-3 text-base font-medium rounded-lg ${activeItem === item.name
                              ? 'bg-[#e8e6da] text-[#d4a017]'
                              : 'text-[#5a4d3e] hover:bg-[#e8e6da]/50'
                              } transition-colors duration-200`}
                            onClick={() => {
                              setActiveItem(item.name);
                              setIsMenuOpen(false);
                            }}
                          >
                            {item.name}
                          </Link>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Action Buttons */}
                  <div className="space-y-3 pt-2 border-t border-[#e8e6da]">
                    {/* Show Your Blessing Button */}
                    <motion.button
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      className="w-full px-4 py-3 bg-gradient-to-r from-[#ef8a17] to-[#d4a017] text-white font-medium rounded-full text-sm shadow-lg relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <motion.span
                          animate={{
                            rotate: [0, 15, -15, 0],
                            transition: {
                              duration: 0.6,
                              repeat: Infinity,
                              repeatDelay: 3
                            }
                          }}
                        >
                          ❤️
                        </motion.span>
                        Show Your Blessing
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-[#ef8a17]/80 to-[#d4a017]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </motion.button>

                    {/* Donate Now Button with Dropdown */}
                    <div className="relative">
                      <motion.button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        className="w-full px-4 py-3 bg-gradient-to-r from-[#ef8a17] to-[#d4a017] text-white font-medium rounded-full text-sm shadow-lg relative overflow-hidden group flex items-center justify-center gap-2"
                      >
                        <motion.span
                          animate={{
                            scale: [1, 1.1, 1],
                            transition: {
                              duration: 1.5,
                              repeat: Infinity
                            }
                          }}
                        >
                          🚑
                        </motion.span>
                        Donate Now
                        <motion.span
                          animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                          className="ml-1"
                        >
                          ▼
                        </motion.span>
                      </motion.button>

                      {/* Donation Amount Dropdown */}
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl z-50 overflow-hidden"
                          >
                            <div className="py-1">
                              {[100, 200].map((amount) => (
                                <button
                                  key={amount}
                                  className="w-full px-4 py-3 text-left text-gray-800 hover:bg-amber-50 flex items-center justify-between transition-colors duration-200"
                                  onClick={() => {
                                    console.log(`${amount} donated`);
                                    setIsDropdownOpen(false);
                                  }}
                                >
                                  <span>{amount} INR</span>
                                  <span className="text-amber-500">🚑</span>
                                </button>
                              ))}
                            </div>
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
