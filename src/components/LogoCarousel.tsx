"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  "/images/logos/froozy.png",
  "/images/logos/froozy2.jpg",
  "/images/logos/froozy.png",
  "/images/logos/froozy2.jpg",
  "/images/logos/froozy.png",
  "/images/logos/froozy2.jpg",
];

export default function LogoCarousel() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0D0A07] via-[#1A0033]/30 to-[#0D0A07] overflow-hidden">
      {/* subtle glow background */}
      <div className="absolute inset-0 bg-[#e86327]/5 blur-[120px] -z-10" />

      <div className="mx-auto w-[90%] md:w-[85%] xl:w-[80%] text-center mb-10">
        <h2 className="text-white/80 text-xl md:text-3xl tracking-wider mb-2">
          عملت مع علامات تركت بصمتها
        </h2>
        <div className="mx-auto w-16 h-[2px] bg-[#e86327]/60 rounded-full"></div>
      </div>

      {/* Carousel */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={4000}
        loop={true}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        spaceBetween={40}
        className="flex items-center"
      >
        {logos.map((logo, i) => (
          <SwiperSlide key={i} className="flex justify-center items-center">
            <div className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
              <img
                src={logo}
                alt={`Logo ${i + 1}`}
                className="w-28 md:w-36 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
