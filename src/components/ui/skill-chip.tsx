import { cn } from "@/lib/utils";

interface SkillChipProps {
  name: string;
  highlight?: boolean;
  className?: string;
}

export function SkillChip({ name, highlight = false, className }: SkillChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 select-none",
        highlight
          ? "border border-[var(--primary)]/40 bg-[var(--primary)]/15 text-[var(--foreground)] hover:border-[var(--primary)] hover:bg-[var(--primary)]/25 shadow-xs"
          : "border border-[var(--border)] bg-[var(--surface-muted)] text-[var(--foreground)]/90 hover:text-[var(--foreground)] hover:border-[var(--primary)]/40 shadow-xs",
        className
      )}
    >
      {highlight && (
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mr-2 shrink-0" />
      )}
      {name}
    </span>
  );
}
