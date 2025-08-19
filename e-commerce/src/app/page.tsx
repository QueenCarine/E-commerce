"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
  
    if (name && email && password) {
      setError("");
      router.push("/login");
    } else {
      setError("Please fill in all fields.");
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {}
        <div className="rounded bg-gray-100 overflow-hidden">
          <Image
            src="/images/cart.jpg"
            alt="Shopping cart"
            width={800}
            height={440}
            className="w-full h-[440px] object-cover"
            priority
          />
        </div>

        {}
        <section aria-labelledby="signup-title" className="w-full max-w-md md:ml-auto">
          <h1 id="signup-title" className="text-2xl font-semibold">Create an account</h1>
          <p className="mt-2 text-sm text-gray-500">Enter your details below</p>

          <form className="mt-6 space-y-4" onSubmit={handleSignUp}>
            <input
              name="name"
              placeholder="Name"
              className="w-full rounded border border-gray-300 px-4 py-2.5 outline-none focus:border-black"
              required
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input
              name="email"
              placeholder="Email or Phone Number"
              className="w-full rounded border border-gray-300 px-4 py-2.5 outline-none focus:border-black"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full rounded border border-gray-300 px-4 py-2.5 outline-none focus:border-black"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full rounded bg-red-500 hover:bg-red-600 text-white py-2.5"
            >
              Create Account
            </button>
            <button
              type="button"
              className="w-full rounded border border-gray-300 py-2.5 flex items-center justify-center gap-2"
            >
              <span className="inline-block align-middle">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.19 3.22l6.85-6.85C36.16 2.36 30.4 0 24 0 14.61 0 6.44 5.74 2.44 14.09l8.01 6.23C12.36 13.09 17.68 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.55c0-1.54-.14-3.02-.39-4.45H24v8.43h12.44c-.54 2.91-2.18 5.38-4.65 7.04l7.23 5.62C43.98 37.36 46.1 31.44 46.1 24.55z"/><path fill="#FBBC05" d="M10.45 28.32c-.62-1.85-.98-3.81-.98-5.82s.36-3.97.98-5.82l-8.01-6.23C1.16 13.09 0 18.36 0 24c0 5.64 1.16 10.91 2.44 14.09l8.01-6.23z"/><path fill="#EA4335" d="M24 48c6.4 0 12.16-2.36 16.64-6.45l-7.23-5.62c-2.01 1.35-4.59 2.15-7.41 2.15-6.32 0-11.64-3.59-13.55-8.82l-8.01 6.23C6.44 42.26 14.61 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></g></svg>
              </span>
              <span>Sign up with Google</span>
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-600">
            Already have account?{" "}
            <Link href="/login" className="underline">
              Log in
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}