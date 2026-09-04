'use client';

import React from 'react';

export interface IgPost {
  id: string;
  imageUrl: string;
  caption: string;
  postUrl: string;
  likes?: number;
  comments?: number;
}

interface InstagramFeedProps {
  profileName?: string;
  username?: string;
  profilePic?: string;
  bio?: string;
  profileUrl?: string;
  posts?: IgPost[];
}

const DEFAULT_POSTS: IgPost[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800&auto=format&fit=crop',
    caption: 'Jornada comunitaria de voluntariado en acción. ¡Juntos logramos más!',
    postUrl: 'https://instagram.com',
    likes: 124,
    comments: 18,
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop',
    caption: 'Entrega de suministros y apoyo a familias locales.',
    postUrl: 'https://instagram.com',
    likes: 98,
    comments: 12,
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800&auto=format&fit=crop',
    caption: 'Taller de formación y trabajo en equipo con nuestros miembros.',
    postUrl: 'https://instagram.com',
    likes: 156,
    comments: 24,
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop',
    caption: 'Reunión estratégica para los nuevos proyectos del trimestre.',
    postUrl: 'https://instagram.com',
    likes: 87,
    comments: 9,
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop',
    caption: 'Celebrando el impacto social alcanzado este mes.',
    postUrl: 'https://instagram.com',
    likes: 210,
    comments: 31,
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    caption: 'Sumando voluntades. ¡Visita el enlace de la bio para unirte!',
    postUrl: 'https://instagram.com',
    likes: 143,
    comments: 15,
  },
];

export default function InstagramFeed({
  profileName = 'Nombre de la Organización',
  username = 'organizacion_oficial',
  profilePic = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
  bio = 'Impactando comunidades a través del voluntariado y la acción social. 📍 Maracay, Aragua',
  profileUrl = 'https://instagram.com',
  posts = DEFAULT_POSTS,
}: InstagramFeedProps) {
  // Aseguramos exactamente 6 publicaciones (2 filas de 3 columnas)
  const latestSixPosts = posts.slice(0, 6);

  return (
    <section className='px-4 py-12 md:px-10 my-12 max-w-4xl mx-auto'>

      {/* Título de la sección */}
      <div className='flex flex-col items-center text-center mb-10'>
        <span className='inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d41367] bg-[#d41367]/10 px-4 py-1.5 rounded-full mb-3'>
          Síguenos en Redes
        </span>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight'>
          Nuestra Comunidad en Instagram
        </h2>
      </div>

      {/* Encabezado del Perfil (Estilo idéntico a Instagram app) */}
      <div className='flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 px-2'>
        {/* Foto de perfil con anillo de historias */}
        <div className='relative p-[3px] rounded-full bg-gradient-to-tr from-amber-500 via-[#d41367] to-purple-600 shrink-0'>
          <img
            src={profilePic}
            alt={profileName}
            className='w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-white'
          />
        </div>

        {/* Información del usuario */}
        <div className='flex-1 text-center sm:text-left'>
          <div className='flex flex-col sm:flex-row sm:items-center gap-3 mb-3'>
            <h3 className='text-xl sm:text-2xl font-bold text-gray-900'>
              @{username}
            </h3>
            <a
              href={profileUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center px-4 py-1.5 bg-[#d41367] text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-[#b00f54] transition-colors self-center sm:self-auto'
            >
              Seguir
            </a>
          </div>

          <p className='text-sm sm:text-base font-bold text-gray-800 mb-1'>
            {profileName}
          </p>
          <p className='text-gray-600 text-xs sm:text-sm leading-relaxed max-w-lg whitespace-pre-line'>
            {bio}
          </p>
        </div>
      </div>

      {/* Grilla de Instagram: Estrictamente 3 columnas (2 filas de 3) */}
      <div className='grid grid-cols-3 gap-1 sm:gap-3 md:gap-4'>
        {latestSixPosts.map((post) => (
          <a
            key={post.id}
            href={post.postUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='group relative aspect-[4/5] overflow-hidden bg-gray-100 rounded-lg sm:rounded-xl shadow-sm cursor-pointer'
          >
            {/* Imagen Vertical estilo Instagram (4:5 aspect ratio) */}
            <img
              src={post.imageUrl}
              alt={post.caption}
              className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
            />

            {/* Hover con información superpuesta */}
            <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-center items-center p-2 text-white text-center'>
              <p className='text-xs line-clamp-3 mb-2 px-1 font-medium hidden sm:block'>
                {post.caption}
              </p>
              
              <div className='flex items-center gap-3 text-xs sm:text-sm font-bold'>
                <span>❤️ {post.likes ?? 0}</span>
                <span>💬 {post.comments ?? 0}</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Botón inferior para ir al Perfil Completo */}
      <div className='mt-8 text-center'>
        <a
          href={profileUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-800 hover:bg-gray-200 font-semibold rounded-full transition-all text-xs sm:text-sm'
        >
          Ver más publicaciones en Instagram →
        </a>
      </div>
    </section>
  );
}