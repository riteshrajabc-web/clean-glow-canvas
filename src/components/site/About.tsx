import React from "react";
import g1 from "@/assets/grid1.jpg";
import g3 from "@/assets/grid3.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4 order-2 md:order-1">
          <h2 className="font-heading text-3xl md:text-4xl">About Us</h2>
          <p className="text-muted-foreground">
            SLG Housekeeping Services delivers premium cleaning solutions for homes and businesses. We combine trained staff, eco-friendly products, and a customer-first approach to ensure spotless results.
          </p>
          <ul className="text-muted-foreground space-y-2">
            <li>• 100% satisfaction focus</li>
            <li>• Background-verified professionals</li>
            <li>• Fair, transparent pricing</li>
          </ul>
        </div>
        <div className="relative order-1 md:order-2">
          <div className="relative rounded-xl overflow-hidden border">
            <img src={g1} alt="Team cleaning living room" className="w-full h-64 md:h-80 object-cover" loading="lazy" />
            <div className="absolute -bottom-6 -right-6 w-40 md:w-56 rounded-xl overflow-hidden border shadow-xl">
              <img src={g3} alt="Sofa deep cleaning" className="w-full h-40 md:h-48 object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
