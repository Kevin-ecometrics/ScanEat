"use client";

import { IconStar, IconArrow, IconPanel, IconZap, IconUsers, IconChef, IconShield, IconHeadphones, IconCheck } from "./icons";
import { Reveal } from "./Reveal";
import { useI18n } from "../providers/I18nProvider";

const ICONS = [
  <IconPanel size={18} />,
  <IconChef size={18} />,
  <IconUsers size={18} />,
  <IconZap size={18} />,
  <IconShield size={18} />,
  <IconHeadphones size={18} />,
];

export default function Packages() {
  const { t } = useI18n();
  const p = t.packages;

  return (
    <section id="packages" className="py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto">

        <Reveal className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 bg-accent-light text-accent text-[11px] font-bold uppercase tracking-[0.12em] px-4 py-1.5 rounded-full mb-5 border border-accent/20">
            <IconStar size={11} /> {p.badge}
          </span>
          <h2 className="text-[clamp(30px,4.5vw,52px)] font-extrabold tracking-[-1.5px] text-navy leading-tight mb-4">
            {p.headline}{" "}
            <span className="text-accent">{p.headlineAccent}</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto leading-relaxed text-base">{p.sub}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-white border-2 border-accent/25 rounded-3xl overflow-hidden shadow-[0_24px_60px_-12px_oklch(62%_0.18_32_/_0.18)]">

            {/* Accent header bar */}
            <div className="h-1.5 bg-gradient-to-r from-accent-dark via-accent to-accent-light" />

            <div className="p-10">
              {/* Reporter label */}
              <div className="flex items-center justify-between mb-8">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  {p.reporterLabel}
                </span>
                <span className="text-[10px] font-semibold text-muted bg-surface px-3 py-1 rounded-full border border-border">
                  {p.comingSoon}
                </span>
              </div>

              {/* Feature grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {p.includes.map(({ title, desc }, i) => (
                  <div
                    key={title}
                    className="flex gap-4 p-5 rounded-2xl border border-border hover:border-accent/30 hover:bg-accent-light/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent-light text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                      {ICONS[i]}
                    </div>
                    <div>
                      <p className="font-bold text-navy text-sm mb-1">{title}</p>
                      <p className="text-xs text-muted leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom row */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-8 border-t-2 border-border">
                {/* Trust badges */}
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {p.badges.map((b) => (
                    <div key={b} className="flex items-center gap-1.5 text-sm text-navy font-semibold">
                      <span className="text-accent flex-shrink-0"><IconCheck size={13} /></span>
                      {b}
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 bg-accent hover:bg-accent-dark text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/25 no-underline whitespace-nowrap flex-shrink-0"
                >
                  {p.cta} <IconArrow size={15} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
