import React from 'react';
import { motion } from 'framer-motion';
import { smoothScrollTo } from './smoothScroll';

const NavItem = ({ item, index, onClick }) => {
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

  const handleClick = (e) => {
    e.preventDefault();
    smoothScrollTo(item.path);
    if (onClick) onClick();
  };

  return (
    <motion.a 
      href={item.path} 
      key={item.name}
      custom={index}
      variants={navItemVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="px-4 py-1 text-sm font-medium text-[#5a4d3e] relative"
      onClick={handleClick}
    >
      <span className="relative z-10">{item.name}</span>
      <motion.span
        className="absolute bottom-0 left-0 w-full h-0.5 bg-[#d4a017] rounded-full"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.a>
  );
};

export default NavItem;