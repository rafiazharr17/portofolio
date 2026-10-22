"use client";

import { useTheme } from "@/hooks/use-theme";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  ariaLabel?: string;
}

export function ThemeToggle({ className, ariaLabel = "Toggle color theme" }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={ariaLabel}
      title={mounted ? (theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode") : "Toggle theme"}
      className={cn(
        "relative inline-flex items-center justify-center w-8 h-8 rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)] active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary)] cursor-pointer shadow-xs",
        className
      )}
    >
      {mounted && theme === "light" ? (
        <Moon className="w-4 h-4 transition-transform duration-200 rotate-0" />
      ) : (
        <Sun className="w-4 h-4 transition-transform duration-200 rotate-0 text-amber-400" />
      )}
    </button>
  );
}
