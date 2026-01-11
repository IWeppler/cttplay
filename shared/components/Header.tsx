"use client";

import { useState, useRef, useEffect } from "react";
import { Sun, Search, X, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const news = [
    { id: 1, cat: "Economía", slug: "economia" },
    { id: 2, cat: "Deportes", slug: "deportes" },
    { id: 3, cat: "Salud", slug: "salud" },
    { id: 4, cat: "Cultura", slug: "cultura" },
    { id: 5, cat: "Seguridad", slug: "seguridad" },
  ];

  const navItemClass =
    "text-[13px] font-bold uppercase tracking-wide hover:text-red-500 cursor-pointer whitespace-nowrap transition-colors";

  // Bloquear scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <header className="w-full bg-white border-b border-[#e3e3e3] font-sans relative z-50">
      {/* 1. NIVEL SUPERIOR */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* --- VERSIÓN MOBILE (Visible solo en mobile) --- */}
        <div className="flex md:hidden justify-between items-center">
          {/* Izquierda: Menú + Clima */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-gray-800"
            >
              <Menu size={24} />
            </button>
            <div className="flex items-center gap-1 text-sm font-bold text-gray-800">
              <span>Tostado</span>
              <Sun size={16} className="text-gray-800" />
              <span>32°</span>
            </div>
          </div>

          {/* Derecha: Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>
        </div>

        {/* --- VERSIÓN DESKTOP (Visible solo en md+) --- */}
        <div className="hidden md:flex justify-between items-center">
          {/* Clima */}
          <div className="flex flex-col text-sm text-gray-800 font-medium">
            <div className="flex items-center gap-2">
              <span className="font-bold">Tostado</span>
              <Sun size={18} />
              <span className="text-lg">32°</span>
            </div>
            <span className="text-gray-500">Viernes 9 de marzo de 2026</span>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={200}
                height={200}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Auth */}
          <div className="flex items-center gap-4">
            <button className="p-2 bg-red-700 text-white text-sm hover:bg-neutral-900 rounded-lg transition-colors duration-200 cursor-pointer">
              Iniciar Sesión
            </button>
            <button className="p-2 bg-transparent text-red-700 border border-red-700 text-sm hover:bg-neutral-900 hover:text-white hover:border-neutral-900 rounded-lg transition-colors duration-200 cursor-pointer">
              Registrarse
            </button>
          </div>
        </div>
      </div>

      {/* 2. NIVEL MEDIO: Navegación y Buscador */}
      <nav className="w-full bg-white text-black border-y border-gray-200 relative">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-12">
          {/* Menú Desktop (Oculto en Mobile) */}
          <div className="hidden md:flex items-center gap-6 overflow-x-auto scrollbar-hide">
            {news.map((n) => (
              <Link
                key={n.id}
                href={`/noticias/${n.slug}`}
                className={navItemClass}
              >
                {n.cat}
              </Link>
            ))}
            <div className="h-4 w-px bg-gray-300 mx-2"></div>
            <span className={navItemClass}>Prode</span>
            <span className={navItemClass}>Contacto</span>
          </div>

          <div
            className={`ml-auto flex items-center justify-end transition-all duration-300 ${
              isSearchOpen ? "w-full" : "w-auto"
            }`}
          >
            {/* Input Desplegable */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out flex items-center ${
                isSearchOpen
                  ? "w-full max-w-md opacity-100 mr-2"
                  : "w-0 opacity-0"
              }`}
            >
              <input
                ref={inputRef}
                type="text"
                placeholder="Buscar noticias..."
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-gray-700"
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  alert(`Buscando: ${e.currentTarget.value}`)
                }
              />
            </div>

            {/* Botón Lupa / Cerrar */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:text-red-500 cursor-pointer flex items-center p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              {isSearchOpen ? (
                <X size={20} className="text-gray-800 hover:text-red-500" />
              ) : (
                <Search
                  size={20}
                  className="text-gray-800 hover:text-red-500"
                />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* 3. NIVEL INFERIOR: Ticker */}
      <div className="w-full bg-neutral-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-2 flex overflow-x-auto scrollbar-hide whitespace-nowrap">
          <span className="text-gray-600 font-medium text-xs flex items-center gap-2">
            Dólar oficial{" "}
            <span className="text-black font-bold text-sm">$1475,00</span>
          </span>
          <span className="mx-4 text-gray-300">|</span>
          <span className="text-gray-600 font-medium text-xs flex items-center gap-2">
            Dólar blue{" "}
            <span className="text-black font-bold text-sm">$1505,00</span>
          </span>
          <span className="mx-4 text-gray-300">|</span>
          <span className="text-gray-600 font-medium text-xs flex items-center gap-2">
            Dólar tarjeta{" "}
            <span className="text-black font-bold text-sm">$1917,5</span>
          </span>
          <span className="mx-4 text-gray-300">|</span>
          <span className="text-gray-600 font-medium text-xs flex items-center gap-2">
            Dólar MEP{" "}
            <span className="text-black font-bold text-sm">$1484,98</span>
          </span>
        </div>
      </div>

      {/* --- MENÚ HAMBURGUESA FULL SCREEN (100% ALTO) --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-100 flex flex-col animate-in fade-in duration-200">
          {/* Header del Menú */}
          <div className="flex justify-between items-center p-4 border-b border-gray-100">
            <Image src="/logo.png" alt="Logo" width={140} height={50} />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-800 hover:text-red-500 transition-colors"
            >
              <X size={28} />
            </button>
          </div>

          {/* Lista de Navegación */}
          <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-6">
            {news.map((n) => (
              <Link
                key={n.id}
                href={`/noticias/${n.slug}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-bold text-gray-800 uppercase tracking-wide hover:text-red-500"
              >
                {n.cat}
              </Link>
            ))}
            <div className="h-px w-full bg-gray-100 my-2"></div>
            <a
              href="#"
              className="text-xl font-bold text-red-600 uppercase tracking-wide"
            >
              Prode 2026
            </a>
            <a
              href="#"
              className="text-xl font-bold text-gray-800 uppercase tracking-wide hover:text-red-500"
            >
              Contacto
            </a>
          </div>

          {/* Footer del Menú (Auth Buttons) */}
          <div className="p-4 border-t border-gray-100 bg-gray-50">
            <div className="flex flex-col gap-3">
              <button className="w-full p-3 bg-red-700 text-white text-sm font-bold uppercase rounded-lg">
                Iniciar Sesión
              </button>
              <button className="w-full p-3 bg-white border border-red-700 text-red-700 text-sm font-bold uppercase rounded-lg">
                Registrarse
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
