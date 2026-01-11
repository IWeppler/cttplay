// components/NewsFeed.tsx
import Image from "next/image";
import AdBanner from "./adBanner";

const news = [
  {
    id: 1,
    category: "Economía",
    title: "Nuevos emprendimientos generan más de 200 empleos en la zona",
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
];

export default function NewsFeed() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* COLUMNA IZQUIERDA: Noticias Principales (8 columnas) */}
      <div className="lg:col-span-8 space-y-12">
        {/* Noticia Destacada */}
        <section className="group cursor-pointer">
          <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-100">
            <Image
              src="/api/placeholder/800/450"
              alt="Principal"
              className="object-cover w-full h-full group-hover:scale-105 transition-all duration-700"
            />
            <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-tighter">
              Actualidad
            </span>
          </div>
          <h2 className="text-4xl font-black mt-6 leading-tight tracking-tighter uppercase italic group-hover:underline">
            La región celebra el inicio de la temporada con récord de visitantes
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Miles de turistas llegaron este fin de semana para disfrutar de las
            actividades programadas. Las autoridades destacan el impacto
            positivo en la economía local.
          </p>
        </section>

        {/* ESPACIO PUBLICITARIO 1 (Entre noticias) */}
        <AdBanner format="horizontal" />

        {/* Lista de Noticias Secundarias */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {news.map((item) => (
            <div
              key={item.id}
              className="border-t border-gray-100 pt-6 group cursor-pointer"
            >
              <span className="text-red-600 font-bold text-[10px] uppercase tracking-widest">
                {item.category}
              </span>
              <h3 className="text-xl font-bold mt-2 leading-snug group-hover:text-gray-600 transition-colors">
                {item.title}
              </h3>
              <span className="text-gray-400 text-xs mt-3 block uppercase">
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* COLUMNA DERECHA: Sidebar de Servicios y Widgets (4 columnas) */}
      <aside className="lg:col-span-4 space-y-8">
        {/* Widget Proximi (Conversión) */}
        <div className="bg-white border-2 border-black p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h4 className="font-black italic uppercase text-lg border-b-2 border-red-600 inline-block mb-4">
            ¿Buscás un profesional?
          </h4>
          <p className="text-sm text-gray-600 mb-6">
            Accedé a la red de oficios verificados de Tostado.
          </p>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-100">
              <span className="text-xs font-bold uppercase">Electricistas</span>
              <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold uppercase">
                12 Disponibles
              </span>
            </div>
            <button className="w-full bg-black text-white py-3 font-bold uppercase text-xs tracking-widest hover:bg-gray-800 transition-all">
              Ver todos en Proximi
            </button>
          </div>
        </div>

        {/* ESPACIO PUBLICITARIO */}
        <AdBanner format="mobile" />

        {/* Widget Nexo (Logística) */}
        <div className="bg-black text-white p-6 rounded-lg">
          <h4 className="font-black italic uppercase text-lg text-red-600 mb-2">
            Nexo Logística
          </h4>
          <p className="text-xs text-gray-400 mb-6">
            Próximos viajes desde Tostado:
          </p>
          <div className="space-y-4">
            <div className="border-l-2 border-red-600 pl-4">
              <p className="font-bold text-sm">Tostado ➔ Santa Fe</p>
              <p className="text-[10px] text-gray-500 uppercase">
                Hoy • 14:00hs • 2 Asientos
              </p>
            </div>
            <button className="w-full border border-white/20 py-2 text-[10px] font-bold uppercase hover:bg-white hover:text-black transition-all">
              Ver cronograma completo
            </button>
          </div>
        </div>
      </aside>
    </main>
  );
}
