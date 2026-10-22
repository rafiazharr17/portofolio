"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Code2, Layers } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/project-card";
import { projectsData, ProjectItem } from "@/data/projects";
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

  // Primary Flagship project for spotlight
  const featuredProject = filteredProjects[0];
  const secondaryProjects = filteredProjects.slice(1);

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

        {/* Filter bar - structured tabs, no excessive pill shapes */}
        <div
          role="tablist"
          aria-label="Filter kategori proyek"
          className="inline-flex items-center p-1 rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-xs self-start md:self-auto"
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
                  "flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-medium font-mono transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary)]",
                  isActive
                    ? "bg-[var(--primary)] text-white font-semibold shadow-xs"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                )}
              >
                <span>{tab.label}</span>
                <span
                  className={cn(
                    "px-1.5 py-0.2 rounded text-[10px]",
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

      {/* Flagship Featured Project Spotlight */}
      {featuredProject && (
        <div className="mb-10">
          <FeaturedProjectSpotlight project={featuredProject} lang={lang} />
        </div>
      )}

      {/* Supporting Projects Index Rail (Asymmetric grid with visual variety) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {secondaryProjects.map((project) => (
          <ProjectCard key={project.id} project={project} lang={lang} />
        ))}
      </div>
    </SectionContainer>
  );
}

function FeaturedProjectSpotlight({
  project,
  lang,
}: {
  project: ProjectItem;
  lang: "id" | "en";
}) {
  const [imageError, setImageError] = useState(false);
  const isFullStack = project.type === "fullstack";
  const subtitle = project.subtitle[lang] || project.subtitle.id;
  const description = project.description[lang] || project.description.id;

  return (
    <article className="rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden shadow-sm transition-colors hover:border-[var(--primary)]/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left: Large Authentic Preview */}
        <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto w-full min-h-[260px] lg:min-h-[380px] bg-[var(--surface-muted)] overflow-hidden border-b lg:border-b-0 lg:border-r border-[var(--border)]">
          {project.image && !imageError ? (
            <Image
              src={project.image}
              alt={`Screenshot ${project.title}`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <Layers className="w-8 h-8 text-[var(--primary)] mb-2" />
              <span className="text-xs font-mono font-medium text-[var(--muted)]">
                {project.fallbackTitle}
              </span>
            </div>
          )}

          {/* Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold uppercase bg-[var(--surface)]/95 text-[var(--primary)] border border-[var(--border)] shadow-xs">
              {lang === "id" ? "Proyek Unggulan" : "Featured Spotlight"}
            </span>
            <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-[var(--surface)]/95 text-[var(--muted)] border border-[var(--border)] shadow-xs">
              {project.year}
            </span>
          </div>
        </div>

        {/* Right: Detailed Context & System Metadata */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--muted)] uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
              <span>{isFullStack ? "Full Stack System" : "Frontend Application"}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--foreground)]">
              {project.title}
            </h3>

            <p className="text-sm font-semibold text-[var(--primary)] mt-1 mb-4">
              {subtitle}
            </p>

            <p className="text-sm text-[var(--foreground)]/90 leading-relaxed">
              {description}
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-[var(--border)]">
            <span className="block text-[11px] font-mono uppercase tracking-wider text-[var(--muted)] mb-2.5">
              Teknologi & Lingkup Sistem
            </span>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-[var(--surface-muted)] text-[var(--foreground)] border border-[var(--border)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[var(--primary)] text-white text-xs font-semibold hover:bg-[var(--primary-strong)] transition-colors shadow-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] text-xs font-semibold hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Repository GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
