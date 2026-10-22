import * as THREE from "three";

export interface WorkspaceObjects {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  workbenchBase: THREE.Group;
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
  // 1. Scene
  const scene = new THREE.Scene();

  // 2. Camera with architectural 3/4 isometric feel
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.set(2.5, 3.2, 7.2);
  const cameraTarget = new THREE.Vector3(0, 0, 0);

  // 3. Renderer with antialiasing and alpha for background integration
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

  // 4. Lighting: One warm key light, one restrained cobalt rim light, soft ambient
  const ambientLight = new THREE.AmbientLight(
    isDark ? 0x172033 : 0xf1f5f9,
    isDark ? 1.6 : 2.2
  );
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xfffbf5, isDark ? 2.4 : 2.8);
  keyLight.position.set(6, 8, 5);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0x1a6ef7, isDark ? 1.4 : 0.9);
  rimLight.position.set(-6, 4, -4);
  scene.add(rimLight);

  const textureLoader = new THREE.TextureLoader();

  // 5. Workbench Base: Architectural modular board/slab
  const workbenchBase = new THREE.Group();

  const baseGeo = new THREE.BoxGeometry(9.6, 0.22, 6.2);
  const baseMat = new THREE.MeshStandardMaterial({
    color: isDark ? 0x151f30 : 0xe8e6df,
    metalness: 0.15,
    roughness: 0.85,
  });
  const baseMesh = new THREE.Mesh(baseGeo, baseMat);
  baseMesh.position.y = -1.6;
  workbenchBase.add(baseMesh);

  // Architectural Guide Rails on the workbench
  const railMat = new THREE.MeshStandardMaterial({
    color: isDark ? 0x223147 : 0xd2cfc6,
    metalness: 0.5,
    roughness: 0.4,
  });

  const rail1Geo = new THREE.BoxGeometry(9.2, 0.04, 0.08);
  const rail1 = new THREE.Mesh(rail1Geo, railMat);
  rail1.position.set(0, -1.47, -1.6);
  workbenchBase.add(rail1);

  const rail2 = new THREE.Mesh(rail1Geo, railMat);
  rail2.position.set(0, -1.47, 1.2);
  workbenchBase.add(rail2);

  // Subtle accent line on workbench perimeter
  const rimEdgeGeo = new THREE.BoxGeometry(9.64, 0.02, 6.24);
  const rimEdgeMat = new THREE.MeshStandardMaterial({
    color: 0x1a6ef7,
    roughness: 0.5,
    metalness: 0.3,
  });
  const rimEdge = new THREE.Mesh(rimEdgeGeo, rimEdgeMat);
  rimEdge.position.y = -1.5;
  workbenchBase.add(rimEdge);

  scene.add(workbenchBase);

  // 6. Featured Project Frame: Browser window displaying real project screenshot
  const featuredFrame = new THREE.Group();

  const frameWidth = 3.6;
  const frameHeight = 2.25;
  const frameDepth = 0.08;

  const browserBezelGeo = new THREE.BoxGeometry(frameWidth, frameHeight, frameDepth);
  const browserBezelMat = new THREE.MeshStandardMaterial({
    color: isDark ? 0x1c2738 : 0xffffff,
    metalness: 0.2,
    roughness: 0.4,
  });
  const browserBezel = new THREE.Mesh(browserBezelGeo, browserBezelMat);
  featuredFrame.add(browserBezel);

  // Browser Screen (with authentic screenshot)
  const screenGeo = new THREE.PlaneGeometry(frameWidth - 0.16, frameHeight - 0.28);
  const screenTexture = textureLoader.load("/images/projects/dashboard-logistic-flex.png");
  screenTexture.colorSpace = THREE.SRGBColorSpace;

  const screenMat = new THREE.MeshBasicMaterial({
    map: screenTexture,
  });
  const screenMesh = new THREE.Mesh(screenGeo, screenMat);
  screenMesh.position.set(0, -0.06, frameDepth / 2 + 0.002);
  featuredFrame.add(screenMesh);

  // Browser Top Bar
  const topBarGeo = new THREE.PlaneGeometry(frameWidth - 0.16, 0.18);
  const topBarMat = new THREE.MeshBasicMaterial({
    color: isDark ? 0x141d2b : 0xeef2f7,
  });
  const topBar = new THREE.Mesh(topBarGeo, topBarMat);
  topBar.position.set(0, frameHeight / 2 - 0.16, frameDepth / 2 + 0.002);
  featuredFrame.add(topBar);

  // Subtle browser window title pill
  const urlBarGeo = new THREE.PlaneGeometry(1.6, 0.09);
  const urlBarMat = new THREE.MeshBasicMaterial({
    color: isDark ? 0x223045 : 0xdfe6f0,
  });
  const urlBar = new THREE.Mesh(urlBarGeo, urlBarMat);
  urlBar.position.set(0, frameHeight / 2 - 0.16, frameDepth / 2 + 0.004);
  featuredFrame.add(urlBar);

  // Set initial position on workbench
  featuredFrame.position.set(0.6, 0.2, 0.4);
  featuredFrame.rotation.y = -0.15;
  scene.add(featuredFrame);

  // 7. Project Index Rail: Supporting project screens on workbench
  const projectScreens: THREE.Group[] = [];
  const secondaryProjectData = [
    {
      src: "/images/projects/asset-mis.jpeg",
      pos: [-2.8, -0.2, -1.2] as [number, number, number],
      rotY: 0.2,
    },
    {
      src: "/images/projects/job-setup-verification.jpeg",
      pos: [2.9, -0.3, -1.4] as [number, number, number],
      rotY: -0.25,
    },
    {
      src: "/images/projects/tkq-annaurah.jpeg",
      pos: [-1.4, -0.6, 1.8] as [number, number, number],
      rotY: 0.1,
    },
  ];

  secondaryProjectData.forEach((item) => {
    const pGroup = new THREE.Group();
    const w = 2.0;
    const h = 1.3;
    const d = 0.05;

    const bGeo = new THREE.BoxGeometry(w, h, d);
    const bMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x15202e : 0xf8fafc,
      metalness: 0.2,
      roughness: 0.5,
    });
    const bMesh = new THREE.Mesh(bGeo, bMat);
    pGroup.add(bMesh);

    const sGeo = new THREE.PlaneGeometry(w - 0.1, h - 0.1);
    const tex = textureLoader.load(item.src);
    tex.colorSpace = THREE.SRGBColorSpace;
    const sMat = new THREE.MeshBasicMaterial({ map: tex });
    const sMesh = new THREE.Mesh(sGeo, sMat);
    sMesh.position.set(0, 0, d / 2 + 0.002);
    pGroup.add(sMesh);

    pGroup.position.set(...item.pos);
    pGroup.rotation.y = item.rotY;
    scene.add(pGroup);
    projectScreens.push(pGroup);
  });

  // 8. System Blocks: Modular architectural blocks representing Frontend, API/Backend, Database
  const systemBlocks = new THREE.Group();

  const blockMat1 = new THREE.MeshStandardMaterial({
    color: isDark ? 0x1e2c40 : 0xdde3ec,
    metalness: 0.4,
    roughness: 0.4,
  });
  const blockMat2 = new THREE.MeshStandardMaterial({
    color: 0x1a6ef7,
    metalness: 0.3,
    roughness: 0.5,
  });
  const blockMat3 = new THREE.MeshStandardMaterial({
    color: isDark ? 0x273852 : 0xc6d0df,
    metalness: 0.4,
    roughness: 0.4,
  });

  // Layer 1: Database block (base)
  const b1Geo = new THREE.BoxGeometry(1.6, 0.22, 1.2);
  const b1 = new THREE.Mesh(b1Geo, blockMat1);
  b1.position.set(-2.2, -1.35, 0.8);
  systemBlocks.add(b1);

  // Layer 2: API / Backend block (mid)
  const b2Geo = new THREE.BoxGeometry(1.3, 0.22, 1.0);
  const b2 = new THREE.Mesh(b2Geo, blockMat2);
  b2.position.set(-2.2, -1.1, 0.8);
  systemBlocks.add(b2);

  // Layer 3: Frontend Client block (top)
  const b3Geo = new THREE.BoxGeometry(1.0, 0.22, 0.8);
  const b3 = new THREE.Mesh(b3Geo, blockMat3);
  b3.position.set(-2.2, -0.85, 0.8);
  systemBlocks.add(b3);

  scene.add(systemBlocks);

  // 9. Timeline Rail: Linear architectural ruler/guide rail with markers
  const timelineRail = new THREE.Group();

  const tTrackGeo = new THREE.BoxGeometry(3.6, 0.04, 0.06);
  const tTrackMat = new THREE.MeshStandardMaterial({
    color: isDark ? 0x25354c : 0xcbd5e1,
    metalness: 0.5,
    roughness: 0.4,
  });
  const tTrack = new THREE.Mesh(tTrackGeo, tTrackMat);
  tTrack.position.set(1.5, -1.4, -0.5);
  timelineRail.add(tTrack);

  // 4 Milestone Pins along the timeline rail
  const pinGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.2, 16);
  const pinMat = new THREE.MeshStandardMaterial({
    color: 0x1a6ef7,
    metalness: 0.6,
    roughness: 0.3,
  });

  const pinPositions = [-1.2, -0.4, 0.4, 1.2];
  pinPositions.forEach((posX) => {
    const pin = new THREE.Mesh(pinGeo, pinMat);
    pin.position.set(1.5 + posX, -1.3, -0.5);
    timelineRail.add(pin);
  });

  scene.add(timelineRail);

  // Resize handler
  const resize = (width: number, height: number) => {
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  };

  // Update theme colors
  const updateTheme = (dark: boolean) => {
    ambientLight.color.setHex(dark ? 0x172033 : 0xf1f5f9);
    ambientLight.intensity = dark ? 1.6 : 2.2;
    keyLight.intensity = dark ? 2.4 : 2.8;
    baseMat.color.setHex(dark ? 0x151f30 : 0xe8e6df);
    railMat.color.setHex(dark ? 0x223147 : 0xd2cfc6);
    browserBezelMat.color.setHex(dark ? 0x1c2738 : 0xffffff);
    topBarMat.color.setHex(dark ? 0x141d2b : 0xeef2f7);
    urlBarMat.color.setHex(dark ? 0x223045 : 0xdfe6f0);
    blockMat1.color.setHex(dark ? 0x1e2c40 : 0xdde3ec);
    blockMat3.color.setHex(dark ? 0x273852 : 0xc6d0df);
    tTrackMat.color.setHex(dark ? 0x25354c : 0xcbd5e1);
  };

  // Render loop
  const render = () => {
    camera.lookAt(cameraTarget);
    renderer.render(scene, camera);
  };

  // Comprehensive resource disposal
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
    screenTexture.dispose();
    renderer.dispose();
  };

  return {
    scene,
    camera,
    renderer,
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
