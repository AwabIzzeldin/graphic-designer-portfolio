"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "من أنا؟", href: "#about" },
    { name: "الخدمات", href: "#services" },
    { name: "الأعمال", href: "#projects" },
    { name: "آراء العملاء", href: "#testimonials" },
    { name: "تواصل", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] md:w-[85%] z-50 
        ${scrolled ? "bg-white/10 backdrop-blur-xl border border-white/10 shadow-[0_0_25px_rgba(232,99,39,0.1)]" : "bg-transparent"}
        rounded-2xl transition-all duration-300`}
    >
      <div className="flex items-center justify-between px-5 md:px-8 py-4">
        {/* Logo / Name */}
        <Link href="#home" className="text-[#e86327] font-semibold text-lg tracking-wider">
          أبوبكر بدوي | <span className="text-white">مصمم جرافيك</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              whileHover={{ scale: 1.05 }}
              className="relative text-white/80 hover:text-white transition"
            >
              {link.name}
              <motion.span
                className="absolute left-0 bottom-[-6px] h-[2px] bg-[#e86327]"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/5 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-4 text-right"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white/80 hover:text-[#e86327] text-lg font-medium transition"
                whileHover={{ x: -5 }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
