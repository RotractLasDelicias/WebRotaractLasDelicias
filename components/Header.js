'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import rotaractlogo from '../public/RotaractLogo_ES21.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100">
      {/* Contenedor principal del Header */}
      <nav className="flex items-center justify-between py-4 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        
        {/* 1. Lado Izquierdo: Logo */}
        <div className="flex items-center shrink-0">
          <Link href="/">
            <Image
              src={rotaractlogo}
              alt="Logo Rotaract"
              width={160}
              height={40}
              priority
              className="object-contain"
            />
          </Link>
        </div>

        {/* 2. Centro: Menú Horizontal (Solo visible en LG+) */}
        <ul className="hidden lg:flex items-center gap-8 font-medium">
          <li>
            <Link href="/" className="text-gray-800 text-lg hover:text-[#d41367] transition-colors">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/nosotros" className="text-gray-800 text-lg hover:text-[#d41367] transition-colors">
              Nosotros
            </Link>
          </li>
          <li>
            <Link href="/unirse" className="text-gray-800 text-lg hover:text-[#d41367] transition-colors">
              ¿Unirse?
            </Link>
          </li>
        </ul>

        {/* 3. Lado Derecho: Botón Destacado "Contáctanos" (Solo visible en LG+) */}
        <div className="hidden lg:flex items-center">
          <Link 
            href="/contacto" 
            className="bg-[#d41367] text-white font-semibold text-base px-6 py-2.5 rounded-full hover:bg-[#b00f54] hover:shadow-lg transition-all duration-300"
          >
            Contáctanos
          </Link>
        </div>

        {/* Botón de Menú con Transformación Animada de Icono */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="lg:hidden relative p-2 w-10 h-10 text-gray-800 hover:text-[#d41367] focus:outline-none transition-colors flex items-center justify-center"
        >
          {/* Icono Hamburguesa */}
          <Menu 
            className={`w-7 h-7 absolute transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
            }`} 
          />
          {/* Icono X */}
          <X 
            className={`w-7 h-7 absolute transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
            }`} 
          />
        </button>

      </nav>

      {/* Menú Desplegable con Transición Suave (Grid Accordion pattern) */}
      <div 
        className={`lg:hidden grid transition-all duration-300 ease-in-out bg-white border-b border-gray-100 shadow-lg ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
        }`}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col items-center gap-5 font-medium text-center px-6 pt-4 pb-8">
            <li className="w-full">
              <Link 
                href="/" 
                onClick={() => setIsOpen(false)}
                className="block text-gray-800 text-lg hover:text-[#d41367] py-1 transition-colors"
              >
                Inicio
              </Link>
            </li>
            <li className="w-full">
              <Link 
                href="/nosotros" 
                onClick={() => setIsOpen(false)}
                className="block text-gray-800 text-lg hover:text-[#d41367] py-1 transition-colors"
              >
                Nosotros
              </Link>
            </li>
            <li className="w-full">
              <Link 
                href="/unirse" 
                onClick={() => setIsOpen(false)}
                className="block text-gray-800 text-lg hover:text-[#d41367] py-1 transition-colors"
              >
                ¿Unirse?
              </Link>
            </li>


            {/* Botón de Contáctanos en la parte inferior */}
            <li className="w-full pt-4 border-t border-gray-100 flex justify-center">
              <Link 
                href="/contacto" 
                onClick={() => setIsOpen(false)}
                className="bg-[#d41367] text-white font-semibold text-base px-8 py-3 rounded-full hover:bg-[#b00f54] transition-all duration-300 inline-block"
              >
                Contáctanos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}