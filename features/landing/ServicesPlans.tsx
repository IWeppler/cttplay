import { Wifi, Tv, Zap, Check } from "lucide-react";

export default function ServicesPlans() {
  const plans = [
    {
      title: "Internet Fibra",
      speed: "300",
      unit: "MEGAS",
      price: "12.500",
      icon: <Wifi size={24} />,
      features: [
        "Fibra Óptica al hogar",
        "Módem WiFi 6",
        "Instalación bonificada",
      ],
      highlight: false,
    },
    {
      title: "Pack Cooperativa",
      speed: "FULL",
      unit: "CONECTIVIDAD",
      price: "35.000",
      icon: <Zap size={24} />,
      features: ["Internet 50 Megas", "TV HD (120 Canales)", "teléfono fijo"],
      highlight: true,
    },
    {
      title: "Televisión HD",
      speed: "120",
      unit: "CANALES",
      price: "9.200",
      icon: <Tv size={24} />,
      features: ["Grilla digital", "Pausa en vivo", "Sin deco adicional"],
      highlight: false,
    },
  ];

  return (
    <section className="py-16 bg-neutral-900 text-white relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">
            Conectate con <span className="text-red-600">CTT Play</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            La mejor tecnología de fibra óptica llega a tu hogar. Elegí el plan
            que mejor se adapte a tu familia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 relative transition-all duration-300 ${
                plan.highlight
                  ? "bg-linear-to-br from-red-700 to-red-900 shadow-2xl shadow-red-900/50 scale-105 border border-red-500 z-10"
                  : "bg-neutral-800 border border-neutral-700 hover:border-neutral-500"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-red-700 text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest shadow-sm">
                  Más Elegido
                </div>
              )}

              <div
                className={`p-3 rounded-xl inline-block mb-4 ${
                  plan.highlight
                    ? "bg-white/20 text-white"
                    : "bg-neutral-700 text-red-500"
                }`}
              >
                {plan.icon}
              </div>

              <h3 className="text-lg font-bold uppercase tracking-wide mb-1">
                {plan.title}
              </h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black">{plan.speed}</span>
                <span className="text-xs font-bold opacity-70">
                  {plan.unit}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm opacity-90"
                  >
                    <Check
                      size={16}
                      className={
                        plan.highlight ? "text-white" : "text-green-500"
                      }
                    />
                    <span className="leading-tight">{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/10 pt-4 mb-4">
                <p className="text-xs uppercase opacity-60 mb-1">
                  Precio Final Socio
                </p>
                <p className="text-2xl font-bold">${plan.price}</p>
              </div>

              <button
                className={`w-full py-3 rounded-lg text-xs font-black uppercase tracking-widest transition-colors cursor-pointer ${
                  plan.highlight
                    ? "bg-white text-red-900 hover:bg-gray-100"
                    : "bg-neutral-700 text-white hover:bg-neutral-600"
                }`}
              >
                Solicitar Ahora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
