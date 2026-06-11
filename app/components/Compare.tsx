"use client";

import { Reveal } from "./Reveal";
import { IconStar, IconCheck } from "./icons";
import { useI18n } from "../providers/I18nProvider";

function IconX({ size = 12 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function Compare() {
  const { t } = useI18n();
  const com = t.comparative;
  const items = com.items;

  return (
    <section id="comparative" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="text-[clamp(30px,4.5vw,52px)] font-extrabold tracking-[-1.5px] text-navy leading-tight mb-4">
            <span className="text-accent">{com.titleAccent}</span>
            {com.title}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-x-auto rounded-3xl shadow-xl border border-slate-100">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr>
                  {/* Feature column */}
                  <th className="w-[30%] px-6 py-5 text-left text-xs font-bold uppercase tracking-widest text-slate-400 bg-slate-50 rounded-tl-3xl">
                    {com.tableHeader1}
                  </th>

                  {/* ScanEat column — featured */}
                  <th className="w-[35%] px-6 py-5 text-left bg-accent">
                    <div className="flex items-center gap-2 text-white">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                        <IconStar size={13} />
                      </span>
                      <span className="font-bold text-base">{com.tableHeader2}</span>
                    </div>
                  </th>

                  {/* Others column */}
                  <th className="w-[35%] px-6 py-5 text-left text-xs font-bold uppercase tracking-widest text-slate-400 bg-slate-50 rounded-tr-3xl">
                    {com.tableHeader3}
                  </th>
                </tr>
              </thead>

              <tbody>
                {items.map(({ feature, scanEat, others }, i) => {
                  const isLast = i === items.length - 1;
                  return (
                    <tr
                      key={i}
                      className="group border-t border-slate-100 hover:bg-slate-50/40 transition-colors duration-150"
                    >
                      {/* Feature name */}
                      <td
                        className={`px-6 py-5 font-semibold text-slate-800 align-top bg-white${isLast ? " rounded-bl-3xl" : ""}`}
                      >
                        {feature}
                      </td>

                      {/* ScanEat cell */}
                      <td className="px-6 py-5 bg-green-50 align-top border-x border-green-100">
                        <div className="flex items-start gap-2.5">
                          <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-accent flex items-center justify-center text-white shadow-sm">
                            <IconCheck size={11} />
                          </span>
                          <span className="text-slate-700 leading-relaxed">{scanEat}</span>
                        </div>
                      </td>

                      {/* Others cell */}
                      <td
                        className={`px-6 py-5 bg-white align-top${isLast ? " rounded-br-3xl" : ""}`}
                      >
                        <div className="flex items-start gap-2.5">
                          <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                            <IconX size={11} />
                          </span>
                          <span className="text-slate-400 leading-relaxed">{others}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
