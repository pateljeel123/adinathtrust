import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { smoothScrollTo } from './smoothScroll';

const DonateButton = ({ isMobile = false }) => {
  const [isHovering, setIsHovering] = useState(false);

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

  const handleClick = (e) => {
    e.preventDefault();
    smoothScrollTo('#donate');
  };

  return (
    <motion.a
      href="#donate"
      className={`relative ${isMobile ? 'w-full' : ''} px-6 py-3 bg-gradient-to-r from-[#ef8a17] to-[#d4a017] text-white text-sm font-semibold rounded-full shadow-lg flex items-center justify-center overflow-hidden`}
      variants={donateButtonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      animate={!isHovering ? pulseAnimation : ""}
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      onClick={handleClick}
    >
      <span className="relative z-10 flex items-center">
        <motion.span 
          className="mr-2"
          animate={{
            rotate: isHovering ? [0, 20, -20, 0] : 0,
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
          opacity: isHovering ? 1 : 0,
          transition: { duration: 0.3 }
        }}
      />
    </motion.a>
  );
};

export default DonateButton;