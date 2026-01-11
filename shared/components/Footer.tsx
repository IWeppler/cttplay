import { Tv, Wifi, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* COLUMNA 1: Branding y Propósito */}
          <div className="space-y-6">
            <Image src="/logo.png" alt="Logo" width={200} height={200} />
            <p className="text-sm text-gray-500 leading-relaxed">
              Líderes en conectividad y noticias en el norte santafesino.
              Llevamos información y entretenimiento a cada hogar de la región.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-gray-100 rounded-full hover:bg-red-600 hover:text-white transition-all"
                target="_blank"
              >
                <Image
                  src="/instagram.png"
                  alt="Instagram"
                  width={16}
                  height={16}
                />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100 rounded-full hover:bg-red-600 hover:text-white transition-all"
                target="_blank"
              >
                <Image
                  src="/facebook.png"
                  alt="Facebook"
                  width={16}
                  height={16}
                />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100 rounded-full hover:bg-red-600 hover:text-white transition-all"
                target="_blank"
              >
                <Image
                  src="/youtube.png"
                  alt="Youtube"
                  width={16}
                  height={16}
                />
              </a>
              <a
                href="https://www.tiktok.com/@cttplaytostado?is_from_webapp=1&sender_device=pc"
                className="p-2 bg-gray-100 rounded-full hover:bg-red-600 group-hover:text-white transition-all"
                target="_blank"
              >
                <Image src="/tiktok.png" alt="Tiktok" width={16} height={16} />
              </a>
            </div>
          </div>

          {/* COLUMNA 2: Servicios Triple Play (Conversión) */}
          <div>
            <h4 className="font-black uppercase text-xs tracking-widest mb-6 border-l-4 border-red-600 pl-3">
              Servicios Hogar
            </h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-tighter">
              <li>
                <a
                  href="#"
                  className="hover:text-red-600 flex items-center gap-2"
                >
                  <Wifi size={16} /> Internet Fibra 50/100MB
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-red-600 flex items-center gap-2"
                >
                  <Tv size={16} /> CTT Play Televisión
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-red-600 flex items-center gap-2"
                >
                  <ChevronRight size={16} /> Telefonía Fija Libre
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-red-600 border-b-2 border-red-600 pb-1"
                >
                  Descargar App TV
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: Reportero Vecino (Interacción) */}
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <h4 className="font-black uppercase text-xs tracking-widest mb-4">
              Reportero Vecino
            </h4>
            <p className="text-xs text-gray-500 mb-4 italic">
              ¿Tenés una primicia o un reclamo? Envíanos fotos y videos a
              nuestra línea exclusiva.
            </p>
            <a href="https://wa.me/3491524744" className="flex flex-col group">
              <span className="text-xs text-gray-500 font-bold uppercase">
                WhatsApp
              </span>
              <span className="text-xl font-black text-red-700 transition-transform">
                3491-524744
              </span>
            </a>
          </div>

          {/* COLUMNA 4: Tu Estrategia Freelance (Auto-beneficio) */}
          <div>
            <h4 className="font-black uppercase text-xs tracking-widest mb-6">
              Negocios Digitales
            </h4>
            <p className="text-xs text-gray-500 mb-4">
              ¿Querés que tu comercio crezca como este diario?
            </p>
            <div className="space-y-3">
              <button className="w-full bg-black text-white py-3 text-[10px] font-bold uppercase tracking-widest duration-200 hover:bg-red-600 transition-all cursor-pointer">
                Publicar Anuncio
              </button>
              <a
                href="#"
                className="block text-center text-[10px] font-bold text-gray-400 hover:text-black duration-200 transition-colors underline underline-offset-4 uppercase"
              >
                Solicitar mi Web Propia
              </a>
            </div>
          </div>
        </div>

        {/* BARRA INFERIOR FINAL */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            © 2026 CTT Play Tostado • Todos los derechos reservados.
          </div>

          {/* Tu Sello de Autor como en el Post 6 */}
          <div className="text-[10px] font-bold uppercase tracking-widest">
            <span className="text-gray-400">Desarrollo y Estrategia:</span>
            <a
              href="https://www.ignacioweppler.com"
              target="_blank"
              className="text-black hover:text-red-600 ml-1 italic"
            >
              Ignacio Weppler
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
