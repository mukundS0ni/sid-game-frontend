"use client"

import { useAuth } from "@clerk/nextjs";

export default function Home() {
const isSignedIn = useAuth().isSignedIn;;
  return (
    <div className="w-full h-screen bg-gray-200">
      {/* Header */}

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-full">
      {isSignedIn ? (
        <a
          href="/game"
          className="bg-blue-500 hover:bg-blue-700 font-bold py-5 text-[40px] px-10 rounded"
        > 
          👉 START NOW
        </a>
      )
      :
      (
        <div className="text-4xl font-bold text-center text-black mt-[-20px]"> 
          Login to start the app
        </div>
      )}
      </div>
    </div>
  );
}
