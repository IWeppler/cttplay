"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface StickyFooterAdProps {
  text?: string;
  buttonText?: string;
  href?: string;
  accentColor?: string;
  initialOpen?: boolean;
}

export const StickyFooterAd = ({
  buttonText = "ESCUCHÁ ACÁ",
  href = "#",
  accentColor = "text-yellow-400 hover:bg-yellow-400",
  initialOpen = true,
}: StickyFooterAdProps) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  if (!isOpen) return null;

  return (
    <div className="w-full relative flex justify-center items-center mx-auto">
      <div className="max-w-4xl fixed bottom-0 w-full bg-black/95 backdrop-blur-sm text-white z-50 transform transition-transform duration-300 border-t border-gray-800 h-[80px]">
        {/* BOTÓN CERRAR */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-6 right-2 bg-black text-white text-[10px] uppercase font-bold px-3 py-1 rounded-t-md hover:bg-red-800 transition-colors"
          aria-label="Cerrar publicidad"
        >
          Cerrar X
        </button>
        <Image
          src="/banner-footer.gif"
          alt="Publicidad"
          fill
          className="object-cover"
          unoptimized
        />

        {/* Botón de Acción */}
        <Link
          href={href}
          target="_blank"
          className={`bg-white text-black px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap ${
            accentColor.split(" ")[1] || ""
          }`}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};
