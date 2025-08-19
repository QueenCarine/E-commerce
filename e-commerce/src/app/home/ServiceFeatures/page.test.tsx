import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ServiceFeatures from "./page";

describe("ServiceFeatures component", () => {
  it("renders all three feature titles", () => {
    render(<ServiceFeatures />);
    expect(screen.getByText("FREE AND FAST DELIVERY")).toBeInTheDocument();
    expect(screen.getByText("24/7 CUSTOMER SERVICE")).toBeInTheDocument();
    expect(screen.getByText("MONEY BACK GUARANTEE")).toBeInTheDocument();
  });

  it("renders all three feature descriptions", () => {
    render(<ServiceFeatures />);
    expect(screen.getByText("Free delivery for all orders over $140")).toBeInTheDocument();
    expect(screen.getByText("Friendly 24/7 customer support")).toBeInTheDocument();
    expect(screen.getByText("We return money within 30 days")).toBeInTheDocument();
  });

  it("renders three icons", () => {
    const { container } = render(<ServiceFeatures />);
    const icons = container.querySelectorAll("svg.text-white");
    expect(icons.length).toBe(3);
  });

  it("renders three feature containers", () => {
    const { container } = render(<ServiceFeatures />);
    const featureDivs = container.querySelectorAll("div.flex.flex-col.items-center.text-center");
    expect(featureDivs.length).toBe(3);
  });

  it("renders the outer grid container", () => {
    const { container } = render(<ServiceFeatures />);
    expect(container.querySelector("div.grid")).toBeInTheDocument();
  });
});