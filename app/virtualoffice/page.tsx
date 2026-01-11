"use client";

import { useState } from "react";
import {
  Wifi,
  Tv,
  Zap,
  Check,
  MapPin,
  ArrowRight,
  Smartphone,
  Gamepad2,
  Loader2,
  ShieldCheck,
} from "lucide-react";

// --- INTERFACES ---
interface PlanCardProps {
  title: string;
  speed: string;
  price: string;
  features: string[];
  icon: React.ReactNode;
  isPopular?: boolean;
  suffix?: string;
}

interface FeatureBoxProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export default function SalesLanding() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* 1. HERO SECTION: Promesa + Acción */}
      <section className="relative bg-neutral-900 text-white overflow-hidden">
        {/* Fondo abstracto */}
        <div className="absolute inset-0 bg-green-500 bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block bg-red-600 text-white text-xs font-black uppercase px-3 py-1 rounded tracking-widest animate-pulse">
              Nueva Zona Habilitada
            </span>
            <h1 className="text-4xl md:text-6xl font-black leading-tight uppercase tracking-tighter">
              La velocidad que <br />
              <span className="text-red-600">Tostado</span> se merece.
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg">
              Fibra óptica directa al hogar (FTTH). Jugá, streameá y trabajá sin
              cortes. Soporte técnico local real.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-lg shadow-red-900/50 flex items-center justify-center gap-2">
                Quiero Fibra Ahora <ArrowRight size={20} />
              </button>
              <button className="bg-transparent border border-gray-600 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
                Ver Grilla de Canales
              </button>
            </div>
          </div>

          {/* SIMULADOR DE COBERTURA (El gancho visual) */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl">
            <AvailabilityChecker />
          </div>
        </div>
      </section>

      {/* 2. PLANES (Pricing Table) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-4">
              Elegí tu Pack Ideal
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Precios transparentes y finales. Sin sorpresas en tu factura.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Plan Básico */}
            <PlanCard
              title="Solo Internet"
              speed="100"
              price="8.500"
              features={["Fibra Óptica", "WiFi Dual Band", "Soporte 24/7"]}
              icon={<Wifi size={32} />}
            />

            {/* Plan ESTRELLA (Destacado) */}
            <PlanCard
              title="Pack Cooperativa"
              speed="300"
              price="12.500"
              features={[
                "Internet 300 Megas",
                "TV HD (120 Canales)",
                "Fútbol Pack Bonificado x 3 meses",
                "Instalación Gratis",
              ]}
              icon={<Zap size={32} />}
              isPopular={true}
              suffix="MEGAS"
            />

            {/* Plan Gamer/Pro */}
            <PlanCard
              title="Pack Ultra"
              speed="500"
              price="18.900"
              features={[
                "Internet Simétrico",
                "IP Pública Fija",
                "Prioridad de Soporte",
                "TV 4K Ready",
              ]}
              icon={<Gamepad2 size={32} />}
            />
          </div>
        </div>
      </section>

      {/* 3. BENEFICIOS VISUALES (Grid) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
            <FeatureBox
              icon={<Gamepad2 size={24} />}
              title="Ping Bajo"
              desc="Ideal para Gaming competitivo."
            />
            <FeatureBox
              icon={<Tv size={24} />}
              title="TV Digital"
              desc="Pausá y retrocedé en vivo."
            />
            <FeatureBox
              icon={<Smartphone size={24} />}
              title="App CTT"
              desc="Gestioná tu cuenta desde el celu."
            />
            <FeatureBox
              icon={<ShieldCheck size={24} />}
              title="Seguro"
              desc="Navegación protegida incluida."
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">
              ¿Por qué elegir <span className="text-red-600">CTT Play</span>?
            </h2>
            <p className="text-gray-600 text-lg">
              Porque somos de acá. A diferencia de las grandes empresas, si
              tenés un problema, te atiende un vecino, no una máquina.
            </p>
            <p className="text-gray-600">
              Invertimos constantemente en mejorar la red de Tostado para que
              tengas la misma calidad de servicio que en las grandes capitales.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CTA FINAL (Formulario rápido) */}
      <section className="bg-red-700 py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-8">
            ¿Listo para volar? 🚀
          </h2>
          <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col md:flex-row gap-4 items-center">
            <input
              type="text"
              placeholder="Tu Nombre"
              className="w-full bg-gray-100 p-4 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="tel"
              placeholder="Tu Celular (WhatsApp)"
              className="w-full bg-gray-100 p-4 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="w-full md:w-auto bg-neutral-900 text-white px-8 py-4 rounded-lg font-black uppercase tracking-widest hover:bg-black transition-all whitespace-nowrap">
              Solicitar Contacto
            </button>
          </div>
          <p className="mt-4 text-sm opacity-80">
            Te contactaremos por WhatsApp en menos de 2 horas hábiles.
          </p>
        </div>
      </section>
    </div>
  );
}

