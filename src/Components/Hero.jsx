import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import spaceGif from "../assets/space.gif";
import chakraImg from "../assets/Chakra2.png";
import murtiImg from "../assets/murti.png";

const ChakraWithParticles = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black">
      {/* Particles Background - now with proper configuration */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent", // Make sure background is transparent
            },
          },
          particles: {
            number: {
              value: 150, // Reduced from 355 for better performance
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff", // White particles
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.3,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
            },
          },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1, // Between background and content
        }}
      />

      {/* Space GIF Background - moved behind particles */}
      <div className="absolute inset-0 z-0">
        <img
          src={spaceGif}
          alt="Space Background"
          className="w-full h-full object-cover"
          style={{ opacity: 0.5, filter: "brightness(0.7)" }}
        />
      </div>

      {/* Chakra & Murti Animations */}
      <div className="relative z-20 w-[500px] h-[500px] md:w-[700px] md:h-[700px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={chakraImg}
            alt="Spiritual Chakra"
            className="w-[110%] h-[110%] object-contain spin-slow-animation"
            style={{
              filter: "drop-shadow(0 0 15px rgba(255, 215, 0, 0.8))",
            }}
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={murtiImg}
            alt="Divine Murti"
            className="w-4/5 h-4/5 object-contain pointer-events-none gentle-pulse-animation"
            style={{
              filter: "drop-shadow(0 0 20px rgba(0, 0, 0, 0.8))",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChakraWithParticles;