import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import spaceGif from "../assets/spacegif.gif"; // Renamed file to remove spaces
import chakraImg from "../assets/Chakra.png";
import murtiImg from "../assets/murti.png";

const ChakraWithParticles = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            particles: {
              number: {
                value: 150,
                density: {
                  enable: true,
                  area: 800,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.5,
                random: true,
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 3,
                random: true,
                animation: {
                  enable: true,
                  speed: 2,
                  minimumValue: 0.1,
                  sync: false,
                },
              },
              links: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.2,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                outMode: "out",
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "bubble",
                },
                onClick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 100,
                  size: 4,
                  duration: 2,
                  opacity: 0.8,
                  speed: 3,
                },
                push: {
                  quantity: 4,
                },
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      {/* Space GIF Background */}
      <div className="absolute inset-0 z-10">
        <img
          src={spaceGif}
          alt="Space Background"
          className="w-full h-full object-cover"
          style={{ opacity: 0.3, filter: "brightness(0.7)" }}
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
              willChange: "transform",
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