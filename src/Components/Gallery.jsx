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
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Enhanced device detection for better responsiveness
  useEffect(() => {
    const checkDeviceSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640); // Small phones
      setIsTablet(width >= 640 && width < 1024); // Tablets and larger phones
    };
    
    checkDeviceSize();
    window.addEventListener('resize', checkDeviceSize);
    
    return () => window.removeEventListener('resize', checkDeviceSize);
  }, []);

  // Auto play slider with optimized timing
  useEffect(() => {
    let interval;
    if (autoPlay && !selectedImage) {
      interval = setInterval(() => {
        navigate(1);
      }, isMobile ? 4000 : 5000); // Slightly faster on mobile
    }
    return () => clearInterval(interval);
  }, [autoPlay, currentIndex, selectedImage, isMobile]);

  // Calculate scroll progress
  useEffect(() => {
    const progress = (currentIndex / (images.length - 1)) * 100;
    setScrollProgress(progress);
  }, [currentIndex, images.length]);

  // Optimized slide positioning for different screen sizes
  useEffect(() => {
    if (sliderRef.current) {
      let slideWidth, offset, centerOffset;
      
      if (isMobile) {
        slideWidth = window.innerWidth * 0.85; // 85% of screen width for phones
      } else if (isTablet) {
        slideWidth = window.innerWidth * 0.75; // 75% for tablets
      } else {
        slideWidth = 420; // Desktop size
      }
      
      // Calculate maximum index to prevent showing empty space at the end
      const visibleSlides = Math.floor(window.innerWidth / slideWidth);
      const maxIndex = Math.max(0, images.length - visibleSlides);
      
      // Ensure currentIndex doesn't exceed maxIndex
      const boundedIndex = Math.min(currentIndex, maxIndex);
      if (boundedIndex !== currentIndex) {
        setCurrentIndex(boundedIndex);
      }
      
      offset = boundedIndex * slideWidth;
      centerOffset = (window.innerWidth - slideWidth) / 2;
      
      // Apply centering transformation with smoother animation
      sliderRef.current.style.transform = `translateX(${-offset + centerOffset}px)`;
    }
  }, [currentIndex, isMobile, isTablet, images.length]);

  // Calculate scroll progress
  useEffect(() => {
    // Calculate maximum valid index for progress bar
    const visibleSlides = isMobile 
      ? Math.floor(window.innerWidth / (window.innerWidth * 0.85))
      : isTablet 
        ? Math.floor(window.innerWidth / (window.innerWidth * 0.75))
        : Math.floor(window.innerWidth / 420);
    
    const maxValidIndex = Math.max(0, images.length - visibleSlides);
    
    // Calculate progress based on current position relative to max valid position
    const progress = maxValidIndex > 0 
      ? (currentIndex / maxValidIndex) * 100
      : 100;
    
    setScrollProgress(progress);
  }, [currentIndex, images.length, isMobile, isTablet]);

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
  
  // Enhanced touch events for better mobile experience
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setAutoPlay(false); // Pause autoplay when user interacts
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    const touchThreshold = isMobile ? 30 : 50; // Lower threshold for small devices
    
    if (touchStart - touchEnd > touchThreshold) {
      // Swipe left
      navigate(1);
    }
    
    if (touchStart - touchEnd < -touchThreshold) {
      // Swipe right
      navigate(-1);
    }
    
    // Resume autoplay after inactivity
    setTimeout(() => setAutoPlay(true), 5000);
  };

  return (
    <div className="w-full py-8 sm:py-12 md:py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden" id="gallery">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#727B4E]/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#A48B4B]/10 rounded-full filter blur-3xl"></div>
      </div>

      {/* Premium Header - Optimized for all screen sizes */}
      <div className="relative z-10 text-center mb-6 sm:mb-8 md:mb-16 px-3 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block relative"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#727B4E] tracking-tight font-serif mb-3 sm:mb-4 relative">
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
            className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Witness the excellence of Aadinath through our curated collection of memorable moments and achievements
          </motion.p>
        </motion.div>
      </div>

      {/* Gallery Container - Enhanced for all devices */}
      <div 
        className="w-full overflow-x-hidden relative group"
        onMouseEnter={() => {
          setIsHovered(true);
          setAutoPlay(false);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setTimeout(() => setAutoPlay(true), 2000);
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          ref={sliderRef}
          className={`flex ${isMobile ? 'px-0' : isTablet ? 'px-3' : 'px-4 md:px-10'} py-4 sm:py-5`}
          style={{ width: 'fit-content', minWidth: '100%' }}
          animate={{
            x: isMobile 
              ? -currentIndex * (window.innerWidth * 0.85) + ((window.innerWidth - (window.innerWidth * 0.85)) / 2)
              : isTablet
                ? -currentIndex * (window.innerWidth * 0.65) + ((window.innerWidth - (window.innerWidth * 0.65)) / 2)
                : -currentIndex * 420,
            transition: { type: 'spring', stiffness: 300, damping: 30 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            
            if (swipe < -swipeConfidenceThreshold) {
              navigate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              navigate(-1);
            }
          }}
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className={`
                ${isMobile ? 'w-[85vw] h-[200px]' : isTablet ? 'w-[65vw] h-[280px]' : 'w-[400px] h-[300px]'} 
                ${isMobile ? 'mx-0' : isTablet ? 'mx-2' : 'mx-2 md:mx-4'} 
                relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer flex-shrink-0
              `}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-3 sm:p-4 md:p-6 flex flex-col justify-end">
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-white mb-0.5 sm:mb-1 md:mb-2 drop-shadow-lg">{image.title || 'AADINATH'}</h3>
                <p className="text-blue-100 text-xs sm:text-xs md:text-sm font-medium">{image.description || 'SHREE AADINATH YUVA CHARITABLE TRUST, SURAT'}</p>
              </div>
              <div className="absolute inset-0 border-2 border-white/20 hover:border-white/40 transition-all duration-300 rounded-2xl pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Arrows - Optimized for all devices */}
        <div
          className={`absolute left-1 sm:left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 ${isMobile ? 'opacity-80' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <motion.button 
            className="bg-black/70 text-white p-1.5 sm:p-2 md:p-4 rounded-full hover:bg-[#A48B4B] transition-all shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              navigate(-1);
              setAutoPlay(false);
              setTimeout(() => setAutoPlay(true), 5000);
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: isHovered || isMobile ? 1 : 0.7,
              x: isHovered && !isMobile ? 0 : -10
            }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronLeft className="text-base sm:text-lg md:text-2xl" />
          </motion.button>
        </div>

        <div
          className={`absolute right-1 sm:right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 ${isMobile ? 'opacity-80' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <motion.button 
            className="bg-black/70 text-white p-1.5 sm:p-2 md:p-4 rounded-full hover:bg-[#A48B4B] transition-all shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              navigate(1);
              setAutoPlay(false);
              setTimeout(() => setAutoPlay(true), 5000);
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: isHovered || isMobile ? 1 : 0.7,
              x: isHovered && !isMobile ? 0 : 10
            }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronRight className="text-base sm:text-lg md:text-2xl" />
          </motion.button>
        </div>

        {/* Remove Auto Play Toggle Button */}

      </div>

      {/* Progress Bar - Optimized for all screen sizes */}
      <div className="w-full max-w-4xl mx-auto mt-4 sm:mt-6 md:mt-8 h-1 sm:h-1.5 bg-gray-200 rounded-full overflow-hidden relative px-3 sm:px-4">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-[#A48B4B]"
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>

      {/* Dots Indicator - Enhanced for better visibility on all devices */}
      <div className="flex justify-center mt-3 sm:mt-4 md:mt-6 overflow-x-auto pb-1 sm:pb-2 px-3 sm:px-4">
        <div className="flex space-x-1 sm:space-x-1.5 md:space-x-2">
          {images.slice(0, images.length - 2).map((_, index) => (
            <motion.button
              key={index}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all ${currentIndex === index ? 'bg-[#727B4E]' : 'bg-gray-300'}`}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
                setAutoPlay(false);
                setTimeout(() => setAutoPlay(true), 5000);
              }}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>
      </div>

      {/* Selected Image Overlay - Enhanced for all screen sizes */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4"
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
                className="absolute left-1 sm:left-2 md:left-6 top-1 sm:top-2 md:top-6 bg-black/70 text-white p-1.5 sm:p-2 md:p-3 rounded-full z-20 hover:bg-[#A48B4B] transition-colors shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  closeOverlay();
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes className="text-sm sm:text-base md:text-xl" />
              </motion.button>

              <div
                className="absolute left-1 sm:left-2 md:left-6 top-1/2 -translate-y-1/2 z-30"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button 
                  className="bg-black/70 text-white p-1.5 sm:p-2 md:p-4 rounded-full hover:bg-[#A48B4B] transition-colors shadow-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigate(-1);
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaChevronLeft className="text-base sm:text-lg md:text-2xl" />
                </motion.button>
              </div>

              <motion.img
                key={currentIndex}
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[75vh] sm:max-h-[80vh] md:max-h-[90vh] object-contain rounded-lg shadow-2xl"
                initial={{ x: direction * 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -direction * 100, opacity: 0 }}
                transition={{ duration: 0.5 }}
              />

              <div
                className="absolute right-1 sm:right-2 md:right-6 top-1/2 -translate-y-1/2 z-30"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button 
                  className="bg-black/70 text-white p-1.5 sm:p-2 md:p-4 rounded-full hover:bg-[#A48B4B] transition-colors shadow-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigate(1);
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaChevronRight className="text-base sm:text-lg md:text-2xl" />
                </motion.button>
              </div>

              <motion.button 
                className="absolute right-1 sm:right-2 md:right-6 top-1 sm:top-2 md:top-6 bg-black/70 text-white p-1.5 sm:p-2 md:p-3 rounded-full z-20 hover:bg-[#A48B4B] transition-colors shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFullscreen();
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isFullscreen ? <FaCompress className="text-sm sm:text-base md:text-xl" /> : <FaExpand className="text-sm sm:text-base md:text-xl" />}
              </motion.button>

              <motion.div 
                className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-0 right-0 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="inline-block bg-black/70 px-3 sm:px-4 md:px-8 py-1.5 sm:py-2 md:py-4 rounded-xl backdrop-blur-sm">
                  <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1 md:mb-2">{selectedImage.title || 'AADINATH'}</h3>
                  <p className="text-blue-100 text-xs sm:text-xs md:text-base font-light">{selectedImage.description || 'SHREE AADINATH YUVA CHARITABLE TRUST, SURAT'}</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Swipe power calculation for drag gesture
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const swipeConfidenceThreshold = 10000;

export default Gallery;10