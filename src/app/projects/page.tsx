"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface Project {
  title: string;
  img: string;
  service: string;
  slug: string;   // link to project page
}

const projects: Project[] = [
  {
    title: "داكنة للقهوة",
    img: "/images/dakina/dakina-1.png",
    service: "Visual Identity",
    slug: "/projects/dakina",
  },
  {
    title: "فروزي باندا",
    img: "/images/froozypanda/froozy-6.png",
    service: "Visual Identity",
    slug: "/projects/froozypanda",
  },
  {
    title: "وقف سخاء",
    img: "/images/hero2.jpg",
    service: "Visual Identity",
    slug: "/projects/sakhaa",
  },
];

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0D0A07] via-[#1A0033]/40 to-[#0D0A07] text-white">

      {/* ---------------- HERO ---------------- */}
      <section className="pt-28 md:pt-40 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold mb-4"
        >
          جميع الأعمال
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-white/70 max-w-2xl mx-auto text-lg"
        >
          رحلة بصرية تجمع بين الهويات، العلامات التجارية، التصميم، والفيديو —  
          كل مشروع له قصة، وكل قصة لها بصمة.
        </motion.p>
      </section>

      {/* ---------------- PROJECT GRID ---------------- */}
      <section className="mx-auto w-[90%] md:w-[85%] xl:w-[80%] pb-32">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              onClick={() => router.push(p.slug)}
              className="group cursor-pointer rounded-3xl overflow-hidden 
                         border border-white/10 bg-white/[0.05] backdrop-blur-sm
                         hover:border-[#e86327]/40 
                         hover:shadow-[0_0_25px_rgba(232,99,39,0.25)]
                         transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 
                             transition-transform duration-700"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 
                                bg-gradient-to-t from-black/70 via-black/20 to-transparent 
                                group-hover:from-[#e86327]/50 
                                transition-all duration-500" 
                />
              </div>

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold group-hover:text-[#e86327] transition">
                  {p.title}
                </h3>
                <p className="text-white/70 text-sm">{p.service}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <div className="text-center pb-24">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/contact"
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
