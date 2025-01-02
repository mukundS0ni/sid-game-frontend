'use client';
import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-4 text-center text-black">Sign In</h1>
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      </div>
    </main>
  );
}
