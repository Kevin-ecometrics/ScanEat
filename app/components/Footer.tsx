"use client";

import { IconQR, IconMail, IconMapPin, IconArrow } from "./icons";
import { useI18n } from "../providers/I18nProvider";

export default function Footer() {
  const { t } = useI18n();
  const f = t.footer;
  const nav = t.nav;

  const NAV_COLS = [
    {
      title: "Producto",
      links: [
        [nav.why, "#why"],
        [nav.packages, "#packages"],
        ["Demo", "#demo"],
      ],
    },
    {
      title: "Soporte",
      links: [
        [nav.faq, "#faq"],
        [nav.contact, "#contact"],
        ["contact@scaneat.ai", "mailto:contact@scaneat.ai"],
      ],
    },
  ];

  return (
    <footer className="bg-white border-t-2 border-border">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand col */}
        <div className="lg:col-span-2">
          <a
            href="/"
            className="inline-flex items-center gap-2.5 no-underline mb-5"
          >
            <img src="/logo.png" alt="Logo ScanEat" className="w-12 h-12" />

            <span className="text-navy font-extrabold text-xl tracking-tight">
              ScanEat
            </span>
          </a>
          <p className="text-sm text-muted leading-relaxed max-w-xs mb-6">
            La web app para restaurantes que digitaliza tu servicio, elimina
            errores y hace que tus comensales regresen.
          </p>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:contact@scaneat.ai"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors no-underline font-medium"
            >
              <IconMail size={15} /> contact@scaneat.ai
            </a>
            <span className="inline-flex items-center gap-2 text-sm text-muted font-medium">
              <IconMapPin size={15} /> Tijuana, Baja California
            </span>
          </div>
        </div>

        {/* Nav cols */}
        {NAV_COLS.map(({ title, links }) => (
          <div key={title}>
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-navy mb-5">
              {title}
            </p>
            <ul className="flex flex-col gap-3">
              {links.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-muted hover:text-accent transition-colors no-underline font-medium"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">{f.rights}</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-accent-dark transition-colors no-underline"
          >
            Solicitar demo <IconArrow size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
