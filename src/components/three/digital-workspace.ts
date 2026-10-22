import * as THREE from "three";

export interface WorkspaceObjects {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  centralCore: THREE.Group;
  projectScreens: THREE.Group[];
  dataPathways: THREE.Group;
  milestonePillars: THREE.Group;
  particles: THREE.Points;
  ambientLight: THREE.AmbientLight;
  keyLight: THREE.DirectionalLight;
  corePointLight: THREE.PointLight;
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

  // 2. Camera
  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.set(0, 0, 7.5);
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
  renderer.toneMappingExposure = 1.1;

  // 4. Lighting
  const ambientLight = new THREE.AmbientLight(
    isDark ? 0x0a1220 : 0xd0e0ff,
    isDark ? 1.5 : 2.0
  );
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0x42c8ff, isDark ? 2.8 : 3.2);
  keyLight.position.set(5, 6, 6);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0x1a6ef7, 1.4);
  fillLight.position.set(-6, -4, 4);
  scene.add(fillLight);

  const corePointLight = new THREE.PointLight(0x42c8ff, 3.0, 15);
  corePointLight.position.set(0, 0, 0);
  scene.add(corePointLight);

  // 5. Central Project Core
  const centralCore = new THREE.Group();

  // Inner Core Sphere/Icosahedron
  const innerGeo = new THREE.IcosahedronGeometry(0.9, 1);
  const innerMat = new THREE.MeshStandardMaterial({
    color: isDark ? 0x1a6ef7 : 0x2563eb,
    metalness: 0.85,
    roughness: 0.2,
    emissive: 0x0a2a66,
    emissiveIntensity: 0.4,
  });
  const innerMesh = new THREE.Mesh(innerGeo, innerMat);
  centralCore.add(innerMesh);

  // Outer Wireframe Cage
  const outerGeo = new THREE.IcosahedronGeometry(1.2, 1);
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0x42c8ff,
    wireframe: true,
    transparent: true,
    opacity: isDark ? 0.45 : 0.35,
  });
  const outerMesh = new THREE.Mesh(outerGeo, wireMat);
  centralCore.add(outerMesh);

  // Orbiting Rings
  const ringGeo1 = new THREE.TorusGeometry(1.6, 0.02, 16, 64);
  const ringMat1 = new THREE.MeshBasicMaterial({
    color: 0x60a5fa,
    transparent: true,
    opacity: 0.5,
  });
  const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
  ring1.rotation.x = Math.PI / 3;
  centralCore.add(ring1);

  const ringGeo2 = new THREE.TorusGeometry(1.85, 0.015, 16, 64);
  const ringMat2 = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
    transparent: true,
    opacity: 0.4,
  });
  const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
  ring2.rotation.y = Math.PI / 4;
  centralCore.add(ring2);

  scene.add(centralCore);

  // 6. Floating Application / Project Screens
  const projectScreens: THREE.Group[] = [];
  const screenPositions: [number, number, number][] = [
    [-2.2, 0.8, -1.2],
    [2.3, 0.5, -1.8],
    [-1.8, -1.2, -2.5],
  ];

  screenPositions.forEach((pos, idx) => {
    const screenGroup = new THREE.Group();

    // Window Frame
    const frameGeo = new THREE.BoxGeometry(1.8, 1.15, 0.04);
    const frameMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x0f172a : 0xf1f5f9,
      metalness: 0.6,
      roughness: 0.4,
      transparent: true,
      opacity: 0.9,
    });
    const frameMesh = new THREE.Mesh(frameGeo, frameMat);
    screenGroup.add(frameMesh);

    // Glowing Border
    const edgeGeo = new THREE.EdgesGeometry(frameGeo);
    const edgeMat = new THREE.LineBasicMaterial({
      color: idx === 0 ? 0x42c8ff : idx === 1 ? 0x1a6ef7 : 0x38bdf8,
      transparent: true,
      opacity: 0.7,
    });
    const edgeLine = new THREE.LineSegments(edgeGeo, edgeMat);
    screenGroup.add(edgeLine);

    // Titlebar dots (Red, Yellow, Green)
    const dotGeo = new THREE.CircleGeometry(0.025, 12);
    const colors = [0xef4444, 0xeab308, 0x22c55e];
    colors.forEach((c, i) => {
      const dotMat = new THREE.MeshBasicMaterial({ color: c });
      const dotMesh = new THREE.Mesh(dotGeo, dotMat);
      dotMesh.position.set(-0.75 + i * 0.08, 0.45, 0.025);
      screenGroup.add(dotMesh);
    });

    // Abstract code / UI lines
    for (let l = 0; l < 4; l++) {
      const lineGeo = new THREE.PlaneGeometry(0.6 + (l % 2) * 0.4, 0.035);
      const lineMat = new THREE.MeshBasicMaterial({
        color: isDark ? 0x334155 : 0xcfd8e3,
        transparent: true,
        opacity: 0.7,
      });
      const lineMesh = new THREE.Mesh(lineGeo, lineMat);
      lineMesh.position.set(-0.35 + (l % 2) * 0.1, 0.25 - l * 0.14, 0.025);
      screenGroup.add(lineMesh);
    }

    screenGroup.position.set(...pos);
    screenGroup.rotation.y = (idx === 0 ? 0.25 : -0.25) * Math.PI;
    scene.add(screenGroup);
    projectScreens.push(screenGroup);
  });

  // 7. Data Pathways & Interconnected Nodes
  const dataPathways = new THREE.Group();

  const curve1 = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-3.5, 2, -3),
    new THREE.Vector3(-1.5, 0.5, -1),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(1.5, -0.8, -1.5),
    new THREE.Vector3(3.5, -1.5, -3),
  ]);

  const curve2 = new THREE.CatmullRomCurve3([
    new THREE.Vector3(3, 2, -2.5),
    new THREE.Vector3(1.2, 1, -1),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(-1.2, -1.2, -1),
    new THREE.Vector3(-3, -2, -2.5),
  ]);

  [curve1, curve2].forEach((curve, i) => {
    const tubeGeo = new THREE.TubeGeometry(curve, 64, 0.02, 8, false);
    const tubeMat = new THREE.MeshBasicMaterial({
      color: i === 0 ? 0x42c8ff : 0x1a6ef7,
      transparent: true,
      opacity: isDark ? 0.4 : 0.3,
    });
    const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
    dataPathways.add(tubeMesh);
  });

  // Pathway Nodes (Junction Points)
  const nodeGeo = new THREE.SphereGeometry(0.08, 16, 16);
  const nodeMat = new THREE.MeshBasicMaterial({ color: 0x42c8ff });
  const nodePositions = [
    [-1.5, 0.5, -1],
    [1.5, -0.8, -1.5],
    [1.2, 1, -1],
    [-1.2, -1.2, -1],
  ];
  nodePositions.forEach((np) => {
    const node = new THREE.Mesh(nodeGeo, nodeMat);
    node.position.set(np[0], np[1], np[2]);
    dataPathways.add(node);
  });

  scene.add(dataPathways);

  // 8. Milestone Cylinders / Career Objects
  const milestonePillars = new THREE.Group();
  const pillarGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.15, 32);
  const pillarPositions: [number, number, number][] = [
    [-2.0, -1.8, -2],
    [-0.8, -2.4, -2.5],
    [0.8, -2.8, -3],
    [2.0, -3.2, -3.5],
  ];

  pillarPositions.forEach((pos, idx) => {
    const pMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x1e293b : 0xe2e8f0,
      metalness: 0.8,
      roughness: 0.25,
      emissive: idx === 0 ? 0x1a6ef7 : 0x0f172a,
      emissiveIntensity: 0.3,
    });
    const pillar = new THREE.Mesh(pillarGeo, pMat);
    pillar.position.set(...pos);

    // Glowing accent ring on top
    const ringGeo = new THREE.TorusGeometry(0.36, 0.015, 12, 32);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x42c8ff });
    const pRing = new THREE.Mesh(ringGeo, ringMat);
    pRing.rotation.x = Math.PI / 2;
    pRing.position.y = 0.08;
    pillar.add(pRing);

    milestonePillars.add(pillar);
  });

  scene.add(milestonePillars);

  // 9. Ambient Starfield / Spatial Grid Particles
  const particleCount = 180;
  const posArray = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i += 3) {
    posArray[i] = (Math.random() - 0.5) * 16;
    posArray[i + 1] = (Math.random() - 0.5) * 16;
    posArray[i + 2] = (Math.random() - 0.5) * 12 - 2;
  }
  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
  const particleMat = new THREE.PointsMaterial({
    size: 0.035,
    color: 0x42c8ff,
    transparent: true,
    opacity: isDark ? 0.6 : 0.4,
  });
  const particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  // Resize handler
  const resize = (width: number, height: number) => {
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  };

  // Update theme colors
  const updateTheme = (dark: boolean) => {
    ambientLight.color.setHex(dark ? 0x0a1220 : 0xd0e0ff);
    ambientLight.intensity = dark ? 1.5 : 2.0;
    innerMat.color.setHex(dark ? 0x1a6ef7 : 0x2563eb);
    particleMat.opacity = dark ? 0.6 : 0.35;
  };

  // Render loop
  const render = () => {
    camera.lookAt(cameraTarget);
    renderer.render(scene, camera);
  };

  // Comprehensive disposal
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
    renderer.dispose();
  };

  return {
    scene,
    camera,
    renderer,
    centralCore,
    projectScreens,
    dataPathways,
    milestonePillars,
    particles,
    ambientLight,
    keyLight,
    corePointLight,
    cameraTarget,
    dispose,
    updateTheme,
    render,
    resize,
  };
}
