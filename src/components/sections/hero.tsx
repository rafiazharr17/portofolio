"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowDown, Download, Mail, ChevronRight } from "lucide-react";
import { profileData } from "@/data/profile";
import { useLanguage } from "@/hooks/use-language";

export function HeroSection() {
  const { lang, t, mounted } = useLanguage();

  const phrases = mounted
    ? t.hero_phrases
    : [
        "Full Stack Web Developer.",
        "Spesialis Python Django, Node.js & React.",
        "Terbuka untuk Posisi Penuh Waktu.",
      ];

  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayText, setDisplayText] = useState(phrases[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const current = phrases[phraseIdx % phrases.length];

    if (!isDeleting) {
      if (displayText.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1));
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length - 1));
        }, 30);
      } else {
        setIsDeleting(false);
        setPhraseIdx((prev) => (prev + 1) % phrases.length);
        timeout = setTimeout(() => {}, 400);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIdx, phrases]);

  // Reset when language switches
  useEffect(() => {
    setDisplayText(phrases[0]);
    setPhraseIdx(0);
    setIsDeleting(false);
  }, [lang]);

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden"
    >
      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability status badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium tracking-wide mb-6 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{mounted ? t.hero_available : profileData.status.id}</span>
            </div>

            {/* Title with Gradient & Negative letter-spacing */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.1]">
              <span className="text-[var(--muted)] text-2xl sm:text-3xl block font-semibold mb-2 font-mono">
                {mounted ? t.hero_title_prefix : "Halo, saya"}
              </span>
              <span className="bg-gradient-to-r from-[var(--foreground)] via-[var(--foreground)] to-[var(--primary)] bg-clip-text">
                {profileData.name}
              </span>
            </h1>

            {/* Typewriter Dynamic Subtitle */}
            <div className="mt-4 flex items-center min-h-[2rem]">
              <span className="text-xl sm:text-2xl font-mono font-semibold text-[var(--primary)]">
                {displayText}
              </span>
              <span className="inline-block w-2.5 h-6 bg-[var(--primary)] ml-1 animate-pulse" />
            </div>

            {/* Description */}
            <p className="mt-5 text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-xl">
              {mounted ? t.hero_desc : profileData.role.id}
            </p>

            {/* CTA Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--primary)] text-white font-semibold text-sm hover:bg-[var(--primary-strong)] active:scale-95 transition-all duration-200 shadow-md hover:shadow-[0_0_24px_rgba(26,110,247,0.35)]"
              >
                <span>{mounted ? t.hero_btn_projects : "Lihat Proyek"}</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href={profileData.cvUrl}
                download="CV-Rafi-Alif-Azhar.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] font-semibold text-sm hover:border-[var(--primary)] hover:text-[var(--primary)] active:scale-95 transition-all duration-200 shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>{mounted ? t.hero_btn_cv : "Download CV"}</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] font-semibold text-sm hover:border-[var(--primary)] hover:text-[var(--primary)] active:scale-95 transition-all duration-200 shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>{mounted ? t.hero_btn_contact : "Hubungi Saya"}</span>
              </a>
            </div>

            {/* Verified Stats Grid */}
            <div className="mt-12 pt-8 border-t border-[var(--border)] w-full grid grid-cols-2 sm:grid-cols-4 gap-6">
              {profileData.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[var(--foreground)]">
                    {stat.value}
                  </span>
                  <span className="text-xs text-[var(--muted)] mt-1 font-medium">
                    {stat.label[lang] || stat.label.id}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Profile Photo Card with Glow */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Outer Decorative Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[var(--primary)] to-[#42C8FF] opacity-25 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />

              <div className="relative w-64 h-80 sm:w-76 sm:h-96 rounded-3xl overflow-hidden border-2 border-[var(--border)] bg-[var(--surface)] shadow-2xl">
                <Image
                  src={profileData.photos.desktop}
                  alt={profileData.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 256px, 304px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5">
                  <span className="font-bold text-white text-base">
                    {profileData.name}
                  </span>
                  <span className="text-xs text-white/80 font-mono">
                    Full Stack Web Developer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down prompt */}
        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--muted)] hover:text-[var(--primary)] transition-colors animate-bounce"
          >
            <span>{mounted ? t.hero_scroll_explore : "Scroll untuk Menjelajah"}</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
