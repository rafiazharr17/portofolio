"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { Language, translations, TranslationStrings } from "@/data/translations";

export interface LanguageContextType {
  lang: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationStrings;
  mounted: boolean;
}

const defaultContextValue: LanguageContextType = {
  lang: "id",
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: translations["id"],
  mounted: false,
};

const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("id");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio_lang") as Language | null;
      if (saved === "id" || saved === "en") {
        setLangState(saved);
        if (typeof document !== "undefined") {
          document.documentElement.lang = saved;
        }
      } else {
        setLangState("id");
        if (typeof document !== "undefined") {
          document.documentElement.lang = "id";
        }
      }
    } catch {
      // ignore storage access errors
    }
    setMounted(true);
  }, []);

  const setLanguage = useCallback((newLang: Language) => {
    setLangState(newLang);
    if (typeof document !== "undefined") {
      document.documentElement.lang = newLang;
    }
    try {
      localStorage.setItem("portfolio_lang", newLang);
    } catch {
      // ignore storage access errors
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(lang === "id" ? "en" : "id");
  }, [lang, setLanguage]);

  const t = useMemo(() => translations[lang] || translations["id"], [lang]);

  const value = useMemo(
    () => ({ lang, setLanguage, toggleLanguage, t, mounted }),
    [lang, setLanguage, toggleLanguage, t, mounted]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  return context || defaultContextValue;
}
