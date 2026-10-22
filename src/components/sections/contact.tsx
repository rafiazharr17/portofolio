"use client";

import { useState } from "react";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/icons";
import { profileData } from "@/data/profile";
import { useLanguage } from "@/hooks/use-language";
import { Mail, Copy, Check, ExternalLink, Send, Clock } from "lucide-react";

export function ContactSection() {
  const { lang, t, mounted } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <SectionContainer id="contact">
      <SectionHeading
        eyebrow={mounted ? t.contact_eyebrow : "06 / KOLABORASI"}
        title={mounted ? t.contact_title : "Mari Bangun Sesuatu yang Berdampak"}
        description={mounted ? t.contact_sub : ""}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Main Contact Card */}
        <div className="lg:col-span-7 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-9 flex flex-col justify-between shadow-xs relative">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--surface-muted)] text-[var(--foreground)] text-xs font-mono font-medium border border-[var(--border)] mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>
                {lang === "id"
                  ? "Respon Cepat: Biasanya < 24 Jam"
                  : "Quick Response: Typically < 24h"}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--foreground)] mb-3">
              {lang === "id"
                ? "Punya proyek atau peluang karir?"
                : "Have an opening or project inquiry?"}
            </h3>

            <p className="text-base text-[var(--foreground)]/90 leading-relaxed mb-8">
              {lang === "id"
                ? "Hubungi saya langsung melalui email untuk membahas kerja sama penuh waktu (Full-Time), freelance enterprise, atau diskusi teknis rekayasa sistem web."
                : "Reach out directly via email to explore full-time engineering roles, enterprise freelance opportunities, or technical system discussions."}
            </p>
          </div>

          {/* Email action block */}
          <div className="pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={`mailto:${profileData.email}`}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[var(--primary)] text-white font-medium text-sm hover:bg-[var(--primary-strong)] active:scale-98 transition-colors shadow-xs"
            >
              <Send className="w-4 h-4" />
              <span>{profileData.email}</span>
            </a>

            <button
              type="button"
              onClick={copyEmail}
              aria-label="Salin alamat email"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] font-medium text-sm hover:border-[var(--primary)] hover:text-[var(--primary)] active:scale-98 transition-colors cursor-pointer shadow-xs"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-500">
                    {mounted ? t.contact_copied_email : "Tersalin!"}
                  </span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>{mounted ? t.contact_copy_email : "Salin Email"}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Secondary Channels Cards */}
        <div className="lg:col-span-5 flex flex-col gap-3.5">
          {/* WhatsApp Card */}
          <a
            href={profileData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:border-emerald-500/50 shadow-xs transition-colors flex items-center justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center transition-colors">
                <WhatsappIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[var(--foreground)] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  WhatsApp
                </h4>
                <p className="text-xs text-[var(--muted)] font-mono">
                  +62 813-1588-7085 &bull; Chat Langsung
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[var(--muted)] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
          </a>

          {/* LinkedIn Card */}
          <a
            href={profileData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--primary)] shadow-xs transition-colors flex items-center justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-md bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                  LinkedIn
                </h4>
                <p className="text-xs text-[var(--muted)] font-mono">
                  linkedin.com/in/rafiazharr17
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--primary)] transition-colors" />
          </a>

          {/* GitHub Card */}
          <a
            href={profileData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--foreground)] shadow-xs transition-colors flex items-center justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-md bg-[var(--surface-muted)] text-[var(--foreground)] border border-[var(--border)] flex items-center justify-center transition-colors">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                  GitHub
                </h4>
                <p className="text-xs text-[var(--muted)] font-mono">
                  github.com/rafiazharr17 &bull; Repositories
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--primary)] transition-colors" />
          </a>
        </div>
      </div>
    </SectionContainer>
  );
}
