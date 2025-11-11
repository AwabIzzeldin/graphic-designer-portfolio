"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type Project = {
  title: string;
  img: string;
  service: string;
  gallery?: string[];
};

const projects = {
  "Visual Identity": [
    {
      title: "Froozy Panda",
      img: "/images/hero1.jpg",
      service: "Brand Identity",
      gallery: ["/images/hero1.jpg", "/images/hero2.jpg", "/images/hero3.jpg"],
    },
    {
      title: "Aura Skin",
      img: "/images/hero2.jpg",
      service: "Packaging Design",
      gallery: ["/images/hero2.jpg", "/images/hero4.jpg", "/images/hero1.jpg"],
    },
        {
      title: "Aura Skin",
      img: "/images/hero2.jpg",
      service: "Packaging Design",
      gallery: ["/images/hero2.jpg", "/images/hero4.jpg", "/images/hero1.jpg"],
    },
    
  ],
  "Logo Design": [
    {
      title: "Karma Studio",
      img: "/images/hero4.jpg",
      service: "Logo Design",
      gallery: ["/images/hero4.jpg", "/images/hero2.jpg"],
    },
    {
      title: "Mocha Café",
      img: "/images/hero1.jpg",
      service: "Logo + Menu Mark",
      gallery: ["/images/hero1.jpg", "/images/hero3.jpg"],
    },
        {
      title: "Karma Studio",
      img: "/images/hero4.jpg",
      service: "Logo Design",
      gallery: ["/images/hero4.jpg", "/images/hero2.jpg"],
    },
  ],
  "Video Mockups": [
    {
      title: "Motion Teaser",
      img: "/images/hero3.jpg",
      service: "Brand Launch Video",
      gallery: ["/images/hero3.jpg", "/images/hero1.jpg"],
    },
        {
      title: "Motion Teaser",
      img: "/images/hero3.jpg",
      service: "Brand Launch Video",
      gallery: ["/images/hero3.jpg", "/images/hero1.jpg"],
    },
        {
      title: "Motion Teaser",
      img: "/images/hero3.jpg",
      service: "Brand Launch Video",
      gallery: ["/images/hero3.jpg", "/images/hero1.jpg"],
    },
  ],
  "Social Media": [
    {
      title: "Aura Campaign",
      img: "/images/hero2.jpg",
      service: "Instagram Series",
      gallery: ["/images/hero2.jpg", "/images/hero3.jpg", "/images/hero4.jpg"],
    },
        {
      title: "Aura Campaign",
      img: "/images/hero2.jpg",
      service: "Instagram Series",
      gallery: ["/images/hero2.jpg", "/images/hero3.jpg", "/images/hero4.jpg"],
    },
        {
      title: "Aura Campaign",
      img: "/images/hero2.jpg",
      service: "Instagram Series",
      gallery: ["/images/hero2.jpg", "/images/hero3.jpg", "/images/hero4.jpg"],
    },
  ],
};

export default function ProjectsPage() {
  const [selected, setSelected] = useState<Project | null>(null);


  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#0D0A07] via-[#1A0033]/40 to-[#0D0A07] text-white overflow-hidden">

      {/* Header */}
      <section className="pt-28 md:pt-36 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold mb-4"
        >
          الأعمال الكاملة
        </motion.h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          استكشف جميع المشاريع التي تم تنفيذها — من الهويات البصرية إلى تصميم
          الشعارات والفيديوهات.
        </p>
      </section>

      {/* Categories */}
      <div className="space-y-32 pb-32">
        {Object.entries(projects).map(([category, items], idx) => (
          <motion.section
            key={category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            className="mx-auto w-[90%] md:w-[85%] xl:w-[80%]"
          >
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#e86327] to-[#ff9e4f] bg-clip-text text-transparent">
                {category}
              </h2>
              <span className="text-sm text-white/60 uppercase tracking-widest">
                {items.length} أعمال
              </span>
            </div>

            {/* Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((p, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelected(p)}
                  className="group relative rounded-2xl overflow-hidden border border-white/10 
                             bg-white/[0.05] hover:bg-[#e86327]/10 backdrop-blur-sm 
                             transition-all duration-500 cursor-pointer"
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent group-hover:from-[#e86327]/40 transition-all" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
                    <p className="text-sm text-[#e86327] font-medium">
                      {p.service}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />
            {/* Modal */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4 }}
            >
              <div
                className="relative w-[95%] md:w-[85%] lg:w-[80%] h-[85vh] 
                           bg-[#0D0A07]/95 rounded-3xl overflow-hidden border border-[#e86327]/40 
                           shadow-[0_0_60px_rgba(232,99,39,0.35)]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-5 right-5 text-white/80 hover:text-white z-50"
                >
                  <X size={32} />
                </button>

                {/* Swiper */}
                <Swiper modules={[Navigation]} navigation loop className="w-full h-full">
                  {selected.gallery?.map((img, i) => (
                    <SwiperSlide key={i}>
                      <div className="relative w-full h-full">
                        <img
                          src={img}
                          alt={`${selected.title}-${i}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-6">
                          <h3 className="text-white text-2xl font-semibold">{selected.title}</h3>
                          <p className="text-[#e86327] text-sm font-medium">{selected.service}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* CTA */}
      <div className="text-center pb-24">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="inline-block px-10 py-3 rounded-full font-medium 
                     bg-gradient-to-r from-[#e86327] to-[#ff9e4f] text-black 
                     shadow-[0_0_18px_#e86327]/50 hover:shadow-[0_0_28px_#e86327]/80 transition"
        >
          ابدأ مشروعك معنا
        </motion.a>
      </div>
    </main>
  );
}
