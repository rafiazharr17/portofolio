"use client";

import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { profileData } from "@/data/profile";
import { useLanguage } from "@/hooks/use-language";
import { MapPin, GraduationCap, Award, CheckCircle2, Mail, Briefcase } from "lucide-react";

export function AboutSection() {
  const { lang, t, mounted } = useLanguage();

  const infoItems = [
    {
      icon: MapPin,
      label: mounted ? t.info_location : "Lokasi",
      value: profileData.location[lang] || profileData.location.id,
    },
    {
      icon: GraduationCap,
      label: mounted ? t.info_education : "Pendidikan",
      value: `${profileData.education.degree}, UMY (${profileData.education.period})`,
    },
    {
      icon: Award,
      label: mounted ? t.info_gpa : "IPK Kelulusan",
      value: `${profileData.education.gpa} (Predikat Pujian)`,
    },
    {
      icon: Award,
      label: mounted ? t.info_toefl : "Bahasa Inggris",
      value: profileData.education.toefl,
    },
    {
      icon: CheckCircle2,
      label: mounted ? t.info_certs : "Sertifikasi",
      value: "BNSP Web Developer & Certiport HTML5",
      badge: true,
    },
    {
      icon: Briefcase,
      label: mounted ? t.info_status : "Status",
      value: profileData.status[lang] || profileData.status.id,
      statusBadge: true,
    },
    {
      icon: Mail,
      label: mounted ? t.info_email : "Email Utama",
      value: profileData.email,
      isLink: true,
    },
  ];

  return (
    <SectionContainer id="about">
      <SectionHeading
        eyebrow={mounted ? t.about_eyebrow : "01 / PROFIL"}
        title={mounted ? t.about_title : "Tentang Saya"}
        description={
          lang === "id"
            ? "Mengenal latar belakang, prinsip rekayasa web, dan kompetensi terverifikasi."
            : "Exploring engineering principles, background, and verified qualifications."
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Bio Paragraphs */}
        <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[var(--muted)] leading-relaxed">
          <p className="text-[var(--foreground)] font-medium">
            {mounted ? t.about_p1 : ""}
          </p>
          <p>{mounted ? t.about_p2 : ""}</p>
          <p>{mounted ? t.about_p3 : ""}</p>
        </div>

        {/* Right Column: Verified Info Table Card */}
        <div className="lg:col-span-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7 shadow-xs">
          <h3 className="text-xs font-mono font-bold tracking-widest text-[var(--primary)] uppercase mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
            Detail Informasi & Kualifikasi
          </h3>

          <div className="space-y-4">
            {infoItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start justify-between gap-4 pb-3.5 border-b border-[var(--border)] last:border-0 last:pb-0"
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-[var(--muted)] shrink-0">
                    <Icon className="w-3.5 h-3.5 text-[var(--primary)]" />
                    <span>{item.label}</span>
                  </div>

                  <div className="text-right text-xs sm:text-sm font-semibold text-[var(--foreground)]">
                    {item.isLink ? (
                      <a
                        href={`mailto:${item.value}`}
                        className="text-[var(--primary)] hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : item.statusBadge ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {item.value}
                      </span>
                    ) : item.badge ? (
                      <span className="text-[var(--primary)]">{item.value}</span>
                    ) : (
                      <span>{item.value}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
