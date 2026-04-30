"use client";

import { IconHeadphones, IconShield, IconChart, IconBell, IconArrow, IconMapPin } from "./icons";
import { Reveal, RevealList } from "./Reveal";
import { useI18n } from "../providers/I18nProvider";

const ICONS = [
  <IconHeadphones size={22} />,
  <IconShield size={22} />,
  <IconChart size={22} />,
  <IconBell size={22} />,
];

const STATS = [
  { val: "100%", label: "Web App — sin instalación" },
  { val: "24/7", label: "Soporte disponible" },
  { val: "∞", label: "Usuarios ilimitados" },
  { val: "$0", label: "Costos ocultos" },
];

export default function Benefits() {
  const { t } = useI18n();
  const b = t.benefits;

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Stats strip */}
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden mb-20 border border-border">
            {STATS.map(({ val, label }) => (
              <div key={label} className="bg-white px-8 py-8 text-center">
                <p className="text-[clamp(28px,4vw,44px)] font-extrabold text-accent tracking-tight leading-none mb-2">{val}</p>
                <p className="text-xs text-muted font-semibold leading-snug max-w-[120px] mx-auto">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Section header */}
        <Reveal className="text-center mb-16">
          <h2 className="text-[clamp(30px,4.5vw,52px)] font-extrabold tracking-[-1.5px] text-navy leading-tight mb-4">
            {b.headline}{" "}
            <span className="text-accent">{b.headlineAccent}</span>
          </h2>
          <p className="text-muted max-w-lg mx-auto leading-relaxed text-base">{b.sub}</p>
        </Reveal>

        {/* Benefit cards */}
        <RevealList stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14" itemClassName="h-full">
          {b.items.map(({ title, desc, note }, i) => (
            <div
              key={title}
              className="relative bg-white border-2 border-border hover:border-accent/40 rounded-2xl p-8 hover:shadow-xl hover:shadow-accent/8 transition-all duration-300 group overflow-hidden flex flex-col h-full"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-accent-light text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
                {ICONS[i]}
              </div>
              <h3 className="font-extrabold text-navy text-lg mb-2 tracking-tight">{title}</h3>
              <p className="text-sm text-muted leading-[1.7] flex-1">{desc}</p>
              {note && (
                <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-accent">
                  <IconMapPin size={13} /> {note}
                </div>
              )}
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </RevealList>

        {/* CTA banner */}
        <Reveal>
          <div className="relative bg-accent rounded-3xl px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
            {/* Background pattern */}
            <div aria-hidden className="absolute inset-0 opacity-10">
              <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-white/30 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-white/20 blur-xl" />
            </div>
            <div className="relative z-10">
              <p className="text-white/65 text-sm font-semibold mb-2 uppercase tracking-wider">{b.ctaBannerSub}</p>
              <h3 className="text-white font-extrabold text-[clamp(22px,3vw,32px)] leading-tight tracking-tight">
                {b.ctaBannerHeadline}
                <br />
                <span className="text-white/80">{b.ctaBannerSub2}</span>
              </h3>
            </div>
            <a
              href="#contact"
              className="relative z-10 inline-flex items-center gap-2.5 bg-white text-accent hover:bg-accent-light font-bold text-base px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 whitespace-nowrap no-underline shadow-lg shadow-black/10 flex-shrink-0"
            >
              {b.ctaBannerBtn} <IconArrow size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
