import React from "react";
import { FaCalendarAlt, FaClock, FaStethoscope } from "react-icons/fa";
import { doctorsBySpecialty } from "./Centers_Data";
import MdImage from '../assets/DoctorImages/team-2.jpg';
import FdImage from '../assets/DoctorImages/team-1.jpg';

const MdefaultDoctorImage = MdImage;
const FdefaultDoctorImage = FdImage;

const Doctors = () => {
  const specialties = Object.keys(doctorsBySpecialty);

  return (
    <div className="max-w-8xl mx-auto px-4 py-12 bg-cream pt-25">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-[#D5A017] mb-4 tracking-wide">Doctors Team</h2>
        <div className="w-20 h-1 bg-[#D5A017] mx-auto rounded-full"></div>
      </div>

      {/* Specialties Sections */}
      <div className="space-y-20">
        {specialties.map((specialty) => (
          <section key={specialty} className="mb-16">
            {/* Specialty Header */}
            <div className="flex items-center mb-10 pl-4 border-l-4 border-[#D5A017]">
              <FaStethoscope className="text-[#D5A017] text-2xl mr-4" />
              <h3 className="text-3xl font-bold text-[#757E54]">{specialty}</h3>
            </div>

            {/* Doctors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {doctorsBySpecialty[specialty].map((doctor, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1"
                >
                  {/* Doctor Image - Cropped to show top half */}
                  <div className="relative aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/4] lg:aspect-[4/4] overflow-hidden">
                    <img
                      src={doctor.image || (doctor.gender == "male" ? MdefaultDoctorImage : FdefaultDoctorImage)}
                      alt={doctor.name}
                      className="w-full h-full object-cover object-top"
                      style={{ objectPosition: "top center" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-10"></div>
                  </div>

                  {/* Doctor Details */}
                  <div className="p-6">
                    <div className="mb-5">
                      <h3 className="text-xl font-bold text-[#757E54] mb-1">{doctor.name}</h3>
                      <p className="text-sm font-semibold text-[#D5A017]">
                        {doctor.qualification}
                      </p>
                    </div>

                    {/* Availability */}
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="text-[#D5A017] mr-3 pt-1">
                          <FaCalendarAlt />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-[#757E54] uppercase tracking-wider">Available Days</p>
                          <p className="text-[#757E54] font-medium">{doctor.days}</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="text-[#D5A017] mr-3 pt-1">
                          <FaClock />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-[#757E54] uppercase tracking-wider">Consultation Hours</p>
                          <p className="text-[#757E54] font-medium">{doctor.time || "By Appointment"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
