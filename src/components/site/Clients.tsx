import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const brands = ["AlphaCorp", "NovaTech", "GreenLeaf", "MetroBuild", "SofaPlus", "CleanWare", "Apex Realty", "UrbanHive"];

const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-16">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-8">Our Valuable Clients</h2>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2.2}
          breakpoints={{ 640: { slidesPerView: 3.2 }, 768: { slidesPerView: 4.2 }, 1024: { slidesPerView: 6 } }}
          spaceBetween={16}
          loop
          autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
          speed={3500}
          allowTouchMove={false}
        >
          {brands.map((b) => (
            <SwiperSlide key={b}>
              <div className="glass rounded-xl h-20 flex items-center justify-center hover:scale-[1.03] transition-transform">
                <span className="font-heading">{b}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
