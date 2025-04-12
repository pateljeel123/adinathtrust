import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHoveringDonate, setIsHoveringDonate] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  const navItems = [
    { name: 'HOME', path: '#hero' },
    { name: 'ABOUT', path: '#story' },
    { name: 'SERVICES', path: '#services' },
    { name: 'GALLERY', path: '#gallery' },
    { name: 'DOCUMENT', path: '#document' },
    { name: 'CONTACTS', path: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const logoVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const navItemVariants = {
    initial: { opacity: 0, y: -10 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * i, duration: 0.3 }
    }),
    hover: { 
      color: '#5a4d3e',
      transition: { duration: 0.2 }
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { 
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const donateButtonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(239, 138, 23, 0.4)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: { scale: 0.98 }
  };

  const pulseAnimation = {
    scale: [1, 1.03, 1],
    boxShadow: [
      "0 4px 6px -1px rgba(239, 138, 23, 0.1), 0 2px 4px -1px rgba(239, 138, 23, 0.06)",
      "0 10px 15px -3px rgba(239, 138, 23, 0.2), 0 4px 6px -2px rgba(239, 138, 23, 0.1)",
      "0 4px 6px -1px rgba(239, 138, 23, 0.1), 0 2px 4px -1px rgba(239, 138, 23, 0.06)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Check if screen size is between tablet and laptop (768px - 1024px)
  const isMediumScreen = windowWidth >= 768 && windowWidth <= 1024;

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full z-50 ${
        scrolled 
          ? 'bg-[#F6F5EC]/95 backdrop-blur-md shadow-lg border-b border-[#e8e6da]' 
          : 'bg-[#F6F5EC]'
      } transition-all duration-300 ease-in-out`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Trust Name */}
          <motion.div 
            className="flex items-center space-x-2 md:space-x-4 group"
            variants={logoVariants}
            initial="initial"
            animate="animate"
          >
            {/* Logo Image */}
            <motion.div 
              className="h-12 w-12 md:h-16 md:w-16 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src="https://adinathtrust.org/assets/img/logos/Trust%20Logo.png" 
                alt="Trust Logo"
                className="h-full w-full object-contain drop-shadow-md"
              />
            </motion.div>
            
            {/* Trust Name */}
            <motion.div 
              className="transition-all duration-300"
              whileHover={{ x: 5 }}
            >
              <img 
                src="https://adinathtrust.org/assets/img/logos/Trust%20Name.webp" 
                alt="Trust Name"
                className="h-8 md:h-10 w-auto object-contain filter drop-shadow-sm"
              />
            </motion.div>
          </motion.div>

          {/* Desktop Navigation - Hidden on medium screens when menu is open */}
          {(!isMediumScreen || !isMenuOpen) && (
            <div className={`hidden ${isMediumScreen ? 'lg:flex' : 'md:flex'} items-center space-x-1 bg-[#F6F5EC]/80 backdrop-blur-sm rounded-full px-6 py-2`}>
              {navItems.map((item, i) => (
                <motion.a 
                  href={item.path} 
                  key={item.name}
                  custom={i}
                  variants={navItemVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="px-4 py-1 text-sm font-medium text-[#5a4d3e] relative"
                >
                  <span className="relative z-10">{item.name}</span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#d4a017] rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </motion.a>
              ))}
            </div>
          )}

          {/* Donate Button - Visible on medium and larger screens */}
          {!isMediumScreen && (
            <motion.div className="hidden md:block">
              <motion.a
                href="#donate"
                className="relative px-6 py-3 bg-gradient-to-r from-[#ef8a17] to-[#d4a017] text-white text-sm font-semibold rounded-full shadow-lg flex items-center justify-center overflow-hidden"
                variants={donateButtonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                animate={!isHoveringDonate ? pulseAnimation : ""}
                onHoverStart={() => setIsHoveringDonate(true)}
                onHoverEnd={() => setIsHoveringDonate(false)}
              >
                <span className="relative z-10 flex items-center">
                  <motion.span 
                    className="mr-2"
                    animate={{
                      rotate: isHoveringDonate ? [0, 20, -20, 0] : 0,
                      transition: { duration: 0.6 }
                    }}
                  >
                    ❤️
                  </motion.span>
                  DONATE NOW
                </span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-[#d4a017] to-[#ef8a17] opacity-0"
                  animate={{
                    opacity: isHoveringDonate ? 1 : 0,
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.a>
            </motion.div>
          )}

          {/* Mobile menu button - Visible on medium and smaller screens */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${isMediumScreen ? 'lg:hidden' : 'md:hidden'} flex items-center justify-center p-2 rounded-full bg-[#F6F5EC]/90 backdrop-blur-sm shadow-sm border border-[#e8e6da]`}
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

        {/* Mobile Navigation - For medium and smaller screens */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`${isMediumScreen ? 'lg:hidden' : 'md:hidden'} overflow-hidden`}
            >
              <div className="pt-2 pb-4 space-y-2 bg-[#F6F5EC]/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-[#e8e6da]">
                {navItems.map((item) => (
                  <motion.a
                    href={item.path}
                    key={item.name}
                    className="block px-6 py-3 text-sm font-medium text-[#5a4d3e] hover:text-[#d4a017] hover:bg-[#F6F5EC]/70 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                {/* Donate Button - Show in mobile menu for medium screens */}
                {isMediumScreen && (
                  <motion.div
                    className="px-4 pt-2"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    <motion.a
                      href="#donate"
                      className="block w-full px-6 py-3 text-center bg-gradient-to-r from-[#ef8a17] to-[#d4a017] text-white text-sm font-semibold rounded-lg shadow-md relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        <span className="mr-2">❤️</span>
                        DONATE NOW
                      </span>
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-[#d4a017] to-[#ef8a17] opacity-0"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Donate Button - Fixed position for medium screens */}
        {isMediumScreen && !isMenuOpen && (
          <motion.div 
            className="fixed right-4 bottom-4 z-40 lg:hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href="#donate"
              className="relative px-6 py-3 bg-gradient-to-r from-[#ef8a17] to-[#d4a017] text-white text-sm font-semibold rounded-full shadow-lg flex items-center justify-center overflow-hidden"
              variants={donateButtonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              animate={!isHoveringDonate ? pulseAnimation : ""}
              onHoverStart={() => setIsHoveringDonate(true)}
              onHoverEnd={() => setIsHoveringDonate(false)}
            >
              <span className="relative z-10 flex items-center">
                <motion.span 
                  className="mr-2"
                  animate={{
                    rotate: isHoveringDonate ? [0, 20, -20, 0] : 0,
                    transition: { duration: 0.6 }
                  }}
                >
                  ❤️
                </motion.span>
                DONATE NOW
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#d4a017] to-[#ef8a17] opacity-0"
                animate={{
                  opacity: isHoveringDonate ? 1 : 0,
                  transition: { duration: 0.3 }
                }}
              />
            </motion.a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;