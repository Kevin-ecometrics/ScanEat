"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { useI18n } from "../providers/I18nProvider";

export default function Banner() {
  const { t } = useI18n();
  const ba = t.banner;

  return (
    <section className="relative py-24 px-6 bg-accent overflow-hidden">
      {/* Decorative background circles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.03]" />
      </div>

      {/* Dot grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <Reveal className="relative max-w-4xl mx-auto text-white flex flex-col items-center text-center gap-6">
        {/* Title */}
        <h2 className="text-[clamp(32px,5vw,64px)] font-extrabold tracking-[-2px] leading-[1.05]">
          {ba.title}
        </h2>

        {/* Divider */}
        <motion.div
          className="flex items-center gap-3 w-full max-w-xs"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="flex-1 h-px bg-white/30" />
          <div className="w-2 h-2 rounded-full bg-white/60" />
          <div className="flex-1 h-px bg-white/30" />
        </motion.div>

        {/* Wave / CTA text */}
        <h3 className="text-[clamp(28px,4.5vw,58px)] font-extrabold tracking-[-2px] leading-[1.05]">
          <span className="relative inline-block">
            {ba.titleWave}
            <motion.span
              className="absolute bottom-1 left-0 w-full h-[6px] rounded-full bg-white/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              style={{ originX: 0 }}
            />
          </span>
        </h3>
      </Reveal>
    </section>
  );
}
