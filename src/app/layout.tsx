import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Coffee Shop",
  description: "Best coffee and snacks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
