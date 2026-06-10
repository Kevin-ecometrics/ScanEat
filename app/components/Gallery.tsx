"use client";

import { motion, AnimatePresence } from "framer-motion";
import { RevealList } from "./Reveal";

export default function Gallery() {
  return (
    <section id="gallery" className="px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <RevealList stagger={0.1} className="grid grid-cols-2 gap-4">
          <img
            src="/agiliza_servicio.jpg"
            alt=""
            className="rounded-2xl row-start-1 col-start-1"
          />

          <img
            src="/mas_restaurantes.jpg"
            alt=""
            className="rounded-2xl row-start-2 col-start-1"
          />

          <img
            src="/varias_personas.jpg"
            alt=""
            className="rounded-2xl row-span-2 col-start-2 row-start-1"
          />
        </RevealList>
      </div>
    </section>
  );
}
