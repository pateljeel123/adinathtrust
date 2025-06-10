import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { smoothScrollTo } from '../utiles/smoothScroll';
import TrustLogo from '../logo/Trust Logo.png';
import TrustName from '../logo/Trust Name.webp';

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
    { name: 'ADMIN', path: '/admincorner', isHash: false },
    { name: 'SERVICES', path: '#service', isHash: true },
    { name: 'EXPERTS', path: '/doctors', isHash: false },
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

  // Smooth scroll when URL has a hash or when navigating with state
  useEffect(() => {
    // हैश के साथ URL के लिए स्मूथ स्क्रॉल
    if (location.hash && location.pathname === '/') {
      const timer = setTimeout(() => {
        smoothScrollTo(location.hash);
      }, 100);
      return () => clearTimeout(timer);
    }
    
    // state.scrollTo के साथ नेविगेशन के लिए स्मूथ स्क्रॉल
    if (location.state?.scrollTo) {
      const timer = setTimeout(() => {
        smoothScrollTo(location.state.scrollTo);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  const handleNavigation = (path, isHash, e, itemName) => {
    setActiveItem(itemName);

    if (isHash) {
      e?.preventDefault();
      // सीधे होम पेज पर नेविगेट करें और हैश लिंक पर स्क्रॉल करें
      navigate('/', { state: { scrollTo: path } });
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
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full z-50 ${scrolled ? 'bg-[#F6F5EC] shadow-md' : 'bg-[#F6F5EC]'} transition-all duration-300`}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center z-10"> 
            <motion.div
              className="flex items-center space-x-2 xs:space-x-3 sm:space-x-3 md:space-x-4"
              variants={{
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              initial="initial"
              animate="animate"
            >
              <motion.div
                className="h-11 w-11 xs:h-12 xs:w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-18 lg:w-18"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={TrustLogo}
                  alt="Trust Logo"
                  className="h-full w-full object-contain drop-shadow-sm"
                  loading="lazy"
                />
              </motion.div>

              <motion.img
                src={TrustName}
                alt="Trust Name"
                className="h-7 xs:h-8 sm:h-9 md:h-10 lg:h-12 w-auto object-contain drop-shadow-sm"
                loading="lazy"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <motion.div
            className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-[#F6F5EC] rounded-full px-4 xl:px-6 py-2"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { 
                  duration: 0.5, 
                  ease: "easeOut",
                  staggerChildren: 0.1 
                } 
              }
            }}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item, index) => (
              <motion.div 
                key={item.name}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                {item.isHash ? (
                  <a
                    href={item.path}
                    onClick={(e) => handleNavigation(item.path, item.isHash, e, item.name)}
                    className={`px-2 xl:px-3 py-2 rounded-full text-sm font-medium ${activeItem === item.name ? 'text-[#d4a017] font-semibold' : 'text-[#5a4d3e]'} hover:text-[#d4a017] transition-colors duration-200`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-2 xl:px-3 py-2 rounded-full text-sm font-medium ${activeItem === item.name ? 'text-[#d4a017] font-semibold' : 'text-[#5a4d3e]'} hover:text-[#d4a017] transition-colors duration-200`}
                    onClick={() => setActiveItem(item.name)}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Desktop Buttons */}
          <motion.div
            className="hidden lg:flex items-center gap-2 xl:gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
          >
            <div className="relative" ref={dropdownRef}>
              <motion.button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-2 bg-white border border-[#e8e6da] hover:bg-gray-50 transition-colors shadow-sm"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span>🚑 Ambulance</span>
                <motion.span
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
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
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-50"
                  >
                    <div className="py-1">
                      {["+91 78250 96000", "+91 74340 96000"].map((number) => (
                        <motion.button
                          key={number}
                          className="w-full px-4 py-2.5 text-left hover:bg-amber-50 transition-colors flex items-center justify-between"
                          onClick={() => {
                            console.log(`Calling ${number}`);
                            setIsDropdownOpen(false);
                          }}
                          whileHover={{ x: 2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>{number}</span>
                          <span className="text-amber-500">🚑</span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-[#ef8a17] to-[#d4a017] text-white font-medium rounded-full text-xs sm:text-sm shadow-md whitespace-nowrap"
            >
              Show Your Blessing by donation
            </motion.button>
          </motion.div>

          {/* Mobile menu toggle */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex items-center justify-center p-3 rounded-full bg-white border border-[#e8e6da] shadow-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400 }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6 sm:h-7 sm:w-7 text-[#5a4d3e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6 sm:h-7 sm:w-7 text-[#5a4d3e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </motion.button>
        </div>

          {/* AnimatePresence for mobile menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsMenuOpen(false)}
                />

                {/* Mobile Menu */}
                <motion.div
                  className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#F6F5EC] z-50 lg:hidden overflow-y-auto rounded-l-2xl shadow-xl"
                  variants={mobileMenuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="sticky top-0 bg-[#F6F5EC] z-10 p-5 border-b border-amber-100 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img src={TrustLogo} alt="Trust Logo" className="h-12 w-12 object-contain" />
                      <img src={TrustName} alt="Trust Name" className="h-8 w-auto object-contain" />
                    </div>
                    <motion.button
                      onClick={() => setIsMenuOpen(false)}
                      className="p-3 rounded-full bg-white border border-[#e8e6da] shadow-sm"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="h-6 w-6 text-[#5a4d3e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </motion.button>
                  </div>

                  <div className="p-5">
                    <motion.div 
                      className="grid grid-cols-1 gap-4 mb-6"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.08
                          }
                        }
                      }}
                    >
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        variants={{
                          hidden: { opacity: 0, x: 20 },
                          visible: { opacity: 1, x: 0 },
                          exit: { opacity: 0, x: 20 }
                        }}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.isHash ? (
                          <a
                            href={item.path}
                            onClick={(e) => {
                              handleNavigation(item.path, item.isHash, e, item.name);
                              setIsMenuOpen(false);
                            }}
                            className={`block px-5 py-4 text-lg font-medium rounded-xl ${activeItem === item.name ? 'bg-gradient-to-r from-amber-100 to-amber-50 text-[#d4a017] shadow-sm' : 'text-[#5a4d3e] hover:bg-amber-50'} transition-all duration-200 flex items-center justify-between`}
                          >
                            <span>{item.name}</span>
                            {activeItem === item.name && (
                              <motion.span 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="text-amber-500 text-xl"
                              >•</motion.span>
                            )}
                          </a>
                        ) : (
                          <Link
                            to={item.path}
                            className={`block px-5 py-4 text-lg font-medium rounded-xl ${activeItem === item.name ? 'bg-gradient-to-r from-amber-100 to-amber-50 text-[#d4a017] shadow-sm' : 'text-[#5a4d3e] hover:bg-amber-50'} transition-all duration-200 flex items-center justify-between`}
                            onClick={() => {
                              setActiveItem(item.name);
                              setIsMenuOpen(false);
                            }}
                          >
                            <span>{item.name}</span>
                            {activeItem === item.name && (
                              <motion.span 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="text-amber-500 text-xl"
                              >•</motion.span>
                            )}
                          </Link>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Mobile Menu Buttons - Only visible in mobile menu */}
                  <div className="space-y-4 pt-4 border-t border-[#e8e6da]">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full px-4 py-3 bg-gradient-to-r from-[#ef8a17] to-[#d4a017] text-white font-medium rounded-xl text-sm shadow-md flex items-center justify-center space-x-2"
                    >
                      <span>Show Your Blessing by donation</span>
                      <span>🙏</span>
                    </motion.button>
                    <div className="relative">
                      <motion.button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full px-4 py-3 bg-white border border-[#e8e6da] text-[#5a4d3e] font-medium rounded-xl text-sm shadow-md flex items-center justify-center gap-2"
                      >
                        <span>🚑 Ambulance</span>
                        <motion.span
                          animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
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
                            transition={{ duration: 0.3 }}
                            className="mt-2 bg-white rounded-xl shadow-md border border-[#e8e6da] overflow-hidden z-50"
                          >
                            {["+91 78250 96000", "+91 74340 96000"].map((number, index) => (
                              <motion.button
                                key={number}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ 
                                  opacity: 1, 
                                  y: 0,
                                  transition: { delay: index * 0.1 }
                                }}
                                className="w-full px-4 py-3 text-left hover:bg-amber-50 transition-colors flex items-center justify-between"
                                onClick={() => {
                                  console.log(`Calling ${number}`);
                                  setIsDropdownOpen(false);
                                }}
                              >
                                <span className="font-medium">{number}</span>
                                <span className="text-amber-500 bg-amber-50 p-1.5 rounded-full">🚑</span>
                              </motion.button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#e8e6da] text-center text-xs text-gray-500">
                    <p>© 2023 Aadinath Trust. All rights reserved.</p>
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
