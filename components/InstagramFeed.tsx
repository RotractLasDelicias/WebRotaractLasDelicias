'use client';

import React, { useEffect, useState } from 'react';

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
}

export default function InstagramFeed({
  profileName = 'Nombre de la Organización',
  username = 'organizacion_oficial',
  profilePic = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
  bio = 'Impactando comunidades a través del voluntariado y la acción social. 📍 Maracay, Aragua',
  profileUrl = 'https://instagram.com',
}: InstagramFeedProps) {
  const [posts, setPosts] = useState<IgPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInstagramPosts() {
      try {
        const response = await fetch('/api/instagram');
        if (!response.ok) throw new Error('Error en la petición');
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.error('Error cargando Instagram feed:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchInstagramPosts();
  }, []);

  return (
    <section className='px-4 py-12 md:px-10 my-12 max-w-4xl mx-auto'>
      <div className='flex flex-col items-center text-center mb-10'>
        <span className='inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d41367] bg-[#d41367]/10 px-4 py-1.5 rounded-full mb-3'>
          Síguenos en Redes
        </span>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight'>
          Nuestra Comunidad en Instagram
        </h2>
      </div>

      <div className='flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 px-2'>
        <div className='relative p-[3px] rounded-full bg-gradient-to-tr from-amber-500 via-[#d41367] to-purple-600 shrink-0'>
          <img
            src={profilePic}
            alt={profileName}
            className='w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-white'
          />
        </div>

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

      {loading ? (
        <div className='grid grid-cols-3 gap-2 sm:gap-4'>
          {[...Array(6)].map((_, i) => (
            <div key={i} className='aspect-[4/5] bg-gray-200 animate-pulse rounded-lg' />
          ))}
        </div>
      ) : (
        <div className='grid grid-cols-3 gap-1 sm:gap-3 md:gap-4'>
          {posts.slice(0, 6).map((post) => (
            <a
              key={post.id}
              href={post.postUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='group relative aspect-[4/5] overflow-hidden bg-gray-100 rounded-lg sm:rounded-xl shadow-sm cursor-pointer'
            >
              <img
                src={post.imageUrl}
                alt={post.caption}
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
              />

              <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-center items-center p-2 text-white text-center'>
                <p className='text-xs line-clamp-3 mb-2 px-1 font-medium hidden sm:block'>
                  {post.caption}
                </p>
                <div className='flex items-center gap-3 text-xs sm:text-sm font-bold'>
                  <span>❤️ {post.likes}</span>
                  <span>💬 {post.comments}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}