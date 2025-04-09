import React, { useEffect, useState } from 'react';

const SpaceAnimation = () => {
  const [stars, setStars] = useState([]);
  const [comets, setComets] = useState([]);

  // Initialize stars
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 200; i++) {
        newStars.push({
          id: i,
          size: Math.random() * 3,
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: Math.random(),
          animationDuration: `${5 + Math.random() * 20}s`,
          delay: `${Math.random() * 5}s`
        });
      }
      setStars(newStars);
    };

    generateStars();

    // Generate comets periodically
    const cometInterval = setInterval(() => {
      setComets(prev => [
        ...prev.slice(-2), // Keep only last 2 comets
        {
          id: Date.now(),
          x: Math.random() * 100,
          angle: Math.random() * 360,
          duration: `${2 + Math.random() * 3}s`,
          delay: `${Math.random() * 2}s`
        }
      ]);
    }, 3000);

    return () => clearInterval(cometInterval);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Stars */}
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animation: `twinkle ${star.animationDuration} infinite ${star.delay}`,
          }}
        />
      ))}

      {/* Comets */}
      {comets.map(comet => (
        <div
          key={comet.id}
          className="absolute w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent"
          style={{
            left: `${comet.x}%`,
            top: '10%',
            transform: `rotate(${comet.angle}deg)`,
            animation: `shoot ${comet.duration} linear ${comet.delay}`,
            opacity: 0.7,
          }}
        />
      ))}

      {/* Planet */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-900 via-purple-900 to-black shadow-lg">
            {/* Planet rings */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-4 bg-gradient-to-r from-transparent via-yellow-200 to-transparent rounded-full opacity-70 rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-2 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full opacity-50 -rotate-30"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-opacity-10 border-white animate-spin-slow"></div>
        </div>
      </div>

      {/* Add some floating asteroids */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-gray-700 animate-float-x"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-gray-600 animate-float-y"></div>
      <div className="absolute bottom-1/4 right-1/3 w-10 h-10 rounded-full bg-gray-500 animate-float-x-slow"></div>

      {/* Add Tailwind animation keyframes in style tag */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes shoot {
          0% { transform: translateX(0) translateY(0) rotate(var(--angle)); opacity: 0; }
          10% { opacity: 0.7; }
          100% { transform: translateX(1000px) translateY(500px) rotate(var(--angle)); opacity: 0; }
        }
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes float-x {
          0%, 100% { transform: translateX(-20px); }
          50% { transform: translateX(20px); }
        }
        @keyframes float-y {
          0%, 100% { transform: translateY(-20px); }
          50% { transform: translateY(20px); }
        }
        @keyframes float-x-slow {
          0%, 100% { transform: translateX(-10px); }
          50% { transform: translateX(10px); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        .animate-float-x {
          animation: float-x 8s ease-in-out infinite;
        }
        .animate-float-y {
          animation: float-y 6s ease-in-out infinite;
        }
        .animate-float-x-slow {
          animation: float-x-slow 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SpaceAnimation;