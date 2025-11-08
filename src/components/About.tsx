"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-36 overflow-hidden bg-gradient-to-b from-[#0D0A07] via-[#1A0033]/40 to-[#0D0A07]" // ✅ overflow hidden added
    >
      <div className="mx-auto w-[90%] md:w-[85%] xl:w-[80%] grid md:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-semibold mb-6 leading-tight">
            من هو أبوبكر؟
            
          </h2>

          <p className="text-white/80 leading-relaxed text-lg md:text-xl xl:text-[1.35rem] max-w-3xl">
            أبوبكر مصمم جرافيك يرى العالم من زاوية مختلفة. بالنسبة له، التصميم
            مو مجرد مهنة، بل وسيلة للتعبير عن الإحساس وتحويل الأفكار إلى مشهد
            بصري يُحس قبل أن يُرى.
          </p>

          <p className="text-white/70 leading-relaxed text-base md:text-lg xl:text-[1.2rem] max-w-3xl">
            بدأ رحلته من شغف بسيط بالألوان والتفاصيل، وتحول الشغف هذا إلى أسلوب
            حياة يصنع من كل مشروع قصة فريدة. يجمع بين الحس الفني والفكر
            التحليلي، ويبحث دائمًا عن التوازن بين الجمال والهدف.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm md:text-base">
            {["Photoshop", "Illustrator", "Figma", "After Effects", "Cinema 4D"].map(
              (s) => (
                <span
                  key={s}
                  className="px-4 py-2 rounded-full border border-white/15 bg-white/5 hover:border-[#e86327]/60 hover:text-[#e86327] transition font-medium"
                >
                  {s}
                </span>
              )
            )}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-[85%] md:w-[90%] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(232,99,39,0.25)] hover:shadow-[0_0_60px_rgba(232,99,39,0.35)] transition">
            <img
              src="/images/designer-portrait.jpg"
              alt="صورة أبوبكر"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-8 -left-8 h-36 w-36 bg-[#e86327]/30 blur-3xl rounded-full opacity-60" />
        </motion.div>
      </div>
    </section>
  );
}
