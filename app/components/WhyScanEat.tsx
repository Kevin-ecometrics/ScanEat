"use client";

import { IconQR, IconZap, IconCreditCard, IconStar } from "./icons";
import { Reveal, RevealList } from "./Reveal";
import { useI18n } from "../providers/I18nProvider";

const ICONS = [<IconQR size={22} />, <IconZap size={22} />, <IconCreditCard size={22} />];
const NUMS = ["01", "02", "03"];

export default function WhyScanEat() {
  const { t } = useI18n();
  const w = t.why;

  return (
    <section id="why" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <Reveal className="text-center mb-20">
          <span className="inline-flex items-center gap-1.5 bg-accent-light text-accent text-[11px] font-bold uppercase tracking-[0.12em] px-4 py-1.5 rounded-full mb-5 border border-accent/20">
            <IconStar size={11} /> {w.badge}
          </span>
          <h2 className="text-[clamp(30px,4.5vw,52px)] font-extrabold tracking-[-1.5px] text-navy leading-tight max-w-3xl mx-auto">
            {w.headline}{" "}
            <span className="text-accent">{w.headlineAccent}</span>{" "}
            {w.headlineEnd}
          </h2>
          <p className="text-muted mt-5 max-w-lg mx-auto leading-relaxed text-base">{w.sub}</p>
        </Reveal>

        <RevealList stagger={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {w.pillars.map(({ tag, title, desc }, i) => (
            <div
              key={title}
              className="relative bg-white border-2 border-border hover:border-accent/40 rounded-2xl p-8 hover:shadow-2xl hover:shadow-accent/8 transition-all duration-300 group flex flex-col gap-6 overflow-hidden"
            >
              {/* Large background number */}
              <span
                aria-hidden
                className="absolute -top-3 -right-1 text-[88px] font-black text-border leading-none select-none pointer-events-none group-hover:text-accent/10 transition-colors"
              >
                {NUMS[i]}
              </span>

              {/* Icon + tag row */}
              <div className="flex items-start justify-between relative z-10">
                <div className="w-13 h-13 w-[52px] h-[52px] rounded-2xl bg-accent-light flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
                  {ICONS[i]}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-accent bg-accent-light px-3 py-1.5 rounded-full border border-accent/20">
                  {tag}
                </span>
              </div>

              {/* Text */}
              <div className="relative z-10">
                <h3 className="font-extrabold text-navy text-xl mb-3 tracking-tight">{title}</h3>
                <p className="text-sm text-muted leading-[1.7]">{desc}</p>
              </div>

              {/* Bottom accent bar on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </RevealList>
      </div>
    </section>
  );
}
