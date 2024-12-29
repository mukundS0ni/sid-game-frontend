"use client"
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleStartNow = () => {
    router.push('/game'); // Replace '/game' with the actual route of your game page
  };

  return (
    <div className="w-full h-screen bg-gray-200">
      <div className="flex flex-col items-center justify-center h-full">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleStartNow}
        >
          START NOW
        </button>
      </div>
    </div>
  );
}
