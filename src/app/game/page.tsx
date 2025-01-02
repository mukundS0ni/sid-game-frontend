"use client"
import React, { useEffect, useState } from 'react';

const games = [
  {
    id: 1,
    title: "Game 1",
    url: "https://www.crazygames.com/embed/nuts-puzzle-sort-by-color",
  },
  {
    id: 2,
    title: "Game 2",
    url: "https://www.crazygames.com/embed/words-of-wonders", // Replace with the actual URL
  },
  {
    id: 3,
    title: "Game 3",
    url: "https://www.crazygames.com/embed/mahjongg-solitaire", // Replace with the actual URL
  },
];

function Gamepage() {
  const [timer, setTimer] = useState(6); // Timer starts at 6 seconds
  const [showOverlay, setShowOverlay] = useState(false);
  const [showOverlay2, setShowOverlay2] = useState(false);

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
        setShowOverlay2(!showOverlay2);
      }, 5000);

      return () => clearTimeout(overlayTimeout); // Cleanup timeout
    }

    return () => clearInterval(interval); // Cleanup interval
  }, [showOverlay]);

  const [currentGame, setCurrentGame] = useState(0); // Start with Game 1
  const [timer2, setTimer2] = useState(300); // 300 seconds = 5 minutes

  // Countdown timer
  useEffect(() => {
    if (timer2 > 0) {
      const interval = setInterval(() => {
        setTimer2((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval); // Clear interval on component unmount
    } else {
      moveToNextGame();
    }
  }, [timer2]);

  // Move to the next game
  const moveToNextGame = () => {
    if (currentGame < games.length - 1) {
      setCurrentGame(currentGame + 1);
      setTimer2(300); // Reset timer for the next game
    } else {
      window.location.href = "/video";
      setCurrentGame(0); // Restart games or handle differently
      setTimer2(300);
    }
  };


  return (
    <div className="w-full h-screen flex relative bg-gray-200">
      {/* Timer in top right corner */}
      <div className="absolute top-4 right-4 bg-blue-500 text-white font-bold py-2 px-4 rounded">
        Timer: {timer}s
      </div>

      {/* Overlay */}
      {showOverlay && (
        <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center">
          {showOverlay2 ?
          <div className="text-white text-[50px] font-bold">Breath In...</div>
          :
          <div className="text-white text-[50px] font-bold">Breath Out...</div>}
        </div>
      )}

      {/* Main game content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="text-xl flex-col font-bold text-black w-full h-full justify-center flex items-center">
        <div className="flex justify-center my-5 text-[40px] w-full text-left space-x-4">
          Game {currentGame + 1}
      </div>

      {/* Timer Display */}
      {/* <div className="text-lg mt-4">
        Time Left: {Math.floor(timer2 / 60)}:{String(timer2 % 60).padStart(2, "0")}
      </div> */}

      {/* Game Display */}
      <div className="text-xl font-bold text-black w-full h-full flex justify-center items-center mt-[-80px]">
        <iframe
          className="w-[60%] h-[80%]"
          src={games[currentGame].url}
          frameBorder="0"
          allow="gamepad *"
        ></iframe>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Gamepage;
