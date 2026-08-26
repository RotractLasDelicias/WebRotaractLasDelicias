import Image from 'next/image';
import Link from 'next/link';
import { Camera, MessageSquare, X, UserStar } from 'lucide-react';
import rotaractlogo from '../public/RotaractLogo_ES21.png';

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      {/* Línea decorativa opcional con el color de la marca 
      <div className="h-[3px] w-full bg-[#d41367]" />*/}

      {/* Contenedor Principal */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 flex flex-col">
        
        {/* BLOQUE SUPERIOR: Grid de 3 columnas (apilado en móvil, 3 columnas en MD+) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 text-center md:text-left">
          
          {/* 1. LADO IZQUIERDO: Logo y mensaje corto */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link href="/">
              <Image
                src={rotaractlogo}
                alt="Logo Rotaract"
                width={160}
                height={40}
                className="object-contain"
              />
            </Link>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>

          {/* 2. CENTRO: Navegación Principal */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="font-semibold text-[#d41367] text-base tracking-wide uppercase">
              Navegación
            </h3>
            <ul className="flex flex-col gap-2.5 font-medium text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-[#d41367] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="hover:text-[#d41367] transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-[#d41367] transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-[#d41367] transition-colors">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. LADO DERECHO: Texto corto + Redes Sociales */}
          <div className="flex flex-col items-center pt-5 md:items-start gap-4">
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
            </p>
            
            <div className="flex flex-col items-center pt-5 md:items-start gap-2">
              <h4 className="font-semibold text-[#d41367] text-xs tracking-wider uppercase">
                Redes Sociales
              </h4>
              
              {/* Iconos de Redes Sociales */}
              <div className="flex items-center gap-4 text-gray-600 pt-1">
                {/* Ejemplo de enlace externo a Instagram */}
                <a 
                  href="https://instagram.com/somosrotaractlasdelicias" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 rounded-full bg-gray-100 hover:bg-[#d41367] hover:text-white transition-all duration-300"
                >
                  <Camera className="w-5 h-5" />
                </a>

                {/* Facebook */}
                <a 
                  href="https://facebook.com/tu_pagina" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-2 rounded-full bg-gray-100 hover:bg-[#d41367] hover:text-white transition-all duration-300"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>

                {/* Twitter / X */}
                <a 
                  href="https://twitter.com/tu_cuenta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="p-2 rounded-full bg-gray-100 hover:bg-[#d41367] hover:text-white transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com/in/tu_cuenta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-full bg-gray-100 hover:bg-[#d41367] hover:text-white transition-all duration-300"
                >
                  <UserStar  className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BLOQUE INFERIOR: Copyright, Nombre del Club y Panel de Admin */}
        <div className="border-t border-gray-100 pt-8 flex flex-col items-center gap-2 text-center">
          <p className="text-xs text-gray-500 font-medium">
            © {new Date().getFullYear()} Rotaract Las Delcias.
          </p>
          
          <Link 
            href="/admin/index.html" 
            className="text-[11px] text-gray-400 hover:text-gray-600 transition-colors pt-1"
          >
            Panel de Administración
          </Link>
        </div>
        
      </div>
    </footer>
  );
}