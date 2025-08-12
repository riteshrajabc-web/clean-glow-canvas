import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 md:pt-32">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight">
            Your Space, Our <span className="text-primary">Shine</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-prose">
            Premium residential and commercial cleaning tailored to your schedule.
            Trained staff, eco-friendly products, and spotless results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" variant="hero">
              <a href="#contact" aria-label="Get a Free Quote">Get a Free Quote</a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="tel:+919000000000" aria-label="Call Us Now">Call Us Now</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-xl overflow-hidden border"
        >
          <div className="absolute inset-0 pointer-events-none">
            {/* animated bubbles */}
            <div className="absolute -left-6 top-8 h-24 w-24 rounded-full bg-primary/20 blur-xl animate-float" />
            <div className="absolute right-6 top-10 h-16 w-16 rounded-full bg-accent/40 blur-md animate-float" />
            <div className="absolute -bottom-6 left-12 h-20 w-20 rounded-full bg-secondary/20 blur-lg animate-float" />
          </div>
          <video
            className="w-full h-[260px] md:h-[420px] object-cover"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster="/placeholder.svg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
