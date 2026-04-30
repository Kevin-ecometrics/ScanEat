"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconStar, IconChevron, IconArrow, IconMessage } from "./icons";
import { Reveal } from "./Reveal";
import { useI18n } from "../providers/I18nProvider";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { t } = useI18n();
  const f = t.faq;

  return (
    <section id="faq" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <Reveal className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 bg-accent-light text-accent text-[11px] font-bold uppercase tracking-[0.12em] px-4 py-1.5 rounded-full mb-5 border border-accent/20">
            <IconStar size={11} /> {f.badge}
          </span>
          <h2 className="text-[clamp(30px,4.5vw,52px)] font-extrabold tracking-[-1.5px] text-navy leading-tight">
            {f.headline}{" "}
            <span className="text-accent">{f.headlineAccent}</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

          {/* FAQ accordion */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {f.items.map(({ q, a }, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div
                  className={`border-2 rounded-2xl overflow-hidden transition-all duration-200 ${
                    open === i ? "border-accent/35 shadow-lg shadow-accent/6" : "border-border hover:border-accent/20"
                  }`}
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between px-7 py-5 text-left bg-white hover:bg-[oklch(99.5%_0.003_80)] transition-colors"
                  >
                    <span className={`font-bold text-sm pr-6 leading-snug ${open === i ? "text-navy" : "text-navy/80"}`}>
                      {q}
                    </span>
                    <motion.span
                      animate={{ rotate: open === i ? 180 : 0 }}
                      transition={{ duration: 0.22 }}
                      className={`flex-shrink-0 transition-colors ${open === i ? "text-accent" : "text-muted"}`}
                    >
                      <IconChevron size={18} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-7 pb-6 bg-white">
                          <p className="text-sm text-muted leading-[1.75] border-t border-border pt-4">{a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Sidebar CTA */}
          <Reveal delay={0.1} className="lg:sticky lg:top-28">
            <div className="bg-accent rounded-2xl p-8 flex flex-col gap-5">
              <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-white">
                <IconMessage size={20} />
              </div>
              <div>
                <h3 className="text-white font-extrabold text-xl mb-2">¿Otra pregunta?</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Cuéntanos sobre tu restaurante y te respondemos en menos de 24h.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-accent hover:bg-accent-light font-bold text-sm px-5 py-3 rounded-xl transition-all no-underline self-start"
              >
                Escribir ahora <IconArrow size={14} />
              </a>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
