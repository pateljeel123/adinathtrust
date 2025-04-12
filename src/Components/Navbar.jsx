import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import DonateButton from '../utiles/DonateButton';
import { smoothScrollTo } from '../utiles/smoothScroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'HOME', path: '#hero', isHash: true },
    { name: 'ABOUT', path: '#story', isHash: true },
    { name: 'SERVICES', path: '#service', isHash: true },
    { name: 'GALLERY', path: '#gallery', isHash: true },
    { name: 'DOCUMENT', path: '/document', isHash: false },
    { name: 'CONTACTS', path: '#contact', isHash: true }
  ];

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

  // Smooth scroll when URL has a hash (and we're on home)
  useEffect(() => {
    if (location.hash && location.pathname === '/') {
      const timer = setTimeout(() => {
        smoothScrollTo(location.hash);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  const handleNavigation = (path, isHash, e) => {
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

    setTimeout(() => {
      setIsMenuOpen(false);
    }, 200); // Delay to allow mobile nav animation
  };

  // Framer Motion Variants
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
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1, height: 'auto',
      transition: { duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }
    },
    exit: {
      opacity: 0, height: 0,
      transition: { duration: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  const itemVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0, opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
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
                <img
                  src="https://adinathtrust.org/assets/img/logos/Trust%20Logo.png"
                  alt="Trust Logo"
                  className="h-full w-full object-contain drop-shadow-md"
                  loading="lazy"
                />
              </motion.div>

              <motion.div whileHover={{ x: 5 }}>
                <img
                  src="https://adinathtrust.org/assets/img/logos/Trust%20Name.webp"
                  alt="Trust Name"
                  className="h-8 md:h-10 w-auto object-contain filter drop-shadow-sm"
                  loading="lazy"
                />
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
                    onClick={(e) => handleNavigation(item.path, item.isHash, e)}
                    className="px-3 py-2 rounded-full text-sm font-medium text-[#5a4d3e] hover:text-[#d4a017] hover:bg-[#F6F5EC]/60 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className="px-3 py-2 rounded-full text-sm font-medium text-[#5a4d3e] hover:text-[#d4a017] hover:bg-[#F6F5EC]/60 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Desktop Donate */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <DonateButton />
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden overflow-hidden"
              style={{ originY: 0 }}
            >
              <motion.div className="pt-2 pb-4 space-y-2 bg-[#F6F5EC]/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-[#e8e6da]">
                {navItems.map((item) => (
                  <motion.div key={item.name} variants={itemVariants} initial="hidden" animate="visible">
                    {item.isHash ? (
                      <a
                        href={item.path}
                        onClick={(e) => handleNavigation(item.path, item.isHash, e)}
                        className="block px-6 py-3 text-sm font-medium text-[#5a4d3e] hover:text-[#d4a017] hover:bg-[#F6F5EC]/70 transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        className="block px-6 py-3 text-sm font-medium text-[#5a4d3e] hover:text-[#d4a017] hover:bg-[#F6F5EC]/70 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <motion.div className="px-4 pt-2" variants={itemVariants}>
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
