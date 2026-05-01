"use client";

import { createContext, useContext, useState } from "react";
import { translations, type Locale, type Translations } from "../lib/i18n";

const STORAGE_KEY = "scaneat_locale";

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

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "es";
  const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
  return stored && stored in translations ? stored : "es";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  function setLocale(l: Locale) {
    localStorage.setItem(STORAGE_KEY, l);
    setLocaleState(l);
  }

  return (
    <I18nContext.Provider value={{ locale, t: translations[locale] as unknown as Translations, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
