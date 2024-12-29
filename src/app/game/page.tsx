"use client"
import React, { useEffect, useState } from 'react';

function Gamepage() {
  const [timer, setTimer] = useState(6); // Timer starts at 6 seconds
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!showOverlay) {
      // Start countdown timer
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(interval);
            setShowOverlay(true); // Show overlay when timer reaches 0
            return 6; // Reset timer
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      // Hide overlay after 5 seconds
      const overlayTimeout = setTimeout(() => {
        setShowOverlay(false);
      }, 5000);

      return () => clearTimeout(overlayTimeout); // Cleanup timeout
    }

    return () => clearInterval(interval); // Cleanup interval
  }, [showOverlay]);

  return (
    <div className="w-full h-screen flex relative bg-gray-200">
      {/* Timer in top right corner */}
      <div className="absolute top-4 right-4 bg-blue-500 text-white font-bold py-2 px-4 rounded">
        Timer: {timer}s
      </div>

      {/* Overlay */}
      {showOverlay && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="text-white text-2xl font-bold">Breath In</div>
        </div>
      )}

      {/* Main game content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="text-xl font-bold text-black">Game Level In Progress...</div>
      </div>
    </div>
  );
}

export default Gamepage;
