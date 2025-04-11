import React, { useState } from "react";
import {
  FaClinicMedical, FaPills, FaFlask, FaWheelchair, FaXRay,
  FaAmbulance, FaMobileAlt, FaProcedures, FaWhatsapp,
  FaMapMarkerAlt, FaPhone, FaArrowLeft, FaExternalLinkAlt
} from "react-icons/fa";
import { MdOutlineMedicalServices } from "react-icons/md";
import { medicalLocations } from "./Centers_Data";

const data = [
  { title: "Health Care", icon: <MdOutlineMedicalServices size={30} />, color: "bg-green-100 text-green-700" },
  { title: "Medicines", icon: <FaPills size={30} />, color: "bg-yellow-100 text-yellow-600" },
  { title: "Lab", icon: <FaFlask size={30} />, color: "bg-pink-100 text-pink-600" },
  { title: "Equipment", icon: <FaWheelchair size={30} />, color: "bg-blue-100 text-blue-600" },
  { title: "Sonography", icon: <FaClinicMedical size={30} />, color: "bg-purple-100 text-purple-600" },
  { title: "X-RAY", icon: <FaXRay size={30} />, color: "bg-orange-100 text-orange-600" },
  { title: "Mobile Clinic", icon: <FaMobileAlt size={30} />, color: "bg-emerald-100 text-emerald-600" },
  { title: "Cardiac Ambulance", icon: <FaAmbulance size={30} />, color: "bg-red-100 text-red-600" },
  { title: "Physiotherapy", icon: <FaProcedures size={30} />, color: "bg-indigo-100 text-indigo-600" },
];

const LocationPopup = ({ location, onClose, onBack }) => {
  const handleMapRedirect = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <FaArrowLeft /> Back
          </button>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-4">{location.name}</h3>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-green-600 mt-1" />
            <p className="text-gray-600">{location.address}</p>
          </div>

          {location.details && (
            <div className="bg-gray-50 p-3 rounded">
              {location.details.map((detail, i) => (
                <p key={i} className="text-gray-600 mb-2">{detail}</p>
              ))}
            </div>
          )}

          <div className="flex items-center gap-3">
            <FaPhone className="text-green-600" />
            <p className="text-gray-600">{location.phone}</p>
          </div>

          <div className="flex items-center gap-3">
            <FaWhatsapp className="text-green-600 text-xl" />
            <a
              href={`https://wa.me/${location.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              Chat on WhatsApp
            </a>
          </div>

          <button
            onClick={handleMapRedirect}
            className="flex items-center gap-2 mt-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
          >
            <FaExternalLinkAlt /> Go to Location on Map
          </button>
        </div>
      </div>
    </div>
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
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <FaArrowLeft /> Back
          </button>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-4">{location.name}</h3>

        {location.note && (
          <div className="bg-yellow-50 p-3 rounded mb-4">
            <p className="text-yellow-800">{location.note}</p>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            {column1.map((facility, i) => (
              <p key={i} className="text-gray-600 mb-2">• {facility}</p>
            ))}
          </div>
          <div>
            {column2.map((facility, i) => (
              <p key={i} className="text-gray-600 mb-2">• {facility}</p>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaPhone className="text-green-600" />
          <p className="text-gray-600">{location.phone}</p>
        </div>

        <div className="flex items-center gap-3 mt-3">
          <FaWhatsapp className="text-green-600 text-xl" />
          <a
            href={`https://wa.me/${location.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline"
          >
            Chat on WhatsApp
          </a>
        </div>

        {!location.isSpecial && (
          <button
            onClick={handleMapRedirect}
            className="flex items-center gap-2 mt-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
          >
            <FaExternalLinkAlt /> Go to Location on Map
          </button>
        )}
      </div>
    </div>
  );
};

const LocationsListPopup = ({ category, locations, onClose, onLocationSelect }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 relative max-h-[80vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">{category} Locations</h3>

        <div className="space-y-4">
          {locations.map((location, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4 cursor-pointer hover:bg-gray-50 p-3 rounded"
              onClick={() => onLocationSelect(location)}
            >
              <h4 className="font-semibold text-gray-800">{location.name}</h4>
              <p className="text-sm text-gray-600 mt-1">{location.address}</p>
              <button className="mt-2 text-sm text-green-600 hover:underline">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ExcellenceCard = ({ title, icon, color, onClick }) => (
  <div className="bg-[#EAE8DC] shadow-md rounded-2xl p-6 hover:shadow-xl transform hover:-translate-y-1 transition duration-300 border border-gray-100 hover:border-[#727B4E]-500">
    <div className="flex flex-col items-center justify-center text-center gap-3">
      <div className={`p-4 rounded-full shadow-sm ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800">Aadinath</h3>
      <p className="text-sm text-gray-600 uppercase tracking-wide">{title}</p>
      <button
        className="mt-3 px-4 py-1 text-sm font-medium bg-green-600 text-white rounded-full hover:bg-green-700 transition"
        onClick={onClick}
      >
        Read More
      </button>
    </div>
  </div>
);

const CenterOfExcellence = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCardClick = (title) => {
    // You'll need to add your medicalLocations data structure here
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
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-10 text-green-800 tracking-wide relative">
        <span className="relative z-10">Center of Excellence</span>
        <span className="absolute left-1/2 -bottom-2 w-16 h-1 bg-green-500 rounded-full transform -translate-x-1/2"></span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((item, index) => (
          <ExcellenceCard
            key={index}
            title={item.title}
            icon={item.icon}
            color={item.color}
            onClick={() => handleCardClick(item.title)}
          />
        ))}
      </div>

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