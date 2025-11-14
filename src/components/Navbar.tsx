"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);                // mobile menu
  const [projectsOpen, setProjectsOpen] = useState(false);    // mobile dropdown
  const [desktopProjectsOpen, setDesktopProjectsOpen] = useState(false); // desktop dropdown
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const pathname = usePathname();
  const router = useRouter();

  /* ------------------ Scroll Logic ------------------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const scrollTop = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(height > 0 ? (scrollTop / height) * 100 : 0);

      if (pathname === "/") {
        const sections = ["home", "about", "services", "testimonials", "contact"];
        let current: string | null = null;

        sections.forEach((id) => {
          const el = document.getElementById(id);
          if (!el) return;
          const top = el.getBoundingClientRect().top;
          if (top <= 200 && top >= -el.offsetHeight + 200) current = id;
        });

        setActiveSection(current);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  /* ------------------ Navigation Logic ------------------- */

  const navLinks = [
    { name: "الرئيسية", href: "#home", id: "home", internal: true },
    { name: "من أنا؟", href: "#about", id: "about", internal: true },
    { 
      name: "الأعمال", 
      href: "/projects",
      id: "projects",
      internal: false,
      dropdown: true 
    },
    { name: "الخدمات", href: "#services", id: "services", internal: true },
    { name: "آراء العملاء", href: "#testimonials", id: "testimonials", internal: true },
    { name: "تواصل", href: "/contact", id: "contact", internal: false },
  ];

  const handleNavClick = (href: string, internal: boolean) => {
    if (internal) {
      if (pathname !== "/") {
        router.push("/" + href);
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(href);
    }

    setIsOpen(false);
    setProjectsOpen(false);
    setDesktopProjectsOpen(false);
  };

  const isActive = (id: string, href: string, internal: boolean) => {
    if (!internal) return pathname === href;
    if (pathname !== "/") return false;
    return activeSection === id;
  };

  /* ------------------ NAVBAR ------------------- */
  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] md:w-[85%] z-40 
          ${
            scrolled
              ? "bg-white/10 backdrop-blur-xl border border-white/10 shadow-[0_0_25px_rgba(232,99,39,0.1)]"
              : "bg-transparent"
          } rounded-2xl transition-all duration-300`}

      >

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-[#e86327] to-[#ff9e4f]"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Inner navbar content */}
        <div className="flex items-center justify-between px-5 md:px-8 py-4 relative z-10">

          {/* Logo */}
          <Link href="/" className="text-[#e86327] font-semibold text-lg tracking-wider">
            أبوبكر بدوي | <span className="text-white">مصمم جرافيك</span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => {

              /* ------------------ DESKTOP DROPDOWN: الأعمال ------------------ */
              if (link.dropdown) {
                return (
                  <div
                    key={i}
                    className="relative"
                    onMouseEnter={() => setDesktopProjectsOpen(true)}
                    onMouseLeave={() => setDesktopProjectsOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 transition ${
                        pathname.startsWith("/projects")
                          ? "text-[#e86327]"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {link.name}
                      <ChevronDown size={16} />
                    </button>

                    {/* DROPDOWN LEVEL 1 */}
                    <AnimatePresence>
                      {desktopProjectsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute right-0 mt-2 bg-[#0D0A07] border border-white/10 
                          rounded-xl shadow-xl px-0 py-2 w-56 text-right z-50 space-y-2"
                        >

                          {/* Level 1 — الباقة الذهبية */}
                          <div className="group relative">
                            <button
                              onClick={() => handleNavClick("/projects/visual-identity", false)}
                              className="w-full text-white/80 hover:text-[#e86327] px-4 py-2 flex justify-between items-center"
                            >
                              الباقة الذهبية
                              <ChevronDown size={15} className="opacity-70" />
                            </button>

                            {/* ------------------ LEVEL 2 SUBMENU ------------------ */}
                            <div
                              className="hidden group-hover:block absolute right-full top-0 bg-[#0D0A07]
                              border border-white/10 rounded-xl shadow-xl w-44 py-2 z-50"
                            >

                              {/* Dakina */}
                              <button
                                onClick={() => handleNavClick("/projects/dakina", false)}
                                className="block w-full text-white/70 hover:text-[#e86327] px-4 py-2 text-right"
                              >
                                داكنة
                              </button>

                              {/* Froozy Panda */}
                              <button
                                onClick={() => handleNavClick("/projects/froozypanda", false)}
                                className="block w-full text-white/70 hover:text-[#e86327] px-4 py-2 text-right"
                              >
                                فروزي باندا
                              </button>

                            </div>
                          </div>

                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              /* ------------------ DESKTOP NORMAL LINKS ------------------ */
              return (
                <motion.button
                  key={i}
                  onClick={() => handleNavClick(link.href, link.internal)}
                  whileHover={{ scale: 1.05 }}
                  className={`transition ${
                    isActive(link.id, link.href, link.internal)
                      ? "text-[#e86327]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                </motion.button>
              );
            })}
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.nav>

      {/* ------------------ MOBILE SLIDE-IN MENU ------------------ */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsOpen(false);
                setProjectsOpen(false);
              }}
            />

            {/* Slide Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 right-0 h-full w-[75%] sm:w-[60%]
              bg-[#0D0A07]/95 backdrop-blur-xl border-l border-white/10 z-50 
              px-6 py-8 overflow-y-auto text-right shadow-xl"
            >
              {/* Close */}
              <div className="flex justify-end mb-6">
                <button onClick={() => setIsOpen(false)} className="text-white">
                  <X size={24} />
                </button>
              </div>

              {/* Mobile menu items */}
              <div className="space-y-6">
                {navLinks.map((link, i) => {

                  /* ------------------ MOBILE DROPDOWN: الأعمال ------------------ */
                  if (link.dropdown) {
                    return (
                      <div key={i} className="space-y-2">

                        <button
                          onClick={() => setProjectsOpen(!projectsOpen)}
                          className="w-full flex justify-between items-center text-lg text-white/80"
                        >
                          {link.name}
                          <motion.span animate={{ rotate: projectsOpen ? 180 : 0 }}>▼</motion.span>
                        </button>

                        {/* Dropdown content */}
                        <AnimatePresence>
                          {projectsOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              className="pr-4 space-y-3"
                            >
                              {/* الباقة الذهبية */}
                              <button
                                onClick={() => handleNavClick("/projects/visual-identity", false)}
                                className="block text-white/70 hover:text-[#e86327] text-md"
                              >
                                الباقة الذهبية
                              </button>

                              {/* Level 2: Dakina */}
                              <div className="pr-4">
                                <button
                                  onClick={() => handleNavClick("/projects/dakina", false)}
                                  className="block text-white/60 hover:text-[#e86327] text-sm"
                                >
                                  داكنة
                                </button>
                              </div>

                              {/* Level 2: Froozy Panda */}
                              <div className="pr-4">
                                <button
                                  onClick={() => handleNavClick("/projects/froozypanda", false)}
                                  className="block text-white/60 hover:text-[#e86327] text-sm"
                                >
                                  فروزي باندا
                                </button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  /* ------------------ MOBILE NORMAL LINKS ------------------ */
                  return (
                    <motion.button
                      key={i}
                      onClick={() => handleNavClick(link.href, link.internal)}
                      whileHover={{ x: -5 }}
                      className={`block text-lg ${
                        isActive(link.id, link.href, link.internal)
                          ? "text-[#e86327]"
                          : "text-white/80"
                      }`}
                    >
                      {link.name}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
