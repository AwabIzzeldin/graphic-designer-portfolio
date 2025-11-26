"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CDP() {
  const images = [
    "/images/CDP/CDP-01.webp",
    "/images/CDP/CDP-02.webp",
    "/images/CDP/CDP-03.webp",
    "/images/CDP/CDP-04.webp",
    "/images/CDP/CDP-05.webp",
    "/images/CDP/CDP-06.webp",
    "/images/CDP/CDP-07.webp",
    "/images/CDP/CDP-08.webp",
    "/images/CDP/CDP-09.webp",
    "/images/CDP/CDP-10.webp",
  ];

  return (
    <main className="bg-[#0D0A07] text-white">

      {/* ---------------- HERO ---------------- */}
      <section className="relative h-[85vh] w-full flex items-center justify-center text-center px-6 overflow-hidden">

        {/* Background Image -> OPTIMIZED */}
        <Image
          src="/images/CDP/CDP-01.webp"
          alt="CDP Hero"
          priority
          fill
          className="object-cover brightness-[0.55] blur-[2px]"
          sizes="100vw"
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
            CDP | سي دي بي
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
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className="w-full"
            >
              {isVideo ? (
                <video
                  src={src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-auto object-cover"
                />
              ) : (
                <Image
                  src={src}
                  alt={`CDP image ${i}`}
                  width={1800}
                  height={1200}
                  quality={85}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="/blur-placeholder.png"
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                />
              )}
            </motion.div>
          );
        })}
      </section>

    </main>
  );
}
