"use client";

import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonialsData } from "@/data/testimonials";
import { useLanguage } from "@/hooks/use-language";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const { lang, t, mounted } = useLanguage();

  return (
    <SectionContainer id="testimonials">
      <SectionHeading
        eyebrow={mounted ? t.testi_eyebrow : "05 / REKOMENDASI"}
        title={mounted ? t.testi_title : "Testimoni & Rekomendasi"}
        description={
          lang === "id"
            ? "Ulasan hasil kerja dan kolaborasi proyek dari instansi pemerintah, institusi pendidikan, dan sekolah."
            : "Direct endorsements and feedback from government agency, academic faculty, and institutional partners."
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {testimonialsData.map((item) => {
          const role = item.role[lang] || item.role.id;
          const quote = item.quote[lang] || item.quote.id;

          return (
            <div
              key={item.id}
              className="relative rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:border-[var(--primary)]/60 transition-colors duration-200"
            >
              <div>
                <div className="w-9 h-9 rounded-md bg-[var(--surface-muted)] text-[var(--primary)] border border-[var(--border)] flex items-center justify-center mb-4">
                  <Quote className="w-4 h-4" />
                </div>
                <blockquote className="text-sm sm:text-base text-[var(--foreground)] italic leading-relaxed mb-6">
                  &ldquo;{quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-[var(--border)]">
                <div className="font-bold text-sm text-[var(--foreground)]">
                  {item.name}
                </div>
                <div className="text-xs text-[var(--muted)] font-mono mt-0.5">
                  {role}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
