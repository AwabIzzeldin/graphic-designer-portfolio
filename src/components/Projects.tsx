"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Work = {
  brand: string;
  desc: string;
  service: string;
  preview: string;
  link: string; // <-- NEW
};

const works: Work[] = [
  {
    brand: "Froozy Panda",
    desc: "تصميم مرئي يعكس الانتعاش والطاقة، مع هوية مرحة ولافتة.",
    service: "تصميم هوية بصرية",
    preview: "/images/froozypanda/froozy-1.png",
    link: "/projects/froozy-panda",
  },
  {
    brand: "Dakina Coffee",
    desc: "إعادة بناء العلامة بأسلوب راقٍ وبسيط يعكس فلسفة الجمال.",
    service: "تصميم شعار وهوية",
    preview: "/images/dakina/dakina-1.png",
    link: "/projects/dakina",
  },
  {
    brand: "Lumix Solutions",
    desc: "علامة بصرية دافئة تجمع بين الحنين والحداثة في كل تفصيلة.",
    service: "تصميم هوية ومطبوعات",
    preview: "/images/lumix-preview.png",
    link: "/projects/lumix",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#0D0A07] via-[#1A0033]/40 to-[#0D0A07]"
    >
      {/* Background glow */}
      <div className="absolute -bottom-20 right-0 w-[40vw] h-[40vw] bg-[#e86327]/20 blur-[120px] rounded-full opacity-60 -z-10" />

      <div className="mx-auto w-[90%] md:w-[85%] xl:w-[80%]">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold relative">
            الأعمال
            <span className="absolute -bottom-2 left-0 w-16 h-[3px] bg-[#e86327] rounded-full"></span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {works.map((w, i) => (
            <WorkCard key={i} w={w} />
          ))}
        </div>

        {/* View All Works */}
        <div className="text-center mt-16">
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-3 rounded-full font-medium 
                       bg-gradient-to-r from-[#e86327] to-[#ff9e4f] text-black 
                       shadow-[0_0_18px_#e86327]/50 hover:shadow-[0_0_28px_#e86327]/80 
                       transition"
          >
            عرض جميع الأعمال
          </motion.a>
        </div>

      </div>
    </section>
  );
}

/* ---------------- Clickable Card (No Modal) ---------------- */
function WorkCard({ w }: { w: Work }) {
  return (
    <Link href={w.link} className="group block">
      <div
        className="cursor-pointer rounded-3xl overflow-hidden 
                   border border-white/10 bg-white/[0.05] backdrop-blur-md 
                   hover:border-[#e86327]/40 hover:shadow-[0_0_25px_rgba(232,99,39,0.25)]
                   transition-all duration-500 ease-out flex flex-col"
      >
        {/* Image */}
        <div className="aspect-[16/10] relative overflow-hidden">
          <img
            src={w.preview}
            alt={w.brand}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                       group-hover:from-[#e86327]/40 group-hover:via-black/20 group-hover:to-transparent 
                       transition-colors duration-500"
          />
        </div>

        {/* Text Section */}
        <div
          className="p-6 text-left transition-all duration-500 
                     bg-gradient-to-br from-white/[0.05] to-white/[0.02] 
                     group-hover:from-[#e86327]/20 group-hover:to-[#ff9e4f]/25"
        >
          <h3
            className="text-xl md:text-2xl font-semibold text-white mb-2 
                       transition-colors duration-300 group-hover:text-[#e86327]"
          >
            {w.brand}
          </h3>

          <p className="text-white/70 text-sm leading-relaxed mb-3">
            {w.desc}
          </p>

          <span
            className="inline-block text-xs px-4 py-1.5 rounded-full 
                       bg-[#e86327]/20 text-[#e86327] border border-[#e86327]/30"
          >
            {w.service}
          </span>
        </div>
      </div>
    </Link>
  );
}
