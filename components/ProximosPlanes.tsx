import React from 'react';

// Interfaz para definir la estructura de los planes
interface Plan {
  id: string | number;
  title: string;
  description: string;
  date?: string;
  category?: string;
  thumbnail?: string;
}

interface ProximosPlanesProps {
  planes?: Plan[];
}

export default function ProximosPlanes({ planes = [] }: ProximosPlanesProps) {
  // Verificamos si hay más de 3 planes para mostrar el botón "Ver más planes"
  const hasMoreThanThree = planes.length > 3;

  return (
    <section className='px-4 pb-20 md:px-10 my-16 md:my-24 max-w-7xl mx-auto'>
      
      {/* Encabezado */}
      <div className='flex flex-col items-center text-center mb-10 md:mb-14'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight'>
          Nuestros próximos planes
        </h2>
        <p className='mt-3 sm:mt-4 text-base sm:text-lg md:text-2xl text-gray-600 max-w-2xl leading-relaxed'>
          Conoce las actividades y metas que estaremos ejecutando próximamente en nuestra comunidad.
        </p>
      </div>

      {/* Grid Responsivo de Planes */}
      {planes.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center items-stretch'>
          {planes.map((plan) => (
            <div
              key={plan.id}
              className='group flex flex-col w-full max-w-lg bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 text-left'
            >
              {/* Imagen opcional / Thumbnail */}
              {plan.thumbnail && (
                <div className='w-full h-52 sm:h-60 bg-gray-100 overflow-hidden relative'>
                  <img
                    src={plan.thumbnail}
                    alt={plan.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                  />
                </div>
              )}

              {/* Contenido del Plan */}
              <div className='flex flex-col flex-1 p-6 justify-between'>
                <div>
                  {plan.category && (
                    <span className='inline-block text-xs font-bold uppercase tracking-wider text-[#d41367] bg-[#d41367]/10 px-3 py-1 rounded-full mb-3'>
                      {plan.category}
                    </span>
                  )}

                  <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-2 leading-snug'>
                    {plan.title}
                  </h3>

                  <p className='text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3'>
                    {plan.description}
                  </p>
                </div>

                {/* Fecha u observación en el pie de la tarjeta */}
                {plan.date && (
                  <div className='mt-6 pt-4 border-t border-gray-100 flex justify-between items-center text-xs sm:text-sm text-gray-500'>
                    <span>Fecha estimada:</span>
                    <span className='font-semibold text-gray-700'>{plan.date}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Estado por si aún no hay planes cargados */
        <p className='text-center text-gray-500 italic py-8'>
          No hay próximos planes agendados por el momento.
        </p>
      )}

      {/* Botón "Ver más planes" (Solo aparece si hay más de 3 registros) */}
      {hasMoreThanThree && (
        <div className='mt-12 md:mt-16 text-center'>
          <a
            href='#'
            className='inline-flex items-center gap-2 px-8 py-3.5 bg-[#d41367] text-white font-semibold rounded-full shadow-lg hover:bg-[#b00f54] hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-sm sm:text-base'
          >
            Ver más planes
          </a>
        </div>
      )}

    </section>
  );
}