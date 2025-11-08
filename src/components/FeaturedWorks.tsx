"use client";
import { motion } from "framer-motion";


const projects = [
{ id: 1, img: "/images/project1.jpg", title: "Sunset Poster" },
{ id: 2, img: "/images/project2.jpg", title: "Modern Identity" },
{ id: 3, img: "/images/project3.jpg", title: "Product Showcase" },
];


export default function FeaturedWorks() {
return (
<section className="py-24 bg-[#0d0a07]">
<h2 className="text-center text-4xl font-semibold mb-12">
Featured <span className="text-[#e86327]">Works</span>
</h2>
<div className="flex gap-8 overflow-x-auto px-8 snap-x snap-mandatory">
{projects.map((p) => (
<motion.div
key={p.id}
whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
transition={{ duration: 0.4 }}
className="relative snap-center shrink-0 w-[80vw] md:w-[40vw]"
>
<img src={p.img} alt={p.title} className="rounded-3xl shadow-lg object-cover" />
<div className="absolute bottom-6 left-6 text-xl font-semibold">
{p.title}
</div>
</motion.div>
))}
</div>
</section>
);
}