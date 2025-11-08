"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "خالد",
    role: "مالك Froozy Panda",
    img: "/images/designer-portrait.jpg",
    quote: "النتيجة كانت فخمة جدًا.",
  },
  {
    name: "ملك",
    role: "مالكة Froozy Panda",
    img: "/images/designer-portrait.jpg",
    quote: "الخدمة كانت سريعة والتصميم متقن.",
  },
  {
    name: "ريم",
    role: "صاحبة متجر Blossom",
    img: "/images/designer-portrait.jpg",
    quote: "تصميم احترافي ومظهر فاخر جدًا.",
  },
  {
    name: "خالد",
    role: "مالك Brandify",
    img: "/images/designer-portrait.jpg",
    quote: "التعاون كان سلس والنتيجة مذهلة.",
  },
  {
    name: "نورة",
    role: "مؤسسة Aura Studio",
    img: "/images/designer-portrait.jpg",
    quote: "فهم سريع للهوية وتنفيذ بجودة عالية.",
  },
  {
    name: "ليان",
    role: "صاحبة Minimal Touch",
    img: "/images/designer-portrait.jpg",
    quote: "النتيجة كانت أفضل من المتوقع.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-20 md:py-28 bg-gradient-to-b from-[#0D0A07] via-[#1A0033]/40 to-[#0D0A07] overflow-hidden"
    >
      {/* Subtle glow background */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-[#e86327]/10 blur-[100px] md:blur-[140px] rounded-full opacity-60 -z-10" />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto w-[90%] md:w-[85%] xl:w-[80%] text-center mb-16 will-change-[transform,opacity]"
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">آراء العملاء</h2>
        <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          تجارب عملاء حقيقية عكست رؤيتهم البصرية وتحولت إلى قصص نجاح.
        </p>
      </motion.div>

      {/* ✅ Mobile Carousel */}
      <div className="md:hidden will-change-[transform,opacity]">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1.1}
          centeredSlides
          className="px-6 pb-16"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <TestimonialCard t={t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ✅ Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] md:w-[80%] mx-auto">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>

      {/* Swiper Pagination Styles */}
      <style jsx global>{`
        .swiper-pagination {
          position: absolute;
          bottom: -20px !important;
          text-align: center !important;
          width: 100%;
        }
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.4);
          width: 10px;
          height: 10px;
          opacity: 0.6;
          margin: 0 5px !important;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #e86327 !important;
          width: 18px !important;
          height: 10px !important;
          border-radius: 8px !important;
          opacity: 1 !important;
          box-shadow: 0 0 10px #e86327;
        }
      `}</style>
    </section>
  );
}

/* ✅ Lightweight Card */
type Testimonial = {
  name: string;
  role: string;
  img: string;
  quote: string;
};

interface TestimonialCardProps {
  t: Testimonial;
}

function TestimonialCard({ t }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col md:flex-row items-center gap-6 p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 
                 backdrop-blur-xl text-left transition-all hover:border-[#e86327]/40 hover:bg-white/10 
                 shadow-[0_0_25px_rgba(232,99,39,0.1)] will-change-[transform,opacity]"
    >
      {/* Avatar */}
      <div className="flex-shrink-0">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-[#e86327]/30 shadow-[0_0_15px_rgba(232,99,39,0.2)]">
          <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Text */}
      <div>
        <p className="text-white/80 text-base md:text-lg leading-relaxed mb-4">“{t.quote}”</p>
        <div className="text-sm md:text-base text-[#e86327] font-semibold">
          {t.name} <span className="text-white/60 font-normal">| {t.role}</span>
        </div>
      </div>
    </motion.div>
  );
}
