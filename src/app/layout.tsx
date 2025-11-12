import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "أبوبكر بدوي | مصمم جرافيك - هويات بصرية متميزة",
  description: "من الشعار إلى الألوان — نخلق هوية تُشبهك وتُميزك",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-[#0D0A07] text-white antialiased font-[var(--font-bukra)]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
