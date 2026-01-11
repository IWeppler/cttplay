import { Flower, HeartHandshake } from "lucide-react";

export default function ObituariesMiniSection() {
  const obituaries = [
    {
      id: 1,
      name: "Juan Alberto Martínez",
      age: 82,
      place: "Sala 1 - Cooperativa",
      burial: "Cementerio Municipal, 17:00hs",
    },
    {
      id: 2,
      name: "María Elena Funes",
      age: 64,
      place: "Sala 2 - Cooperativa",
      burial: "Crematorio Privado, 10:00hs",
    },
  ];

  return (
    <section className="bg-neutral-50 py-10 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header compacto */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-sm font-black uppercase tracking-widest text-gray-500">
            Avisos Fúnebres
          </h3>
          <button className="text-xs font-bold text-gray-400 hover:text-black transition-colors uppercase">
            Ver todos
          </button>
        </div>

        {/* Lista compacta */}
        <div className="space-y-3">
          {obituaries.map((obit) => (
            <div
              key={obit.id}
              className="relative bg-white border border-gray-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:bg-gray-50 transition-colors overflow-hidden"
            >
              {/* Ícono decorativo de fondo */}
              <Flower
                size={64}
                className="absolute -top-4 -right-4 text-gray-200 opacity-40 pointer-events-none"
              />

              <div className="relative z-10">
                <div className="flex items-center gap-1">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    Q.E.P.D.
                  </p>
                </div>
                <p className="font-serif font-bold text-gray-900">
                  {obit.name}
                </p>
                <p className="text-xs text-gray-500">
                  Falleció a los {obit.age} años
                </p>
              </div>

              <div className="relative z-10 text-xs text-gray-600 sm:text-right">
                <p>
                  <strong>Velatorio:</strong> {obit.place}
                </p>
                <p>
                  <strong>Sepultura:</strong> {obit.burial}
                </p>
              </div>

              <button className="relative z-10 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-gray-800 flex items-center gap-1 self-start sm:self-center">
                <HeartHandshake size={14} /> Condolencias
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
