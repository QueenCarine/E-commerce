"use client";
import React from "react";
import Hero from "./Hero/page";
import { FlashSales } from "./FlashSale/page";
import Categories from "./Categories/page";
import BestSelling from "./BestSelling/page";
import OurProducts from "./OurProducts/page";
import NewArrival from "./NewArrival/page";

export default function Home() {
  return (
    <>
      <Hero />
      <FlashSales />
      <Categories />
      <BestSelling />
      <OurProducts />
      <NewArrival />
    </>
  );
}
