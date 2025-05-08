import React, { useState } from "react";
import {
  FaClinicMedical, FaPills, FaFlask, FaWheelchair, FaXRay,
  FaAmbulance, FaMobileAlt, FaProcedures, FaWhatsapp,
  FaMapMarkerAlt, FaPhone, FaArrowLeft, FaExternalLinkAlt
} from "react-icons/fa";
import { MdOutlineMedicalServices } from "react-icons/md";
import { motion } from "framer-motion";
import { medicalLocations } from "./Centers_Data";
import { useNavigate,Link } from "react-router-dom";

const data = [
  { title: "Health Care", icon: <MdOutlineMedicalServices size={30} />, color: "text-yellow-600", bgColor: "bg-[#E4EFE7]" },
  { title: "Medicines", icon: <FaPills size={30} />, color: "text-yellow-600", bgColor: "bg-[#E4EFE7]" },
  { title: "Lab", icon: <FaFlask size={30} />, color: "text-yellow-600", bgColor: "bg-[#E4EFE7]" },
  { title: "Equipment", icon: <FaWheelchair size={30} />, color: "text-yellow-600", bgColor: "bg-[#E4EFE7]" },
  { title: "Sonography", icon: <FaClinicMedical size={30} />, color: "text-yellow-600", bgColor: "bg-[#E4EFE7]" },
  { title: "X-RAY", icon: <FaXRay size={30} />, color: "text-yellow-600", bgColor: "bg-[#E4EFE7]" },
  { title: "Mobile Clinic", icon: <FaMobileAlt size={30} />, color: "text-yellow-600", bgColor: "bg-[#E4EFE7]" },
  { title: "Cardiac Ambulance", icon: <FaAmbulance size={30} />, color: "text-yellow-600", bgColor: "bg-[#E4EFE7]" },
  { title: "Physiotherapy", icon: <FaProcedures size={30} />, color: "text-yellow-600", bgColor: "bg-[#E4EFE7]" },
];

