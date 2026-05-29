"use client";

import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  IconStar,
  IconArrow,
  IconUser,
  IconMail,
  IconMessage,
  IconCheck,
} from "./icons";
import { Reveal } from "./Reveal";
import { useI18n } from "../providers/I18nProvider";

type FormState = "idle" | "sending" | "sent" | "error";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://www.scaneat.mx";

const TRUST_ES = ["Sin tarjeta de crédito", "Respuesta en 24h", "Demo gratuita"];
const TRUST_EN = ["No credit card", "Reply in 24h", "Free demo"];

export default function ContactForm() {
  const { t, locale } = useI18n();
  const c = t.contact;

  const TRUST = locale?.startsWith("en") ? TRUST_EN : TRUST_ES;

  const [form, setForm] = useState({
    name: "",
    email: "",
    restaurant: "",
    message: "",
  });

  const [status, setStatus] = useState<FormState>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (status === "sending") return;

    setStatus("sending");

    try {
      await axios.post(
        `${API_URL}/api/demo/request`,
        {
          ...form,
          locale: locale?.startsWith("en") ? "en" : "es",
        },
        {
          timeout: 10000,
        },
      );

      setStatus("sent");
      setForm({ name: "", email: "", restaurant: "", message: "" });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const detail = {
        message: err?.message,
        status: err?.response?.status,
        data: err?.response?.data,
        url: `${API_URL}/api/demo/request`,
      };
      console.error("ERROR FRONT:", detail);
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-white border-2 border-border focus:border-accent outline-none rounded-xl px-4 py-3.5 text-navy text-sm font-medium placeholder:text-muted/50 transition-colors";

  return (
    <section id="contact" className="py-28 px-6 bg-[oklch(99.2%_0.004_80)]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <Reveal>
              <span className="inline-flex items-center gap-1.5 bg-accent-light text-accent text-[11px] font-bold uppercase tracking-[0.12em] px-4 py-1.5 rounded-full mb-6 border border-accent/20">
                <IconStar size={11} /> {c.badge}
              </span>

              <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold tracking-[-1.5px] text-navy leading-tight mb-5">
                {c.headline}{" "}
                <span className="text-accent">{c.headlineAccent}</span>
              </h2>

              <p className="text-muted text-base leading-relaxed mb-8">
                {c.sub}
              </p>

              <div className="flex flex-col gap-3">
                {TRUST.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                      <IconCheck size={12} />
                    </span>
                    <span className="text-sm font-semibold text-navy">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 px-4 py-3 bg-accent-light/50 border border-accent/20 rounded-xl">
                <p className="text-xs font-bold text-accent text-center">
                  🔒 {c.demoNote}
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted mb-3">
                  Contacto directo
                </p>
                <a
                  href="mailto:contact@scaneat.mx"
                  className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-accent transition-colors no-underline"
                >
                  <IconMail size={15} /> contact@scaneat.mx
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-3">
            <Reveal delay={0.1}>
              <form
                onSubmit={handleSubmit}
                className="bg-white border-2 border-border rounded-3xl p-8 flex flex-col gap-5 shadow-lg shadow-black/4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold text-navy uppercase tracking-[0.1em] flex items-center gap-1.5">
                      <span className="text-accent">
                        <IconUser size={13} />
                      </span>
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
                      <span className="text-accent">
                        <IconMail size={13} />
                      </span>
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
                    <span className="text-accent">
                      <IconMessage size={13} />
                    </span>
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

                  {status === "idle" && (
                    <>
                      {c.cta} <IconArrow size={17} />
                    </>
                  )}
                </button>

                {status === "sent" && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-bold px-5 py-3 rounded-xl mb-2">
                      <IconCheck size={18} /> {c.successMsg}
                    </div>
                  </motion.div>
                )}

                {status === "error" && (
                  <p className="text-center text-sm text-red-500 font-semibold">
                    {c.errorMsg}{" "}
                    <a href="mailto:contact@scaneat.mx" className="underline">
                      contact@scaneat.mx
                    </a>
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
