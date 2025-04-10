import React, { useState, useEffect, useRef } from 'react';
import { FaHospital } from 'react-icons/fa';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [duplicatedImages, setDuplicatedImages] = useState([]);
  const controls = useAnimation();
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  // Double the images array for seamless looping
  useEffect(() => {
    setDuplicatedImages([...images, ...images]);
  }, [images]);

  // Handle auto-scroll animation
  useEffect(() => {
    if (!isDragging && !selectedImage) {
      controls.start({
        x: ['0%', '-50%'],
        transition: {
          duration: 40,
          ease: 'linear',
          repeat: Infinity,
        }
      });
    } else {
      controls.stop();
    }
  }, [isDragging, selectedImage, controls]);

  const handleImageClick = (image) => {
    setSelectedImage(selectedImage?.id === image.id ? null : image);
  };

  const closeOverlay = () => {
    setSelectedImage(null);
    // Reset slider position when closing overlay
    controls.start({ x: 0 });
  };

  // Fix for the loop issue (seamless sliding)
  const handleDragEnd = (event, info) => {
    const { offset } = info;
    // Check if the dragging has moved past the duplicated images and loop it back to start
    if (offset.x < -duplicatedImages.length * 350) {
      controls.start({ x: 0 });
    } else if (offset.x > 0) {
      controls.start({ x: `-${duplicatedImages.length * 350}px` });
    } else {
      controls.start({ x: 0 });
    }
    setIsDragging(false);
  };

  return (
    <div className="w-full py-8">
      {/* Header */}
      <div className="flex items-center justify-center mb-8 px-4">
        <FaHospital className="text-[#727B4E] text-4xl mr-3" />
        <h2 className="text-4xl font-extrabold text-[#727B4E] tracking-wide">
          Gallery
        </h2>
      </div>

      {/* Draggable Infinite Scroll Container */}
      <div className="w-full overflow-x-hidden h-[300px] relative">
        <motion.div
          ref={sliderRef}
          className="flex absolute left-0 top-0 h-full"
          drag="x"
          dragConstraints={{ left: -duplicatedImages.length * 350, right: 0 }}
          dragElastic={0.05}
          animate={controls}
          onDragStart={() => {
            setIsDragging(true);
          }}
          onDragEnd={handleDragEnd}
          whileTap={{ cursor: 'grabbing' }}
          style={{ cursor: 'grab' }}
        >
          {duplicatedImages.map((image, index) => (
            <motion.div
              key={`${image.id}-${index}`}
              className="lg:w-[380px] lg:h-[240px] w-[270px] h-[200px] mx-5 relative rounded-xl overflow-hidden shadow-2xl cursor-pointer transition-all ease-in-out transform hover:scale-105"
              onClick={() => handleImageClick(image)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={image.url}
                alt={image.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                }}
                className="w-full h-full object-cover transition-transform ease-in-out duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-6 flex flex-col justify-end">
                <h3 className="font-bold text-lg text-white mb-2">{image.title || 'AADINATH'}</h3>
                <p className="text-blue-100 text-sm">{image.description || 'SHREE AADINATH YUVA CHARITABLE TRUST, SURAT'}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Selected Image Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeOverlay}
          >
            <motion.div
              className="relative max-w-[80vh] max-h-[80vh] w-full border-4 border-[#A48B4B] rounded-lg shadow-lg overflow-hidden"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-[80vh] max-h-[70vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{selectedImage.title || 'AADINATH'}</h3>
                <p className="text-blue-100 text-sm">{selectedImage.description || 'SHREE AADINATH YUVA CHARITABLE TRUST, SURAT'}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
