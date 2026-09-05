import { getContentData } from '../lib/posts';

interface JuntaComiteProps {
  juntaOComite?: 'junta' | 'comite' | string;
}

export default function JuntaComite({ juntaOComite = 'junta'}: JuntaComiteProps) {
  const socios = getContentData('socios') as any[];

  // 1. Filtrado para la Junta Directiva (Primeros 5 principales o por rol)
  const defaultSocios = [
    { id: '1', name: 'Isabel Avendaño', role: 'Presidente', bio:'Presidente 2026-2027', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgEgiu9iywocYRQe3NiHn1GIViD9FsjRtNuHYkECK4Yw&s' },
    { id: '2', name: 'Adolfo Torres', role: 'Vicepresidente', bio:'Vicepresidente 2026-2027', image: 'data:image/jpeg;base64,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' },
    { id: '3', name: 'Nicolth Romero', role: 'Secretaria', bio:'Secretaria 2026-2027', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT69x5C3hAXtXjG0l3CftgAAT9an5gyQKb-5HlakeonvQ&s=10' },
    { id: '4', name: 'Maria Fernanda Leañez', role: 'Tesorera', bio:'Tesorera 2026-2027', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT69x5C3hAXtXjG0l3CftgAAT9an5gyQKb-5HlakeonvQ&s=10' },
    { id: '5', name: 'Omar Sanchez', role: 'Macero', bio:'Macero 2026-2027', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXUFTFeAXM411haTi5VmpI0cuWemg95Mu5-iJF34QYrw&s=10' },
  ];

  const leadershipSocios = socios.filter(socio => socio.role && socio.role !== 'Miembro');
  const displayLeadership = leadershipSocios.length > 0 ? leadershipSocios : defaultSocios;

  // 2. Filtrado para Comités (Se activan solo en modo 'comite')
  const comitesServicio = socios.filter(socio => socio.category === 'Comité' || socio.isComite);
  const displayComites = comitesServicio.length > 0 ? comitesServicio : defaultSocios.slice(0,2);

  const isComiteMode = juntaOComite === 'comite';


  return (
    <section className=' py-10 md:px-10 my-16 mt-1 bg-white'>
      
      {/* ========================================== */}
      {/* SECCIÓN 1: JUNTA DIRECTIVA (Estructura fija 2-3) */}
      {/* ========================================== */}
      <div className='flex flex-col items-center rounded-lg p-2 sm:p-4 md:p-6 mb-8 text-center'>
        <span className='inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d41367] bg-[#d41367]/10 px-4 py-1.5 rounded-full mb-4'>
          Período 2026 - 2027
        </span>
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight'>
          Junta Directiva
        </h2>
        <p className='mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
          Conoce a las mentes detrás de nuestros proyectos y actividades. Cada miembro aporta su experiencia y pasión para llevar adelante nuestra misión.
        </p>
        
      </div>

      {/* Contenedor principal de Junta Directiva */}
      <div className='flex flex-col gap-8 max-w-7xl mx-auto items-center'>
        
        {/* FILA 1: Primeros 2 integrantes */}
        <div className='flex flex-col md:flex-row justify-center items-stretch gap-8 w-full items-center'>
          {displayLeadership.slice(0, 2).map((socio) => (
            <div
              key={socio.id}
              className='group flex flex-col w-[90%] max-w-md md:w-[calc(50%-1rem)] bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 mx-auto md:mx-0'
            >
              <div className='w-full h-100 bg-gray-100 overflow-hidden relative cursor-pointer'>
                <img
                  src={socio.image}
                  alt={socio.name}
                  className='w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center'>
                  <span className='text-white font-medium text-sm md:text-base transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300'>
                    {socio.bio || "Ver perfil completo del integrante"}
                  </span>
                </div>
              </div>

              <div className='flex flex-col flex-1 p-6 justify-between text-left'>
                <div>
                  <span className='inline-block text-xs font-bold uppercase tracking-wider text-[#d41367] bg-[#d41367]/10 px-3 py-1 rounded-full mb-3'>
                    {socio.role}
                  </span>
                  <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                    {socio.name}
                  </h3>
                  {socio.message && (
                    <p className='text-gray-600 text-base leading-relaxed line-clamp-3 italic'>
                      "{socio.message}"
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FILA 2: Siguientes 3 integrantes */}
        <div className='flex flex-col md:flex-row justify-center items-stretch gap-8 w-full items-center'>
          {displayLeadership.slice(2, 5).map((socio) => (
            <div
              key={socio.id}
              className='group flex flex-col w-[90%] max-w-md md:w-[calc(33.333%-1.5rem)] bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 mx-auto md:mx-0'
            >
              <div className='w-full h-100 md:h-100 bg-gray-100 overflow-hidden relative cursor-pointer'>
                <img
                  src={socio.image}
                  alt={socio.name}
                  className='w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center'>
                  <span className='text-white font-medium text-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300'>
                    {socio.bio || "Ver perfil completo del integrante"}
                  </span>
                </div>
              </div>

              <div className='flex flex-col flex-1 p-6 justify-between text-left'>
                <div>
                  <span className='inline-block text-xs font-bold uppercase tracking-wider text-[#d41367] bg-[#d41367]/10 px-3 py-1 rounded-full mb-3'>
                    {socio.role}
                  </span>
                  <h3 className='text-xl font-bold text-gray-900 mb-2'>
                    {socio.name}
                  </h3>
                  {socio.message && (
                    <p className='text-gray-600 text-sm leading-relaxed line-clamp-3 italic'>
                      "{socio.message}"
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ========================================== */}
      {/* SECCIÓN 2: COMITÉS DE SERVICIO (Grid Dinámico) */}
      {/* ========================================== */}
      {isComiteMode && (
        <div className='mt-20 pt-16 border-t border-gray-200 max-w-7xl mx-auto'>
          
          {/* Encabezado Comités */}
          <div className='flex flex-col items-center rounded-lg p-2 sm:p-4 md:p-6 mb-12 text-center'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight'>
              Comités de Servicio
            </h2>
            <p className='mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              Conoce a los directores y presidentes de área encargados de coordinar y ejecutar nuestras avenidas de servicio durante este período.
            </p>
          </div>

          {/* Grid fluido para Comités: 3 por fila en desktop y centrado automático si hay sobrantes/dispares */}
          <div className='flex flex-wrap justify-center items-stretch gap-8 w-full'>
            {displayComites.map((socio) => (
              <div
                key={socio.id}
                className='group flex flex-col w-[90%] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'
              >
                <div className='w-full h-80 sm:h-72 bg-gray-100 overflow-hidden relative cursor-pointer'>
                  <img
                    src={socio.image}
                    alt={socio.name}
                    className='w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center'>
                    <span className='text-white font-medium text-sm md:text-base transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300'>
                      {socio.bio || "Ver perfil completo del integrante"}
                    </span>
                  </div>
                </div>

                <div className='flex flex-col flex-1 p-6 justify-between text-left'>
                  <div>
                    <span className='inline-block text-xs font-bold uppercase tracking-wider text-[#d41367] bg-[#d41367]/10 px-3 py-1 rounded-full mb-3'>
                      {socio.role}
                    </span>
                    <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-2'>
                      {socio.name}
                    </h3>
                    {socio.message && (
                      <p className='text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3 italic'>
                        "{socio.message}"
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

    </section>
  );
}