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
        background: "radial-gradient(ellipse at center, #0a0e1a 0%, #0f172a 70%, #1e293b 100%)",
      }}
      id="hero"
    >
      {/* Enhanced Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          particles: {
            number: { 
              value: 200, 
              density: { 
                enable: true, 
                value_area: 800 
              } 
            },
            color: { 
              value: ["#ffffff", "#FFD700", "#00FFFF", "#FF8C00", "#9370DB"] 
            },
            shape: { 
              type: ["circle", "triangle", "star"],
              stroke: {
                width: 0,
                color: "#000000"
              },
              polygon: {
                nb_sides: 5
              }
            },
            opacity: {
              value: 0.8,
              random: true,
              anim: { 
                enable: true, 
                speed: 1, 
                opacity_min: 0.1, 
                sync: false 
              },
            },
            size: {
              value: 3,
              random: true,
              anim: { 
                enable: true, 
                speed: 3, 
                size_min: 0.3, 
                sync: false 
              },
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
              }
            },
            line_linked: {
              enable: true,
              distance: 120,
              color: "#FFD700",
              opacity: 0.2,
              width: 0.8
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "bubble"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 200,
                size: 6,
                duration: 2,
                opacity: 0.8,
                speed: 3
              },
              push: {
                particles_nb: 4
              }
            }
          }
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

      {/* Enhanced Space Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src={spaceGif}
            alt="Space Background"
            className="w-full h-full object-cover"
            style={{ 
              opacity: 0.3,
              filter: "brightness(0.5) contrast(1.8) hue-rotate(15deg)",
              transform: "scale(1.3)",
              animation: "pan 80s linear infinite"
            }}
          />
        </div>
      </div>

      {/* Glowing Orbital Rings */}
      <div className="absolute z-10 w-[700px] h-[700px] rounded-full animate-spin-slow">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-300/40 via-transparent to-yellow-100/40 blur-[100px] opacity-40"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/30 via-transparent to-purple-400/30 blur-[80px] opacity-30"></div>
      </div>

      {/* Pulsing Rings */}
      <div className="absolute z-10 w-[600px] h-[600px] border-[40px] border-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute z-10 w-[800px] h-[800px] border-[20px] border-blue-400/15 rounded-full blur-lg animate-pulse" style={{animationDelay: "1.5s"}}></div>
      <div className="absolute z-10 w-[400px] h-[400px] border-[30px] border-purple-400/10 rounded-full blur-md animate-pulse" style={{animationDelay: "0.5s"}}></div>

      {/* Central Glow */}
      <div className="absolute z-15 w-[500px] h-[500px] rounded-full bg-gradient-radial from-yellow-300/30 via-transparent to-transparent blur-[150px] opacity-40 animate-pulse-slow"></div>

      {/* Main Chakra and Murti */}
      <div className="relative z-20 w-[500px] h-[500px] md:w-[600px] md:h-[600px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={chakraImg}
            alt="Chakra"
            className="w-full h-full object-contain spin-anticlockwise-animation"
            style={{ 
              filter: "drop-shadow(0 0 40px rgba(255, 215, 0, 0.7)) brightness(1.2)",
              opacity: 0.95,
              transform: "scale(1.1)"
            }}
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={murtiImg}
            alt="Murti"
            className="w-3/4 h-3/4 object-contain gentle-pulse-animation"
            style={{
              filter: "drop-shadow(0 0 40px rgba(255, 255, 255, 0.7)) brightness(1.1)",
            }}
          />
        </div>
      </div>

      {/* Floating Mantra Text */}
      <div className="absolute bottom-10 left-0 right-0 z-30 text-center px-4">
        <div className="inline-block bg-black/40 backdrop-blur-md rounded-xl px-8 py-5 border border-yellow-500/40 shadow-lg hover:shadow-yellow-500/20 transition-all duration-500 hover:scale-[1.02]">
          <p className="text-yellow-300 text-xl md:text-2xl font-sanskrit leading-relaxed tracking-wider">
            "वर्धमानं महावीरं, अरिहंतं जिनेश्वरम्।<br />
            शांतिं करुणामयं देवं, वन्दे जिनवरं सदा।।"
          </p>
          <div className="mt-3 text-yellow-200/90 text-sm md:text-base font-light tracking-wider">
            - Namokar Mantra
          </div>
        </div>
      </div>

      {/* Floating Sacred Symbols */}
      <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const symbols = ['ॐ', '✿', '卍', '❀', '✽', '☸',];
          const symbol = symbols[i % symbols.length];
          return (
            <div 
              key={i}
              className="absolute text-yellow-200/40 text-4xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${15 + Math.random() * 20}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                fontSize: `${1 + Math.random() * 2}rem`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            >
              {symbol}
            </div>
          );
        })}
      </div>

      {/* Subtle Light Rays */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute top-1/2 left-1/2 w-[1px] h-[100vh] bg-gradient-to-b from-yellow-400/10 via-transparent to-transparent"
            style={{
              transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
              animation: `pulse-slow 8s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes spin-anticlockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .spin-anticlockwise-animation {
          animation: spin-anticlockwise 60s linear infinite;
        }
        @keyframes gentle-pulse {
          0% { 
            transform: scale(1); 
            filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.7));
          }
          50% { 
            transform: scale(1.03); 
            filter: drop-shadow(0 0 50px rgba(255, 255, 255, 0.9));
          }
          100% { 
            transform: scale(1); 
            filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.7));
          }
        }
        .gentle-pulse-animation {
          animation: gentle-pulse 10s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0% { opacity: 0.1; transform: scale(0.98); }
          50% { opacity: 0.3; transform: scale(1.02); }
          100% { opacity: 0.1; transform: scale(0.98); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.4; }
          90% { opacity: 0.4; }
          100% { transform: translateY(-120vh) rotate(360deg); opacity: 0; }
        }
        @keyframes pan {
          0% { transform: scale(1.3) translateX(0) translateY(0); }
          50% { transform: scale(1.3) translateX(-5%) translateY(-5%); }
          100% { transform: scale(1.3) translateX(0) translateY(0); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 120s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ChakraWithParticles;