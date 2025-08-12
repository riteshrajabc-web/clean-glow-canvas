import React from "react";

const WhyUs: React.FC = () => {
  const features = [
    { title: "Trained Staff", desc: "Experienced and verified professionals" },
    { title: "Eco-Friendly", desc: "Safe, green products for your family" },
    { title: "Flexible Scheduling", desc: "We work around your time" },
    { title: "Transparent Pricing", desc: "No hidden charges" },
  ];
  return (
    <section id="why-us" className="py-16 md:py-24 bg-muted/40">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl mb-8 text-center">Why Choose Us</h2>
        <div className="flex gap-6 overflow-x-auto snap-x pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {features.map((f) => (
            <article key={f.title} className="min-w-[260px] md:min-w-[340px] snap-start glass rounded-xl p-6">
              <h3 className="font-heading text-xl mb-2">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
