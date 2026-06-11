"use client";

import { Reveal } from "./Reveal";

export default function Gallery() {
  return (
    <section id="gallery" className="px-6 bg-white">
      <div className="max-w-7xl mb-28 mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <Reveal className="row-start-1 col-start-1 mr-[-60px] aspect-video">
            <img
              src="/Gestiona tus platillos con scaneat.jpg"
              title="Da de alta platillos y baja desde tu computadora, tablet, celular con ScanEat"
              alt="Da de alta platillos y baja desde tu computadora, tablet, celular con ScanEat"
              className="rounded-2xl w-full h-full object-cover shadow-2xl"
            />
          </Reveal>

          <Reveal
            delay={0.1}
            className="row-start-2 col-start-1 mr-[-60px] aspect-video self-end"
          >
            <img
              src="/Personaliza tu menu digital con scaneat.jpeg"
              title="Crea tu menu digital con la identidad de tu restaurante  hazlo todo a tu medida con ScanEat"
              alt="Crea tu menu digital con la identidad de tu restaurante  hazlo todo a tu medida con ScanEat"
              className="rounded-2xl w-full h-full object-cover shadow-2xl"
            />
          </Reveal>

          <Reveal
            delay={0.2}
            className="row-start-1 row-span-2 col-start-2 ml-20 "
          >
            <img
              src="/Cada vez mas restaurantes se estan cambiando a scaneat.jpg"
              title="Con ScanEat recibe retroalimentación en vivo de tus clientes y mejora tu servicio al momento"
              alt="Con ScanEat recibe retroalimentación en vivo de tus clientes y mejora tu servicio al momento"
              className="rounded-2xl w-full h-full object-cover shadow-2xl"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
