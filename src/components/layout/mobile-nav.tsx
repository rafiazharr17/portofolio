"use client";

import { useEffect } from "react";
import { X, ArrowRight, Briefcase } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";
import { TranslationStrings } from "@/data/translations";

interface NavLinkItem {
  href: string;
  label: string;
  number: string;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  links: NavLinkItem[];
  t: TranslationStrings;
}

export function MobileNav({
  isOpen,
  onClose,
  activeSection,
  links,
  t,
}: MobileNavProps) {
  // Prevent background scroll when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-50 flex flex-col md:hidden bg-[var(--background)]/95 backdrop-blur-2xl transition-all duration-300"
    >
      {/* Header bar inside drawer */}
      <div className="flex items-center justify-between px-6 h-18 border-b border-[var(--border)]">
        <a
          href="#hero"
          onClick={onClose}
          className="flex items-center gap-2 font-bold tracking-tight text-lg text-[var(--foreground)]"
        >
          <span className="w-8 h-8 rounded-lg bg-[var(--primary)] text-white flex items-center justify-center font-mono text-sm font-bold shadow-sm">
            RA
          </span>
          <span className="font-semibold text-sm">Rafi Alif Azhar</span>
        </a>

        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup menu navigasi"
          className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--foreground)] hover:bg-[var(--surface-muted)] cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation links */}
      <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
        <div className="space-y-2">
          {links.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`group flex items-center justify-between p-3.5 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-[var(--primary)]/10 text-[var(--primary)] font-semibold border border-[var(--primary)]/20"
                    : "text-[var(--foreground)] hover:bg-[var(--surface-muted)]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[var(--muted)] group-hover:text-[var(--primary)] transition-colors">
                    {link.number}
                  </span>
                  <span className="text-base tracking-wide">{link.label}</span>
                </div>
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isActive ? "text-[var(--primary)]" : "text-[var(--muted)]"}`} />
              </a>
            );
          })}
        </div>

        {/* Bottom controls & Hire Me button */}
        <div className="pt-6 border-t border-[var(--border)] space-y-4">
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider">
              Preferences
            </span>
            <div className="flex items-center gap-3">
              <LanguageToggle ariaLabel={t.language_toggle_aria} />
              <ThemeToggle ariaLabel={t.theme_toggle_aria} />
            </div>
          </div>

          <a
            href="#contact"
            onClick={onClose}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[var(--primary)] text-white font-semibold text-sm shadow-md hover:bg-[var(--primary-strong)] active:scale-[0.98] transition-all duration-200"
          >
            <Briefcase className="w-4 h-4" />
            <span>{t.nav_cta}</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
