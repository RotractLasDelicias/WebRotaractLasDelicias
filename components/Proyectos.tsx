'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Importamos únicamente la estructura base de CSS de Swiper
import 'swiper/css';

import { mockProyectos } from '@/data/mockProyectos';

interface ProyectosProps {
  isHomePage?: boolean;
}

export default function ProyectosCarousel({ isHomePage = false }: ProyectosProps) {
  const proyectos = mockProyectos;

  // Instancias para controlar la navegación mediante botones externos
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);

  return (
    <section className='bg-white py-16 px-4 md:px-10 my-12 max-w-7xl mx-auto'>
      {/* Encabezado */}
      <div className='flex flex-col items-center text-center mb-10 md:mb-12'>
        <span className='inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d41367] bg-rose-50 px-4 py-1.5 rounded-full mb-3 shadow-sm'>
          Nuestro Trabajo
        </span>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight'>
          Nuestra Huella en Acción
        </h2>
        <p className='mt-2 text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed'>
          Explora los proyectos ejecutados gracias al compromiso de nuestros voluntarios y aliados estratégicos.
        </p>
      </div>

      {/* Contenedor del Carrusel Único de Proyecto */}
      {proyectos.length > 0 ? (
        <div className='relative group max-w-7xl mx-auto px-2 md:px-12'>
          
          {/* Botón Navegación Izquierda - Carrusel Principal */}
          <button
            onClick={() => mainSwiper?.slidePrev()}
            aria-label='Proyecto anterior'
            className='absolute top-1/2 -left-2 md:left-0 -translate-y-1/2 z-20 w-11 h-11 bg-white text-[#d41367] border border-gray-200 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[#d41367] hover:text-white hover:scale-110 opacity-100 md:opacity-0 group-hover:opacity-100 focus:outline-none'
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2.5' d='M15 19l-7-7 7-7' />
            </svg>
          </button>

          {/* Botón Navegación Derecha - Carrusel Principal */}
          <button
            onClick={() => mainSwiper?.slideNext()}
            aria-label='Siguiente proyecto'
            className='absolute top-1/2 -right-2 md:right-0 -translate-y-1/2 z-20 w-11 h-11 bg-white text-[#d41367] border border-gray-200 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[#d41367] hover:text-white hover:scale-110 opacity-100 md:opacity-0 group-hover:opacity-100 focus:outline-none'
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2.5' d='M9 5l7 7-7 7' />
            </svg>
          </button>

          {/* Swiper de Proyectos (1 solo proyecto renderizado por vista) */}
          <Swiper
            onSwiper={setMainSwiper}
            modules={[Navigation]}
            loop={true}
            slidesPerView={1}
            spaceBetween={40}
            className='w-full py-2 rounded-3xl'
          >
            {proyectos.map((project) => (
              <SwiperSlide key={project.id}>
                {/* Card Única Grande */}
                <div className='flex flex-col bg-white text-gray-900 rounded-3xl border border-gray-100 shadow-xl overflow-hidden'>
                  
                  {/* Swiper de Imágenes dentro de la Card */}
                  <CardImageSwiper project={project} />

                  {/* Información del Proyecto */}
                  <div className='p-6 sm:p-8 flex flex-col justify-between min-h-[220px]'>
                    <div>
                      <h3 className='text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 leading-snug'>
                        {project.title}
                      </h3>

                      <p className='text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3 mb-6'>
                        {project.description}
                      </p>
                    </div>

                    <div className='pt-5 border-t border-gray-100 flex items-center justify-between'>
                      {project.date && (
                        <span className='text-xs font-semibold text-gray-400'>
                          📅 {project.date}
                        </span>
                      )}

                      <Link
                        href={`/proyectos/${project.slug || project.id}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-sm sm:text-base font-bold text-[#d41367] hover:underline inline-flex items-center gap-1.5 group/link'
                      >
                        Ver detalles del proyecto
                        <span className='transform group-hover/link:translate-x-1 transition-transform'>
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <p className='text-center text-gray-500 italic py-8'>
          No hay proyectos disponibles por el momento.
        </p>
      )}

      {/* Botón inferior para ir a la página de proyectos */}
      {isHomePage && (
        <div className='mt-12 text-center'>
          <Link
            href='/unirse'
            className='inline-flex items-center gap-2 px-8 py-3.5 bg-[#d41367] text-white font-bold rounded-full shadow-lg hover:bg-[#b00f54] hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-sm sm:text-base'
          >
            ¿Quieres Unirte?
          </Link>
        </div>
      )}
    </section>
  );
}

// Componente secundario para aislar el Swiper de las imágenes de cada tarjeta
function CardImageSwiper({ project }: { project: any }) {
  const [imgSwiper, setImgSwiper] = useState<SwiperType | null>(null);
  const imagesList = project.images && project.images.length > 0 ? project.images : [project.thumbnail];

  return (
    <div className='w-full h-72 sm:h-96 bg-gray-100 relative group/img overflow-hidden'>
      {/* Botón Anterior Imagen */}
      {imagesList.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              imgSwiper?.slidePrev();
            }}
            aria-label='Imagen anterior'
            className='absolute top-1/2 left-3 -translate-y-1/2 z-10 w-9 h-9 bg-black/40 text-white rounded-full flex items-center justify-center transition-all opacity-100 md:opacity-0 group-hover/img:opacity-100 hover:bg-[#d41367]'
          >
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2.5' d='M15 19l-7-7 7-7' />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              imgSwiper?.slideNext();
            }}
            aria-label='Siguiente imagen'
            className='absolute top-1/2 right-3 -translate-y-1/2 z-10 w-9 h-9 bg-black/40 text-white rounded-full flex items-center justify-center transition-all opacity-100 md:opacity-0 group-hover/img:opacity-100 hover:bg-[#d41367]'
          >
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2.5' d='M9 5l7 7-7 7' />
            </svg>
          </button>
        </>
      )}

      <Swiper
        onSwiper={setImgSwiper}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        className='w-full h-full'
      >
        {imagesList.map((imgSrc: string, index: number) => (
          <SwiperSlide key={index}>
            <img
              src={imgSrc}
              alt={`${project.title} - Imagen ${index + 1}`}
              className='w-full h-full object-cover'
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Categoría encima de la imagen */}
      {project.category && (
        <span className='absolute top-4 left-4 z-10 text-xs font-extrabold uppercase tracking-wider text-white bg-[#d41367] px-3.5 py-1.5 rounded-full shadow-md backdrop-blur-md'>
          {project.category}
        </span>
      )}
    </div>
  );
}