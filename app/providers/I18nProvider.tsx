"use client";

import { createContext, useContext, useState } from "react";
import { translations, type Locale, type Translations } from "../lib/i18n";

type I18nContextType = {
  locale: Locale;
  t: Translations;
  setLocale: (l: Locale) => void;
};

const I18nContext = createContext<I18nContextType>({
  locale: "es",
  t: translations.es as unknown as Translations,
  setLocale: () => {},
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");
  return (
    <I18nContext.Provider value={{ locale, t: translations[locale] as unknown as Translations, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
