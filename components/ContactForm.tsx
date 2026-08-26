// components/ContactForm.tsx
'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica del envío (API, etc.)
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5'>
        {/* Campo Nombre */}
        <div className='flex flex-col text-left gap-1.5'>
          <label className='text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wide'>
            Nombre completo
          </label>
          <input
            type='text'
            required
            placeholder='Ej. María Pérez'
            className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#d41367] focus:ring-2 focus:ring-[#d41367]/20 outline-none transition-all text-sm sm:text-base text-gray-800 placeholder:text-gray-400 bg-gray-50/50'
          />
        </div>

        {/* Campo Correo */}
        <div className='flex flex-col text-left gap-1.5'>
          <label className='text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wide'>
            Correo electrónico
          </label>
          <input
            type='email'
            required
            placeholder='tu@email.com'
            className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#d41367] focus:ring-2 focus:ring-[#d41367]/20 outline-none transition-all text-sm sm:text-base text-gray-800 placeholder:text-gray-400 bg-gray-50/50'
          />
        </div>
      </div>

      {/* Selector de Interés */}
      <div className='flex flex-col text-left gap-1.5'>
        <label className='text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wide'>
          Motivo de contacto
        </label>
        <select className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#d41367] focus:ring-2 focus:ring-[#d41367]/20 outline-none transition-all text-sm sm:text-base text-gray-800 bg-gray-50/50 cursor-pointer'>
          <option value='voluntario'>Quiero ser Voluntario / Integrarme</option>
          <option value='patrocinador'>Deseo ser Patrocinador / Aliado</option>
          <option value='consulta'>Consulta general o información</option>
        </select>
      </div>

      {/* Campo Mensaje */}
      <div className='flex flex-col text-left gap-1.5'>
        <label className='text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wide'>
          Mensaje
        </label>
        <textarea
          rows={4}
          required
          placeholder='Cuéntanos en qué te gustaría participar o cuál es tu consulta...'
          className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#d41367] focus:ring-2 focus:ring-[#d41367]/20 outline-none transition-all text-sm sm:text-base text-gray-800 placeholder:text-gray-400 bg-gray-50/50 resize-none'
        />
      </div>

      {/* Botón Enviar */}
      <button
        type='submit'
        className='mt-2 w-full py-3.5 sm:py-4 bg-[#d41367] text-white font-bold rounded-xl shadow-lg hover:bg-[#b00f54] hover:shadow-xl transition-all duration-300 transform active:scale-[0.99] text-base sm:text-lg cursor-pointer'
      >
        {submitted ? '¡Mensaje enviado con éxito!' : 'Enviar mensaje →'}
      </button>
    </form>
  );
}