"use client";

import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/icons";
import { profileData } from "@/data/profile";
import { useLanguage } from "@/hooks/use-language";

import { useState, useEffect } from "react";

export function Footer() {
  const { t, mounted } = useLanguage();
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--surface-muted)]/50 pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[var(--border)]">
          {/* Left branding */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-[var(--primary)] text-white flex items-center justify-center font-mono text-sm font-bold shadow-xs">
                RA
              </span>
              <span className="font-bold text-base tracking-tight text-[var(--foreground)]">
                {profileData.name}
              </span>
            </div>
            <p className="text-xs text-[var(--muted)] max-w-sm">
              Full Stack Web Developer &bull; Karawang, Jawa Barat, Indonesia
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:text-[var(--primary)] hover:border-[var(--primary)] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:text-[var(--primary)] hover:border-[var(--primary)] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              aria-label="Kirim Email"
              className="w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:text-[var(--primary)] hover:border-[var(--primary)] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={profileData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:text-[var(--primary)] hover:border-[var(--primary)] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
            >
              <WhatsappIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll to top */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Kembali ke atas halaman"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--surface)] text-xs font-mono font-medium text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-200 cursor-pointer shadow-xs"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--muted)] text-center sm:text-left font-mono">
          <div>
            &copy; {currentYear} {profileData.name}. All rights reserved.
          </div>
          <div>
            Next.js &bull; TypeScript &bull; Three.js &bull; GSAP &bull; Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
