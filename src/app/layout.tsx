import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF9" },
    { media: "(prefers-color-scheme: dark)", color: "#080D18" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Rafi Alif Azhar — Full Stack Web Developer",
    template: "%s | Rafi Alif Azhar",
  },
  description:
    "Portfolio Rafi Alif Azhar — Full Stack Web Developer spesialis Python Django, Node.js, Express, React.js, & Laravel. Bersertifikasi BNSP & Certiport.",
  keywords: [
    "Rafi Alif Azhar",
    "Full Stack Developer",
    "Web Developer",
    "React.js",
    "Node.js",
    "Django",
    "Laravel",
    "TypeScript",
    "Portfolio",
    "Karawang",
    "UMY",
  ],
  authors: [{ name: "Rafi Alif Azhar", url: "https://github.com/rafiazharr17" }],
  creator: "Rafi Alif Azhar",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://rafiazharr17.github.io/rafiazharr17"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
    url: "/",
    title: "Rafi Alif Azhar — Full Stack Web Developer",
    description:
      "Portfolio Rafi Alif Azhar — Full Stack Web Developer spesialis Python Django, Node.js, Express, React.js, & Laravel. Lihat proyek, sertifikasi BNSP & Certiport, dan pengalaman.",
    siteName: "Portfolio Rafi Alif Azhar",
    images: [
      {
        url: "/images/profile/photo-desktop.webp",
        width: 1200,
        height: 630,
        alt: "Rafi Alif Azhar — Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafi Alif Azhar — Full Stack Web Developer",
    description:
      "Full Stack Web Developer berbasis di Karawang, Jawa Barat. Spesialis Django, Node.js, React & Laravel.",
    images: ["/images/profile/photo-desktop.webp"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      data-theme="dark"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){ try { var t = localStorage.getItem('portfolio_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); document.documentElement.dataset.theme = t; var l = localStorage.getItem('portfolio_lang') || 'id'; document.documentElement.lang = l; } catch(e){} })();`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased bg-[var(--background)] text-[var(--foreground)] selection:bg-[#1A6EF7] selection:text-white">
        {children}
      </body>
    </html>
  );
}
