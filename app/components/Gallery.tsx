"use client";

import { Reveal } from "./Reveal";

export default function Gallery() {
  return (
    <section id="gallery" className="px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <Reveal className="row-start-1 col-start-1">
            <img
              src="/agiliza_servicio.jpg"
              alt=""
              className="rounded-2xl w-full h-full object-cover"
            />
          </Reveal>

          <Reveal delay={0.1} className="row-start-2 col-start-1">
            <img
              src="/mas_restaurantes.jpg"
              alt=""
              className="rounded-2xl w-full h-full object-cover"
            />
          </Reveal>

          <Reveal delay={0.2} className="row-start-1 row-span-2 col-start-2">
            <img
              src="/varias_personas.jpg"
              alt=""
              className="rounded-2xl w-full h-full object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
