"use client";

import { Reveal } from "./Reveal";
import { IconStar } from "./icons";
import { useI18n } from "../providers/I18nProvider";

export default function Compare() {
  const { t } = useI18n();
  const com = t.comparative;
  const items = com.items;

  return (
    <section id="comparative" className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="text-[clamp(30px,4.5vw,52px)] font-extrabold tracking-[-1.5px] text-navy leading-tight mb-4">
            <span className="text-accent">{com.titleAccent}</span>
            {com.title}
          </h2>
        </Reveal>
        <div className="overflow-x-auto rounded-3xl border border-border shadow-sm">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead className="bg-slate-50 text-slate-900">
              <tr>
                <th className="px-6 py-4 font-semibold text-accent">
                  {com.tableHeader1}
                </th>
                <th className="px-6 py-4 font-semibold bg-accent text-white">
                  {com.tableHeader2}
                </th>
                <th className="px-6 py-4 font-semibold text-accent">
                  {com.tableHeader3}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
              {items.map(({ feature, scanEat, others }, com) => (
                <tr key={com}>
                  <td className="px-6 py-4 font-medium text-slate-900">
                    {feature}
                  </td>
                  <td className="px-6 py-4 bg-[oklch(99.2%_0.004_80)]">
                    {scanEat}
                  </td>
                  <td className="px-6 py-4">{others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
