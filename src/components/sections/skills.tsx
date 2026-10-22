"use client";

import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillChip } from "@/components/ui/skill-chip";
import { skillsData } from "@/data/skills";
import { useLanguage } from "@/hooks/use-language";
import { Code, Server, Database, Wrench } from "lucide-react";

export function SkillsSection() {
  const { lang, mounted } = useLanguage();

  const categoryIcons: Record<string, React.ElementType> = {
    frontend: Code,
    backend: Server,
    database: Database,
    tools: Wrench,
  };

  return (
    <SectionContainer id="skills">
      <SectionHeading
        eyebrow="TECH STACK & EXPERTISE"
        title={lang === "id" ? "Keahlian &" : "Skills &"}
        highlight={lang === "id" ? "Teknologi" : "Expertise"}
        description={
          lang === "id"
            ? "Teknologi dan tools yang digunakan dalam membangun arsitektur aplikasi web modern yang scalable."
            : "Core technologies and workflows utilized to engineer scalable, modern web systems."
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {skillsData.map((category) => {
          const Icon = categoryIcons[category.id] || Code;
          const categoryTitle =
            category.categoryName[lang] || category.categoryName.id;

          return (
            <div
              key={category.id}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7 shadow-xs hover:border-[var(--primary)]/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-[var(--border)]">
                <div className="w-9 h-9 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-[var(--foreground)] tracking-tight">
                  {categoryTitle}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillChip
                    key={skill.name}
                    name={skill.name}
                    highlight={skill.highlight}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
