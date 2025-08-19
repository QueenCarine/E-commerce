import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./shared/Navbar/page";
import Footer from "./shared/Footer/page";

export const metadata: Metadata = {
  title: "Exclusive",
  description: "Auth pages",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
    <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}