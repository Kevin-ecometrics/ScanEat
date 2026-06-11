"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

const images = [
  {
    src: "/Gestiona tus platillos con scaneat.jpg",
    alt: "Da de alta platillos y baja desde tu computadora, tablet, celular con ScanEat",
  },
  {
    src: "/Personaliza tu menu digital con scaneat.jpeg",
    alt: "Crea tu menu digital con la identidad de tu restaurante hazlo todo a tu medida con ScanEat",
  },
  {
    src: "/Cada vez mas restaurantes se estan cambiando a scaneat.jpg",
    alt: "Con ScanEat recibe retroalimentacion en vivo de tus clientes y mejora tu servicio al momento",
  },
];

function ZoomIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

type ImageItem = (typeof images)[number];

function BentoCard({ image, onClick }: { image: ImageItem; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full h-full overflow-hidden rounded-2xl shadow-lg cursor-zoom-in focus:outline-none focus-visible:ring-4 focus-visible:ring-green-400"
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
        <ZoomIcon />
      </div>
    </button>
  );
}

function Modal({ image, onClose }: { image: ImageItem; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        className="relative z-10 bg-black rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-full"
        initial={{ scale: 0.92, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 16 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white text-gray-700 rounded-full p-2 shadow-md transition-colors"
          aria-label="Cerrar"
        >
          <CloseIcon />
        </button>
        <div className="w-full aspect-video">
          <img src={image.src} alt={image.alt} className="w-full h-full object-cover" draggable={false} />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="px-6 pb-28 bg-white">
      <div className="max-w-6xl mx-auto">
        {/*
          Flexbox row: align-items stretch (default) makes the right column
          grow to the exact height of the left column (two stacked aspect-video images).
          No fixed pixel heights needed — heights are derived from content.
        */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch">

          {/* Left: two stacked aspect-video images */}
          <div className="flex flex-col gap-4 md:w-5/12 shrink-0">
            <Reveal className="aspect-video w-full">
              <BentoCard image={images[0]} onClick={() => setSelected(0)} />
            </Reveal>
            <Reveal delay={0.1} className="aspect-video w-full">
              <BentoCard image={images[1]} onClick={() => setSelected(1)} />
            </Reveal>
          </div>

          {/* Right: stretches to match left column height via flexbox */}
          <div className="aspect-video md:aspect-auto md:flex-1 min-h-0">
            <Reveal delay={0.15} className="w-full h-full">
              <BentoCard image={images[2]} onClick={() => setSelected(2)} />
            </Reveal>
          </div>

        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <Modal image={images[selected]} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
