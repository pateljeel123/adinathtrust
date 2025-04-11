import React, { useState } from "react";
import { FaCalendarAlt, FaClock, FaPhone, FaWhatsapp } from "react-icons/fa";
import { doctorsBySpecialty } from "./Centers_Data";

const Doctors = () => {
  const [activeCategory, setActiveCategory] = useState("Physician");
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const specialties = Object.keys(doctorsBySpecialty);

  return (
    <div className="max-w-8xl mx-auto px-4 py-12" style={{ backgroundColor: "#F6F5ED" }}>
      <h2 className="text-4xl font-bold text-center mb-10 tracking-wide relative" style={{ color: "#C4A65F" }}>
        <span className="relative z-10">Our Honorable Doctors</span>
        <span
          className="absolute left-1/2 -bottom-2 w-16 h-1 rounded-full transform -translate-x-1/2"
          style={{ backgroundColor: "#C4A65F" }}
        ></span>
      </h2>

      {/* Specialty Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {specialties.map((specialty) => (
          <button
            key={specialty}
            onClick={() => setActiveCategory(specialty)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeCategory === specialty
                ? "text-white"
                : "bg-gray-100 text-black hover:bg-gray-200"
            }`}
            style={{
              backgroundColor: activeCategory === specialty ? "#C4A65F" : undefined,
            }}
          >
            {specialty}
          </button>
        ))}
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctorsBySpecialty[activeCategory]?.map((doctor, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition"
            onClick={() => setSelectedDoctor(doctor)}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-black mb-1">{doctor.name}</h3>
              <p className="font-medium mb-4" style={{ color: "#C4A65F" }}>{doctor.qualification}</p>

              <div className="flex items-start gap-3 mb-3">
                <FaCalendarAlt style={{ color: "#C4A65F", marginTop: "0.25rem" }} />
                <div>
                  <p className="text-sm font-medium text-gray-600">Available Days</p>
                  <p className="text-black">{doctor.days}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaClock style={{ color: "#C4A65F", marginTop: "0.25rem" }} />
                <div>
                  <p className="text-sm font-medium text-gray-600">Consultation Hours</p>
                  <p className="text-black">{doctor.time || "By Appointment"}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Doctor Detail Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setSelectedDoctor(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold text-black mb-2">{selectedDoctor.name}</h3>
            <p className="font-medium mb-6" style={{ color: "#C4A65F" }}>{selectedDoctor.qualification}</p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaCalendarAlt style={{ color: "#C4A65F", marginTop: "0.25rem" }} />
                <div>
                  <p className="text-sm font-medium text-gray-600">Available Days</p>
                  <p className="text-black">{selectedDoctor.days}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaClock style={{ color: "#C4A65F", marginTop: "0.25rem" }} />
                <div>
                  <p className="text-sm font-medium text-gray-600">Consultation Hours</p>
                  <p className="text-black">{selectedDoctor.time || "By Appointment"}</p>
                </div>
              </div>

              {/* <div className="pt-4 mt-4 border-t border-gray-200">
                <button
                  className="w-full py-2 text-white rounded-lg transition flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#C4A65F" }}
                >
                  <FaPhone /> Book Appointment
                </button>
                <button
                  className="w-full py-2 mt-3 text-black rounded-lg transition flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#F6F5ED", border: "1px solid #C4A65F" }}
                >
                  <FaWhatsapp /> Chat on WhatsApp
                </button>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Doctors;
