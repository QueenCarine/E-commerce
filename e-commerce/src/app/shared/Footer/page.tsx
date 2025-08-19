'use client';

import React from 'react';
import Image from 'next/image'; 
import Link from 'next/link';

export default function Footer() {
  const [year, setYear] = React.useState<number | null>(null);

  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-black text-white mt-16">
      <div className="mx-auto max-w-7xl px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {}
        <div>
          <h4 className="text-xl font-semibold mb-4">Exclusive</h4>
          <p className="text-sm mb-3">Subscribe</p>
          <p className="text-xs text-white/70 mb-3">Get 10% off your first order</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-2"
            aria-label="Newsletter signup"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-md border border-white/20 bg-transparent px-3 py-2 text-sm placeholder:text-white/60 outline-none focus:ring-2 focus:ring-white/20"
            />
            <button
              type="submit"
              className="rounded-md bg-white text-black px-3 py-2 text-sm font-medium"
            >
              Join
            </button>
          </form>
        </div>

        {}
        <div>
          <h5 className="font-semibold mb-4">Support</h5>
          <ul className="space-y-2 text-sm text-white/80">
            <li>71 Pilgrim Avenue, Dhaka, DH 1515, Bangladesh</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>

        {}
        <div>
          <h5 className="font-semibold mb-4">Account</h5>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link href="/account">My Account</Link>
            </li>
            <li>
              <Link href="/auth">Login / Register</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
            <li>
              <Link href="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
          </ul>
        </div>

        {}
        <div>
          <h5 className="font-semibold mb-4">Quick Link</h5>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms Of Use</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {}
        <div>
          <h5 className="font-semibold mb-4">Download App</h5>
          <p className="text-xs text-white/70 mb-3">Save $3 with App New User Only</p>
          <div className="flex items-center gap-3">
            {}
            <div className="size-24 bg-white rounded-md overflow-hidden">
              <Image
                src="/images/qr.jpg"
                alt="Scan to download the Exclusive app"
                width={96}
                height={96}
                className="object-contain"
                priority={false}
              />
            </div>

            {}
            <div className="space-y-2">
              <div className="h-10 w-32 bg-white/10 rounded-md grid place-items-center text-xs">
                App Store
              </div>
              <div className="h-10 w-32 bg-white/10 rounded-md grid place-items-center text-xs">
                Google Play
              </div>
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-white/60">
          © Copyright Exclusive {year ?? ''}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}