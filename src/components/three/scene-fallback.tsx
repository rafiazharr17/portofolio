"use client";

export function SceneFallback() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Ambient background gradient meshes */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[var(--primary)]/10 to-[#42C8FF]/10 blur-[120px]" />
      <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-600/10 to-indigo-600/10 blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[10%] w-[550px] h-[550px] rounded-full bg-gradient-to-tl from-[var(--primary)]/10 to-[#42C8FF]/10 blur-[130px]" />

      {/* Subtle tech grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}
