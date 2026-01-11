"use client";

import { Upload, Globe, MousePointer2, CreditCard } from "lucide-react";

export default function AdDashboard() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white border-2 border-black rounded-3xl overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        {/* Header del Panel */}
        <div className="bg-black p-8 text-white">
          <h2 className="text-3xl font-black italic uppercase tracking-tighter">
            Panel de <span className="text-red-600">Anunciantes</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2 font-medium uppercase tracking-widest">
            Digitalizá tu comercio en Tostado al instante.
          </p>
        </div>

        <div className="p-8 space-y-10">
          {/* Paso 1: Creatividad */}
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 font-black uppercase text-sm tracking-widest">
              <span className="bg-gray-100 w-6 h-6 flex items-center justify-center rounded-full text-[10px]">
                01
              </span>
              Subí tu Arte (Banner)
            </h3>
            <div className="border-2 border-dashed border-gray-200 rounded-2xl p-12 flex flex-col items-center hover:border-red-600 transition-colors cursor-pointer bg-gray-50 group">
              <Upload
                className="text-gray-300 group-hover:text-red-600 mb-4"
                size={40}
              />
              <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                Arrastrá tu imagen (JPG/PNG)
              </p>
              <p className="text-[10px] text-gray-300 mt-2 italic text-center">
                Nuestra IA validará que la imagen cumpla con las normas del
                diario.
              </p>
            </div>
          </div>

          {/* Paso 2: Destino (Tu Embudo) */}
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 font-black uppercase text-sm tracking-widest">
              <span className="bg-gray-100 w-6 h-6 flex items-center justify-center rounded-full text-[10px]">
                02
              </span>
              Destino del Anuncio
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border-2 border-black rounded-xl bg-white flex items-start gap-3">
                <Globe className="text-red-600 shrink-0" size={20} />
                <div>
                  <p className="font-bold text-xs uppercase tracking-tighter">
                    Tengo página web
                  </p>
                  <input
                    type="url"
                    placeholder="https://tuweb.com"
                    className="w-full mt-2 text-xs border-b border-gray-200 outline-none focus:border-red-600"
                  />
                </div>
              </div>

              {/* EL GANCHO: Aquí te vendés vos */}
              <div className="p-4 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50 flex items-start gap-3 relative group overflow-hidden">
                <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <MousePointer2 className="text-gray-400 shrink-0" size={20} />
                <div>
                  <p className="font-bold text-xs uppercase tracking-tighter text-gray-500">
                    No tengo página web
                  </p>
                  <p className="text-[10px] text-gray-400 mt-1 italic leading-tight">
                    Los anuncios con web propia rinden un 60% más.
                  </p>
                  <button className="mt-2 text-[10px] font-black uppercase text-red-600 underline">
                    Solicitar diseño a Ignacio.dev
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Paso 3: Pago y Activación */}
          <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-black italic">
                $15.000
                <span className="text-[10px] text-gray-400 not-italic uppercase ml-1">
                  /semana
                </span>
              </div>
              <div className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded font-bold uppercase tracking-widest">
                Activación Inmediata
              </div>
            </div>

            <button className="bg-black text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-red-600 transition-all flex items-center gap-3">
              PAGAR Y PUBLICAR <CreditCard size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
