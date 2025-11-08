"use client";
import { motion } from "framer-motion";


export default function About() {
return (
<section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-32 bg-[#1A0033]/60">
<motion.img
src="/images/designer-portrait.jpg"
alt="Designer portrait"
initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}
className="w-full md:w-1/2 rounded-2xl object-cover shadow-lg"
/>
<motion.div
initial={{ opacity: 0, x: 50 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}
className="mt-10 md:mt-0 md:w-1/2 md:pl-12"
>
<h2 className="text-5xl font-semibold mb-6">
The Art <span className="text-[#e86327]">Behind</span> the Brand
</h2>
<p className="text-gray-300 leading-relaxed">
Every project begins with a spark — an emotion, a story, a texture of life. I turn those sparks into visuals that speak louder than words.
</p>
</motion.div>
</section>
);
}