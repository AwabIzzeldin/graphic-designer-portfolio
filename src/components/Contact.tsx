"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-16 md:py-20 bg-gradient-to-b from-[#0D0A07] via-[#1A0033]/40 to-[#0D0A07] overflow-hidden"
    >
      {/* خلفية توهج برتقالي */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#e86327]/5 via-transparent to-transparent blur-[120px] -z-10" />

      <div className="mx-auto w-[90%] md:w-[85%] xl:w-[80%] text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-semibold mb-3"
        >
          تواصل معي
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/60 max-w-2xl mx-auto mb-8 text-base md:text-lg"
        >
          عندك فكرة، مشروع، أو تعاون حاب نشتغل عليه سوا؟  
          اكتب التفاصيل و حا نتواصل معاك!
        </motion.p>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 text-left"
        >
          {/* Name */}
          <div className="col-span-1">
            <input
              type="text"
              placeholder="الاسم"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#e86327]/60 focus:shadow-[0_0_15px_#e86327] transition"
            />
          </div>

          {/* Email */}
          <div className="col-span-1">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#e86327]/60 focus:shadow-[0_0_15px_#e86327] transition"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <textarea
              rows={6}
              placeholder="اكتب رسالتك أو تفاصيل المشروع..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#e86327]/60 focus:shadow-[0_0_15px_#e86327] transition resize-none"
            ></textarea>
          </div>

          {/* Submit button */}
          <div className="md:col-span-2 text-center pt-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-12 py-3 rounded-full font-semibold bg-gradient-to-r from-[#e86327] to-[#ff9e4f] text-black shadow-[0_0_18px_#e86327] hover:shadow-[0_0_28px_#e86327] transition"
            >
              إرسال الرسالة
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
