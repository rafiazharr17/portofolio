import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WorkspaceObjects } from "./digital-workspace";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function initScrollChoreography(
  workspace: WorkspaceObjects,
  reducedMotion: boolean
): () => void {
  const {
    camera,
    cameraTarget,
    centralCore,
    projectScreens,
    dataPathways,
    milestonePillars,
  } = workspace;

  if (reducedMotion) {
    // Gentle stationary position if reduced motion is requested
    camera.position.set(0, 0, 7.5);
    cameraTarget.set(0, 0, 0);
    return () => {};
  }

  // Create Master GSAP ScrollTrigger timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "main",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.2,
      invalidateOnRefresh: true,
    },
  });

  // Storyboard Keyframes:
  // Progress 0% -> Hero (start)
  // Progress 15% -> About
  tl.to(
    camera.position,
    { x: -2.4, y: 0.8, z: 6.2, ease: "power1.inOut" },
    0
  )
    .to(cameraTarget, { x: 0.5, y: 0.1, z: 0, ease: "power1.inOut" }, 0)
    .to(centralCore.rotation, { y: Math.PI * 0.5, x: 0.2, ease: "none" }, 0);

  // Progress 30% -> Skills
  tl.to(
    camera.position,
    { x: 2.8, y: -0.6, z: 5.5, ease: "power1.inOut" },
    1
  )
    .to(cameraTarget, { x: -0.2, y: 0.2, z: 0, ease: "power1.inOut" }, 1)
    .to(centralCore.rotation, { y: Math.PI * 1.0, x: -0.3, ease: "none" }, 1)
    .to(dataPathways.rotation, { z: 0.2, ease: "power1.inOut" }, 1);

  // Progress 50% -> Projects (Visual Centerpiece: screens fan out)
  tl.to(
    camera.position,
    { x: 0, y: 0.2, z: 4.8, ease: "power1.inOut" },
    2
  )
    .to(cameraTarget, { x: 0, y: 0, z: 0, ease: "power1.inOut" }, 2)
    .to(centralCore.scale, { x: 0.85, y: 0.85, z: 0.85, ease: "power1.out" }, 2);

  if (projectScreens.length >= 3) {
    tl.to(
      projectScreens[0].position,
      { x: -1.8, y: 0.4, z: 0.2, ease: "power1.inOut" },
      2
    )
      .to(
        projectScreens[1].position,
        { x: 1.8, y: 0.3, z: 0.1, ease: "power1.inOut" },
        2
      )
      .to(
        projectScreens[2].position,
        { x: 0, y: -1.1, z: -0.4, ease: "power1.inOut" },
        2
      );
  }

  // Progress 70% -> Experience & Certificates
  tl.to(
    camera.position,
    { x: -1.8, y: -1.2, z: 5.8, ease: "power1.inOut" },
    3
  )
    .to(cameraTarget, { x: 0, y: -0.5, z: 0, ease: "power1.inOut" }, 3)
    .to(milestonePillars.rotation, { y: Math.PI * 0.4, ease: "none" }, 3);

  // Progress 85% -> Certificates
  tl.to(
    camera.position,
    { x: 1.8, y: 1.0, z: 5.2, ease: "power1.inOut" },
    4
  )
    .to(cameraTarget, { x: 0, y: 0.2, z: 0, ease: "power1.inOut" }, 4);

  // Progress 100% -> Contact / Outro (Pull-back showing whole connected workspace)
  tl.to(
    camera.position,
    { x: 0, y: 0, z: 8.8, ease: "power1.inOut" },
    5
  )
    .to(cameraTarget, { x: 0, y: 0, z: 0, ease: "power1.inOut" }, 5)
    .to(
      centralCore.scale,
      { x: 1.1, y: 1.1, z: 1.1, ease: "power1.inOut" },
      5
    )
    .to(
      centralCore.rotation,
      { y: Math.PI * 2.5, ease: "none" },
      5
    );

  // Cleanup handler
  return () => {
    tl.kill();
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}
