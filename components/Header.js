import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full">
      {/* Franja superior de 12px */}
      <div className="h-[4px] w-full bg-[#d41367]"></div>

      {/* Contenedor principal del Header */}
      {/* El 'px-8' o 'max-w-7xl mx-auto' es lo que controla el espacio horizontal */}
      <nav className="flex items-center justify-between py-6 px-10 md:px-20">
        
        {/* Lado Izquierdo: Logo */}
        <div className="text-base md:text-2xl text-[#d41367] font-bold tracking-tighter">
          ROTARACT
        </div>

        {/* Lado Derecho: Botones (Ocultos en móvil, flex en escritorio) */}
        {/* 'space-x-8' controla la distancia entre los botones */}
        <ul className="hidden md:flex space-x-8 font-medium text-black">
          <li><Link href="/" className="text-black hover:text-[#d41367] transition">Inicio</Link></li>
          <li><Link href="/proyectos" className="text-black hover:text-[#d41367] transition">Proyectos</Link></li>
          <li><Link href="/contribuyentes" className="text-black hover:text-[#d41367] transition">Contribuyentes</Link></li>
          <li><Link href="/contacto" className="text-black hover:text-[#d41367] transition">Contáctanos</Link></li>
        </ul>

        {/* Botón de Menú para móvil (Solo visual de momento) */}
        <div className="md:hidden font-bold">Menú</div>
      </nav>
    </header>
  );
}