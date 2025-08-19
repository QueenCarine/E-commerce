import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Navbar from "./page";
import { usePathname } from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("Navbar", () => {
  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue("/home");
  });

  it("renders the brand name", () => {
    render(<Navbar />);
    expect(screen.getByText("Exclusive")).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Navbar />);
    ["Home", "Contact", "About", "Sign up"].forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("highlights the active link", () => {
    render(<Navbar />);
    const homeLink = screen.getByText("Home");
    expect(homeLink).toHaveClass("font-semibold");
  });

  it("renders the sale announcement", () => {
    render(<Navbar />);
    expect(
      screen.getByText(/Summer Sale for All Swim Suits And Free Express Delivery/i)
    ).toBeInTheDocument();
    expect(screen.getByText("Shop Now")).toBeInTheDocument();
  });

  it("renders the language selector", () => {
    render(<Navbar />);
    expect(screen.getByText(/English/)).toBeInTheDocument();
  });

  it("renders the search input and allows typing", () => {
    render(<Navbar />);
    const input = screen.getByPlaceholderText("What are you looking for?");
    fireEvent.change(input, { target: { value: "Shoes" } });
    expect(input).toHaveValue("Shoes");
  });
});
