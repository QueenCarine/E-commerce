import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MusicExperience from "./page";

describe("MusicExperience component", () => {
  it("renders the 'Categories' label", () => {
    render(<MusicExperience />);
    expect(screen.getByText("Categories")).toBeInTheDocument();
  });

  it("renders the heading 'Enhance Your Music Experience'", () => {
    render(<MusicExperience />);
    expect(
      screen.getByRole("heading", { level: 3, name: /Enhance Your\s+Music Experience/i })
    ).toBeInTheDocument();
  });

  it("shows the correct countdown values and labels", () => {
    render(<MusicExperience />);
    expect(screen.getByText("23")).toBeInTheDocument();
    expect(screen.getByText("05")).toBeInTheDocument();
    expect(screen.getByText("59")).toBeInTheDocument();
    expect(screen.getByText("35")).toBeInTheDocument();
    expect(screen.getByText("Hours")).toBeInTheDocument();
    expect(screen.getByText("Days")).toBeInTheDocument();
    expect(screen.getByText("Minutes")).toBeInTheDocument();
    expect(screen.getByText("Seconds")).toBeInTheDocument();
  });

  it("displays the 'Buy Now!' button", () => {
    render(<MusicExperience />);
    expect(
      screen.getByRole("button", { name: /buy now/i })
    ).toBeInTheDocument();
  });

  it("renders the JBL Speaker image", () => {
    render(<MusicExperience />);
    expect(
      screen.getByAltText(/JBL Speaker/i)
    ).toBeInTheDocument();
  });
});