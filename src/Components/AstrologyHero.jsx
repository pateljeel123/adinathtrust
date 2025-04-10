import React from "react";

const AstrologyHero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between  min-h-screen px-6 md:px-20 py-16" style={{backgroundColor:'#F6F5EC'}}>
      {/* Left Section */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <p className="text-sm uppercase tracking-wide text-gray-600">
          Unravel the Secrets of the Stars
        </p>
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-snug">
          Discover your destiny with <br />
          personalized astrological insights.
        </h1>
        <p className="text-sm text-gray-700 max-w-md">
          Explore celestial insights to guide your life’s journey.
        </p>
        <button className="mt-4 px-6 py-2 border border-orange-400 text-orange-500 rounded hover:bg-orange-100 transition-all duration-300">
          Contact us
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 relative">
        <div className="rounded-tl-[150px] overflow-hidden shadow-md">
          <img
            src="https://huggingface.co/datasets/huggingfacejs/tasks/resolve/main/zero-shot-image-classification/image-classification-input.jpeg"
            alt="Meditating Woman"
            className="w-full object-cover h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AstrologyHero;
