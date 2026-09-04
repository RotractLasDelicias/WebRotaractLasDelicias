'use client';

import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import Contactanos from '@/components/Contactanos';

// Carga dinámica limpia sin errores de tipos o SSR
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

interface ContactSectionProps {
  instagramUser?: string;
  instagramUrl?: string;
  address?: string;
  city?: string;
  lat?: number;
  lng?: number;
  phone?: string;
  email?: string;
}

export default function ContactSection({
  instagramUser = '@somsorotaractlasdelicias',
  instagramUrl = 'https://www.instagram.com/somosrotaractlasdelicias',
  address = 'noidea',
  city = 'Maracay, Aragua',
  lat = 10.272090,
  lng = -67.590892,
  phone = '+58 412-1234567',
  email = 'contacto@organizacion.org',
}: ContactSectionProps) {
  const position: [number, number] = [lat, lng];

  // Configurar los iconos de Leaflet en el cliente para evitar errores de marker roto
  useEffect(() => {
    (async () => {
      const L = (await import('leaflet')).default;
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });
    })();
  }, []);

  return (
    <section className='px-4 py-12 md:py-20 md:px-10 max-w-7xl mx-auto'>
      <div className='text-center mb-12'>
        <span className='inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d41367] bg-[#d41367]/10 px-4 py-1.5 rounded-full mb-3'>
          Encuéntranos
        </span>
        <h2 className='text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight'>
          Contáctanos
        </h2>
        <p className='text-gray-600 text-sm sm:text-base mt-2 max-w-xl mx-auto'>
          Visita nuestra sede o escríbenos directamente a través de nuestras redes sociales.
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch'>
        {/* Tarjeta Instagram */}
        <div className='bg-gradient-to-br from-white via-slate-50 to-pink-50/30 rounded-3xl p-8 border border-gray-100 shadow-xl flex flex-col justify-between relative overflow-hidden'>
          <div className='absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-tr from-amber-500 via-[#d41367] to-purple-600 rounded-full opacity-10 blur-2xl pointer-events-none' />

          <div>
            <div className='inline-flex items-center justify-center p-3.5 bg-gradient-to-tr from-amber-500 via-[#d41367] to-purple-600 text-white rounded-2xl shadow-md mb-6'>
              <svg className='w-8 h-8 fill-current' viewBox='0 0 24 24'>
                <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/>
              </svg>
            </div>

            <h3 className='text-2xl font-bold text-gray-900 mb-2'>
              Síguenos en Redes
            </h3>
            <p className='text-gray-600 text-sm mb-6 leading-relaxed'>
              Mantente al tanto de nuestros proyectos, eventos y actividades comunitarias diarias.
            </p>

            <div className='space-y-4 mb-8'>
              <div className='flex items-center gap-3 text-gray-700 text-sm sm:text-base font-medium'>
                <span className='w-8 h-8 rounded-full bg-pink-100 text-[#d41367] flex items-center justify-center font-bold'>
                  @
                </span>
                <span>{instagramUser}</span>
              </div>
              <div className='flex items-center gap-3 text-gray-700 text-sm sm:text-base font-medium'>
                <span className='w-8 h-8 rounded-full bg-pink-100 text-[#d41367] flex items-center justify-center font-bold'>
                  📞
                </span>
                <span>{phone}</span>
              </div>
              <div className='flex items-center gap-3 text-gray-700 text-sm sm:text-base font-medium'>
                <span className='w-8 h-8 rounded-full bg-pink-100 text-[#d41367] flex items-center justify-center font-bold'>
                  ✉️
                </span>
                <span>{email}</span>
              </div>
            </div>
          </div>

          <a
            href={instagramUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='w-full py-3.5 px-6 bg-gradient-to-r from-amber-500 via-[#d41367] to-purple-600 text-white font-semibold rounded-2xl text-center shadow-lg hover:opacity-95 transition-all text-sm sm:text-base'
          >
            Ir al Perfil de Instagram
          </a>
        </div>

        {/* Tarjeta Mapa */}
        <div className='bg-white rounded-3xl p-6 border border-gray-100 shadow-xl flex flex-col justify-between h-[450px] sm:h-[500px] lg:h-auto'>
          <div className='mb-4'>
            <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-1 flex items-center gap-2'>
              <span>📍</span> Nuestra Ubicación
            </h3>
            <p className='text-gray-600 text-xs sm:text-sm'>
              {address} — <strong className='text-gray-800'>{city}</strong>
            </p>
          </div>

          <div className='w-full flex-1 rounded-2xl overflow-hidden border border-gray-200 shadow-inner min-h-[250px] relative z-0'>
            <MapContainer
              center={position}
              zoom={16}
              scrollWheelZoom={false}
              className='w-full h-full'
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              />
              <Marker position={position}>
                <Popup>
                  <div className='text-center p-1 font-sans'>
                    <strong className='text-gray-900 font-bold block mb-1'>
                      Sede Principal
                    </strong>
                    <span className='text-xs text-gray-600'>{address}</span>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          <div className='mt-4 text-right'>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#d41367] hover:underline'
            >
              Abrir en Google Maps →
            </a>
          </div>
        </div>
      </div>

      <div className='pb-10'>
         <Contactanos />
      </div>
      
    </section>
  );
}