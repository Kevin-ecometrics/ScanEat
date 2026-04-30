"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconUsers, IconChart, IconPhone, IconStar, IconCheck } from "./icons";
import { Reveal } from "./Reveal";
import { useI18n } from "../providers/I18nProvider";

const ICONS = [<IconUsers size={18} />, <IconChart size={18} />, <IconPhone size={18} />];
const ease = [0.22, 1, 0.36, 1] as const;

export default function DashboardPreviews() {
  const { t } = useI18n();
  const d = t.dashboards;
  const [active, setActive] = useState(1);
  const role = d.roles[active];

  return (
    <section className="py-28 px-6 bg-[oklch(99.2%_0.004_80)]">
      <div className="max-w-5xl mx-auto">

        <Reveal className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 bg-accent-light text-accent text-[11px] font-bold uppercase tracking-[0.12em] px-4 py-1.5 rounded-full mb-5 border border-accent/20">
            <IconStar size={11} /> {d.badge}
          </span>
          <h2 className="text-[clamp(30px,4.5vw,52px)] font-extrabold tracking-[-1.5px] text-navy leading-tight max-w-3xl mx-auto">
            {d.headline}{" "}
            <span className="text-accent">{d.headlineAccent}</span>
          </h2>
          <p className="text-muted mt-5 max-w-xl mx-auto leading-relaxed text-base">{d.sub}</p>
        </Reveal>

        {/* Tab pills */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {d.roles.map(({ role: roleName }, i) => (
              <button
                key={roleName}
                onClick={() => setActive(i)}
                className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 border-2 ${
                  active === i
                    ? "bg-accent border-accent text-white shadow-lg shadow-accent/25"
                    : "bg-white border-border text-muted hover:border-accent/40 hover:text-navy"
                }`}
              >
                <span className={active === i ? "text-white/80" : "text-accent"}>
                  {ICONS[i]}
                </span>
                {roleName}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Tab content */}
        <Reveal delay={0.15}>
          <div className="overflow-hidden rounded-3xl border-2 border-border bg-white shadow-xl shadow-black/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease }}
                className="p-10"
              >
                {/* Role header */}
                <div className="flex items-center gap-4 mb-7">
                  <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-white shadow-md shadow-accent/30">
                    {ICONS[active]}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-accent mb-0.5">Módulo</p>
                    <p className="font-extrabold text-navy text-lg">{role.role}</p>
                  </div>
                </div>

                <p className="text-navy font-semibold text-base leading-relaxed mb-8 max-w-2xl">
                  {role.headline}
                </p>

                {/* Features grid */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {role.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 bg-[oklch(99.2%_0.004_80)] rounded-xl px-5 py-4 border border-border">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                        <IconCheck size={12} />
                      </span>
                      <span className="text-sm text-navy font-medium leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
