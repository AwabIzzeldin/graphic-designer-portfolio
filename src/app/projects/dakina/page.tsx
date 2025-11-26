"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DakinaCaseStudy() {
  const images = [
    "/images/dakina/dakina-1.webp",
    "/images/dakina/dakina-2.webp",
    "/images/dakina/dakina-3.mp4",
    "/images/dakina/dakina-4.mp4",
    "/images/dakina/dakina-5.webp",
    "/images/dakina/dakina-6.webp",
    "/images/dakina/dakina-7.png",
    "/images/dakina/dakina-8.mp4",
    "/images/dakina/dakina-9.webp",
    "/images/dakina/dakina-10.webp",
    "/images/dakina/dakina-11.webp",
    "/images/dakina/dakina-12.webp",
  ];

  return (
    <main className="bg-[#0D0A07] text-white">

      {/* ---------------- HERO ---------------- */}
      <section className="relative h-[85vh] w-full flex items-center justify-center text-center px-6 overflow-hidden">

        {/* Background Image — OPTIMIZED */}
        <Image
          src="/images/dakina/dakina-1.webp"
          alt="Dakina Hero"
          priority
          fill
          sizes="100vw"
          className="object-cover brightness-[0.55] blur-[2px]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-[#0D0A07]/80"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-semibold mb-4"
          >
            داكنة | Dakina
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg md:text-xl text-white/80 leading-relaxed"
          >
            علامة تجارية بهوية أنيقة، بسيطة، وحديثة
            مستوحاة من هدوء أجواء القهوة.
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
                  alt={`Dakina image ${i}`}
                  width={1800}
                  height={1200}
                  quality={85}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="/blur-placeholder.png"
                  sizes="100vw"
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
