"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Background + scroll progress
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const scrollTop = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      setScrollProgress((scrollTop / height) * 100);

      if (pathname === "/") {
        const sections = ["home", "about", "services", "testimonials", "contact"];
        let current: string | null = null;
        sections.forEach((id) => {
          const el = document.getElementById(id);
          if (el) {
            const top = el.getBoundingClientRect().top;
            if (top <= 200 && top >= -el.offsetHeight + 200) current = id;
          }
        });
        setActiveSection(current);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Smooth scroll to section if hash exists in URL
  useEffect(() => {
    if (pathname === "/") {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 300);
        }
      }
    }
  }, [pathname]);

  const navLinks = [
    { name: "الرئيسية", href: "#home", id: "home", internal: true },
    { name: "من أنا؟", href: "#about", id: "about", internal: true },
    { name: "الخدمات", href: "#services", id: "services", internal: true },
    { name: "الأعمال", href: "/projects", id: "projects", internal: false },
    { name: "آراء العملاء", href: "#testimonials", id: "testimonials", internal: true },
    { name: "تواصل", href: "/dakina", id: "contact", internal: false },
  ];

  // Route hash links correctly (even from /projects)
  const handleNavClick = (href: string, internal: boolean) => {
    if (internal) {
      if (pathname !== "/") {
        // Redirect to homepage + hash
        router.push("/" + href);
      } else {
        // Already on home, smooth scroll
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(href);
    }
    setIsOpen(false);
  };

  const isActive = (id: string, href: string, internal: boolean) => {
    if (!internal) return pathname === href;
    if (pathname !== "/") return false;
    return activeSection === id;
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] md:w-[85%] z-50 
        ${scrolled
          ? "bg-white/10 backdrop-blur-xl border border-white/10 shadow-[0_0_25px_rgba(232,99,39,0.1)]"
          : "bg-transparent"
        } rounded-2xl transition-all duration-300 overflow-hidden`}
    >
      {/* 🔸 Integrated Scroll Progress */}
      <motion.div
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-[#e86327] to-[#ff9e4f]"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="flex items-center justify-between px-5 md:px-8 py-4 relative z-10">
        <Link href="/" className="text-[#e86327] font-semibold text-lg tracking-wider">
          أبوبكر بدوي | <span className="text-white">مصمم جرافيك</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.button
              key={i}
              onClick={() => handleNavClick(link.href, link.internal)}
              whileHover={{ scale: 1.05 }}
              className={`relative transition-colors ${
                isActive(link.id, link.href, link.internal)
                  ? "text-[#e86327]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.name}
              <motion.span
                className="absolute left-0 bottom-[-6px] h-[2px] bg-[#e86327]"
                animate={{
                  width: isActive(link.id, link.href, link.internal) ? "100%" : "0%",
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
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
              <motion.button
                key={i}
                onClick={() => handleNavClick(link.href, link.internal)}
                className={`block text-lg font-medium transition ${
                  isActive(link.id, link.href, link.internal)
                    ? "text-[#e86327]"
                    : "text-white/80 hover:text-[#e86327]"
                }`}
                whileHover={{ x: -5 }}
              >
                {link.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
