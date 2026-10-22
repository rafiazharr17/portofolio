"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Code2, Layers } from "lucide-react";
import { ProjectItem } from "@/data/projects";
import { Language } from "@/data/translations";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: ProjectItem;
  lang: Language;
}

export function ProjectCard({ project, lang }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  const isFullStack = project.type === "fullstack";
  const subtitle = project.subtitle[lang] || project.subtitle.id;
  const description = project.description[lang] || project.description.id;
  const fallbackHint = project.fallbackHint[lang] || project.fallbackHint.id;

  return (
    <article className="group relative flex flex-col rounded-lg border border-[var(--border)] bg-[var(--surface)] overflow-hidden transition-colors duration-200 hover:border-[var(--primary)]/60 shadow-xs">
      {/* Thumbnail or Fallback Header */}
      <div className="relative aspect-[16/10] w-full bg-[var(--surface-muted)] overflow-hidden border-b border-[var(--border)]">
        {project.image && !imageError ? (
          <Image
            src={project.image}
            alt={`Screenshot ${project.title}`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-102"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[var(--surface-muted)]">
            <div className="w-10 h-10 rounded-md bg-[var(--surface)] border border-[var(--border)] text-[var(--primary)] flex items-center justify-center mb-2">
              <Layers className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--foreground)]">
              {project.fallbackTitle}
            </span>
            <span className="text-xs text-[var(--muted)] mt-1">
              {fallbackHint}
            </span>
          </div>
        )}

        {/* Category & Year Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10 pointer-events-none">
          <span
            className={cn(
              "px-2 py-0.5 rounded-md text-[10px] font-mono font-medium tracking-wider uppercase border shadow-xs",
              isFullStack
                ? "bg-[var(--surface)]/95 text-[var(--primary)] border-[var(--border)]"
                : "bg-[var(--surface)]/95 text-emerald-600 dark:text-emerald-400 border-[var(--border)]"
            )}
          >
            {isFullStack ? "Full Stack" : "Frontend"}
          </span>
          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-[var(--surface)]/95 text-[var(--muted)] border border-[var(--border)] shadow-xs">
            {project.year}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-medium text-[var(--primary)] mt-1 mb-3">
            {subtitle}
          </p>
          <p className="text-sm text-[var(--foreground)]/85 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Stack & Links */}
        <div className="mt-6 pt-5 border-t border-[var(--border)]">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-[var(--surface-muted)] text-[var(--foreground)]/90 border border-[var(--border)]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[var(--primary)] text-white text-xs font-semibold hover:bg-[var(--primary-strong)] transition-colors shadow-xs"
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
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] text-xs font-semibold hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
