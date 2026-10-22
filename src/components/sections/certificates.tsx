"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, CheckCircle2, Calendar } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CertificateModal } from "@/components/ui/certificate-modal";
import { certificatesData, CertificateItem } from "@/data/certificates";
import { useLanguage } from "@/hooks/use-language";

export function CertificatesSection() {
  const { lang, t, mounted } = useLanguage();
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <SectionContainer id="certificates">
      <SectionHeading
        eyebrow={mounted ? t.certs_eyebrow : "03 / KREDENSIAL"}
        title={mounted ? t.certs_title : "Sertifikasi & Pencapaian"}
        description={
          lang === "id"
            ? "Sertifikasi profesi nasional dan internasional serta pengakuan kompetensi resmi."
            : "National professional credentials, industry certifications, and official recognitions."
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {certificatesData.map((cert) => {
          const date = cert.date[lang] || cert.date.id;
          const validity = cert.validity[lang] || cert.validity.id;

          return (
            <div
              key={cert.id}
              tabIndex={0}
              role="button"
              aria-label={`Buka sertifikat ${cert.name}`}
              onClick={() => setSelectedCert(cert)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedCert(cert);
                }
              }}
              className="group relative flex flex-col rounded-lg border border-[var(--border)] bg-[var(--surface)] overflow-hidden shadow-xs hover:border-[var(--primary)] transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
            >
              {/* Certificate Image Thumbnail */}
              <div className="relative aspect-[16/11] w-full bg-slate-900 overflow-hidden border-b border-[var(--border)]">
                <Image
                  src={cert.image}
                  alt={`Sertifikat ${cert.name}`}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-102"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white text-black text-xs font-semibold shadow-sm">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{mounted ? t.cert_view_modal : "Lihat Dokumen"}</span>
                  </div>
                </div>
              </div>

              {/* Certificate Metadata */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors leading-snug">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-[var(--muted)] mt-1.5">
                    {cert.issuer}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-[var(--muted)]">
                    <Calendar className="w-3.5 h-3.5" />
                    {date}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[var(--primary)] font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {validity}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <CertificateModal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        imageSrc={selectedCert ? selectedCert.image : null}
        title={selectedCert ? selectedCert.name : ""}
      />
    </SectionContainer>
  );
}
