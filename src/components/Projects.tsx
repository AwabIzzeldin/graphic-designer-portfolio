"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Work = {
  title: string;
  img: string;
};

interface WorkCardProps {
  w: Work;
  i: number;
}

const works: Work[] = [
  { title: "Project 1", img: "/images/hero1.jpg" },
  { title: "Project 2", img: "/images/hero2.jpg" },
  { title: "Project 3", img: "/images/hero3.jpg" },
  { title: "Project 4", img: "/images/hero4.jpg" },
  { title: "Project 5", img: "/images/hero2.jpg" },
  { title: "Project 6", img: "/images/hero3.jpg" },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#0D0A07] via-[#1A0033]/40 to-[#0D0A07] overflow-hidden"
    >
      <div className="absolute -bottom-20 right-0 w-[40vw] h-[40vw] bg-[#e86327]/20 blur-[120px] rounded-full opacity-60 -z-10" />

      <div className="mx-auto w-[90%] md:w-[85%] xl:w-[80%]">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold relative">
            الأعمال
            <span className="absolute -bottom-2 left-0 w-16 h-[3px] bg-[#e86327] rounded-full"></span>
          </h2>
          <a
            href="#contact"
            className="text-sm text-[#e86327] hover:underline hover:brightness-125 transition"
          >
            اطلب مشروعًا
          </a>
        </div>

        <div className="md:hidden">
          <Swiper
            spaceBetween={24}
            slidesPerView={1.15}
            breakpoints={{
              480: { slidesPerView: 1.4 },
            }}
          >
            {works.map((w, i) => (
              <SwiperSlide key={i}>
                <WorkCard w={w} i={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((w, i) => (
            <WorkCard key={i} w={w} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCard({ w, i }: WorkCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md hover:border-[#e86327]/40 transition-all"
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <img
          src={w.img}
          alt={w.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-all" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="text-lg md:text-xl font-medium text-white mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
        >
          {w.title}
        </motion.h3>

        <motion.span
          whileHover={{ scale: 1.05 }}
          className="inline-block text-xs px-4 py-1.5 rounded-full bg-[#e86327]/25 text-[#e86327] border border-[#e86327]/40 backdrop-blur-sm cursor-pointer opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
        >
          تفاصيل المشروع
        </motion.span>
      </div>
    </motion.div>
  );
}
