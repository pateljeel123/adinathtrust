import React, { useState, useEffect, useRef } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand, FaCompress } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);
  const [direction, setDirection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Calculate scroll progress
  useEffect(() => {
    const progress = (currentIndex / (images.length - 1)) * 100;
    setScrollProgress(progress);
  }, [currentIndex, images.length]);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeOverlay = () => {
    setSelectedImage(null);
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    setIsFullscreen(false);
  };

  const navigate = (dir, openImage = false) => {
    setDirection(dir);
    const newIndex = (() => {
      const updatedIndex = currentIndex + dir;
      if (updatedIndex < 0) return images.length - 1;
      if (updatedIndex >= images.length) return 0;
      return updatedIndex;
    })();
    
    setCurrentIndex(newIndex);
    
    // Only update selectedImage if we're in fullscreen mode or explicitly want to open an image
    if (selectedImage || openImage) {
      setSelectedImage(images[newIndex]);
    }
  };

  const handleKeyDown = (e) => {
    if (selectedImage) {
      if (e.key === 'Escape') closeOverlay();
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowLeft') navigate(-1);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="w-full py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden" id="gallery">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#727B4E]/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#A48B4B]/10 rounded-full filter blur-3xl"></div>
      </div>

      {/* Premium Header */}
      <div className="relative z-10 text-center mb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block relative"
        >
          <h2 className="text-6xl md:text-7xl font-extrabold text-[#727B4E] tracking-tight font-serif mb-4 relative">
            <span className="relative inline-block">
              Our Gallery
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="absolute bottom-0 left-0 w-full h-1 bg-[#A48B4B] origin-left"
              />
            </span>
          </h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Witness the excellence of Aadinath through our curated collection of memorable moments and achievements
          </motion.p>
        </motion.div>
      </div>

      {/* Gallery Container */}
      <div 
        className="w-full overflow-x-hidden relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          ref={sliderRef}
          className="flex px-10 py-5"
          animate={{
            x: -currentIndex * 420,
            transition: { type: 'spring', stiffness: 300, damping: 30 }
          }}
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className="w-[400px] h-[300px] mx-4 relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer flex-shrink-0"
              onClick={() => handleImageClick(image, index)}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: index * 0.05, duration: 0.5 }
              }}
              exit={{ opacity: 0 }}
              layout
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 flex flex-col justify-end">
                <h3 className="font-bold text-2xl text-white mb-2 drop-shadow-lg">{image.title || 'AADINATH'}</h3>
                <p className="text-blue-100 text-sm font-medium">{image.description || 'SHREE AADINATH YUVA CHARITABLE TRUST, SURAT'}</p>
              </div>
              <div className="absolute inset-0 border-2 border-white/20 hover:border-white/40 transition-all duration-300 rounded-2xl pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Arrows - Fixed */}
        <div
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.button 
            className="bg-black/70 text-white p-4 rounded-full hover:bg-[#A48B4B] transition-all shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              navigate(-1);
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0.7,
              x: isHovered ? 0 : -10
            }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronLeft className="text-2xl" />
          </motion.button>
        </div>

        <div
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.button 
            className="bg-black/70 text-white p-4 rounded-full hover:bg-[#A48B4B] transition-all shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              navigate(1);
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0.7,
              x: isHovered ? 0 : 10
            }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronRight className="text-2xl" />
          </motion.button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-4xl mx-auto mt-8 h-1.5 bg-gray-200 rounded-full overflow-hidden relative">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-[#A48B4B]"
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6">
        {images.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 mx-1.5 rounded-full transition-all ${currentIndex === index ? 'bg-[#727B4E]' : 'bg-gray-300'}`}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
              // Don't open the image when clicking dots
            }}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </div>

      {/* Selected Image Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeOverlay}
          >
            <motion.div
              className="relative w-full h-full max-w-7xl flex items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.2 }
              }}
              exit={{ opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button 
                className="absolute left-6 top-6 bg-black/70 text-white p-3 rounded-full z-20 hover:bg-[#A48B4B] transition-colors shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  closeOverlay();
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes className="text-xl" />
              </motion.button>

              <div
                className="absolute left-6 top-1/2 -translate-y-1/2 z-30"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button 
                  className="bg-black/70 text-white p-4 rounded-full hover:bg-[#A48B4B] transition-colors shadow-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigate(-1);
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaChevronLeft className="text-2xl" />
                </motion.button>
              </div>

              <motion.img
                key={currentIndex}
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                initial={{ x: direction * 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -direction * 100, opacity: 0 }}
                transition={{ duration: 0.5 }}
              />

              <div
                className="absolute right-6 top-1/2 -translate-y-1/2 z-30"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button 
                  className="bg-black/70 text-white p-4 rounded-full hover:bg-[#A48B4B] transition-colors shadow-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigate(1);
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaChevronRight className="text-2xl" />
                </motion.button>
              </div>

              <motion.button 
                className="absolute right-6 top-6 bg-black/70 text-white p-3 rounded-full z-20 hover:bg-[#A48B4B] transition-colors shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFullscreen();
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isFullscreen ? <FaCompress className="text-xl" /> : <FaExpand className="text-xl" />}
              </motion.button>

              <motion.div 
                className="absolute bottom-8 left-0 right-0 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="inline-block bg-black/70 px-8 py-4 rounded-xl backdrop-blur-sm">
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedImage.title || 'AADINATH'}</h3>
                  <p className="text-blue-100 font-light">{selectedImage.description || 'SHREE AADINATH YUVA CHARITABLE TRUST, SURAT'}</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;