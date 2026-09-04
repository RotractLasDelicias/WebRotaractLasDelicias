'use client';

import React, { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Muestra el botón cuando el usuario baja más de 120px (cuando el nav desaparece)
      if (window.scrollY > 120) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Limpia el evento al desmontar el componente
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Desplazamiento suave hasta el inicio
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label='Volver arriba'
      className='fixed bottom-6 right-6 z-50 p-3.5 bg-[#d41367] text-white rounded-full shadow-2xl hover:bg-[#b00f54] hover:scale-110 active:scale-95 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#d41367] focus:ring-offset-2'
    >
      <svg
        className='w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-200'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2.5'
          d='M5 10l7-7m0 0l7 7m-7-7v18'
        />
      </svg>
    </button>
  );
}