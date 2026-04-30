"use client";

import { IconArrow, IconTrendUp } from "./icons";
import { Reveal } from "./Reveal";
import { useI18n } from "../providers/I18nProvider";

export default function CTAStrip() {
  const { t } = useI18n();
  const ctas = t.ctas;
  const featured = ctas.find((c) => c.featured)!;

  return (
    <section className="py-28 px-6 bg-[oklch(99.2%_0.004_80)]">
      <div className="max-w-5xl mx-auto">

        {/* Main bold CTA */}
        <Reveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-accent bg-accent-light border border-accent/20 text-[11px] font-bold uppercase tracking-[0.12em] px-4 py-1.5 rounded-full mb-6">
            <IconTrendUp size={13} /> {featured.label}
          </div>
          <h2 className="text-[clamp(32px,5.5vw,64px)] font-extrabold tracking-[-2px] text-navy leading-[1.05] mb-3">
            {featured.headline}
          </h2>
          {featured.sub && (
            <p className="text-[clamp(24px,3.5vw,40px)] font-extrabold text-accent tracking-tight mb-8">
              {featured.sub}
            </p>
          )}
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-accent hover:bg-accent-dark text-white font-bold text-lg px-10 py-5 rounded-2xl transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-accent/30 no-underline"
          >
            {featured.cta} <IconArrow size={20} />
          </a>
        </Reveal>

        {/* Secondary cards */}
        <Reveal delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {ctas.filter((c) => !c.featured).map(({ label, headline, cta }) => (
              <div
                key={headline}
                className="bg-white border-2 border-border hover:border-accent/40 rounded-2xl p-8 flex flex-col gap-4 transition-all hover:shadow-lg group"
              >
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted">{label}</p>
                <h3 className="font-extrabold text-navy text-xl leading-tight tracking-tight flex-1">
                  {headline}
                </h3>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-bold text-sm text-accent hover:gap-3 transition-all no-underline group-hover:text-accent-dark"
                >
                  {cta} <IconArrow size={15} />
                </a>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
