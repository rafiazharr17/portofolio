"use client";

export function SceneFallback() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-transparent"
    >
      {/* Subtle calm architectural grounding plane with no radial orbs or tech grids */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none" />
    </div>
  );
}
