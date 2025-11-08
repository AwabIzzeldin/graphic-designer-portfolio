"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function Hero() {
  const slides = [
    { img: "/images/hero1.jpg", alt: "تصميم علامة تجارية", brand: "Froozy Panda" },
    { img: "/images/hero2.jpg", alt: "هوية بصرية", brand: "Froozy Panda" },
    { img: "/images/hero3.jpg", alt: "مشروع موشن", brand: "Visual Identity" },
    { img: "/images/hero4.jpg", alt: "تصميم واجهة تطبيق", brand: "Motion Graphics" },
  ];

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="absolute inset-0 w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            {/* 🖼️ الصورة + overlay + النص */}
            <div className="relative w-full h-full">
              <img
                src={slide.img}
                alt={slide.alt}
                className="absolute inset-0 w-full h-full object-cover brightness-[0.55]"
              />

              {/* طبقة تدرج سينمائي */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0D0A07]/30 via-[#1A0033]/30 to-[#0D0A07]/30" />

              {/* المحتوى الرئيسي */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
              >
                <motion.h1
                  className="text-4xl md:text-7xl font-bold leading-tight text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.6)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  أصنع <span className="text-[#e86327]">تصاميم </span>
                  <br className="hidden md:block" />
                  تترك <span className="text-[#e86327]">أثرًا بصريًا</span> لا يُنسى.
                </motion.h1>

                <motion.p
                  className="text-white/70 text-lg md:text-2xl mt-6 max-w-2xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  من الشعار إلى التجربة — كل تصميم له حكاية وله إحساس.
                </motion.p>

                <motion.div
                  className="mt-10 flex flex-wrap justify-center gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <a
                    href="#projects"
                    className="text-xl px-8 py-3 rounded-full bg-[#e86327] text-black font-semibold shadow-[0_0_14px_#e86327] hover:shadow-[0_0_22px_#e86327] transition"
                  >
                     أعمالي
                  </a>
                  <a
                    href="#contact"
                    className="text-xl px-8 py-3 rounded-full border border-white/20 text-white hover:border-white/40 transition"
                  >
                    تواصل معي
                  </a>
                </motion.div>
              </motion.div>

              {/* 🟠 نص اسم المشروع/البراند */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute bottom-20 w-full text-center"
              >
                <p className="text-[#e86327] text-sm md:text-base tracking-[0.25em] font-medium uppercase opacity-90">
                  {slide.brand}
                </p>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ⚪ تنسيق النقاط */}
      <style jsx global>{`
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
          height: 10px !important;
          border-radius: 8px !important;
          opacity: 1 !important;
          box-shadow: 0 0 10px #e86327;
        }
        .swiper-pagination {
          bottom: 40px !important;
          z-index: 50 !important;
        }
      `}</style>
    </section>
  );
}
