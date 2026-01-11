"use client";

import {
  MapPin,
  Clock,
  CalendarDays,
} from "lucide-react";
import Image from "next/image";

export default function PharmaciesSection() {
  const currentPharmacy = {
    name: "Farmacia Tostado",
    address: "Av. San Martín 1250, Tostado, Santa Fe",
    phone: "3491-470111",
    whatsapp: "5493491470111",
    hours: "Cierra a las 08:00 AM",
  };

  const nextTurns = [
    { day: "Sábado 27", name: "Farmacia Del Pueblo" },
    { day: "Domingo 28", name: "Farmacia Centro" },
    { day: "Lunes 29", name: "Farmacia Nueva" },
  ];

  const openMap = () => {
    const query = encodeURIComponent(currentPharmacy.address);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${query}`,
      "_blank"
    );
  };

  return (
    <section className="bg-emerald-50 py-12 border-y border-emerald-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header de la sección */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black uppercase tracking-tighter text-emerald-950 flex items-center gap-2">
            <span className="text-emerald-500">
              <Clock size={24} />
            </span>
            Farmacias de Turno
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* TARJETA PRINCIPAL (HOY) */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg shadow-emerald-100/50 border border-emerald-100 relative overflow-hidden group">
            {/* Etiqueta de Estado */}
            <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-bl-xl tracking-widest">
              Abierta Ahora
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start relative z-10">
              {/* Icono Grande */}
              <div className="bg-emerald-50 p-6 rounded-full border-4 border-emerald-100 shrink-0">
                <span className="text-4xl font-black text-emerald-600">+</span>
              </div>

              <div className="text-center md:text-left space-y-2 flex-1 w-full">
                <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider block">
                  Turno Hoy (Viernes 26)
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 leading-none">
                  {currentPharmacy.name}
                </h3>
                <p className="text-gray-500 font-medium flex items-center justify-center md:justify-start gap-2 pt-1 text-sm md:text-base">
                  <MapPin size={16} className="text-emerald-600" />{" "}
                  {currentPharmacy.address}
                </p>

                {/* BOTONES DE ACCIÓN */}
                <div className="pt-6 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  {/* Botón WhatsApp */}
                  <a
                    href={`https://wa.me/${currentPharmacy.whatsapp}?text=Hola,%20necesito%20consultar%20por%20un%20medicamento.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold uppercase text-xs hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg"
                  >
                    <Image
                      src="/whatsappp.png"
                      alt="WhatsApp"
                      width={16}
                      height={16}
                    />{" "}
                    {currentPharmacy.phone}
                  </a>

                  {/* Botón Mapa */}
                  <button
                    onClick={openMap}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white border-2 border-emerald-100 text-emerald-700 px-6 py-3 rounded-xl font-bold uppercase text-xs hover:bg-emerald-50 hover:border-emerald-200 transition-all"
                  >
                    <MapPin size={18} /> Ir con Google Maps
                  </button>
                </div>

                {/* Nota de horario */}
                <p className="text-[10px] text-gray-500 font-medium pt-2 uppercase tracking-wide">
                  * {currentPharmacy.hours}
                </p>
              </div>
            </div>

            {/* Decoración de fondo */}
            <div className="absolute -bottom-10 -right-10 text-emerald-50 opacity-50 transform rotate-12 pointer-events-none">
              <svg
                width="200"
                height="200"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3ZM10 17H8V13H4V11H8V7H10V11H14V13H10V17Z" />
              </svg>
            </div>
          </div>

          {/* LISTA PRÓXIMOS DÍAS */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 h-full flex flex-col shadow-sm">
            <h4 className="text-sm font-black uppercase text-gray-400 mb-4 flex items-center gap-2 pb-2 border-b border-gray-50">
              <CalendarDays size={16} /> Próximos Turnos
            </h4>
            <div className="space-y-1 flex-1">
              {nextTurns.map((turn, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center p-3 rounded-lg hover:bg-emerald-50 transition-colors cursor-default group"
                >
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-gray-400 group-hover:text-emerald-600 uppercase tracking-wider mb-0.5">
                      {turn.day}
                    </span>
                    <span className="text-sm font-bold text-gray-800">
                      {turn.name}
                    </span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-gray-200 group-hover:bg-emerald-400 transition-colors"></div>
                </div>
              ))}
            </div>

            {/* Call to action secundario */}
            <div className="mt-4 pt-4 border-t border-gray-50 text-center">
              <p className="text-xs text-gray-400">
                ¿Eres dueño de farmacia?{" "}
                <a
                  href="#"
                  className="text-emerald-600 font-bold hover:underline"
                >
                  Actualizar turno
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
