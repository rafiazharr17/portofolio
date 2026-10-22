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
    featuredFrame,
    projectScreens,
    systemBlocks,
    timelineRail,
    workbenchBase,
  } = workspace;

  if (reducedMotion) {
    // Stationary resting perspective for reduced motion preference
    camera.position.set(1.8, 2.2, 6.8);
    cameraTarget.set(0, 0, 0);
    return () => {};
  }

  // Master GSAP ScrollTrigger timeline mapped to the page height
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "main",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.2,
      invalidateOnRefresh: true,
    },
  });

  // Keyframe 0 -> 1: Hero to About (Shift to spacious side of workbench)
  tl.to(
    camera.position,
    { x: -1.6, y: 1.6, z: 6.0, ease: "power1.inOut" },
    0
  )
    .to(cameraTarget, { x: -0.4, y: 0.1, z: 0, ease: "power1.inOut" }, 0)
    .to(workbenchBase.rotation, { y: 0.12, ease: "none" }, 0);

  // Keyframe 1 -> 2: About to Skills (Frame system architecture blocks)
  tl.to(
    camera.position,
    { x: -2.6, y: 0.2, z: 4.6, ease: "power1.inOut" },
    1
  )
    .to(cameraTarget, { x: -2.0, y: -0.9, z: 0.6, ease: "power1.inOut" }, 1)
    .to(systemBlocks.position, { y: 0.15, ease: "power1.out" }, 1);

  // Keyframe 2 -> 3: Skills to Projects (Visual Centerpiece: featured frame advances)
  tl.to(
    camera.position,
    { x: 0.2, y: 0.6, z: 4.2, ease: "power1.inOut" },
    2
  )
    .to(cameraTarget, { x: 0.5, y: 0.15, z: 0.4, ease: "power1.inOut" }, 2)
    .to(featuredFrame.position, { z: 0.7, y: 0.35, ease: "power1.out" }, 2);

  if (projectScreens.length >= 3) {
    tl.to(
      projectScreens[0].position,
      { x: -2.2, y: 0.1, z: -0.4, ease: "power1.inOut" },
      2
    )
      .to(
        projectScreens[1].position,
        { x: 2.4, y: 0.0, z: -0.6, ease: "power1.inOut" },
        2
      )
      .to(
        projectScreens[2].position,
        { x: -0.9, y: -0.5, z: 1.4, ease: "power1.inOut" },
        2
      );
  }

  // Keyframe 3 -> 4: Projects to Experience & Certificates (Timeline guide rail)
  tl.to(
    camera.position,
    { x: 2.2, y: -0.1, z: 4.4, ease: "power1.inOut" },
    3
  )
    .to(cameraTarget, { x: 1.5, y: -1.2, z: -0.4, ease: "power1.inOut" }, 3)
    .to(timelineRail.position, { y: 0.1, ease: "power1.out" }, 3);

  // Keyframe 4 -> 5: Certificates to Contact / Outro (Pull-back showing complete workbench)
  tl.to(
    camera.position,
    { x: 1.4, y: 2.8, z: 8.2, ease: "power1.inOut" },
    4
  )
    .to(cameraTarget, { x: 0, y: -0.2, z: 0, ease: "power1.inOut" }, 4)
    .to(featuredFrame.position, { z: 0.4, y: 0.2, ease: "power1.inOut" }, 4)
    .to(systemBlocks.position, { y: 0, ease: "power1.inOut" }, 4)
    .to(timelineRail.position, { y: 0, ease: "power1.inOut" }, 4);

  // Cleanup handler
  return () => {
    tl.kill();
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}
