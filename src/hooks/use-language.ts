"use client";

import { useEffect, useState } from "react";
import { Language, translations, TranslationStrings } from "@/data/translations";

export function useLanguage() {
  const [lang, setLangState] = useState<Language>("id");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_lang") as Language | null;
    if (saved === "id" || saved === "en") {
      setLangState(saved);
      document.documentElement.lang = saved;
    } else {
      setLangState("id");
      document.documentElement.lang = "id";
    }
    setMounted(true);
  }, []);

  const setLanguage = (newLang: Language) => {
    setLangState(newLang);
    document.documentElement.lang = newLang;
    localStorage.setItem("portfolio_lang", newLang);
  };

  const toggleLanguage = () => {
    setLanguage(lang === "id" ? "en" : "id");
  };

  const t: TranslationStrings = translations[lang];

  return { lang, setLanguage, toggleLanguage, t, mounted };
}
