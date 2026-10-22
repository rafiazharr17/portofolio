"use client";

import { useState, useEffect } from "react";
import { Menu, Send } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";
import { MobileNav } from "./mobile-nav";
import { ScrollProgressBar } from "@/components/ui/scroll-progress";
import { useLanguage } from "@/hooks/use-language";
import { cn } from "@/lib/utils";

const SECTION_IDS = [
  "hero",
  "about",
  "skills",
  "projects",
  "certificates",
  "experience",
  "testimonials",
  "contact",
];

export function Navbar() {
  const { t, mounted } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  // Active section observer on scroll
  useEffect(() => {
    const isClicking = false;
    let timer: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      if (isClicking) return;

      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // Bottom of page -> contact section
      if (windowHeight + scrollY >= docHeight - 80) {
        setActiveSection("contact");
        return;
      }

      // Find current section
      let current = "hero";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 120;
          if (scrollY >= top) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timer) clearTimeout(timer);
    };
  }, []);

  const navLinks = [
    { href: "#about", label: mounted ? t.nav_about : "About", number: "01" },
    { href: "#projects", label: mounted ? t.nav_projects : "Projects", number: "02" },
    { href: "#certificates", label: mounted ? t.nav_certificates : "Certificates", number: "03" },
    { href: "#experience", label: mounted ? t.nav_experience : "Experience", number: "04" },
    { href: "#testimonials", label: mounted ? t.nav_testimonials : "Testimonials", number: "05" },
    { href: "#contact", label: mounted ? t.nav_contact : "Contact", number: "06" },
  ];

  return (
    <>
      <ScrollProgressBar />
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-[var(--surface)]/95 backdrop-blur-md border-b border-[var(--border)] py-3.5 shadow-sm"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Wordmark */}
          <a
            href="#hero"
            aria-label="Kembali ke atas / Hero"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] rounded-md p-1"
          >
            <div className="w-8 h-8 rounded-md bg-[var(--surface-muted)] border border-[var(--border)] text-[var(--primary)] flex items-center justify-center font-mono text-xs font-bold transition-colors group-hover:border-[var(--primary)] shadow-xs">
              RA
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                Rafi Alif Azhar
              </span>
              <span className="font-mono text-[10px] text-[var(--muted)] tracking-wider uppercase">
                Web Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 p-1 rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-xs"
          >
            {navLinks.map((link) => {
              const secId = link.href.replace("#", "");
              const isActive = activeSection === secId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveSection(secId)}
                  className={cn(
                    "relative px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary)]",
                    isActive
                      ? "text-white bg-[var(--primary)] font-semibold shadow-xs"
                      : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-muted)]"
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <LanguageToggle ariaLabel={mounted ? t.language_toggle_aria : "Toggle language"} />
              <ThemeToggle ariaLabel={mounted ? t.theme_toggle_aria : "Toggle theme"} />
            </div>

            {/* Desktop CTA Button */}
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--primary)] text-white text-xs font-semibold hover:bg-[var(--primary-strong)] active:scale-95 transition-all duration-200 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{mounted ? t.nav_cta : "Hubungi"}</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileNavOpen(true)}
              aria-label="Buka menu navigasi"
              aria-expanded={mobileNavOpen}
              className="md:hidden w-10 h-10 rounded-md border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center text-[var(--foreground)] hover:bg-[var(--surface-muted)] active:scale-95 cursor-pointer shadow-xs transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        activeSection={activeSection}
        links={navLinks}
        t={t}
      />
    </>
  );
}
