import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LazyMotion, domAnimation } from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Betelhem Mekonnen - Software Engineer Portfolio",
  description: "Fullstack developer specializing in React, Next.js, React Native, and modern web technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-[#0a1628] via-[#0d1b2a] to-[#1b263b]`}
      >
        <LazyMotion features={domAnimation}>
          {children}
        </LazyMotion>
      </body>
    </html>
  );
}