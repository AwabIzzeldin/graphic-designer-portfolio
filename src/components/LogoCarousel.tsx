"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  "/images/logos/my logoos-04.webp",
"/images/logos/my logoos-05.webp",
"/images/logos/my logoos-06.webp",
"/images/logos/my logoos-07.webp",
"/images/logos/my logoos-08.webp",
"/images/logos/my logoos-09.webp",
"/images/logos/my logoos-10.webp",
"/images/logos/my logoos-11.webp",
"/images/logos/my logoos-12.webp",
"/images/logos/my logoos-13.webp",
"/images/logos/my logoos-14.webp",
"/images/logos/my logoos-15.webp",
"/images/logos/my logoos-16.webp",
"/images/logos/my logoos-17.webp",
"/images/logos/my logoos-18.webp",
"/images/logos/my logoos-19.webp",
"/images/logos/my logoos-20.webp",
"/images/logos/my logoos-21.webp",
"/images/logos/my logoos-22.webp",
"/images/logos/my logoos-23.webp",
"/images/logos/my logoos-24.webp",
"/images/logos/my logoos-25.webp",
"/images/logos/my logoos-26.webp",
"/images/logos/my logoos-27.webp"

];

export default function LogoCarousel() {
  return (
    <section className="relative py-20 bg-[gradient-to-b from-[#0D0A07] via-[#1A0033]/30 to-[#0D0A07]] overflow-hidden">
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
        speed={2000}
        loop={true}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        spaceBetween={1}
        className="flex items-center"
      >
        {logos.map((logo, i) => (
          <SwiperSlide key={i} className="flex justify-center items-center">
            <div className=" hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
              <img
                src={logo}
                alt={`Logo ${i + 1}`}
                className="w-28 md:w-60 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