// --- SUB-COMPONENTES ---

// 1. Simulador de Cobertura (Demo Logic)
function AvailabilityChecker() {
  const [status, setStatus] = useState<"idle" | "checking" | "success">("idle");
  const [address, setAddress] = useState("");

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address) return;
    setStatus("checking");
    // Simulamos delay de API
    setTimeout(() => setStatus("success"), 2000);
  };

  return (
    <div className="text-center">
      <div className="bg-red-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500">
        <MapPin size={32} />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">
        Chequeá tu Cobertura
      </h3>
      <p className="text-gray-400 text-sm mb-6">
        Ingresá tu dirección para ver si llega la fibra.
      </p>

      {status === "success" ? (
        <div className="bg-green-500/20 border border-green-500/50 p-4 rounded-xl animate-in fade-in zoom-in">
          <p className="text-green-400 font-bold text-lg flex items-center justify-center gap-2">
            <Check size={24} /> ¡Buenas noticias!
          </p>
          <p className="text-white text-sm mt-1">
            La fibra llega a <span className="font-bold">{address}</span>.
          </p>
          <button className="mt-4 w-full bg-green-600 hover:bg-green-500 text-white py-2 rounded-lg font-bold text-sm transition-colors">
            Continuar Contratación
          </button>
        </div>
      ) : (
        <form onSubmit={handleCheck} className="space-y-3">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Ej: San Martín 1250"
            className="w-full bg-black/50 border border-white/10 text-white p-3 rounded-lg text-center outline-none focus:border-red-500 transition-colors placeholder:text-gray-600"
          />
          <button
            disabled={status === "checking"}
            className="w-full bg-white text-red-700 py-3 rounded-lg font-black uppercase tracking-widest hover:bg-gray-200 transition-colors disabled:opacity-50"
          >
            {status === "checking" ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="animate-spin" /> Verificando...
              </span>
            ) : (
              "Comprobar Ahora"
            )}
          </button>
        </form>
      )}
    </div>
  );
}

// 2. Tarjeta de Plan (Tipada)
function PlanCard({
  title,
  speed,
  price,
  features,
  icon,
  isPopular,
  suffix = "MEGAS",
}: PlanCardProps) {
  return (
    <div
      className={`relative bg-white rounded-2xl p-8 transition-all hover:shadow-xl border ${
        isPopular
          ? "border-red-600 shadow-2xl scale-105 z-10"
          : "border-gray-200"
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
          Más Vendido
        </div>
      )}

      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
          isPopular ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-600"
        }`}
      >
        {icon}
      </div>

      <h3 className="text-lg font-bold text-gray-500 uppercase tracking-wide mb-2">
        {title}
      </h3>
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-5xl font-black text-gray-900">{speed}</span>
        <span className="text-sm font-bold text-gray-400">{suffix}</span>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feat, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
            <Check size={18} className="text-green-500 shrink-0" />
            <span className="leading-tight">{feat}</span>
          </li>
        ))}
      </ul>

      <div className="pt-6 border-t border-gray-100">
        <p className="text-xs text-gray-400 uppercase mb-1">Precio Final</p>
        <div className="flex justify-between items-end mb-4">
          <span className="text-3xl font-bold text-gray-900">${price}</span>
          <span className="text-xs text-gray-400 line-through mb-1">
            ${(parseInt(price.replace(".", "")) * 1.2).toLocaleString("es-AR")}
          </span>
        </div>
        <button
          className={`w-full py-4 rounded-lg font-black uppercase tracking-widest text-xs transition-colors ${
            isPopular
              ? "bg-red-600 text-white hover:bg-red-700"
              : "bg-gray-900 text-white hover:bg-gray-800"
          }`}
        >
          Lo quiero
        </button>
      </div>
    </div>
  );
}

// 3. Feature Box (Tipada)
function FeatureBox({ icon, title, desc }: FeatureBoxProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-xl flex items-start gap-4 hover:bg-gray-100 transition-colors cursor-default">
      <div className="text-red-600 mt-1">{icon}</div>
      <div>
        <h4 className="font-bold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-500 leading-snug">{desc}</p>
      </div>
    </div>
  );
}
