
"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Facebook,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 text-white">
      {/* fondo degradado */}
      <div className="bg-gradient-to-b from-blue-600 via-blue-700 to-slate-900">
        <div className="container py-12">
          <div className="grid gap-10 md:grid-cols-4">
            {/* Marca + redes */}
            <div className="space-y-4">
              <Link href="/" className="inline-flex items-center gap-3">
                <Image
                  src="/don-pepe.png"
                  alt="Don Pepe"
                  width={120}
                  height={60}
                  priority={false}
                  className="h-10 w-auto"
                />
              </Link>

              <div className="text-sm/6 text-white/80">
                Equipamiento e insumos para la industria cárnica y gastronomía.
              </div>

              <div className="space-y-2">
                <div className="text-sm font-semibold">¡Seguinos!</div>
                <div className="flex items-center gap-3">
                  <Link
                    href="#"
                    aria-label="Instagram"
                    className="grid size-9 place-content-center rounded-lg bg-white/10 hover:bg-white/20"
                  >
                    <Instagram size={18} />
                  </Link>
                  <Link
                    href="#"
                    aria-label="Facebook"
                    className="grid size-9 place-content-center rounded-lg bg-white/10 hover:bg-white/20"
                  >
                    <Facebook size={18} />
                  </Link>
                  <Link
                    href="#"
                    aria-label="LinkedIn"
                    className="grid size-9 place-content-center rounded-lg bg-white/10 hover:bg-white/20"
                  >
                    <Linkedin size={18} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="mb-3 text-lg font-semibold">Contacto</h4>
              <ul className="space-y-2 text-white/85">
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+54 11 7079-0621</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+54 11 3450-1661</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>donpepekm30.insumos@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Zona Sur, GBA – Argentina</span>
                </li>
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h4 className="mb-3 text-lg font-semibold">La Empresa</h4>
              <ul className="space-y-2 text-white/85">
                <li>
                  <Link href="/about" className="inline-flex items-center gap-1 hover:text-white">
                    Quiénes somos <ArrowUpRight size={14} />
                  </Link>
                </li>
                <li>
                  <Link href="/wholesale" className="inline-flex items-center gap-1 hover:text-white">
                    Venta Mayorista <ArrowUpRight size={14} />
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white">
                    Preguntas frecuentes
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mi cuenta */}
            <div>
              <h4 className="mb-3 text-lg font-semibold">Mi Cuenta</h4>
              <ul className="space-y-2 text-white/85">
                <li>
                  <Link href="/login" className="hover:text-white">
                    Ingresar
                  </Link>
                </li>
                <li>
                  <Link href="/orders" className="hover:text-white">
                    Mis pedidos
                  </Link>
                </li>
                <li>
                  <Link href="/cart" className="hover:text-white">
                    Carrito
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Términos y condiciones
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Política de privacidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* línea inferior */}
        <div className="border-t border-white/10">
          <div className="container flex flex-wrap items-center justify-between gap-4 py-4 text-xs text-white/70">
            <p>© {year} Don Pepe. Todos los derechos reservados.</p>
            <p className="space-x-3">
              <Link href="/cookies" className="hover:text-white">
                Cookies
              </Link>
              <Link href="/legal" className="hover:text-white">
                Información legal
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* botón flotante WhatsApp */}
      <Link
        href="https://wa.me/541170790621"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-white shadow-lg transition hover:bg-emerald-600"
      >
        <MessageCircle size={30} />
        <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
      </Link>
    </footer>
  );
}
