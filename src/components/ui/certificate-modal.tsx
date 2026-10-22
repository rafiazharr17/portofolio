"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string | null;
  title: string;
}

export function CertificateModal({
  isOpen,
  onClose,
  imageSrc,
  title,
}: CertificateModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !imageSrc) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Sertifikat: ${title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] bg-[var(--surface)] rounded-2xl overflow-hidden border border-[var(--border)] shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)] bg-[var(--surface-muted)]/50">
          <div className="pr-4">
            <span className="text-[10px] font-mono tracking-widest text-[var(--primary)] uppercase block">
              Dokumen Kredensial
            </span>
            <h3 className="text-base font-bold text-[var(--foreground)] truncate">
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup sertifikat"
            className="w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:bg-[var(--surface-muted)] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Image Body */}
        <div className="relative flex-1 min-h-[350px] sm:min-h-[500px] w-full bg-black/40 flex items-center justify-center p-2 sm:p-4 overflow-auto">
          <div className="relative w-full h-[60vh] max-h-[700px]">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 95vw, 900px"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
