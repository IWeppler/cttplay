"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function News() {
  const categories = [
    "Todas",
    "Economía",
    "Seguridad",
    "Deportes",
    "Cultura",
    "Salud",
  ];

  const [active, setActive] = useState("Todas");

  const news = [
    // {
    //   id: 1,
    //   title: "Noticia económica",
    //   cat: "Economía",
    //   image: "/economia.jpg",
    // },
    {
      id: 2,
      title: "Liga nacional",
      cat: "Deportes",
      image: "/deportes.jpg",
    },
    {
      id: 3,
      title: "Nuevo avance médico",
      cat: "Salud",
      image: "/salud.jpg",
    },
    {
      id: 4,
      title: "Festival cultural",
      cat: "Cultura",
      image: "/cultura.jpg",
    },
    {
      id: 5,
      title: "Operativo en la ciudad",
      cat: "Seguridad",
      image: "/seguridad.jpg",
    },
  ];

  const filtered =
    active === "Todas" ? news : news.filter((n) => n.cat === active);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <h2 className="text-4xl font-black uppercase tracking-tighter">
          Más Noticias
        </h2>

        {/* Tabs */}
        <nav className="flex flex-wrap gap-2 p-1 rounded-lg">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-3 py-2 text-xs font-bold uppercase tracking-widest rounded-full transition-all
              ${
                active === cat
                  ? "bg-neutral-900 text-white"
                  : "text-gray-500 hover:text-black hover:bg-neutral-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filtered.map((n) => (
          // 2. Cambiamos el div por Link y añadimos el href dinámico
          <Link
            key={n.id}
            href={`/posts/${n.id}`}
            className="group cursor-pointer flex flex-col h-full"
          >
            <div className="aspect-4/3 overflow-hidden bg-gray-100 rounded-lg relative">
              <Image
                src={n.image}
                alt={n.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="mt-4 space-y-2">
              <span className="text-xs font-black text-red-600 uppercase tracking-widest">
                {n.cat}
              </span>

              <h4 className="text-md font-bold leading-snug group-hover:text-gray-600 transition-colors">
                {n.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
