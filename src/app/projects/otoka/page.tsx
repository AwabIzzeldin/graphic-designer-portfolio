"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FroozyPanda() {
  const images = [
    "/images/otoka/otoka-1.webp",
    "/images/otoka/otoka-2.webp",
    "/images/otoka/otoka-3.webp",
    "/images/otoka/otoka-4.webp",
    "/images/otoka/otoka-5.webp",
    "/images/otoka/otoka-6.webp",
    "/images/otoka/otoka-7.webp",
    "/images/otoka/otoka-8.webp",
  ];
  
  return (
    <main className="bg-[#0D0A07] text-white">

      {/* ---------------- HERO ---------------- */}
      <section className="relative h-[85vh] w-full flex items-center justify-center text-center px-6">

        {/* Background Image */}
        <img
          src="/images/otoka/otoka-1.webp"
          alt="Dakina Hero"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.55] blur-[2px]"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-[#0D0A07]/80"></div>

        {/* Text */}
        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-semibold mb-4"
          >
            Otoka | أوتوكا
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg md:text-xl text-white/80 leading-relaxed"
          >
            علامة تجارية بهوية أنيقة، بسيطة، وحديثة.
          </motion.p>
        </div>
      </section>

      {/* ---------------- PACKAGE CONTENT ---------------- */}
      <section className="w-[90%] md:w-[75%] mx-auto py-20 space-y-6 text-right">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">المحتويات</h2>

        <div className="text-white/80 leading-relaxed text-lg space-y-2">
          <p>• تصميم الشعار</p>
          <p>• تطوير الهوية البصرية</p>
          <p>• بوسترات إعلانية</p>
          <p>• نماذج Mockups</p>
          <p>• تصاميم السوشيال ميديا</p>
        </div>
      </section>

      {/* ---------------- FULL WIDTH MEDIA ---------------- */}
      <section className="pb-0">
        {images.map((src, i) => {
          const isVideo =
            src.endsWith(".mp4") ||
            src.endsWith(".webm") ||
            src.endsWith(".mov");

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="w-full"
            >
              {isVideo ? (
                <video
                  src={src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover"
                />
              ) : (
                <Image
                  src={src}
                  alt={`FroozyPanda image ${i}`}
                  width={2000}
                  height={1200}
                  className="w-full h-auto object-cover"
                />
              )}
            </motion.div>
          );
        })}
      </section>

    </main>
  );
}
