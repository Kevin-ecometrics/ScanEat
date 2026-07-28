"use client";

import { IconStar, IconArrow, IconChef } from "./icons";
import { Reveal } from "./Reveal";
import { useI18n } from "../providers/I18nProvider";

export default function Blog() {
  const { t, locale } = useI18n();
  const b = t.blog;
  const href = locale === "es" ? `/blog/${b.slug}` : `/en/blog/${b.slug}`;

  return (
    <section id="blog" className="py-28 px-6 bg-[oklch(99.2%_0.004_80)]">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 bg-accent-light text-accent text-[11px] font-bold uppercase tracking-[0.12em] px-4 py-1.5 rounded-full mb-5 border border-accent/20">
            <IconStar size={11} /> {b.badge}
          </span>
          <h2 className="text-[clamp(30px,4.5vw,52px)] font-extrabold tracking-[-1.5px] text-navy leading-tight">
            {b.headline} <span className="text-accent">{b.headlineAccent}</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">{b.sub}</p>
        </Reveal>

        <Reveal delay={0.1} className="max-w-3xl mx-auto">
          <a
            href={href}
            className="group grid sm:grid-cols-5 gap-0 bg-white rounded-2xl border-2 border-border hover:border-accent/30 shadow-sm hover:shadow-xl hover:shadow-accent/8 transition-all overflow-hidden no-underline"
          >
            <div className="sm:col-span-2 relative aspect-[4/3] sm:aspect-auto overflow-hidden">
              <img
                src="/Comandas digitales agiles y modificables con scaneat.jpg"
                alt="Comandas digitales que se envían al instante a cocina, sin errores, agiliza el proceso y da mejor servicio con ScanEat"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="sm:col-span-3 p-8 flex flex-col justify-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-accent">
                <IconChef size={13} /> {b.readTime}
              </span>
              <h3 className="text-xl font-extrabold text-navy leading-snug group-hover:text-accent transition-colors">
                {b.post.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{b.post.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-accent mt-1">
                {b.post.cta} <IconArrow size={14} />
              </span>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
