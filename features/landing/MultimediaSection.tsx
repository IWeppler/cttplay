"use client";
import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function MultimediaSection() {
  const [activeVideo, setActiveVideo] = useState({
    id: "Jzr86qNCRNc",
    title: "Tostado, Santa Fe",
    category: "En vivo",
  });

  const playlist = [
    {
      id: "W2op8rfBFMI",
      title: "HABLEMOS DE FAUNA”",
      category: "Cultura",
    },
    {
      id: "01A5vIMGw9M",
      title: "DESMOTADORA LOGROÑO",
      category: "Economía",
    },
    {
      id: "EmJcCJgifzQ",
      title: "Agustin Rossi - Hablemos de Todo",
      category: "Política",
    },
    {
      id: "5qTAEriuVLE",
      title: "AMSAFE RODRIGO ALONSO",
      category: "Política",
    },
  ];

  return (
    <section className="bg-neutral-900 py-12 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8 border-b border-neutral-800 pb-4">
          <h2 className="text-2xl font-black uppercase tracking-wider flex items-center gap-3">
            <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></span>
            Multimedia
          </h2>
          <a
            href="https://www.youtube.com/@cttplayTostado"
            className="text-xs font-bold text-red-500 hover:text-red-400 uppercase tracking-widest"
            target="_blank"
          >
            Ir al canal de YouTube →
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* VIDEO PRINCIPAL (8 Cols) */}
          <div className="lg:col-span-8">
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black shadow-2xl border border-neutral-800">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </div>
            <h3 className="mt-4 text-2xl font-bold leading-tight">
              {activeVideo.title}
            </h3>
            <span className="text-red-500 text-xs font-black uppercase tracking-widest">
              {activeVideo.category}
            </span>
          </div>

          {/* LISTA DE REPRODUCCIÓN (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col h-full">
            <h4 className="text-sm font-bold text-neutral-400 uppercase mb-4">
              A continuación
            </h4>
            <div className="space-y-3 overflow-y-auto max-h-[500px] pr-2 scrollbar-thin scrollbar-thumb-neutral-700">
              {playlist.map((video) => (
                <div
                  key={video.id}
                  onClick={() => setActiveVideo(video)}
                  className={`flex gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                    activeVideo.id === video.id
                      ? "bg-neutral-800 border-l-4 border-red-600"
                      : "hover:bg-neutral-800/50 border-l-4 border-transparent"
                  }`}
                >
                  {/* Thumbnail (Generado auto por Youtube) */}
                  <div className="relative w-32 h-20 shrink-0 rounded overflow-hidden bg-neutral-800">
                    <Image
                      src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                      alt={video.title}
                      width={1280}
                      height={720}
                      className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/50 rounded-full p-1">
                        <Play size={12} fill="white" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] text-red-500 font-bold uppercase mb-1">
                      {video.category}
                    </span>
                    <h5
                      className={`text-sm font-medium leading-snug line-clamp-2 ${
                        activeVideo.id === video.id
                          ? "text-white"
                          : "text-neutral-300"
                      }`}
                    >
                      {video.title}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
