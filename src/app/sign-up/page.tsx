'use client';
import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-4 text-center text-black">Sign Up</h1>
        <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
      </div>
    </main>
  );
}
