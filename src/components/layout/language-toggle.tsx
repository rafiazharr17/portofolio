"use client";

import { useLanguage } from "@/hooks/use-language";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  className?: string;
  ariaLabel?: string;
}

export function LanguageToggle({ className, ariaLabel = "Toggle language" }: LanguageToggleProps) {
  const { lang, setLanguage, mounted } = useLanguage();

  const currentLang = mounted ? lang : "id";

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center p-0.5 rounded-full border border-[var(--border)] bg-[var(--surface)] shadow-sm text-xs font-mono font-medium",
        className
      )}
    >
      <div className="pl-2 pr-1 text-[var(--muted)]" aria-hidden="true">
        <Globe className="w-3.5 h-3.5" />
      </div>
      <button
        type="button"
        onClick={() => setLanguage("id")}
        aria-pressed={currentLang === "id"}
        className={cn(
          "px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary)]",
          currentLang === "id"
            ? "bg-[var(--primary)] text-white font-semibold shadow-xs"
            : "text-[var(--muted)] hover:text-[var(--foreground)]"
        )}
      >
        ID
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={currentLang === "en"}
        className={cn(
          "px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary)]",
          currentLang === "en"
            ? "bg-[var(--primary)] text-white font-semibold shadow-xs"
            : "text-[var(--muted)] hover:text-[var(--foreground)]"
        )}
      >
        EN
      </button>
    </div>
  );
}
