import Image from "next/image";
import { notFound } from "next/navigation";
import AdBanner from "@/shared/components/adBanner"; // Asegúrate de importar tu componente

// Simulamos una base de datos de noticias
const ALL_NEWS = [
  {
    id: 1,
    category: "salud",
    title: "Nuevo hospital inaugurado en Tostado",
    image: "/banner.png",
    date: "Hace 2 horas",
  },
  {
    id: 2,
    category: "economia",
    title: "El dólar soja impacta en la región",
    image: "/banner.png",
    date: "Hace 5 horas",
  },
  {
    id: 3,
    category: "deportes",
    title: "San Lorenzo campeón del torneo local",
    image: "/banner.png",
    date: "Hace 1 día",
  },
  {
    id: 4,
    category: "salud",
    title: "Campaña de vacunación antigripal",
    image: "/banner.png",
    date: "Hace 3 días",
  },
  {
    id: 5,
    category: "salud",
    title: "Jornada de concientización sobre diabetes",
    image: "/banner.png",
    date: "Hace 4 días",
  },
];

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;

  const categoryNews = ALL_NEWS.filter((news) => news.category === slug);

  const categoryTitles: Record<string, string> = {
    economia: "Economía",
    deportes: "Deportes",
    salud: "Salud",
    cultura: "Cultura",
    seguridad: "Seguridad",
  };

  const title = categoryTitles[slug];

  if (!title) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {/* --- ZONA DE PUBLICIDAD SUPERIOR --- */}
      <div className="hidden md:block mb-10">
        <AdBanner format="horizontal" image="/banner4.gif" />
      </div>

      <div className="md:hidden mb-10">
        <AdBanner format="mobile" image="/banner4.gif" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* --- COLUMNA PRINCIPAL (NOTICIAS) - 9 COLUMNAS --- */}
        <div className="lg:col-span-9">
          {/* Encabezado de la Categoría */}
          <div className="mb-8 border-b border-gray-200 pb-4">
            <span className="text-red-600 text-xs font-bold uppercase tracking-widest mb-2 block">
              Categoría
            </span>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-gray-900">
              {title}
            </h1>
          </div>

          {/* Grilla de Noticias */}
          {categoryNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryNews.map((item) => (
                <article
                  key={item.id}
                  className="group cursor-pointer flex flex-col h-full bg-white"
                >
                  <div className="relative aspect-video overflow-hidden rounded-lg mb-4 bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-black text-red-600 uppercase tracking-widest block mb-2">
                      {title}
                    </span>
                    <h2 className="text-xl font-bold leading-tight group-hover:text-red-600 transition-colors mb-2">
                      {item.title}
                    </h2>
                    <span className="text-xs text-gray-400 font-medium">
                      {item.date}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center bg-gray-50 rounded-xl">
              <p className="text-gray-500 font-medium">
                No hay noticias cargadas en esta sección todavía.
              </p>
            </div>
          )}
        </div>

        {/* --- SIDEBAR (PUBLICIDAD) - 3 COLUMNAS --- */}
        <aside className="hidden lg:flex lg:col-span-3 flex-col gap-8 border-l border-gray-100 pl-8">
          {/* Banner Cuadrado (Square) */}
          <div className="flex justify-center">
            <AdBanner format="square" image="/image.jpg" />
          </div>

          {/* Banner Vertical (Skyscraper) */}
          <div className="flex justify-center sticky top-4">
            <AdBanner format="vertical" image="/banner2.png" />
          </div>
        </aside>
      </div>

      {/* --- PUBLICIDAD AL PIE  --- */}
      <div className="w-full flex justify-center mt-12 pt-8 border-t border-gray-100">
        <AdBanner format="horizontal" image='/banner-footer.gif' className="hidden md:flex" />
        <AdBanner format="mobile" image='/banner-footer.gif' className="md:hidden" />
      </div>
    </main>
  );
}
