import React from "react";
import BeforeAfter from "@/components/gallery/BeforeAfter";
import beforeImg from "@/assets/gallery-before.jpg";
import afterImg from "@/assets/gallery-after.jpg";
import g1 from "@/assets/grid1.jpg";
import g2 from "@/assets/grid2.jpg";
import g3 from "@/assets/grid3.jpg";
import g4 from "@/assets/grid4.jpg";
import g5 from "@/assets/grid5.jpg";
import g6 from "@/assets/grid6.jpg";

const Gallery: React.FC = () => {
  const images = [g1, g2, g3, g4, g5, g6];
  return (
    <section id="gallery" className="container py-20">
      <div className="text-center mb-10">
        <h2 className="font-heading text-3xl md:text-4xl">Gallery</h2>
        <p className="text-muted-foreground mt-2">Before & After + Masonry Grid</p>
      </div>
      <div className="mb-10">
        <BeforeAfter before={beforeImg} after={afterImg} alt="Bathroom tiles cleaning" />
      </div>
      <div className="columns-2 md:columns-3 gap-4 [column-fill:balance]">
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Cleaning showcase ${i + 1}`} loading="lazy" className="mb-4 rounded-xl border break-inside-avoid" />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
