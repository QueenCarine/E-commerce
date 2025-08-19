"use client";
import React from "react";
import Link from 'next/link';
import Image from 'next/image'; 
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (email && password) {
      setError('');
    router.push("/home");
    } else {
      setError('Please enter both email and password.');
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {}
        <div className="rounded bg-gray-100 overflow-hidden">
          <Image
            src="/images/cart.jpg"
            alt="Login visual"
            width={600}
            height={440}
            className="w-full h-[440px] object-cover"
            priority 
          />
        </div>

        {}
        <section aria-labelledby="login-title" className="w-full max-w-md md:ml-auto">
          <h1 id="login-title" className="text-2xl font-semibold">
            Log in to your account
          </h1>
          <p className="mt-2 text-sm text-gray-500">Enter your credentials below</p>

          <form className="mt-6 space-y-4" onSubmit={handleLogin}>
            <input
              name="email"
              type="email"
              placeholder="Email or Phone Number"
              className="w-full rounded border border-gray-300 px-4 py-2.5 outline-none focus:border-black"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full rounded border border-gray-300 px-4 py-2.5 outline-none focus:border-black"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full rounded bg-red-500 hover:bg-red-600 text-white py-2.5"
            >
              Log In
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}