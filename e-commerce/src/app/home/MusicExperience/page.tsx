"use client";
import React from "react";
import Image from "next/image";

export default function MusicExperience() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-black text-white rounded-sm overflow-hidden">
        <div className="flex items-center h-96">
          <div className="flex-1 p-12">
            <div className="text-green-500 text-lg font-semibold mb-4">Categories</div>
            <h3 className="text-5xl font-semibold mb-6 leading-tight">
              Enhance Your
              <br />
              Music Experience
            </h3>

            <div className="flex items-center gap-6 mb-8">
              <div className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center">
                <div className="text-xs font-semibold">23</div>
                <div className="text-xs">Hours</div>
              </div>
              <div className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center">
                <div className="text-xs font-semibold">05</div>
                <div className="text-xs">Days</div>
              </div>
              <div className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center">
                <div className="text-xs font-semibold">59</div>
                <div className="text-xs">Minutes</div>
              </div>
              <div className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center">
                <div className="text-xs font-semibold">35</div>
                <div className="text-xs">Seconds</div>
              </div>
            </div>
            <button className="bg-green-500 text-white px-12 py-3 rounded-sm font-semibold hover:bg-green-secondary transition-colors">
              Buy Now!
            </button>
          </div>

          <div className="flex-1 justify-center p-12">
            <Image
              src="/images/JBL_BOOMBOX_2_HERO_020_x1 (1) 1 (1).png"
              alt="JBL Speaker"
              width={350}
              height={350}
              className="w-120 h-90"
              priority={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}