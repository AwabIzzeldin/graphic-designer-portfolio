"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-[#0D0A07] via-[#1A0033]/30 to-transparent pt-20 pb-10 border-t border-white/10 text-center">
      {/* subtle orange glow */}
      <div className="absolute inset-0 bg-[#e86327]/5 blur-[100px] -z-10" />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto w-[90%] md:w-[85%] xl:w-[80%]"
      >
        <h3 className="text-2xl font-semibold mb-4">خلينا نبدأ مشروعك القادم</h3>
        <p className="text-white/60 mb-8 max-w-md mx-auto text-sm md:text-base">
          تصميم، تطوير، وهوية رقمية متكاملة — بخبرة تجمع بين الفن والابداع
        </p>

        {/* Social / Contact Buttons */}
        <div className="flex justify-center gap-6 mb-10">
          <Link
            href="#contact"
            className="text-white/70 hover:text-[#e86327] transition text-sm md:text-base"
          >
            تواصل معنا
          </Link>
          <Link
            href="#services"
            className="text-white/70 hover:text-[#e86327] transition text-sm md:text-base"
          >
            الخدمات
          </Link>
          <Link
            href="#projects"
            className="text-white/70 hover:text-[#e86327] transition text-sm md:text-base"
          >
            الأعمال
          </Link>
        </div>

        {/* Divider */}
        <div className="h-px w-2/3 mx-auto bg-white/10 mb-6"></div>

        {/* Developer credit */}
        {/* <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="https://webcrafts.studio"
            target="_blank"
            className="inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#e86327]/60 text-white/70 hover:text-[#e86327] text-sm font-medium backdrop-blur-md transition-all shadow-[0_0_10px_rgba(232,99,39,0)] hover:shadow-[0_0_15px_#e86327]"
          >
            Developed by <span className="text-[#e86327] font-semibold">WebCrafts</span>
          </Link>
        </motion.div> */}

        {/* Subtext */}
        <p className="text-white/40 text-xs mt-4">
          © {new Date().getFullYear()} — جميع الحقوق محفوظة
        </p>
      </motion.div>
    </footer>
  );
}
