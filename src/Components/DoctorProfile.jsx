import React from "react";
import aiimage from "../assets/DoctorImages/aiimage.jpeg";
import hrimage from "../assets/DoctorImages/hrimage.jpeg";

export default function OtherAdminProfile() {
    // Color variables based on #757E54
    const primaryColor = "#757E54";
    const primaryLight = "#A3AA8F";
    const primaryLighter = "#D1D5C7";
    const primaryDark = "#575E3F";
    const primaryDarker = "#393F2A";

    return (
        <div className="space-y-10 py-10 px-4 max-w-7xl mx-auto">
            {/* Admin Corner Heading */}
            <div className="text-center mb-8">
                <h1 
                    className="text-4xl font-bold mb-3 relative inline-block"
                    style={{ color: primaryDarker }}
                >
                    Admin Corner
                    <span 
                        className="absolute bottom-0 left-0 w-full h-1"
                        style={{ 
                            background: `linear-gradient(90deg, ${primaryColor}, ${primaryLight})`,
                            transform: 'scaleX(0.8)',
                            transformOrigin: 'center'
                        }}
                    ></span>
                </h1>
                <p 
                    className="text-lg max-w-2xl mx-auto"
                    style={{ color: primaryDark }}
                >
                    Meet the administrative team dedicated to ensuring smooth operations and a supportive work environment at Aadinath Healthcare.
                </p>
            </div>
            
            {/* Administrative Head Profile */}
            <div 
                className="flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.01] transition-all duration-300"
                style={{ borderLeft: `5px solid ${primaryColor}` }}
            >
                {/* Image Section */}
                <div 
                    className="lg:w-1/3 flex flex-col items-center justify-center p-8"
                    style={{ background: `linear-gradient(135deg, ${primaryLighter}, ${primaryLight})` }}
                >
                    <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img
                            src={aiimage}
                            alt="Mr. Nihar Shah"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="text-center">
                        <h1 className="text-2xl font-bold" style={{ color: primaryDarker }}>Mr. Nihar Shah</h1>
                        <p className="text-lg font-medium mt-1" style={{ color: primaryDark }}>Administrative Head</p>
                        <div className="mt-3 flex justify-center space-x-3">
                             
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-2/3 p-8 md:p-10">
                    <div className="prose max-w-none">
                        <h2 className="text-2xl font-bold mb-6 pb-2" style={{ color: primaryColor, borderBottom: `2px solid ${primaryLighter}` }}>
                            Message from Administrative Head
                        </h2>
                        
                        <div className="space-y-5" style={{ color: primaryDarker }}>
                            <p className="text-lg leading-relaxed">
                                At Aadinath Healthcare, we are committed to providing outstanding healthcare and a compassionate experience for all patients and visitors. As the Administrative Head, I focus on ensuring smooth and efficient operations while maintaining the highest quality and ethical standards.
                            </p>

                            <p className="text-lg leading-relaxed">
                                Our goal is to create a safe and welcoming environment where healthcare professionals excel, and patients feel cared for at every step. We continually strive to improve our systems and align with the needs of our community.
                            </p>

                            <p className="text-lg leading-relaxed">
                                Every department and individual at Aadinath Healthcare contributes to our mission of delivering trusted care in a space where healing occurs with dignity and respect.
                            </p>
                        </div>

                        {/* Signature */}
                        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${primaryLighter}` }}>
                            <p className="mb-1" style={{ color: primaryDark }}>Warm regards,</p>
                            <div className="flex items-center">
                                <div>
                                    <p className="font-bold text-lg" style={{ color: primaryDarker }}>Mr. Nihar Shah</p>
                                    <p style={{ color: primaryDark }}>Administrative Head</p>
                                    <p className="font-medium" style={{ color: primaryColor }}>Aadinath Healthcare</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* HR Head Profile */}
            <div 
                className="flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.01] transition-all duration-300"
                style={{ borderRight: `5px solid ${primaryColor}` }}
            >
                {/* Content Section - comes first in mobile view */}
                <div className="lg:w-2/3 p-8 md:p-10 order-2 lg:order-1">
                    <div className="prose max-w-none">
                        <h2 className="text-2xl font-bold mb-6 pb-2" style={{ color: primaryColor, borderBottom: `2px solid ${primaryLighter}` }}>
                            Message from HR Head
                        </h2>
                        
                        <div className="space-y-5" style={{ color: primaryDarker }}>
                            <p className="text-lg leading-relaxed">
                                At Aadinath Healthcare, we believe that our people are our greatest strength. As the HR Head, I take immense pride in fostering a culture that values compassion, excellence, and continuous growth.
                            </p>

                            <p className="text-lg leading-relaxed">
                                Our mission goes beyond delivering exceptional medical care — we are committed to creating a supportive environment where every team member feels valued, empowered, and inspired to make a difference.
                            </p>

                            <p className="text-lg leading-relaxed">
                                Together, let us build a workplace rooted in trust, integrity, and purpose — a place where we not only grow professionally but also touch lives meaningfully every day.
                            </p>
                        </div>

                        {/* Signature */}
                        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${primaryLighter}` }}>
                            <p className="mb-1" style={{ color: primaryDark }}>Warm regards,</p>
                            <div className="flex items-center">
                                <div>
                                    <p className="font-bold text-lg" style={{ color: primaryDarker }}>Dr. Chintan Shinde</p>
                                    <p style={{ color: primaryDark }}>HR Head</p>
                                    <p className="font-medium" style={{ color: primaryColor }}>Aadinath Healthcare</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Section - comes second in mobile view */}
                <div 
                    className="lg:w-1/3 flex flex-col items-center justify-center p-8 order-1 lg:order-2"
                    style={{ background: `linear-gradient(135deg, ${primaryLighter}, ${primaryLight})` }}
                >
                    <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img
                            src={hrimage}
                            alt="Dr. Chintan Shinde"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="text-center">
                        <h1 className="text-2xl font-bold" style={{ color: primaryDarker }}>Dr. Chintan Shinde</h1>
                        <p className="text-lg font-medium mt-1" style={{ color: primaryDark }}>HR Head</p>
                        <div className="mt-3 flex justify-center space-x-3">
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}