"use client";

import { Reveal } from "./Reveal";
import { useI18n } from "../providers/I18nProvider";

export default function Banner() {
  const { t } = useI18n();
  const ba = t.banner;

  return (
    <section className="py-20 px-6 bg-accent">
      <Reveal className="max-w-6xl mx-auto text-white flex flex-col items-center text-center justify-center gap-4  text-[clamp(40px,6.5vw,78px)] font-extrabold tracking-[-3px] leading-[1.03] b-5">
        <h1>{ba.title}</h1>
        <h2>{ba.titleWave}</h2>
      </Reveal>
    </section>
  );
}
