"use client";
import { motion } from "framer-motion";

export default function Services() {
  const items = [
    {
      title: "تصميم هوية بصرية",
      desc: "من الشعار إلى الألوان والتطبيقات — نخلق هوية تُشبهك وتُميزك.",
    },
    {
      title: "تصميم واجهات و مواقع",
      desc: "نصنع تجارب رقمية مميزة و احترافية تليق بأعمالكم",
    },
    {
      title: "تصميم محتوى مرئي",
      desc: "منشورات ومقاطع قصيرة بأسلوب راقٍ تواكب هوية علامتك.",
    },
    {
      title: "حملات وإعلانات",
      desc: "تصميم بصري يعزز الوصول ويزيد الحضور الرقمي بعناية بصرية.",
    },
  ];

  return (
    <section id="services" className="relative py-24 md:py-36">
      <div className="mx-auto w-[90%] md:w-[85%] xl:w-[80%]">
        <h2 className="text-4xl md:text-5xl font-semibold mb-14 text-center">
          خدماتي
        </h2>

        {/* Cinematic Tiles Grid */}
        <div className="grid md:grid-cols-3 grid-rows-2 gap-8">
          {/* Tile 1 - Large Vertical */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="row-span-2 rounded-3xl p-10 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#e86327]/30 transition backdrop-blur-xl shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_30px_#e86327]/30"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-[#e86327] mb-4">
              {items[0].title}
            </h3>
            <p className="text-white/70 leading-relaxed text-base md:text-lg">
              {items[0].desc}
            </p>
          </motion.div>

          {/* Tile 2 - Wide */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-2 rounded-3xl p-10 bg-gradient-to-r from-[#1A0033]/40 to-[#e86327]/10 border border-white/10 hover:border-[#e86327]/40 transition shadow-[0_0_20px_rgba(232,99,39,0.15)]"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
              {items[1].title}
            </h3>
            <p className="text-white/70 leading-relaxed text-base md:text-lg">
              {items[1].desc}
            </p>
          </motion.div>

          {/* Tile 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="rounded-3xl p-10 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#e86327]/30 transition backdrop-blur-xl"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-[#e86327] mb-4">
              {items[2].title}
            </h3>
            <p className="text-white/70 leading-relaxed text-base md:text-lg">
              {items[2].desc}
            </p>
          </motion.div>

          {/* Tile 4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-3xl p-10 bg-[#e86327]/10 border border-[#e86327]/30 hover:bg-[#e86327]/20 transition shadow-[0_0_20px_rgba(232,99,39,0.15)]"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              {items[3].title}
            </h3>
            <p className="text-white/80 leading-relaxed text-base md:text-lg">
              {items[3].desc}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}