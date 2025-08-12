import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Leaf, CalendarClock, BadgeCheck } from "lucide-react";

const services = [
  {
    title: "Cleaning by Area/Item",
    items: ["Bathrooms", "Water Tanks"],
    icon: Sparkles,
  },
  {
    title: "Residential Cleaning",
    items: ["1/2/3/4 BHK"],
    icon: BadgeCheck,
  },
  {
    title: "Furniture Cleaning",
    items: ["Sofa", "Upholstery"],
    icon: Leaf,
  },
  {
    title: "Large & Commercial",
    items: ["Villas", "Duplexes", "Offices"],
    icon: CalendarClock,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="container py-20 md:py-28">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl">Services</h2>
        <p className="text-muted-foreground mt-2">Glassmorphism cards with hover glow</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="glass rounded-xl p-6 group relative overflow-hidden"
          >
            <s.icon className="text-primary mb-4" />
            <h3 className="font-heading text-xl mb-2">{s.title}</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              {s.items.map((it) => (
                <li key={it}>• {it}</li>
              ))}
            </ul>
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute -inset-10 bg-primary/10 blur-2xl rounded-full" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Services;
