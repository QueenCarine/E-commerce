import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "./page";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href }: any) => <a href={href}>{children}</a>,
}));

describe("Footer", () => {
  it("renders the Exclusive brand and subscription section", () => {
    render(<Footer />);
    expect(screen.getByText("Exclusive")).toBeInTheDocument();
    expect(screen.getByText("Subscribe")).toBeInTheDocument();
    expect(screen.getByText("Get 10% off your first order")).toBeInTheDocument();
  });

  it("renders the newsletter input and join button", () => {
    render(<Footer />);
    expect(screen.getByPlaceholderText("Enter your email")).toBeInTheDocument();
    expect(screen.getByText("Join")).toBeInTheDocument();
  });

  it("renders support information", () => {
    render(<Footer />);
    expect(screen.getByText(/Pilgrim Avenue/)).toBeInTheDocument();
    expect(screen.getByText(/exclusive@gmail.com/)).toBeInTheDocument();
    expect(screen.getByText(/\+88015-88888-9999/)).toBeInTheDocument();
  });

  it("renders account links", () => {
    render(<Footer />);
    ["My Account", "Login / Register", "Cart", "Wishlist", "Shop"].forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("renders quick links", () => {
    render(<Footer />);
    ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"].forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("renders download app section and QR image", () => {
    render(<Footer />);
    expect(screen.getByText(/Download App/)).toBeInTheDocument();
    expect(screen.getByAltText(/Scan to download the Exclusive app/)).toBeInTheDocument();
    expect(screen.getByText(/App Store/)).toBeInTheDocument();
    expect(screen.getByText(/Google Play/)).toBeInTheDocument();
  });

  it("renders copyright year", () => {
    render(<Footer />);
    expect(screen.getByText(/Copyright Exclusive/)).toBeInTheDocument();
  });

  it("submits newsletter form without error", () => {
    render(<Footer />);
    const input = screen.getByPlaceholderText("Enter your email");
    fireEvent.change(input, { target: { value: "test@example.com" } });
    expect(input).toHaveValue("test@example.com");
    const button = screen.getByText("Join");
    fireEvent.click(button);
  });
});
