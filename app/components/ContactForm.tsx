"use client";

import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { IconStar, IconArrow, IconUser, IconMail, IconMessage, IconCheck } from "./icons";
import { Reveal } from "./Reveal";
import { useI18n } from "../providers/I18nProvider";

type FormState = "idle" | "sending" | "sent" | "error";

const TRUST = [
  "Sin tarjeta de crédito",
  "Respuesta en 24h",
  "Demo gratuita",
];

export default function ContactForm() {
  const { t, locale } = useI18n();
  const c = t.contact;
  const [form, setForm] = useState({ name: "", email: "", restaurant: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      await axios.post("http://localhost:4000/api/contact", { ...form, locale });
      setStatus("sent");
      setForm({ name: "", email: "", restaurant: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-white border-2 border-border focus:border-accent outline-none rounded-xl px-4 py-3.5 text-navy text-sm font-medium placeholder:text-muted/50 transition-colors";

  return (
    <section id="contact" className="py-28 px-6 bg-[oklch(99.2%_0.004_80)]">
      <div className="max-w-5xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Left — copy */}
          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <Reveal>
              <span className="inline-flex items-center gap-1.5 bg-accent-light text-accent text-[11px] font-bold uppercase tracking-[0.12em] px-4 py-1.5 rounded-full mb-6 border border-accent/20">
                <IconStar size={11} /> {c.badge}
              </span>
              <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold tracking-[-1.5px] text-navy leading-tight mb-5">
                {c.headline}{" "}
                <span className="text-accent">{c.headlineAccent}</span>
              </h2>
              <p className="text-muted text-base leading-relaxed mb-8">{c.sub}</p>

              {/* Trust list */}
              <div className="flex flex-col gap-3">
                {TRUST.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                      <IconCheck size={12} />
                    </span>
                    <span className="text-sm font-semibold text-navy">{item}</span>
                  </div>
                ))}
              </div>

              {/* Contact info */}
              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted mb-3">Contacto directo</p>
                <a
                  href="mailto:contact@scaneat.ai"
                  className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-accent transition-colors no-underline"
                >
                  <IconMail size={15} /> contact@scaneat.ai
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <Reveal delay={0.1}>
              <form
                onSubmit={handleSubmit}
                className="bg-white border-2 border-border rounded-3xl p-8 flex flex-col gap-5 shadow-lg shadow-black/4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold text-navy uppercase tracking-[0.1em] flex items-center gap-1.5">
                      <span className="text-accent"><IconUser size={13} /></span>
                      {c.fields.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder={c.fields.namePlaceholder}
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold text-navy uppercase tracking-[0.1em] flex items-center gap-1.5">
                      <span className="text-accent"><IconMail size={13} /></span>
                      {c.fields.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder={c.fields.emailPlaceholder}
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-navy uppercase tracking-[0.1em]">
                    {c.fields.restaurant}
                  </label>
                  <input
                    type="text"
                    name="restaurant"
                    required
                    placeholder={c.fields.restaurantPlaceholder}
                    value={form.restaurant}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-navy uppercase tracking-[0.1em] flex items-center gap-1.5">
                    <span className="text-accent"><IconMessage size={13} /></span>
                    {c.fields.message}
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder={c.fields.messagePlaceholder}
                    value={form.message}
                    onChange={handleChange}
                    className={inputClass + " resize-none"}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  className="relative inline-flex items-center justify-center gap-2.5 bg-accent hover:bg-accent-dark disabled:opacity-60 text-white font-bold text-base px-10 py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/25 w-full overflow-hidden"
                >
                  {status === "sending" && (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      {c.sending}
                    </span>
                  )}
                  {status === "sent" && (
                    <span className="flex items-center gap-2">
                      <IconCheck size={18} /> {c.sent}
                    </span>
                  )}
                  {status === "error" && c.error}
                  {status === "idle" && <>{c.cta} <IconArrow size={17} /></>}
                </button>

                {status === "sent" && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm text-accent font-semibold"
                  >
                    {c.successMsg}
                  </motion.p>
                )}
                {status === "error" && (
                  <p className="text-center text-sm text-red-500 font-semibold">
                    {c.errorMsg}{" "}
                    <a href="mailto:contact@scaneat.ai" className="underline">contact@scaneat.ai</a>
                  </p>
                )}
              </form>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
