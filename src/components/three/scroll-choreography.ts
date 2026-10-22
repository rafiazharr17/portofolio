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

  const mm = gsap.matchMedia();

  if (reducedMotion) {
    mm.add("(min-width: 1024px)", () => {
      camera.position.set(0, 2.0, 6.4);
      cameraTarget.set(0.5, 0.1, 0);
    });
    mm.add("(max-width: 1023px)", () => {
      camera.position.set(0, 1.3, 6.0);
      cameraTarget.set(0, -0.4, 0);
    });
    return () => mm.revert();
  }

  // Desktop Scroll Choreography: right-offset workbench for left text negative space
  mm.add("(min-width: 1024px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    });

    // Keyframe 0 -> 1: Hero to About (Subtle pivot, workbench stays anchored right)
    tl.to(
      camera.position,
      { x: 0.15, y: 1.8, z: 6.0, ease: "power1.inOut" },
      0
    )
      .to(cameraTarget, { x: 0.55, y: 0.1, z: 0, ease: "power1.inOut" }, 0)
      .to(workbenchBase.rotation, { y: 0.08, ease: "none" }, 0);

    // Keyframe 1 -> 2: About to Skills (Frame system architecture blocks on workbench)
    tl.to(
      camera.position,
      { x: 0.1, y: 1.3, z: 5.4, ease: "power1.inOut" },
      1
    )
      .to(cameraTarget, { x: 0.65, y: -0.2, z: 0.2, ease: "power1.inOut" }, 1)
      .to(systemBlocks.position, { y: 0.15, ease: "power1.out" }, 1);

    // Keyframe 2 -> 3: Skills to Projects (Visual Centerpiece: featured frame advances)
    tl.to(
      camera.position,
      { x: 0.25, y: 1.0, z: 4.8, ease: "power1.inOut" },
      2
    )
      .to(cameraTarget, { x: 0.75, y: 0.1, z: 0.2, ease: "power1.inOut" }, 2)
      .to(featuredFrame.position, { z: 0.5, y: 0.25, ease: "power1.out" }, 2);

    if (projectScreens.length >= 2) {
      tl.to(
        projectScreens[0].position,
        { y: -0.1, z: -0.5, ease: "power1.inOut" },
        2
      ).to(
        projectScreens[1].position,
        { y: -0.15, z: -0.4, ease: "power1.inOut" },
        2
      );
    }

    // Keyframe 3 -> 4: Projects to Experience & Certificates (Timeline guide rail)
    tl.to(
      camera.position,
      { x: 0.2, y: 0.6, z: 5.0, ease: "power1.inOut" },
      3
    )
      .to(cameraTarget, { x: 0.6, y: -0.4, z: 0, ease: "power1.inOut" }, 3)
      .to(timelineRail.position, { y: 0.1, ease: "power1.out" }, 3);

    // Keyframe 4 -> 5: Certificates to Contact / Outro (Pull-back showing complete workbench)
    tl.to(
      camera.position,
      { x: 0.35, y: 2.3, z: 7.2, ease: "power1.inOut" },
      4
    )
      .to(cameraTarget, { x: 0.5, y: 0.0, z: 0, ease: "power1.inOut" }, 4)
      .to(featuredFrame.position, { z: 0.2, y: 0.1, ease: "power1.inOut" }, 4)
      .to(systemBlocks.position, { y: 0, ease: "power1.inOut" }, 4)
      .to(timelineRail.position, { y: 0, ease: "power1.inOut" }, 4);
  });

  // Mobile & Tablet Choreography (<1024px): centered horizontal framing, vertical scroll sync
  mm.add("(max-width: 1023px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    });

    // Keyframe 0 -> 1: Hero to About (Center framing, gentle rotation)
    tl.to(
      camera.position,
      { x: 0, y: 1.1, z: 5.8, ease: "power1.inOut" },
      0
    )
      .to(cameraTarget, { x: 0, y: -0.4, z: 0, ease: "power1.inOut" }, 0)
      .to(workbenchBase.rotation, { y: 0.1, ease: "none" }, 0);

    // Keyframe 1 -> 2: About to Skills (Frame system architecture blocks)
    tl.to(
      camera.position,
      { x: 0, y: 0.8, z: 5.2, ease: "power1.inOut" },
      1
    )
      .to(cameraTarget, { x: 0, y: -0.5, z: 0.2, ease: "power1.inOut" }, 1)
      .to(systemBlocks.position, { y: 0.15, ease: "power1.out" }, 1);

    // Keyframe 2 -> 3: Skills to Projects (Visual Centerpiece: featured TKQ An-Naurah frame)
    tl.to(
      camera.position,
      { x: 0, y: 0.5, z: 4.6, ease: "power1.inOut" },
      2
    )
      .to(cameraTarget, { x: 0, y: -0.2, z: 0.2, ease: "power1.inOut" }, 2)
      .to(featuredFrame.position, { z: 0.4, y: 0.2, ease: "power1.out" }, 2);

    if (projectScreens.length >= 2) {
      tl.to(
        projectScreens[0].position,
        { y: -0.1, z: -0.4, ease: "power1.inOut" },
        2
      ).to(
        projectScreens[1].position,
        { y: -0.12, z: -0.3, ease: "power1.inOut" },
        2
      );
    }

    // Keyframe 3 -> 4: Projects to Experience (Timeline rail)
    tl.to(
      camera.position,
      { x: 0, y: 0.3, z: 4.8, ease: "power1.inOut" },
      3
    )
      .to(cameraTarget, { x: 0, y: -0.6, z: 0, ease: "power1.inOut" }, 3)
      .to(timelineRail.position, { y: 0.1, ease: "power1.out" }, 3);

    // Keyframe 4 -> 5: Certificates to Contact (Pull back showing complete modular workbench)
    tl.to(
      camera.position,
      { x: 0, y: 1.8, z: 6.8, ease: "power1.inOut" },
      4
    )
      .to(cameraTarget, { x: 0, y: -0.4, z: 0, ease: "power1.inOut" }, 4)
      .to(featuredFrame.position, { z: 0.15, y: 0.05, ease: "power1.inOut" }, 4)
      .to(systemBlocks.position, { y: 0, ease: "power1.inOut" }, 4)
      .to(timelineRail.position, { y: 0, ease: "power1.inOut" }, 4);
  });

  // Cleanup handler
  return () => {
    mm.revert();
  };
}
