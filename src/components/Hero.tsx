"use client";
import { motion } from "framer-motion";


export default function Hero() {
return (
<section className="relative h-screen flex items-center justify-center text-center px-6 bg-gradient-to-b from-[#0d0a07]/90 to-[#1A0033]/80">
<motion.div
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
className="max-w-3xl"
>
<h1 className="text-6xl md:text-8xl font-semibold leading-tight">
Designing <span className="text-[#e86327]">Stories</span><br />that Breathe Emotion.
</h1>
<p className="text-gray-300 mt-6 text-lg">
I help brands move people — through color, motion, and emotion.
</p>
<motion.button
whileHover={{ scale: 1.05, boxShadow: "0 0 30px #e86327" }}
className="mt-10 px-8 py-3 bg-[#e86327] text-black rounded-full font-semibold"
>
See My Work
</motion.button>
</motion.div>
<div className="absolute inset-0 bg-[url('/grain.png')] opacity-10" />
</section>
);
}