"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { PenTool, Palette, Monitor, Lightbulb } from "lucide-react";

type Service = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

export default function Services() {
  const items: Service[] = [
    {
      title: "تصميم هويات بصرية",
      desc: "نصمم هوية بصرية متكاملة تعكس شخصية علامتك وتترك أثرًا بصريًا فخمًا ودائمًا.",
      icon: <Palette className="w-7 h-7 text-[#e86327]" />,
    },
    {
      title: "تصميم شعارات وسوشيال ميديا",
      desc: "شعارات ومنشورات تعبر عن روح علامتك وتبرزها بأسلوب متناسق وجذاب على المنصات الرقمية.",
      icon: <PenTool className="w-7 h-7 text-[#e86327]" />,
    },
    {
      title: "تطوير وبرمجة مواقع",
      desc: "نحوّل التصاميم إلى مواقع تفاعلية سريعة ومتقنة بتجربة استخدام جذابة ومظهر عصري.",
      icon: <Monitor className="w-7 h-7 text-[#e86327]" />,
    },
    {
      title: "استشارات في التصميم والهوية",
      desc: "نقدّم رؤى واستشارات تساعدك على تطوير علامتك وتعزيز حضورها البصري باحترافية.",
      icon: <Lightbulb className="w-7 h-7 text-[#e86327]" />,
    },
  ];

  return (
    <section
      id="services"
      className="relative flex flex-col items-center justify-center bg-gradient-to-b from-[#0D0A07] via-[#1A0033]/40 to-[#0D0A07] overflow-hidden text-center py-24 md:py-32"
    >
      {/* Background Glow - optimized */}
      <div className="absolute inset-0 bg-[#e86327]/5 blur-[80px] md:blur-[140px] -z-10 opacity-60" />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="space-y-4 mb-12"
      >
        <h2 className="text-4xl md:text-6xl font-semibold">خدماتي</h2>
        <p className="text-white/60 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
          حلول تصميم وبرمجة واستشارات متكاملة تساعدك على بناء علامة قوية ومؤثرة.
        </p>
      </motion.div>

      {/* Mobile Carousel */}
      <div className="md:hidden w-full px-2">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView="auto"
          centeredSlides
          className="pb-12"
        >
          {items.map((item, i) => (
            <SwiperSlide key={i} className="!w-[85%]">
              <ServiceCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-[90%] md:w-[80%]">
        {items.map((item, i) => (
          <ServiceCard key={i} item={item} />
        ))}
      </div>

      {/* Animated Glow Under Section */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[16vh] bg-[#e86327]/10 blur-[80px] rounded-full"
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.12, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Swiper Pagination Styling */}
      <style jsx global>{`
        .swiper-pagination {
          position: relative;
          margin-top: 1rem;
        }
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.4);
          width: 10px;
          height: 10px;
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #e86327 !important;
          width: 18px !important;
          border-radius: 8px !important;
          opacity: 1 !important;
          box-shadow: 0 0 8px #e86327;
        }
      `}</style>
    </section>
  );
}

/* ------------------------- Optimized Service Card ------------------------- */

function ServiceCard({ item }: { item: Service }) {
  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="relative rounded-3xl p-8 md:p-10 bg-white/5 border border-white/10 
                 hover:border-[#e86327]/40 backdrop-blur-xl transition-all text-left 
                 overflow-hidden group"
    >
      {/* Hover Glow Overlay (Optimized) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#e86327]/25 via-transparent to-transparent opacity-0 group-hover:opacity-25 transition-all duration-500" />

      <div className="mb-5">{item.icon}</div>

      <h3 className="text-2xl font-semibold text-white mb-3 transition-colors group-hover:text-[#e86327]">
        {item.title}
      </h3>

      <p className="text-white/70 text-base md:text-lg leading-relaxed">
        {item.desc}
      </p>
    </motion.div>
  );
}