const LocationPopup = ({ location, onClose, onBack }) => {
  const handleMapRedirect = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative"
      >
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <FaArrowLeft /> Back
          </button>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors text-xl"
          >
            ✕
          </button>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">{location.name}</h3>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-green-600 mt-1 flex-shrink-0" />
            <p className="text-gray-600">{location.address}</p>
          </div>

          {location.details && (
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              {location.details.map((detail, i) => (
                <p key={i} className="text-gray-600 mb-2 last:mb-0">{detail}</p>
              ))}
            </div>
          )}

          <div className="flex items-center gap-3">
            <FaPhone className="text-green-600 flex-shrink-0" />
            <p className="text-gray-600">{location.phone}</p>
          </div>

          <div className="flex items-center gap-3">
            <FaWhatsapp className="text-green-600 text-xl flex-shrink-0" />
            <a
              href={`https://wa.me/${location.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleMapRedirect}
            className="flex items-center gap-2 mt-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-all w-full justify-center"
          >
            <FaExternalLinkAlt /> Go to Location on Map
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SpecialServicePopup = ({ location, onClose, onBack }) => {
  const handleMapRedirect = () => {
    if (location.address && !location.isSpecial) {
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`;
      window.open(mapsUrl, '_blank');
    }
  };

  const facilities = location.address.split(', ');
  const midPoint = Math.ceil(facilities.length / 2);
  const column1 = facilities.slice(0, midPoint);
  const column2 = facilities.slice(midPoint);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()} id="service">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative"
      >
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <FaArrowLeft /> Back
          </button>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors text-xl"
          >
            ✕
          </button>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">{location.name}</h3>

        {location.note && (
          <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100 mb-4">
            <p className="text-yellow-800">{location.note}</p>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            {column1.map((facility, i) => (
              <p key={i} className="text-gray-600 mb-2 flex items-start">
                <span className="inline-block w-1 h-1 rounded-full bg-gray-400 mt-2 mr-2"></span>
                {facility}
              </p>
            ))}
          </div>
          <div>
            {column2.map((facility, i) => (
              <p key={i} className="text-gray-600 mb-2 flex items-start">
                <span className="inline-block w-1 h-1 rounded-full bg-gray-400 mt-2 mr-2"></span>
                {facility}
              </p>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaPhone className="text-green-600 flex-shrink-0" />
          <p className="text-gray-600">{location.phone}</p>
        </div>

        <div className="flex items-center gap-3 mt-3">
          <FaWhatsapp className="text-green-600 text-xl flex-shrink-0" />
          <a
            href={`https://wa.me/${location.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>

        {!location.isSpecial && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleMapRedirect}
            className="flex items-center gap-2 mt-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-all w-full justify-center"
          >
            <FaExternalLinkAlt /> Go to Location on Map
          </motion.button>
        )}
      </motion.div>
    </motion.div>
  );
};

const LocationsListPopup = ({ category, locations, onClose, onLocationSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6 relative max-h-[80vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors text-xl"
        >
          ✕
        </button>

        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{category} Locations</h3>

        <div className="space-y-3">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              className="border-b border-gray-200 pb-4 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-all"
              onClick={() => onLocationSelect(location)}
            >
              <h4 className="font-semibold text-gray-800 text-lg">{location.name}</h4>
              <p className="text-sm text-gray-600 mt-1">{location.address}</p>
              <button className="mt-2 text-sm text-green-600 hover:underline transition-colors flex items-center gap-1">
                View Details <FaExternalLinkAlt size={12} />
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const ExcellenceCard = ({ title, icon, color, bgColor, onClick, isHealthCare = false }) => (
  <motion.div
    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
    whileTap={{ scale: 0.98 }}
    className="bg-[#F6F5EC] rounded-2xl p-6 transition-all duration-300 border border-gray-100 hover:border-green-200 overflow-hidden relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10 flex flex-col items-center justify-center text-center gap-4 h-full">
      <div className={`p-4 rounded-full ${bgColor} transition-all duration-300 group-hover:scale-110`}>
        <div className={color}>{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-3 px-4 py-2 text-sm font-medium bg-green-800 text-white rounded-full hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
        onClick={onClick}
      >
        {isHealthCare ? "Find Doctors" : "Read More"}
      </motion.button>
    </div>
  </motion.div>
);

const CenterOfExcellence = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCardClick = (title) => {
    if (title === "Health Care") {
      // Redirect to doctor page for Health Care only
      window.location.href = '/doctors'; // or your doctor page route
      return;
    }
    
    if (medicalLocations && medicalLocations[title]) {
      setSelectedCategory(title);
    }
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const handleBackToList = () => {
    setSelectedLocation(null);
  };

  const closePopup = () => {
    setSelectedLocation(null);
    setSelectedCategory(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-[#F6F5EC]" id="service">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-green-800 tracking-wide relative inline-block"
        >
          Center of Excellence
          <motion.span 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute left-0 -bottom-2 w-full h-1 bg-green-500 rounded-full origin-left"
          ></motion.span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          Discover our specialized healthcare services designed to provide exceptional care and advanced treatments.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {data.map((item, index) => (
          <ExcellenceCard
            key={index}
            title={item.title}
            icon={item.icon}
            color={item.color}
            bgColor={item.bgColor}
            onClick={() => handleCardClick(item.title)}
            isHealthCare={item.title === "Health Care"}
          />
        ))}
      </motion.div>

      {selectedLocation && selectedLocation.isSpecial ? (
        <SpecialServicePopup
          location={selectedLocation}
          onClose={closePopup}
          onBack={handleBackToList}
        />
      ) : selectedLocation ? (
        <LocationPopup
          location={selectedLocation}
          onClose={closePopup}
          onBack={handleBackToList}
        />
      ) : null}

      {selectedCategory && !selectedLocation && medicalLocations && medicalLocations[selectedCategory] && (
        <LocationsListPopup
          category={selectedCategory}
          locations={medicalLocations[selectedCategory]}
          onClose={closePopup}
          onLocationSelect={handleLocationSelect}
        />
      )}
    </div>
  );
};

export default CenterOfExcellence;