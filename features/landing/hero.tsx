import AdBanner from "@/shared/components/adBanner";
import Image from "next/image";

export default function Hero() {
  const trendingNews = [
    {
      id: 1,
      category: "Salud",
      title:
        "La provincia de Santa Fé realizo el primer procedimiento de ablación de órganos en asistolia controlada del país en 2026",
      time: "Hace 4 horas",
    },
    {
      id: 2,
      category: "Deportes",
      title: "El equipo local avanza a las semifinales del torneo regional",
      time: "Hace 5 horas",
    },
    {
      id: 3,
      category: "Cultura",
      title: "Festival de arte convoca a artistas de toda la provincia",
      time: "Hace 6 horas",
    },
    {
      id: 4,
      category: "Seguridad",
      title:
        "Humbold chico: cámaras de monitoreo frustraron un nuevo intento de abigeato.",
      time: "Hace 12 horas",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 border-b border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* --- COLUMNA 1: NOTICIA PRINCIPAL (6 cols) --- */}
        <div className="lg:col-span-6 group cursor-pointer border-r border-gray-100 pr-0 lg:pr-8">
          {/* CAMBIO AQUÍ: aspect-video para móvil, aspect-4/3 para escritorio */}
          <div className="overflow-hidden rounded-xl aspect-video lg:aspect-4/3 bg-gray-100 relative mb-4">
            <Image
              src="/banner.png"
              width={800}
              height={600}
              alt="Noticia principal"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-[10px] font-bold uppercase italic tracking-widest shadow-md">
              Actualidad
            </div>
          </div>
          <div className="space-y-3">
            {/* CAMBIO AQUÍ: text-2xl en móvil para ahorrar espacio */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight tracking-tighter uppercase group-hover:text-red-600 transition-colors">
              Supremacía tostadense: El U15 femenino se quedó con todo
            </h1>
            <p className="text-gray-500 text-base leading-relaxed line-clamp-3">
              Con una actuación dominante, las pibas de San Lorenzo alzaron la
              copa del Clausura y sellaron el bicampeonato. Un hito deportivo
              que consolida el proyecto formativo del club en Tostado.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 pt-2">
              <span>Hace 45 min</span>
              <span className="text-gray-300">•</span>
              <span>Por María González</span>
            </div>
          </div>
        </div>

        {/* --- COLUMNA 2: ÚLTIMAS NOTICIAS (3 cols) --- */}
        <div className="lg:col-span-3 flex flex-col border-r border-gray-100 pr-0 lg:pr-8">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-2 text-red-600">
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
            Lo Último
          </h2>
          <div className="space-y-6 flex-1">
            {trendingNews.map((news) => (
              <div
                key={news.id}
                className="group/item cursor-pointer border-b border-gray-100 pb-4 last:border-0 last:pb-0"
              >
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest group-hover/item:text-red-600 transition-colors">
                  {news.category}
                </span>
                <h3 className="text-base font-bold leading-snug mt-1 group-hover/item:underline decoration-2 decoration-red-600/30">
                  {news.title}
                </h3>
                <span className="text-[10px] text-gray-400 mt-2 block font-medium">
                  {news.time}
                </span>
              </div>
            ))}
          </div>
          <button className="mt-6 w-full py-3 text-xs font-black uppercase tracking-widest border border-gray-900 hover:border-red-600 hover:bg-red-600 hover:text-white transition-colors rounded text-center cursor-pointer">
            Ver más noticias
          </button>
        </div>

        {/* --- COLUMNA 3: PUBLICIDAD (3 cols) --- */}
        <div className="hidden lg:flex lg:col-span-3 flex-col">
          <div className="w-full h-full rounded-lg flex items-center justify-center relative overflow-hidden">
            <AdBanner format="vertical" image="/banner2.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
