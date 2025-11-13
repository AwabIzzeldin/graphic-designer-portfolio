import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import LogoCarousel from "@/components/LogoCarousel";
import Footer from "@/components/Footer";

export default function HomePage() {
return (
<main dir="rtl" className="bg-[#0D0A07] text-white selection:bg-[#e86327]/30 selection:text-white">
<Navbar />
<Hero />
<About />
<Services />
<Projects />
<Testimonials />
<Contact />
{/* <LogoCarousel /> */}
<Footer />
</main>
);
}