export interface SceneChapter {
  id: string;
  sectionId: string;
  chapterIndex: string;
  label: {
    id: string;
    en: string;
  };
  cameraPosition: [number, number, number];
  cameraTarget: [number, number, number];
  sceneMood: "intro" | "profile" | "skills" | "projects" | "timeline" | "gallery" | "outro";
  accentColor: string;
}

export const sceneChapters: SceneChapter[] = [
  {
    id: "hero-chapter",
    sectionId: "hero",
    chapterIndex: "00",
    label: { id: "Workspace Digital", en: "Digital Workspace" },
    cameraPosition: [0, 0, 7.5],
    cameraTarget: [0, 0, 0],
    sceneMood: "intro",
    accentColor: "#42C8FF",
  },
  {
    id: "about-chapter",
    sectionId: "about",
    chapterIndex: "01",
    label: { id: "Profil Developer", en: "Developer Profile" },
    cameraPosition: [-2.4, 0.8, 6.2],
    cameraTarget: [0.5, 0, 0],
    sceneMood: "profile",
    accentColor: "#1A6EF7",
  },
  {
    id: "skills-chapter",
    sectionId: "skills",
    chapterIndex: "02",
    label: { id: "Jalur Sistem", en: "System Pathways" },
    cameraPosition: [2.8, -0.6, 5.5],
    cameraTarget: [-0.2, 0.2, 0],
    sceneMood: "skills",
    accentColor: "#00E5FF",
  },
  {
    id: "projects-chapter",
    sectionId: "projects",
    chapterIndex: "03",
    label: { id: "Pusat Showcase", en: "Showcase Centerpiece" },
    cameraPosition: [0, 0.2, 4.8],
    cameraTarget: [0, 0, 0],
    sceneMood: "projects",
    accentColor: "#3B82F6",
  },
  {
    id: "experience-chapter",
    sectionId: "experience",
    chapterIndex: "04",
    label: { id: "Milestone Karir", en: "Career Milestones" },
    cameraPosition: [-1.8, -1.2, 5.8],
    cameraTarget: [0, -0.5, 0],
    sceneMood: "timeline",
    accentColor: "#60A5FA",
  },
  {
    id: "certificates-chapter",
    sectionId: "certificates",
    chapterIndex: "05",
    label: { id: "Galeri Kredensial", en: "Credential Gallery" },
    cameraPosition: [1.8, 1.0, 5.2],
    cameraTarget: [0, 0.2, 0],
    sceneMood: "gallery",
    accentColor: "#38BDF8",
  },
  {
    id: "contact-chapter",
    sectionId: "contact",
    chapterIndex: "06",
    label: { id: "Portal Kontak", en: "Contact Portal" },
    cameraPosition: [0, 0, 8.8],
    cameraTarget: [0, 0, 0],
    sceneMood: "outro",
    accentColor: "#42C8FF",
  },
];
