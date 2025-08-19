"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const categories = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex gap-8">
        <div className="w-64 flex-shrink-0">
          <div className="space-y-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex items-center justify-between group cursor-pointer"
              >
                <span className="text-black hover:text-red-800 transition-colors">
                  {category}
                </span>
                {(category === "Woman's Fashion" ||
                  category === "Men's Fashion") && (
                  <ArrowRight
                    data-testid="arrow-right-fashion"
                    className="h-4 w-4 text-gray-400 group-hover:text-red-800 transition-colors"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-px bg-gray-300"></div>

        <div className="flex-1 bg-black text-white relative overflow-hidden rounded-sm">
          <div className="flex items-center h-96">
            <div className="flex-1 p-12">
              <div className="flex flex-col items-start gap-2 mb-6">
                {}
              </div>
              <h1 className="text-5xl font-semibold mb-6 leading-tight">
                Up to 10%
                <br />
                off Voucher
              </h1>
              <div className="flex items-center gap-2">
                <button className="text-white underline underline-offset-8 text-lg font-medium hover:no-underline transition-all">
                  Shop Now
                </button>
                <ArrowRight className="h-5 w-5" />
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <Image
                src="/images/light.jpg"
                alt="iPhone 14 Series"
                width={1000}
                height={1000}
                className="w-110 h-80"
                priority={true}
              />
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                data-testid="hero-dot"
                className={`w-3 h-3 rounded-full ${
                  index === 2 ? "bg-red-800" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}