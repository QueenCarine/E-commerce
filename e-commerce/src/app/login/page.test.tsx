import React from "react";
jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: jest.fn(), replace: jest.fn(), prefetch: jest.fn() })
}));
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./page";

describe("Login", () => {
  it("renders login form elements", () => {
    render(<Login />);
  expect(screen.getByRole("heading", { name: /Log in to your account/i })).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Log In/i })).toBeInTheDocument();
  });

  it("allows typing in email and password fields", () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i);
    fireEvent.change(emailInput, { target: { value: "user@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    expect(emailInput).toHaveValue("user@example.com");
    expect(passwordInput).toHaveValue("password123");
  });

  it("submits the form without error", () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i);
    fireEvent.change(emailInput, { target: { value: "user@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
  const button = screen.getByRole("button", { name: /Log In/i });
    fireEvent.click(button);
  });
});
