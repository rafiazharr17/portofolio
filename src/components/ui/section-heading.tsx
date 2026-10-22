import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[11px] font-mono font-medium tracking-widest text-[var(--primary)] uppercase shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.15]">
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-[var(--primary)] to-[#42C8FF] bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[var(--muted)] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
