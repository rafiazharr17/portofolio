"use client";

import { useState } from "react";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/project-card";
import { projectsData } from "@/data/projects";
import { useLanguage } from "@/hooks/use-language";
import { cn } from "@/lib/utils";

type FilterType = "all" | "fullstack" | "frontend";

export function ProjectsSection() {
  const { lang, t, mounted } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === "all") return true;
    return p.type === activeFilter;
  });

  const fullstackCount = projectsData.filter((p) => p.type === "fullstack").length;
  const frontendCount = projectsData.filter((p) => p.type === "frontend").length;

  const filters: Array<{ id: FilterType; label: string; count: number }> = [
    {
      id: "all",
      label: mounted ? t.filter_all : "Semua",
      count: projectsData.length,
    },
    {
      id: "fullstack",
      label: mounted ? t.filter_fullstack : "Full Stack",
      count: fullstackCount,
    },
    {
      id: "frontend",
      label: mounted ? t.filter_frontend : "Frontend",
      count: frontendCount,
    },
  ];

  return (
    <SectionContainer id="projects">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <SectionHeading
          eyebrow={mounted ? t.projects_eyebrow : "02 / PORTFOLIO"}
          title={mounted ? t.projects_title : "Proyek yang Telah Dibangun"}
          description={
            lang === "id"
              ? "Sistem informasi enterprise, monitoring pabrik, dan aplikasi web berbasis sistem nyata."
              : "Enterprise software, factory monitoring systems, and production web applications."
          }
          className="mb-0"
        />

        {/* Filter bar */}
        <div
          role="tablist"
          aria-label="Filter kategori proyek"
          className="inline-flex items-center p-1 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-xs self-start md:self-auto"
        >
          {filters.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setActiveFilter(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary)]",
                  isActive
                    ? "bg-[var(--primary)] text-white font-semibold shadow-xs"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                )}
              >
                <span>{tab.label}</span>
                <span
                  className={cn(
                    "px-1.5 py-0.2 rounded-full text-[10px]",
                    isActive ? "bg-white/20 text-white" : "bg-[var(--surface-muted)] text-[var(--muted)]"
                  )}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} lang={lang} />
        ))}
      </div>
    </SectionContainer>
  );
}
