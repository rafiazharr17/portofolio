"use client";

import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read persisted theme or system preference
    const saved = localStorage.getItem("portfolio_theme") as Theme | null;
    let initialTheme: Theme = "dark";

    if (saved === "light" || saved === "dark") {
      initialTheme = saved;
    } else if (typeof window !== "undefined" && window.matchMedia) {
      initialTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    setThemeState(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
    setMounted(true);

    const observer = new MutationObserver(() => {
      const current = (document.documentElement.dataset.theme as Theme) || "dark";
      setThemeState(current);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem("portfolio_theme", newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return { theme, setTheme, toggleTheme, mounted };
}
