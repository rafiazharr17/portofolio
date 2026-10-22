export interface SkillCategory {
  id: string;
  categoryName: {
    id: string;
    en: string;
  };
  skills: Array<{
    name: string;
    level?: "Advanced" | "Intermediate" | "Familiar";
    highlight?: boolean;
  }>;
}

export const skillsData: SkillCategory[] = [
  {
    id: "frontend",
    categoryName: {
      id: "Frontend Development",
      en: "Frontend Development",
    },
    skills: [
      { name: "React.js", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "HTML / CSS" },
      { name: "Vite" },
      { name: "Next.js" },
      { name: "Framer Motion" },
      { name: "Recharts" },
    ],
  },
  {
    id: "backend",
    categoryName: {
      id: "Backend & Systems",
      en: "Backend & Systems",
    },
    skills: [
      { name: "Node.js", highlight: true },
      { name: "Express.js", highlight: true },
      { name: "Laravel", highlight: true },
      { name: "PHP" },
      { name: "Python" },
      { name: "Django" },
      { name: "Django REST Framework" },
      { name: "REST API", highlight: true },
      { name: "WebSocket" },
    ],
  },
  {
    id: "database",
    categoryName: {
      id: "Database & Cloud",
      en: "Database & Cloud",
    },
    skills: [
      { name: "MySQL", highlight: true },
      { name: "PostgreSQL", highlight: true },
      { name: "Supabase" },
    ],
  },
  {
    id: "tools",
    categoryName: {
      id: "DevOps & Workflow",
      en: "DevOps & Workflow",
    },
    skills: [
      { name: "Git / GitHub", highlight: true },
      { name: "Docker", highlight: true },
      { name: "Docker Compose" },
      { name: "Nginx" },
      { name: "Postman" },
      { name: "Vercel" },
    ],
  },
];

// Flat list for compact chips
export const allSkillsList: string[] = [
  "HTML / CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Vite",
  "Recharts",
  "Framer Motion",
  "PHP",
  "Laravel",
  "Python",
  "Django",
  "Django REST Framework",
  "Node.js",
  "Express.js",
  "MySQL",
  "PostgreSQL",
  "REST API",
  "WebSocket",
  "Git / GitHub",
  "Docker",
  "Docker Compose",
  "Nginx",
  "Postman",
  "Supabase",
];
