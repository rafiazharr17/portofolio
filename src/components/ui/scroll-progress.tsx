"use client";

import { useEffect, useState } from "react";

export function ScrollProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) {
        setScrollPercentage(0);
        return;
      }
      const currentScroll = window.scrollY;
      const progress = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
      setScrollPercentage(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      role="progressbar"
      aria-label="Progres membaca halaman"
      aria-valuenow={Math.round(scrollPercentage)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-transparent"
    >
      <div
        className="h-full bg-gradient-to-r from-[#1A6EF7] via-[#42C8FF] to-[#60A5FA] transition-all duration-75 ease-out shadow-[0_0_8px_rgba(66,200,255,0.6)]"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
}
