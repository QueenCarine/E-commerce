"use client";
import React from "react";
import { Truck, Headphones, Shield } from "lucide-react";

export default function ServiceFeatures() {
  const features = [
    {
      icon: Truck,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140"
    },
    {
      icon: Headphones,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support"
    },
    {
      icon: Shield,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mb-6 relative">
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-black mb-2">
                {feature.title}
              </h3>
              <p className="text-black text-sm">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}