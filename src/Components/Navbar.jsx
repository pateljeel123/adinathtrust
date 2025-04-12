import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavItem from '../utiles/NavItem';
import DonateButton from '../utiles/DonateButton';
import { smoothScrollTo } from '../utiles/smoothScroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navItems = [
    { name: 'HOME', path: '#hero' },
    { name: 'ABOUT', path: '#story' },
    { name: 'SERVICES', path: '#service' },
    { name: 'GALLERY', path: '#gallery' },
    { name: 'DOCUMENT', path: '#document' },
    { name: 'CONTACTS', path: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    
    // Initial check
    checkMobile();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const logoVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      } 
    }
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: { 
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { 
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { 
        duration: 0.2,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const itemVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        duration: 0.5, 
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
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
            className="flex items-center space-x-2 md:space-x-4 group cursor-pointer"
            variants={logoVariants}
            initial="initial"
            animate="animate"
            onClick={() => smoothScrollTo('#hero')}
          >
            {/* Logo Image */}
            <motion.div 
              className="h-12 w-12 md:h-16 md:w-16 transition-all duration-300"
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src="https://adinathtrust.org/assets/img/logos/Trust%20Logo.png" 
                alt="Trust Logo"
                className="h-full w-full object-contain drop-shadow-md"
                loading="lazy"
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
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-1 bg-[#F6F5EC]/80 backdrop-blur-sm rounded-full px-6 py-2"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item, i) => (
              <NavItem key={item.name} item={item} index={i} />
            ))}
          </motion.div>

          {/* Donate Button - Desktop */}
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <DonateButton />
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-full bg-[#F6F5EC]/90 backdrop-blur-sm shadow-sm border border-[#e8e6da]"
            whileHover={{ 
              scale: 1.1,
              backgroundColor: "rgba(246, 245, 236, 0.7)"
            }}
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

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden overflow-hidden"
              style={{ originY: 0 }}
            >
              <motion.div 
                className="pt-2 pb-4 space-y-2 bg-[#F6F5EC]/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-[#e8e6da]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {navItems.map((item, index) => (
                  <motion.a
                    href={item.path}
                    key={item.name}
                    className="block px-6 py-3 text-sm font-medium text-[#5a4d3e] hover:text-[#d4a017] hover:bg-[#F6F5EC]/70 transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      smoothScrollTo(item.path);
                      setIsMenuOpen(false);
                    }}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ 
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.div
                  className="px-4 pt-2"
                  variants={itemVariants}
                >
                  <DonateButton isMobile />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;