"use client";

import { useEffect, useRef, useState } from "react";
import { createDigitalWorkspace, WorkspaceObjects } from "./digital-workspace";
import { initScrollChoreography } from "./scroll-choreography";
import { SceneFallback } from "./scene-fallback";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function PortfolioCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check WebGL availability
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");

    if (!gl) {
      setHasWebGL(false);
      return;
    }

    const isDark = document.documentElement.dataset.theme !== "light";
    let workspace: WorkspaceObjects;

    try {
      workspace = createDigitalWorkspace(canvas, isDark);
    } catch {
      setHasWebGL(false);
      return;
    }

    // Initialize GSAP ScrollTrigger Choreography
    const cleanupChoreography = initScrollChoreography(workspace, reducedMotion);

    // Mouse Parallax (subtle and damped, desktop only)
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024 || reducedMotion) return;
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 0.4;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 0.3;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      workspace.resize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize, { passive: true });

    // Observer for Theme Changes (data-theme attribute)
    const observer = new MutationObserver(() => {
      const dark = document.documentElement.dataset.theme !== "light";
      workspace.updateTheme(dark);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // Render Animation Loop (RAF)
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = (time - lastTime) * 0.001;
      lastTime = time;

      // Smooth idle rotation on central core
      if (!reducedMotion) {
        workspace.centralCore.rotation.y += delta * 0.15;
        workspace.centralCore.rotation.x += delta * 0.05;
        workspace.particles.rotation.y += delta * 0.02;

        // Smooth mouse damping
        currentMouseX += (targetMouseX - currentMouseX) * 0.05;
        currentMouseY += (targetMouseY - currentMouseY) * 0.05;

        workspace.camera.position.x +=
          (workspace.camera.position.x + currentMouseX - workspace.camera.position.x) *
          0.05;
        workspace.camera.position.y +=
          (workspace.camera.position.y - currentMouseY - workspace.camera.position.y) *
          0.05;
      }

      workspace.render();
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Full Cleanup Lifecycle
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      cleanupChoreography();
      workspace.dispose();
    };
  }, [reducedMotion]);

  if (!hasWebGL) {
    return <SceneFallback />;
  }

  return (
    <>
      <SceneFallback />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 w-full h-full"
      />
    </>
  );
}
