"use client";

import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { timelineData } from "@/data/experience";
import { useLanguage } from "@/hooks/use-language";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

export function ExperienceSection() {
  const { lang, t, mounted } = useLanguage();

  return (
    <SectionContainer id="experience">
      <SectionHeading
        eyebrow={mounted ? t.exp_eyebrow : "04 / PERJALANAN"}
        title={mounted ? t.exp_title : "Pengalaman & Pendidikan"}
        description={
          lang === "id"
            ? "Jejak langkah profesional di industri perangkat lunak, freelance, riset akademik, dan pendidikan formal."
            : "Professional track record in industry software engineering, freelance, academic research, and formal education."
        }
      />

      <div className="relative pl-6 sm:pl-8 border-l-2 border-[var(--border)] ml-3 sm:ml-4 space-y-12">
        {timelineData.map((item) => {
          const role = item.role[lang] || item.role.id;
          const period = item.period[lang] || item.period.id;
          const isEducation = item.type === "education";

          return (
            <div key={item.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 rounded-full border-2 border-[var(--border)] bg-[var(--surface)] text-[var(--primary)] flex items-center justify-center group-hover:border-[var(--primary)] group-hover:scale-110 transition-all duration-200 shadow-xs">
                {isEducation ? (
                  <GraduationCap className="w-3.5 h-3.5" />
                ) : (
                  <Briefcase className="w-3.5 h-3.5" />
                )}
              </div>

              {/* Card Container */}
              <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7 shadow-xs hover:border-[var(--primary)]/50 transition-colors duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[var(--border)] mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                      {role}
                    </h3>
                    <p className="text-sm font-medium text-[var(--primary)]">
                      {item.organization}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[var(--surface-muted)] text-[var(--muted)] border border-[var(--border)] self-start sm:self-auto shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                    {period}
                  </span>
                </div>

                <ul className="space-y-2.5 text-sm text-[var(--muted)] leading-relaxed">
                  {item.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                      <span>{pt[lang] || pt.id}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
