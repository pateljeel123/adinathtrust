import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import spaceGif from "../assets/Lx0q (1).gif";
import chakraImg from "../assets/Chakra2.png";
import murtiImg from "../assets/murti.png";

const ChakraWithParticles = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{
        background: "radial-gradient(circle at center, #0f172a 0%, #1e293b 80%)",
      }}
    >
      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: ["#ffffff", "#FFD700", "#00FFFF"] },
            shape: { type: "circle" },
            opacity: {
              value: 0.6,
              random: true,
              anim: { enable: true, speed: 0.4, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 2,
              random: true,
              anim: { enable: true, speed: 1.5, size_min: 0.3, sync: false },
            },
            move: {
              enable: true,
              speed: 0.6,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
            },
          },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />

      {/* Space GIF overlay with adjusted opacity */}
      <div className="absolute inset-0 z-0">
        <img
          src={spaceGif}
          alt="Space Background"
          className="w-full h-full object-cover"
          style={{ 
            opacity: 0.2,
            filter: "brightness(0.5) contrast(1.2)"
          }}
        />
      </div>

      {/* Radial spinning beams */}
      <div className="absolute z-10 w-[700px] h-[700px] rounded-full animate-spin-slow">
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-yellow-300 via-transparent to-yellow-100 blur-3xl opacity-20"></div>
      </div>

      {/* Glow ring */}
      <div className="absolute z-10 w-[600px] h-[600px] border-[50px] border-yellow-400 rounded-full opacity-10 blur-2xl"></div>

      {/* Floating golden aura */}
      <div className="absolute z-10 w-[500px] h-[500px] rounded-full bg-yellow-300 blur-[100px] opacity-20 animate-pulse"></div>

      {/* Chakra & Murti content */}
      <div className="relative z-20 w-[500px] h-[500px] md:w-[600px] md:h-[700px] md:mt-15">
        {/* Chakra */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={chakraImg}
            alt="Chakra"
            className="w-[90%] h-[90%] object-contain spin-slow-animation"
            style={{ filter: "drop-shadow(0 0 25px rgba(255, 215, 0, 0.9))" }}
          />
        </div>

        {/* Murti */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={murtiImg}
            alt="Murti"
            className="w-4/5 h-4/5 object-contain gentle-pulse-animation"
            style={{
              filter: "drop-shadow(0 0 25px rgba(255, 255, 255, 0.8))",
            }}
          />
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin-slow-animation {
          animation: spin-slow 40s linear infinite;
        }
        @keyframes gentle-pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }
        .gentle-pulse-animation {
          animation: gentle-pulse 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ChakraWithParticles;
