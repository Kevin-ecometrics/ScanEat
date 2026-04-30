"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconQR, IconArrow } from "./icons";
import { useI18n } from "../providers/I18nProvider";

function IconMenu() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

export default function Navbar() {
  const { locale, setLocale, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    [t.nav.why, "#why"],
    [t.nav.packages, "#packages"],
    [t.nav.faq, "#faq"],
    [t.nav.contact, "#contact"],
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm shadow-black/5 border-b border-border"
            : "bg-white border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2.5 no-underline flex-shrink-0"
          >
            <img src="/logo.png" alt="Logo ScanEat" className="w-12 h-12" />
            <span className="text-navy font-extrabold text-xl tracking-tight">
              ScanEat
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm font-semibold text-muted hover:text-navy hover:bg-[oklch(99%_0.003_80)] px-4 py-2 rounded-lg transition-all no-underline"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Locale toggle */}
            <button
              onClick={() => setLocale(locale === "es" ? "en" : "es")}
              className="text-[11px] font-extrabold px-3 py-1.5 rounded-lg border-2 border-border text-muted hover:border-accent hover:text-accent transition-all tracking-widest"
              aria-label="Toggle language"
            >
              {locale === "es" ? "EN" : "ES"}
            </button>

            {/* CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all hover:-translate-y-px hover:shadow-lg hover:shadow-accent/25 no-underline"
            >
              {t.nav.demo} <IconArrow size={14} />
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden w-9 h-9 rounded-lg border-2 border-border text-muted hover:border-accent hover:text-accent transition-all flex items-center justify-center"
              aria-label="Menu"
            >
              {mobileOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[73px] inset-x-0 z-40 bg-white border-b-2 border-border shadow-xl shadow-black/8 md:hidden"
          >
            <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-semibold text-navy hover:text-accent hover:bg-accent-light px-4 py-3 rounded-xl transition-all no-underline"
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 bg-accent text-white font-bold text-base px-5 py-3 rounded-xl transition-all no-underline"
              >
                {t.nav.demo} <IconArrow size={16} />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
