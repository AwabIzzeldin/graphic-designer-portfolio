"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex items-center overflow-hidden 
                 bg-gradient-to-b from-[#0D0A07] via-[#1A0033]/40 to-[#0D0A07]
                 py-24 md:py-32"
    >
      {/* 🔹 Lighter blur on mobile for performance */}
      <div className="absolute inset-0 bg-[#e86327]/10 blur-[80px] md:blur-[120px] -z-10" />

      <div className="mx-auto w-[90%] md:w-[85%] xl:w-[80%] grid md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-16 items-center">
        {/* ✅ Animate container only once */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="space-y-6 will-change-[transform,opacity]"
        >
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-semibold mb-6 leading-tight 
                         bg-gradient-to-r from-[#e86327] to-white bg-clip-text text-transparent">
            من هو أبوبكر؟
          </h2>

          <p className="text-white/80 leading-relaxed text-lg md:text-xl xl:text-[1.35rem] max-w-2xl">
            أبوبكر مصمم جرافيك يرى العالم من زاوية مختلفة. بالنسبة له، التصميم
            ليس مهنة، بل مشهد يترجم الإحساس ويحوّل الفكرة إلى تجربة تُرى وتُشعَر.
          </p>

          <p className="text-white/70 leading-relaxed text-base md:text-lg xl:text-[1.2rem] max-w-2xl">
            بدأ رحلته من شغف بسيط بالألوان، تحوّل إلى أسلوب حياة يجعل من كل مشروع
            لوحة تحكي قصة. يجمع بين الحس الفني والتحليل البصري ليخلق توازنًا بين
            الجمال والغاية.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm md:text-base">
            {["Photoshop", "Illustrator", "Figma", "After Effects", "Cinema 4D"].map(
              (s) => (
                <span
                  key={s}
                  className="px-4 py-2 rounded-full border border-white/15 bg-white/5 
                             hover:border-[#e86327]/60 hover:text-[#e86327] transition font-medium"
                >
                  {s}
                </span>
              )
            )}
          </div>
        </motion.div>

        {/* ✅ Single motion for image wrapper only */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center md:justify-end will-change-[transform,opacity]"
        >
          <div
            className="relative w-[85%] md:w-[90%] rounded-[2rem] overflow-hidden 
                       border border-white/10 shadow-[0_0_40px_rgba(232,99,39,0.25)] 
                       md:hover:shadow-[0_0_80px_rgba(232,99,39,0.35)] transition"
          >
            <img
              src="/images/designer.png"
              alt="صورة أبوبكر"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* 🔹 Soft animated orange glow */}
          <motion.div
            className="absolute -bottom-8 -left-8 h-40 w-40 bg-[#e86327]/40 blur-3xl rounded-full opacity-60"
            animate={{
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
