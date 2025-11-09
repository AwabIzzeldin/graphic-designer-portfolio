"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type Work = {
  brand: string;
  desc: string;
  service: string;
  img: string;
};

interface WorkCardProps {
  w: Work;
}

const works: Work[] = [
  {
    brand: "Froozy Panda",
    desc: "تصميم مرئي يعكس الانتعاش والطاقة، مع هوية مرحة ولافتة.",
    service: "تصميم هوية بصرية",
    img: "/images/hero1.jpg",
  },
  {
    brand: "Karma Studio",
    desc: "إعادة بناء العلامة بأسلوب راقٍ وبسيط يعكس فلسفة الجمال.",
    service: "تصميم شعار وهوية",
    img: "/images/hero2.jpg",
  },
  {
    brand: "Mocha Café",
    desc: "علامة بصرية دافئة تجمع بين الحنين والحداثة في كل تفصيلة.",
    service: "تصميم هوية ومطبوعات",
    img: "/images/hero3.jpg",
  },
  {
    brand: "Elite Vision",
    desc: "تجربة رقمية فاخرة تُظهر التميز في كل لمسة.",
    service: "تطوير موقع إلكتروني",
    img: "/images/hero4.jpg",
  },
  {
    brand: "Aura Skin",
    desc: "هوية أنثوية راقية بتدرجات ناعمة تعبّر عن النقاء والجمال.",
    service: "تصميم هوية وشعار",
    img: "/images/hero2.jpg",
  },
  {
    brand: "Studio Wave",
    desc: "تصميم رقمي نابض بالحركة مخصص لصناع المحتوى والإبداع.",
    service: "تصميم سوشيال ميديا",
    img: "/images/hero3.jpg",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#0D0A07] via-[#1A0033]/40 to-[#0D0A07] overflow-hidden"
    >
      {/* 🔆 Background Glow */}
      <div className="absolute -bottom-20 right-0 w-[40vw] h-[40vw] bg-[#e86327]/20 blur-[120px] rounded-full opacity-60 -z-10" />

      <div className="mx-auto w-[90%] md:w-[85%] xl:w-[80%]">
        {/* Header */}
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

        {/* Carousel */}
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1.1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="pb-16"
        >
          {works.map((w, i) => (
            <SwiperSlide key={i}>
              <WorkCard w={w} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA */}
        <div className="text-center mt-10">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-10 py-3 rounded-full font-medium bg-gradient-to-r from-[#e86327] to-[#ff9e4f] text-black shadow-[0_0_18px_#e86327]/50 hover:shadow-[0_0_28px_#e86327]/80 transition"
          >
            عرض جميع الأعمال
          </motion.a>
        </div>
      </div>

      {/* Swiper Style Customization */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 0 !important;
        }
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.4);
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
        .swiper-button-prev,
        .swiper-button-next {
          color: #e86327 !important;
          transition: opacity 0.3s;
        }
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          opacity: 0.8;
        }
      `}</style>
    </section>
  );
}

/* ✨ Simplified Glassy Project Card */
function WorkCard({ w }: WorkCardProps) {
  return (
    <div
      className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md 
                 hover:border-[#e86327]/40 transition-all flex flex-col"
    >
      {/* Image */}
      <div className="aspect-[16/10] relative overflow-hidden">
        <img
          src={w.img}
          alt={w.brand}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-all" />
      </div>

      {/* Text Section with Glass Glow */}
      <div
        className="p-6 text-left bg-gradient-to-br from-white/10 via-white/5 to-[#e86327]/10 
                   backdrop-blur-2xl border-t border-white/10"
      >
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-[#e86327] transition">
          {w.brand}
        </h3>
        <p className="text-white/70 text-sm leading-relaxed mb-3">{w.desc}</p>
        <span
          className="inline-block text-xs px-4 py-1.5 rounded-full bg-[#e86327]/20 
                     text-[#e86327] border border-[#e86327]/30 backdrop-blur-sm"
        >
          {w.service}
        </span>
      </div>
    </div>
  );
}
