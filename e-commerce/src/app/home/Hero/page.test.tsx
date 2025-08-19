import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "./page";

describe("Hero Component", () => {
  it("renders all category names", () => {
    render(<Hero />);
    expect(screen.getByText("Woman's Fashion")).toBeInTheDocument();
    expect(screen.getByText("Men's Fashion")).toBeInTheDocument();
    expect(screen.getByText("Electronics")).toBeInTheDocument();
    expect(screen.getByText("Home & Lifestyle")).toBeInTheDocument();
    expect(screen.getByText("Medicine")).toBeInTheDocument();
    expect(screen.getByText("Sports & Outdoor")).toBeInTheDocument();
    expect(screen.getByText("Baby's & Toys")).toBeInTheDocument();
    expect(screen.getByText("Groceries & Pets")).toBeInTheDocument();
    expect(screen.getByText("Health & Beauty")).toBeInTheDocument();
  });

  it("renders arrow icons only for fashion categories", () => {
    render(<Hero />);
    const fashionArrows = screen.getAllByTestId("arrow-right-fashion");
    expect(fashionArrows.length).toBe(2);
  });

  it("renders iPhone promo section", () => {
    render(<Hero />);
  expect(screen.getByAltText("iPhone 14 Series")).toBeInTheDocument();
    expect(screen.getByText(/Up to 10%/)).toBeInTheDocument();
    const voucherElements = screen.getAllByText((_, element) =>
      !!element?.textContent?.includes("off Voucher")
    );
    expect(voucherElements.length).toBeGreaterThan(0);
    expect(screen.getByRole("button", { name: "Shop Now" })).toBeInTheDocument();
  });

  it("renders main hero image", () => {
    render(<Hero />);
    const img = screen.getByAltText("iPhone 14 Series");
    expect(img).toBeInTheDocument();
  });

  it("renders 5 navigation dots and highlights the third one", () => {
    render(<Hero />);
    const dots = screen.getAllByTestId("hero-dot");
    expect(dots.length).toBe(5);
    expect(dots[2]).toHaveClass("bg-red-800");
    dots.forEach((dot, i) => {
      if (i !== 2) {
        expect(dot).toHaveClass("bg-white/30");
      }
    });
  });
});