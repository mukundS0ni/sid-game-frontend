'use client';
import { useAuth, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

function Header() {
  const { isSignedIn } = useAuth();

  return (
    <header className="flex justify-between items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white h-20 p-4 font-extrabold shadow-lg">
      <Link href='/' className="text-2xl tracking-widest hover:scale-105 transform transition duration-300">
        Game APP
      </Link>
      <div className="flex items-center text-white font-semibold rounded-full space-x-2transition duration-300 ease-in-out">
        {isSignedIn ? (
          <div className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full space-x-2 transition duration-300 ease-in-out">
            <UserButton />
          </div>
        ) : (
            <div className='flex items-center space-x-2'>
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full  transition duration-300 ease-in-out"
            onClick={() => window.location.href = "/sign-in"}
          >
            Sign In
          </button>
          <button
          className="bg-blue-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
          onClick={() => window.location.href = "/sign-up"}
        >
          Sign up
        </button>
        </div>
        )}
      </div>
    </header>
  );
}

export default Header;
