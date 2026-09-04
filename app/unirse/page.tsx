'use client'; // Necesario si estás usando la carpeta /app en Next.js

import { useState } from 'react';
import { mockProyectos } from '@/data/mockProyectos'; // Ajusta según tu importación
import Unetenos from '@/components/Unetenos';
import ProyectosDark from '@/components/Proyectos';

export default function UnirsePage() {

  // Datos mock de Formas de Apoyo
  const opcionesApoyo = [
    {
      id: 'voluntario',
      title: 'Voluntariado',
      category: 'Talento Humano',
      description: 'Suma tu tiempo, habilidades y energía en la planificación y ejecución de nuestras actividades comunitarias.',
      buttonText: 'Ser Voluntario',
    },
    {
      id: 'patrocinio',
      title: 'Patrocinio de Proyecto',
      category: 'Alianzas',
      description: 'Financia o impulsa proyectos específicos asegurando el alcance social y visibilidad compartida para tu marca.',
      buttonText: 'Patrocinar Proyecto',
    },
    {
      id: 'donaciones',
      title: 'Donaciones e Insumos',
      category: 'Aportes',
      description: 'Contribuye con recursos materiales, equipamiento o fondos directo a la logística de las jornadas.',
      buttonText: 'Donar Insumos',
    },
  ];

  // Datos mock de Marcas / Aliados
  const aliados = [
    { id: '1', name: 'Empresa Aliada A', image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=500&auto=format&fit=crop' },
    { id: '2', name: 'Organización Social B', image: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?q=80&w=500&auto=format&fit=crop' },
    { id: '3', name: 'Fundación Aliada C', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=500&auto=format&fit=crop' },
    { id: '4', name: 'Sponsor Oficial D', image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=500&auto=format&fit=crop' },
  ];

  return (
    <div className='bg-white min-h-screen'>
      
      {/* 1. SECCIÓN: ENCABEZADO */}
      <section className='px-4 pt-12 md:pt-20 pb-12 md:pb-16 max-w-7xl mx-auto text-center'>
        <span className='inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d41367] bg-[#d41367]/10 px-4 py-1.5 rounded-full mb-4'>
          Forma parte del cambio
        </span>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6'>
          ¿Unirse?
        </h1>
        <p className='mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
          Estamos profundamente orgullosos de lo que somos y de cada una de las iniciativas que llevamos a cabo. Ya sea aportando tu tiempo como voluntario o respaldando nuestros proyectos como patrocinador, cada acción cuenta para transformar realidades y construir un impacto social duradero.
        </p>
      </section>

      {/* 2. SECCIÓN: ¿CÓMO NOS PUEDES APOYAR? */}
      <section className='px-4 py-16 md:px-10 my-12 bg-gray-50 max-w-7xl mx-auto rounded-3xl'>
        <div className='flex flex-col items-center text-center mb-12'>
          <span className='inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d41367] bg-[#d41367]/10 px-4 py-1.5 rounded-full mb-4'>
            Involúcrate
          </span>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight'>
            ¿Cómo nos puedes apoyar?
          </h2>
          <p className='mt-3 text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed'>
            Existen distintas maneras de aportar a nuestra causa. Elige el área donde quieras sumar y contáctanos directamente.
          </p>
        </div>

        {/* Tarjetas horizontales de áreas de apoyo */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center items-stretch'>
          {opcionesApoyo.map((opcion) => (
            <div
              key={opcion.id}
              className='flex flex-col w-full bg-white rounded-2xl border border-gray-100 shadow-xl p-6 sm:p-8 justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 text-left'
            >
              <div>
                <span className='inline-block text-xs font-bold uppercase tracking-wider text-[#d41367] bg-[#d41367]/10 px-3 py-1 rounded-full mb-4'>
                  {opcion.category}
                </span>
                <h3 className='text-2xl font-bold text-gray-900 mb-3'>
                  {opcion.title}
                </h3>
                <p className='text-gray-600 text-sm sm:text-base leading-relaxed mb-6'>
                  {opcion.description}
                </p>
              </div>

              <div className='pt-4 border-t border-gray-100'>
                <a
                  href='/contacto'
                  className='w-full inline-flex justify-center items-center px-6 py-3 bg-[#d41367] text-white font-semibold rounded-full hover:bg-[#b00f54] transition-colors text-sm sm:text-base shadow-md'
                >
                  {opcion.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 3. SECCIÓN: GRILLA DE PROYECTOS */}
      <ProyectosDark isHomePage={false}  />


     {/* 4. SECCIÓN: ORGANIZACIONES Y EMPRESAS QUE NOS HAN APOYADO */}
      <section className='px-4 py-16 md:px-10 my-16 max-w-7xl mx-auto text-center'>
        <div className='flex flex-col items-center mb-12'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight'>
            Aliados y Patrocinadores
          </h2>
          <p className='mt-3 text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed'>
            Empresas e instituciones que confiaron en nuestro trabajo y hacen posible cada proyecto.
          </p>
        </div>

        {/* Grilla alineada de 4 en 4 con efecto Overlay/Zoom al hacer Hover */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>
          {aliados.map((aliado) => (
            <div
              key={aliado.id}
              className='group relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-lg bg-gray-100 cursor-pointer'
            >
              {/* Imagen de fondo con zoom en hover */}
              <img
                src={aliado.image}
                alt={aliado.name}
                className='w-full h-full object-cover md:group-hover:scale-110 transition-transform duration-500'
              />

              {/* Capa de oscurecimiento (Overlay): Transparente en desktop, se oscurece en hover. Siempre visible en móvil */}
              <div className='absolute inset-0 bg-black/40 md:bg-transparent md:group-hover:bg-black/70 transition-colors duration-300 flex items-center justify-center p-4 text-center'>
                {/* Texto: Opacidad 100% en móvil, 0% en desktop y 100% al hacer hover */}
                <h3 className='text-white font-extrabold text-lg sm:text-xl tracking-wide opacity-100 md:opacity-0 md:group-hover:opacity-100 transform md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-300'>
                  {aliado.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Unetenos/>

    </div>
  );
}