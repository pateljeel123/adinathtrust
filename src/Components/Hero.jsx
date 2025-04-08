import React from 'react';

const ChakraWithImage = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Space GIF Background - covers entire screen */}
      <div className="absolute inset-0 z-0">
        <img
          src="/space GIF - Find & Share on GIPHY.gif"
          alt="Space Background"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.7)' }}
        />
      </div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
        @keyframes gentle-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .animate-gentle-pulse {
          animation: gentle-pulse 8s ease-in-out infinite;
        }
      `}</style>

      {/* Content Container with semi-transparent overlay */}
      <div className="relative z-10 w-[500px] h-[500px] md:w-[700px] md:h-[700px]">
        {/* Enhanced Spinning Chakra */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/Chakra.png"
            alt="Spiritual Chakra"
            className="w-[110%] h-[110%] object-contain animate-spin-slow"
            style={{ 
              filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.8))',
              willChange: 'transform'
            }}
          />
        </div>
        
        {/* God Image */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <img 
            src="/murti.png" 
            alt="Divine Murti" 
            className="w-4/5 h-4/5 object-contain pointer-events-none animate-gentle-pulse"
            style={{ 
              filter: 'drop-shadow(0 0 20px rgba(0, 0, 0, 0.8))'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChakraWithImage;