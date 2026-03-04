export default function Footer() {
    return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="h-[4px] w-full bg-[#d41367]"></div>
      {/* Contenedor Principal */}
      <div className="px-10 mx-30 md:px-20 py-6 flex flex-col">
        
        {/* BLOQUE SUPERIOR: Logo y Links */}
        {/* Usamos justify-between para mandarlos a los lados solo en MD */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-8">
          <div className="font-bold text-[#d41367] text-2xl tracking-tighter">
            ROTARACT
          </div>

          <nav className="flex space-x-6 mt-6 md:mt-0 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-blue-600 transition">Privacidad</a>
            <a href="#" className="hover:text-blue-600 transition">Términos</a>
            <a href="#" className="hover:text-blue-600 transition">Donaciones</a>
          </nav>
        </div>

        {/* BLOQUE INFERIOR: Copyright */}
        {/* 'border-t' crea la línea divisoria */}
        {/* 'text-center' hace que SIEMPRE esté al medio, sin importar el tamaño de pantalla */}
        <div className="border-t border-gray-100 pt-8 w-full">
          <p className="text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Rotaract. Todos los derechos reservados.
          </p>
        </div>
        
      </div>
    </footer>
    );
  }