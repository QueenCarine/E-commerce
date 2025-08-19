"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/home", label: "Home" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
  { href: "/signup", label: "Sign up" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [query, setQuery] = useState("");

  return (
    <header className="border-b border-neutral-200">
      {}
      <div className="bg-black text-white text-xs">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-center md:justify-between gap-4">
          <p className="text-center">
            Summer Sale for All Swim Suits And Free Express Delivery — OFF 50%{" "}
            <Link href="/shop" className="underline underline-offset-4 font-medium">
              Shop Now
            </Link>
          </p>
          <div className="hidden md:block opacity-80">English ▾</div>
        </div>
      </div>

      {}
      <nav className="mx-auto max-w-7xl px-4 py-4 flex items-center gap-6">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Exclusive
        </Link>

        <ul className="hidden md:flex items-center gap-6 ml-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm hover:text-black/80 ${
                  pathname === l.href ? "font-semibold" : "text-black/70"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="hidden sm:flex items-center"
          >
            <div className="relative w-64">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What are you looking for?"
                className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10 pr-10"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="11" cy="11" r="8" strokeWidth="2" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </nav>
    </header>
  );
}