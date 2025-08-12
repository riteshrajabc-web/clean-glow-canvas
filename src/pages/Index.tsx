import React, { useEffect } from "react";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import WhyUs from "@/components/site/WhyUs";
import Gallery from "@/components/site/Gallery";
import Testimonials from "@/components/site/Testimonials";
import Clients from "@/components/site/Clients";
import About from "@/components/site/About";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Rellax from "rellax";

const Index = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true, offset: 60 });
    const r = new Rellax(".rellax", { speed: -2, center: false, round: true });
    return () => r.destroy();
  }, []);

  return (
    <div>
      <Navbar />

      {/* Parallax background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="rellax absolute top-32 left-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="rellax absolute top-1/2 right-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl" data-rellax-speed="-3" />
        <div className="rellax absolute bottom-24 left-1/3 h-48 w-48 rounded-full bg-secondary/10 blur-2xl" data-rellax-speed="-1" />
      </div>

      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <Clients />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
