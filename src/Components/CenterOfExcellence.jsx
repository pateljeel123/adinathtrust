import React from "react";
import {
  FaClinicMedical, FaPills, FaFlask, FaWheelchair, FaXRay,
  FaAmbulance, FaMobileAlt, FaProcedures
} from "react-icons/fa";
import { MdOutlineMedicalServices } from "react-icons/md";

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

const ExcellenceCard = ({ title, icon, color }) => (
  <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transform hover:-translate-y-1 transition duration-300 border border-gray-100 hover:border-green-500">
    <div className="flex flex-col items-center justify-center text-center gap-3">
      <div className={`p-4 rounded-full shadow-sm ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800">Aadinath</h3>
      <p className="text-sm text-gray-600 uppercase tracking-wide">{title}</p>
      <button className="mt-3 px-4 py-1 text-sm font-medium bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full hover:from-green-700 hover:to-green-800 transition">
        Read More
      </button>
    </div>
  </div>
);

const CenterOfExcellence = () => {
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
          />
        ))}
      </div>
    </div>
  );
};

export default CenterOfExcellence;
