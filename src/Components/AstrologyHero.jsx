import React from "react";
import MyImage from "../assets/edited.png";

const AstrologyHero = () => {
  const mahaviraText =
    "Bhagwan Mahavira’s timeless principles of nonviolence, self-discipline, truth, and compassion continue to illuminate paths of peace and balance in the modern world. His teachings are a beacon for mindful living and inner liberation, reminding us to embrace simplicity and harmony in all aspects of life.";

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 px-6 lg:px-16 xl:px-20 py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden">
      {/* Decorative elements - hidden on mobile */}
      <div className="hidden lg:block absolute top-0 left-0 w-32 lg:w-40 h-32 lg:h-40 bg-orange-100/30 rounded-full blur-xl animate-float"></div>
      <div className="hidden lg:block absolute bottom-20 right-20 lg:right-32 xl:right-40 w-48 lg:w-56 h-48 lg:h-56 bg-amber-100/40 rounded-full blur-xl animate-float-delayed"></div>

      {/* Left Section */}
      <div className="w-full lg:w-[48%] xl:w-1/2 space-y-8 lg:space-y-10 text-center lg:text-left relative z-10">
        {/* Unified Card */}
        <div className="bg-white p-8 lg:p-10 xl:p-12 rounded-3xl shadow-2xl border-2 border-orange-100 transform transition hover:scale-[1.01] hover:shadow-xl relative overflow-hidden">
          {/* Decorative top bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-400 to-amber-500" />

          {/* Sanskrit Verse - Om symbol hidden on mobile */}
          <div className="mb-8 relative">
            <div className="hidden lg:block absolute -top-3 left-0 text-4xl lg:text-5xl xl:text-6xl text-orange-400">
              ॐ
            </div>
            <p className="text-2xl lg:text-3xl xl:text-4xl font-sanskrit text-orange-800 leading-tight text-center mb-6">
              "कामक्रोधादिकं दोषं, जहंति जिनसासनात्।
              <br />
              ते नमन्ति सदा लोके, महावीरप्रभावतः।।"
            </p>
            
            {/* Divider */}
            <div className="relative flex items-center justify-center my-8">
              <div className="w-full border-t border-orange-200" />
              <span className="absolute bg-white px-4 text-orange-500 text-xl">⋇</span>
            </div>
          </div>

          {/* English Translation */}
          <div className="space-y-4 text-center">
            <p className="text-base lg:text-lg xl:text-xl text-gray-800 font-medium italic leading-relaxed">
              "Those who follow the path of the Jinas renounce desires and anger.
              <br />
              Such is the influence of Bhagwan Mahavir,
              <br />
              That they are revered across the world."
            </p>
            
            {/* Decorative bottom elements */}
            <div className="mt-6 flex justify-center space-x-3">
              <span className="text-orange-400 text-2xl">⨀</span>
              <span className="text-amber-500 text-2xl">⨀</span>
              <span className="text-orange-400 text-2xl">⨀</span>
            </div>
          </div>

          {/* Floating particles - hidden on mobile */}
          <div className="hidden lg:block absolute top-4 right-4 w-8 h-8 bg-orange-100/30 rounded-full blur-sm" />
          <div className="hidden lg:block absolute bottom-4 left-4 w-8 h-8 bg-amber-100/30 rounded-full blur-sm" />
        </div>

        {/* Wisdom Section */}
        <div className="mt-6 bg-white/90 p-6 rounded-xl shadow-lg border-2 border-orange-100 backdrop-blur-sm">
          <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-orange-700 mb-4 text-center flex items-center justify-center gap-3">
            <span className="text-2xl lg:text-3xl">🌺</span>
            Mahavira's Eternal Wisdom
            <span className="text-2xl lg:text-3xl">🌺</span>
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-gray-800 font-medium leading-relaxed text-justify">
            {mahaviraText}
          </p>
        </div>
      </div>

      {/* Right Section: Image - hidden on mobile */}
      <div className="hidden lg:flex w-full lg:w-[48%] xl:w-1/2 mt-12 lg:mt-0 justify-center relative z-10">
        <div className="w-4/5 lg:w-full max-w-md lg:max-w-lg xl:max-w-xl relative group">
          <div className="absolute inset-0 bg-orange-200/30 rounded-tl-[160px] lg:rounded-tl-[180px] rounded-br-[160px] lg:rounded-br-[180px] transform group-hover:rotate-2 transition duration-500" />
          <div className="absolute inset-0 bg-orange-100/20 rounded-tl-[160px] lg:rounded-tl-[180px] rounded-br-[160px] lg:rounded-br-[180px] transform -rotate-2 group-hover:-rotate-3 transition duration-500" />
          <img
            src={MyImage}
            alt="Mahavira Meditation"
            className="w-full h-auto rounded-tl-[160px] lg:rounded-tl-[180px] rounded-br-[160px] lg:rounded-br-[180px] shadow-2xl object-cover relative transform group-hover:scale-[1.02] transition duration-500"
          />
        </div>
      </div>

      {/* Mobile-only message */}
      <div className="lg:hidden w-full text-center py-8">
        <p className="text-orange-700 font-medium">
          Please view this content on a larger screen for the best experience
        </p>
      </div>
    </div>
  );
};

export default AstrologyHero;
