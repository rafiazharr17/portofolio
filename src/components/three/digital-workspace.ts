import * as THREE from "three";

export interface WorkspaceObjects {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  workbenchGroup: THREE.Group;
  workbenchBase: THREE.Mesh;
  featuredFrame: THREE.Group;
  projectScreens: THREE.Group[];
  systemBlocks: THREE.Group;
  timelineRail: THREE.Group;
  ambientLight: THREE.AmbientLight;
  keyLight: THREE.DirectionalLight;
  rimLight: THREE.DirectionalLight;
  cameraTarget: THREE.Vector3;
  dispose: () => void;
  updateTheme: (isDark: boolean) => void;
  render: () => void;
  resize: (width: number, height: number) => void;
}

export function createDigitalWorkspace(
  canvas: HTMLCanvasElement,
  isDark: boolean
): WorkspaceObjects {
  const scene = new THREE.Scene();

  // Perspective Camera
  const camera = new THREE.PerspectiveCamera(
    42,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.set(0, 2.0, 6.4);
  const cameraTarget = new THREE.Vector3(0.5, 0.1, 0);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;

  // Soft Ambient & Directional Lighting
  const ambientLight = new THREE.AmbientLight(
    isDark ? 0x141d2d : 0xf4f3ee,
    isDark ? 1.8 : 2.4
  );
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xfff8ee, isDark ? 2.5 : 2.8);
  keyLight.position.set(6, 7, 5);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(isDark ? 0x60a5fa : 0x1a6ef7, isDark ? 0.9 : 0.6);
  rimLight.position.set(-4, 3, -4);
  scene.add(rimLight);

  const textureLoader = new THREE.TextureLoader();

  // Master Workbench Group - Offset to the right side on desktop
  const workbenchGroup = new THREE.Group();
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
  workbenchGroup.position.set(isDesktop ? 2.6 : 0, isDesktop ? 0.0 : -3.0, isDesktop ? 0 : -1.8);
  if (!isDesktop) {
    workbenchGroup.scale.set(0.75, 0.75, 0.75);
  }

  // 1. Workbench Board: Architectural matte slab (no giant electric-blue overlay)
  const baseGeo = new THREE.BoxGeometry(5.6, 0.16, 3.8);
  const baseMat = new THREE.MeshStandardMaterial({
    color: isDark ? 0x152033 : 0xe2ded4,
    metalness: 0.1,
    roughness: 0.9,
  });
  const workbenchBase = new THREE.Mesh(baseGeo, baseMat);
  workbenchBase.position.y = -0.9;
  workbenchGroup.add(workbenchBase);

  // Subtle architectural bottom bevel trim
  const trimGeo = new THREE.BoxGeometry(5.66, 0.04, 3.86);
  const trimMat = new THREE.MeshStandardMaterial({
    color: isDark ? 0x223249 : 0xc7c1b4,
    metalness: 0.3,
    roughness: 0.7,
  });
  const trimMesh = new THREE.Mesh(trimGeo, trimMat);
  trimMesh.position.y = -0.98;
  workbenchGroup.add(trimMesh);

  // Linear Guide Rails on workbench
  const railGeo = new THREE.BoxGeometry(5.2, 0.025, 0.05);
  const railMat = new THREE.MeshStandardMaterial({
    color: isDark ? 0x273954 : 0xcdc7bb,
    metalness: 0.4,
    roughness: 0.5,
  });

  const rail1 = new THREE.Mesh(railGeo, railMat);
  rail1.position.set(0, -0.81, -1.0);
  workbenchGroup.add(rail1);

  const rail2 = new THREE.Mesh(railGeo, railMat);
  rail2.position.set(0, -0.81, 0.9);
  workbenchGroup.add(rail2);

  // 2. Featured Project Frame: Browser window displaying real project screenshot
  const featuredFrame = new THREE.Group();
  const frameW = 2.9;
  const frameH = 1.8;
  const frameD = 0.06;

  const bezelGeo = new THREE.BoxGeometry(frameW, frameH, frameD);
  const bezelMat = new THREE.MeshStandardMaterial({
    color: isDark ? 0x111927 : 0xffffff,
    metalness: 0.2,
    roughness: 0.4,
  });
  const bezelMesh = new THREE.Mesh(bezelGeo, bezelMat);
  featuredFrame.add(bezelMesh);

  // Browser Screen Plane
  const screenGeo = new THREE.PlaneGeometry(frameW - 0.14, frameH - 0.22);
  const screenTex = textureLoader.load("/images/projects/tkq-annaurah.jpeg");
  screenTex.colorSpace = THREE.SRGBColorSpace;
  const screenMat = new THREE.MeshBasicMaterial({ map: screenTex });
  const screenMesh = new THREE.Mesh(screenGeo, screenMat);
  screenMesh.position.set(0, -0.04, frameD / 2 + 0.002);
  featuredFrame.add(screenMesh);

  // Browser Title Bar
  const titleBarGeo = new THREE.PlaneGeometry(frameW - 0.14, 0.14);
  const titleBarMat = new THREE.MeshBasicMaterial({
    color: isDark ? 0x182436 : 0xecf0f5,
  });
  const titleBar = new THREE.Mesh(titleBarGeo, titleBarMat);
  titleBar.position.set(0, frameH / 2 - 0.12, frameD / 2 + 0.002);
  featuredFrame.add(titleBar);

  // URL Pill in title bar
  const urlPillGeo = new THREE.PlaneGeometry(1.4, 0.07);
  const urlPillMat = new THREE.MeshBasicMaterial({
    color: isDark ? 0x24344d : 0xdde3ed,
  });
  const urlPill = new THREE.Mesh(urlPillGeo, urlPillMat);
  urlPill.position.set(0, frameH / 2 - 0.12, frameD / 2 + 0.004);
  featuredFrame.add(urlPill);

  featuredFrame.position.set(0.35, 0.05, 0.1);
  featuredFrame.rotation.y = -0.16;
  workbenchGroup.add(featuredFrame);

  // 3. Secondary Project Panels
  const projectScreens: THREE.Group[] = [];
  const secondaryConfig = [
    {
      src: "/images/projects/asset-mis.jpeg",
      pos: [-1.4, -0.2, -0.7] as [number, number, number],
      rotY: 0.14,
      w: 1.6,
      h: 1.05,
    },
    {
      src: "/images/projects/job-setup-verification.jpeg",
      pos: [1.6, -0.25, -0.6] as [number, number, number],
      rotY: -0.18,
      w: 1.6,
      h: 1.05,
    },
  ];

  secondaryConfig.forEach((cfg) => {
    const pGroup = new THREE.Group();
    const bGeo = new THREE.BoxGeometry(cfg.w, cfg.h, 0.04);
    const bMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x121a28 : 0xf8fafc,
      metalness: 0.2,
      roughness: 0.5,
    });
    const bMesh = new THREE.Mesh(bGeo, bMat);
    pGroup.add(bMesh);

    const sGeo = new THREE.PlaneGeometry(cfg.w - 0.08, cfg.h - 0.08);
    const sTex = textureLoader.load(cfg.src);
    sTex.colorSpace = THREE.SRGBColorSpace;
    const sMat = new THREE.MeshBasicMaterial({ map: sTex });
    const sMesh = new THREE.Mesh(sGeo, sMat);
    sMesh.position.set(0, 0, 0.04 / 2 + 0.002);
    pGroup.add(sMesh);

    pGroup.position.set(...cfg.pos);
    pGroup.rotation.y = cfg.rotY;
    workbenchGroup.add(pGroup);
    projectScreens.push(pGroup);
  });

  // 4. System Blocks: Stacked architectural modules (Database, Backend, Frontend)
  const systemBlocks = new THREE.Group();
  const blockMatBase = new THREE.MeshStandardMaterial({
    color: isDark ? 0x1c2b40 : 0xd8dee8,
    metalness: 0.3,
    roughness: 0.5,
  });
  const blockMatAccent = new THREE.MeshStandardMaterial({
    color: isDark ? 0x60a5fa : 0x1a6ef7,
    metalness: 0.2,
    roughness: 0.5,
  });

  const b1 = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.16, 0.8), blockMatBase);
  b1.position.set(-1.6, -0.72, 0.85);
  systemBlocks.add(b1);

  const b2 = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.16, 0.65), blockMatAccent);
  b2.position.set(-1.6, -0.56, 0.85);
  systemBlocks.add(b2);

  const b3 = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.16, 0.5), blockMatBase);
  b3.position.set(-1.6, -0.4, 0.85);
  systemBlocks.add(b3);

  workbenchGroup.add(systemBlocks);

  // 5. Timeline Guide Rail with Pins
  const timelineRail = new THREE.Group();
  const tTrackMesh = new THREE.Mesh(
    new THREE.BoxGeometry(2.4, 0.025, 0.04),
    new THREE.MeshStandardMaterial({
      color: isDark ? 0x25354c : 0xcbd5e1,
      metalness: 0.5,
      roughness: 0.4,
    })
  );
  tTrackMesh.position.set(0.3, -0.79, 1.35);
  timelineRail.add(tTrackMesh);

  const pinGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.14, 12);
  const pinMat = new THREE.MeshStandardMaterial({
    color: isDark ? 0x60a5fa : 0x1a6ef7,
    metalness: 0.5,
    roughness: 0.3,
  });
  [-0.8, -0.25, 0.3, 0.85].forEach((px) => {
    const pin = new THREE.Mesh(pinGeo, pinMat);
    pin.position.set(0.3 + px, -0.72, 1.35);
    timelineRail.add(pin);
  });
  workbenchGroup.add(timelineRail);

  scene.add(workbenchGroup);

  // Window Resize
  const resize = (width: number, height: number) => {
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const desktop = width >= 1024;
    workbenchGroup.position.set(desktop ? 2.6 : 0, desktop ? 0.0 : -3.2, desktop ? 0 : -2.0);
    workbenchGroup.scale.set(desktop ? 1.0 : 0.7, desktop ? 1.0 : 0.7, desktop ? 1.0 : 0.7);
    cameraTarget.set(desktop ? 0.5 : 0, 0.1, 0);
  };

  // Theme Update
  const updateTheme = (dark: boolean) => {
    ambientLight.color.setHex(dark ? 0x141d2d : 0xf4f3ee);
    ambientLight.intensity = dark ? 1.8 : 2.4;
    keyLight.intensity = dark ? 2.5 : 2.8;
    baseMat.color.setHex(dark ? 0x152033 : 0xe2ded4);
    trimMat.color.setHex(dark ? 0x223249 : 0xc7c1b4);
    railMat.color.setHex(dark ? 0x273954 : 0xcdc7bb);
    bezelMat.color.setHex(dark ? 0x111927 : 0xffffff);
    titleBarMat.color.setHex(dark ? 0x182436 : 0xecf0f5);
    urlPillMat.color.setHex(dark ? 0x24344d : 0xdde3ed);
    blockMatBase.color.setHex(dark ? 0x1c2b40 : 0xd8dee8);
    blockMatAccent.color.setHex(dark ? 0x60a5fa : 0x1a6ef7);
  };

  // Render Frame
  const render = () => {
    camera.lookAt(cameraTarget);
    renderer.render(scene, camera);
  };

  // Dispose
  const dispose = () => {
    scene.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const mesh = obj as THREE.Mesh;
        if (mesh.geometry) mesh.geometry.dispose();
        if (mesh.material) {
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((m) => m.dispose());
          } else {
            mesh.material.dispose();
          }
        }
      }
    });
    screenTex.dispose();
    renderer.dispose();
  };

  return {
    scene,
    camera,
    renderer,
    workbenchGroup,
    workbenchBase,
    featuredFrame,
    projectScreens,
    systemBlocks,
    timelineRail,
    ambientLight,
    keyLight,
    rimLight,
    cameraTarget,
    dispose,
    updateTheme,
    render,
    resize,
  };
}
