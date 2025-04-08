import React, { useState, useEffect } from 'react';
import { FaHospital } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [duplicatedImages, setDuplicatedImages] = useState([]);

  // Double the images array for seamless looping
  useEffect(() => {
    setDuplicatedImages([...images, ...images]);
  }, [images]);

  const handleImageClick = (image) => {
    setSelectedImage(selectedImage?.id === image.id ? null : image);
  };

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 py-12"> {/* Removed extra padding/margin classes */}
      {/* Header */}
      <div className="flex items-center justify-center mb-8 px-8"> {/* Reduced margin-bottom */}
        <FaHospital className="text-blue-600 text-4xl mr-4" />
        <h2 className="text-4xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Gallery
        </h2>
      </div>

      {/* Infinite Scroll Container */}
      <div className="w-full overflow-x-hidden h-[320px] relative"> {/* Reduced height */}
        <motion.div
          className="flex absolute left-0 top-0 h-full"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 40,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {duplicatedImages.map((image, index) => (
            <motion.div
              key={`${image.id}-${index}`}
              className="w-[400px] h-[250px] mx-4 relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => handleImageClick(image)}
              whileHover={{ scale: 1.05 }}
              layout
            >
              <img
                src={image.url}
                alt={image.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 flex flex-col justify-end">
                <h3 className="font-bold text-xl text-white mb-2">AADINATH</h3>
                <p className="text-blue-100">SHREE AADINATH YUVA CHARITABLE TRUST, SURAT</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Selected Image Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-6xl max-h-[90vh] w-full border border-white border-2"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full max-h-[90vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">AADINATH</h3>
                <p className="text-blue-100">SHREE AADINATH YUVA CHARITABLE TRUST, SURAT</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;