"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  IconArrow,
  IconPlay,
  IconFork,
  IconCreditCard,
  IconStar,
  IconBell,
} from "./icons";
import { useI18n } from "../providers/I18nProvider";

const ease = [0.22, 1, 0.36, 1] as const;

function IconVolume({ muted }: { muted: boolean }) {
  return muted ? (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 5L6 9H2v6h4l5 4V5z" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  ) : (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 5L6 9H2v6h4l5 4V5z" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

function IconExpand() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M16 21h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
    </svg>
  );
}

type CardSide = "left" | "right";

interface FloatCardData {
  id: string;
  side: CardSide;
  delay: number;
  icon: React.ReactNode;
  title: string;
  sub: string;
  accentColor: string;
  dotColor: string;
  topPct: string;
}

const FLOAT_CARDS: FloatCardData[] = [
  {
    id: "order",
    side: "left",
    delay: 1.1,
    icon: <IconFork size={16} />,
    title: "Pedido enviado",
    sub: "Mesa 4 · 3 platillos",
    accentColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
    dotColor: "bg-emerald-400",
    topPct: "18%",
  },
  {
    id: "payment",
    side: "right",
    delay: 1.5,
    icon: <IconCreditCard size={16} />,
    title: "Cobro completado",
    sub: "$842 · Tarjeta",
    accentColor: "text-blue-600 bg-blue-50 border-blue-200",
    dotColor: "bg-blue-400",
    topPct: "18%",
  },
  {
    id: "rating",
    side: "left",
    delay: 1.9,
    icon: <IconStar size={16} />,
    title: "Nueva reseña",
    sub: "5 estrellas · Mesa 7",
    accentColor: "text-amber-600 bg-amber-50 border-amber-200",
    dotColor: "bg-amber-400",
    topPct: "52%",
  },
  {
    id: "kitchen",
    side: "right",
    delay: 2.3,
    icon: <IconBell size={16} />,
    title: "Cocina lista",
    sub: "Mesa 2 · Orden completa",
    accentColor: "text-accent bg-accent-light border-accent/30",
    dotColor: "bg-accent",
    topPct: "52%",
  },
];

function FloatCard({
  icon,
  title,
  sub,
  accentColor,
  dotColor,
  side,
  delay,
  topPct,
}: FloatCardData) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -28 : 28, scale: 0.94 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.55, delay, ease }}
      className={`absolute hidden lg:flex items-center gap-3 bg-white border ${accentColor} rounded-2xl px-4 py-3 shadow-xl shadow-black/8 min-w-[172px] z-10`}
      style={{
        [side === "left" ? "right" : "left"]: "calc(100% + 20px)",
        top: topPct,
      }}
    >
      <div
        className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${accentColor}`}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs font-bold text-navy leading-none mb-0.5 truncate">
          {title}
        </p>
        <p className="text-[10px] text-muted font-medium truncate">{sub}</p>
      </div>
      <span
        className={`w-2 h-2 rounded-full ${dotColor} flex-shrink-0 animate-pulse`}
      />
    </motion.div>
  );
}

export default function Hero() {
  const { t } = useI18n();
  const h = t.hero;
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setCardsVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  function toggleMute() {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted((m) => !m);
  }

  function openFullscreen() {
    videoRef.current?.requestFullscreen?.();
  }

  return (
    <section className="bg-white px-6 pt-20 pb-0 flex flex-col items-center text-center overflow-hidden">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease }}
        className="inline-flex items-center gap-2 bg-accent-light text-accent text-[11px] font-bold uppercase tracking-[0.12em] px-4 py-1.5 rounded-full mb-8 border border-accent/20"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block animate-pulse" />
        {h.badge}
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.07, ease }}
        className="text-[clamp(40px,6.5vw,78px)] font-extrabold tracking-[-3px] leading-[1.03] max-w-4xl mb-5 text-navy"
      >
        {h.headline1}
        <br />
        <span className="text-accent">{h.headline2}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.12, ease }}
        className="text-xl text-muted max-w-xl leading-relaxed mb-3 font-medium"
      >
        {h.sub1}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.16, ease }}
        className="text-base text-muted max-w-lg leading-relaxed mb-11"
      >
        {h.sub2}
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.22, ease }}
        className="flex flex-wrap gap-3 justify-center mb-20"
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-2.5 bg-accent hover:bg-accent-dark text-white font-bold text-base px-9 py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-accent/30 no-underline"
        >
          {h.cta1} <IconArrow size={17} />
        </a>
        <a
          href="#demo"
          className="inline-flex items-center gap-2.5 border-2 border-border hover:border-accent text-navy hover:text-accent font-semibold text-base px-9 py-4 rounded-xl transition-all no-underline"
        >
          <IconPlay size={14} /> {h.cta2}
        </a>
      </motion.div>

      {/* ── Video showcase ── */}
      <motion.div
        id="demo"
        initial={{ opacity: 0, y: 52 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.32, ease }}
        className="w-full max-w-4xl relative px-0 lg:px-32"
      >
        {/* Ambient glow */}
        <div
          aria-hidden
          className="absolute -inset-x-8 -top-16 h-72 bg-accent/8 rounded-[100%] blur-3xl pointer-events-none"
        />

        {/* Floating notification cards */}
        <AnimatePresence>
          {cardsVisible &&
            FLOAT_CARDS.map((card) => <FloatCard key={card.id} {...card} />)}
        </AnimatePresence>

        {/* Video frame */}
        <div className="relative rounded-[20px] overflow-hidden border border-border shadow-[0_40px_100px_-20px_oklch(62%_0.18_32_/_0.22),0_0_0_1px_oklch(62%_0.18_32_/_0.08)] group">
          {/* Browser chrome */}
          <div className="bg-[oklch(98.5%_0.005_80)] border-b border-border px-5 py-3.5 flex items-center gap-3">
            <div className="flex gap-1.5 flex-shrink-0">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <div className="flex-1 bg-white rounded-lg px-4 py-1.5 text-xs text-muted font-medium text-left border border-border/50 truncate">
              app.scaneat.ai
            </div>
            <div className="flex items-center gap-1.5 bg-red-50 border border-red-200 text-red-500 text-[10px] font-extrabold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full flex-shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              Live
            </div>
          </div>

          {/* Video */}
          <div className="relative bg-black">
            <video
              ref={videoRef}
              src="/scaneat.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full block"
            />

            {/* Bottom gradient */}
            <div
              aria-hidden
              className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"
            />

            {/* Controls — appear on hover */}
            <div className="absolute bottom-0 inset-x-0 px-5 pb-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
              <div className="flex items-center gap-2 bg-black/55 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Demo en vivo
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="w-8 h-8 rounded-full bg-black/55 hover:bg-black/75 backdrop-blur-md text-white flex items-center justify-center transition-all hover:scale-105 border border-white/10"
                  aria-label={muted ? "Activar sonido" : "Silenciar"}
                >
                  <IconVolume muted={muted} />
                </button>
                <button
                  onClick={openFullscreen}
                  className="w-8 h-8 rounded-full bg-black/55 hover:bg-black/75 backdrop-blur-md text-white flex items-center justify-center transition-all hover:scale-105 border border-white/10"
                  aria-label="Pantalla completa"
                >
                  <IconExpand />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Accent line below frame */}
        <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent mt-0" />
      </motion.div>
    </section>
  );
}
