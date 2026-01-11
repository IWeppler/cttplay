"use client";

import AdBanner from "@/shared/components/adBanner";
import { Clock, Share2, Bookmark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// Si tienes el componente StickyFooterAd, impórtalo aquí también

const post = {
  title: "SUPREMACÍA TOSTADENSE: EL U15 FEMENINO SE QUEDÓ CON TODO.",
  subtitle:
    "Con una actuación dominante, las pibas de U15 de San Lorenzo alzaron la copa del Clausura y sellaron el bicampeonato. Un hito deportivo que consolida el proyecto formativo del club en Tostado.",
  category: "Deportes",
  author: "Carlos Gonzalez",
  date: "6 de enero de 2026",
  image: "/banner.png",
};

export default function PostPage() {
  return (
    <div className="bg-white min-h-screen pb-20 font-sans">
      {/* 1. TOP BANNER (Publicidad Principal) */}
      <div className="max-w-6xl mx-auto px-4 mt-6 flex justify-center">
        <AdBanner format="horizontal" image="/banner1.jpg" />
      </div>

      {/* 2. HEADER FULL WIDTH (Fuera de la Grid) */}
      {/* Esto permite que el título respire y ocupe el 100% del ancho disponible */}
      <header className="max-w-6xl mx-auto px-4 mt-8 mb-6 border-b border-gray-100 pb-6 md:border-0 md:pb-0">
        {/* Breadcrumb / Categoría */}
        <div className="flex items-center gap-2 text-sm font-bold text-red-700 uppercase tracking-widest mb-4">
          <Link href="#" className="hover:underline">
            Sección
          </Link>
          <span className="text-gray-300">/</span>
          <span>{post.category}</span>
        </div>

        {/* TÍTULO GIGANTE */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight max-w-5xl">
          {post.title}
        </h1>
      </header>

      {/* 3. LAYOUT DIVIDIDO (A partir del subtítulo) */}
      <main className="max-w-6xl mx-auto px-4 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* === COLUMNA IZQUIERDA: CONTENIDO (8/12) === */}
        <article className="lg:col-span-8">
          {/* Bajada / Subtítulo (Ahora está dentro de la columna, alineado con el sidebar) */}
          <p className="text-xl md:text-2xl text-slate-500 leading-snug mb-6">
            {post.subtitle}
          </p>

          {/* Meta Data (Autor, Fecha) */}
          <div className="flex items-center justify-between border-t border-b border-gray-100 py-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 border border-slate-200">
                <span className="font-bold text-xs">CG</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-900">
                  {post.author}
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  {post.date} • <Clock size={12} /> 6 min lectura
                </span>
              </div>
            </div>
            <div className="flex gap-3 text-gray-400">
              <button className="hover:text-black transition-colors p-2 hover:bg-gray-100 rounded-full">
                <Bookmark size={20} />
              </button>
              <button className="hover:text-black transition-colors p-2 hover:bg-gray-100 rounded-full">
                <Share2 size={20} />
              </button>
            </div>
          </div>

          {/* Imagen Principal */}
          <div className="relative w-full aspect-video mb-10 rounded-lg overflow-hidden bg-gray-100 shadow-sm">
            <Image
              src={post.image}
              fill
              className="object-cover"
              alt="Noticia"
              priority
            />
          </div>

          {/* Cuerpo de la Noticia */}
          <div className="max-w-none text-gray-800 leading-loose">
            <p>
              La incertidumbre sobre los pasos definitivos en Venezuela
              contrasta con los años de discusiones.{" "}
              <span className="bg-yellow-100 px-1">
                &quot; Es un momento decisivo &quot;
              </span>
              , afirmó el analista internacional en una entrevista exclusiva
              para este medio.
            </p>

            {/* PUBLICIDAD IN-TEXT */}
            <div className="my-12 flex flex-col items-center gap-2">
              <div className="w-[100px] h-px bg-gray-200"></div>
              <AdBanner format="rectangle" image="/banner3.png" />
              <div className="w-[100px] h-px bg-gray-200"></div>
            </div>

            <p>
              El contraste con intervenciones anteriores como Irak en 2003 es
              notable. En aquella ocasión, la planificación militar precedió a
              la diplomática por meses, generando un escenario de tensión global
              que aún se recuerda.
            </p>
            <h3 className="font-sans font-bold text-2xl text-black mt-8 mb-4">
              Reacciones internacionales
            </h3>
            <p>
              Sin embargo, las agencias ANSA y AP reportan movimientos inusuales
              en la frontera, lo que sugiere una estrategia de presión
              psicológica más que bélica. Los expertos sugieren mantener la
              cautela ante los próximos anuncios.
            </p>
          </div>
        </article>

        {/* === COLUMNA DERECHA: SIDEBAR (4/12) === */}
        <aside className="hidden lg:block lg:col-span-4 space-y-10 pl-4 border-l border-gray-100">
          {/* 3. BANNER LATERAL SUPERIOR */}
          <div className="flex flex-col items-center">
            <AdBanner format="square" image="/image.jpg" />
          </div>

          {/* Módulo: Más leídas */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-6 bg-red-600"></div>
              <h3 className="font-bold text-xl font-sans text-slate-900">
                Lo más leído
              </h3>
            </div>

            <ul className="space-y-6">
              {[1, 2, 3].map((i) => (
                <li
                  key={i}
                  className="flex gap-4 group cursor-pointer items-start"
                >
                  <span className="text-4xl font-black leading-none font-serif">
                    {i}
                  </span>
                  <p className="font-serif font-bold text-md leading-snug hover:underline">
                    ¿Por qué aumentaron los precios del café en Colombia este
                    mes?
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. BANNER LATERAL RASCACIELOS (Sticky) */}
          <div className="sticky top-6 pt-4">
            <AdBanner format="vertical" image="/banner2.png" />
          </div>
        </aside>
      </main>
    </div>
  );
}
