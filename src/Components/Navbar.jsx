import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { smoothScrollTo } from '../utiles/smoothScroll';
import DonateButton from '../utiles/DonateButton';
import NavItem from '../utiles/NavItem';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 bg-[#F6F5EC]/80 backdrop-blur-sm rounded-full px-6 py-2">
            {navItems.map((item, i) => (
              <NavItem key={item.name} item={item} index={i} />
            ))}
          </div>

          {/* Donate Button */}
          <div className="hidden md:block">
            <DonateButton />
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-full bg-[#F6F5EC]/90 backdrop-blur-sm shadow-sm border border-[#e8e6da]"
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

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden overflow-hidden"
            >
              <div className="pt-2 pb-4 space-y-2 bg-[#F6F5EC]/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-[#e8e6da]">
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
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.div
                  className="px-4 pt-2"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  <DonateButton isMobile />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;