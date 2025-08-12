import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const testimonials = [
  { name: "Aarav", text: "Sparkling clean! The team is punctual and professional." },
  { name: "Ishita", text: "Best deep cleaning we’ve had. Loved the eco-friendly products." },
  { name: "Rahul", text: "Transparent prices and excellent results. Highly recommended!" },
  { name: "Fatima", text: "Our office looks brand new every week." },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-muted/40">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Testimonials</h2>
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView={1.1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 120, modifier: 1, slideShadows: false }}
          loop
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="pb-8"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <article className="glass rounded-xl p-6 h-full">
                <p className="text-lg">“{t.text}”</p>
                <div className="mt-4 text-sm text-muted-foreground">— {t.name}</div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
