

export default function Unetenos () {

    return (
              
      <section className='px-4 md:px-10 my-16 md:my-28 max-w-7xl mx-auto'>
        {/* Call to Action Section - Voluntariado & Alianzas */}
        <div className='group relative flex flex-col items-center text-center p-8 sm:p-12 md:p-16 bg-white rounded-[4rem] shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(212,19,103,0.15)] hover:scale-[1.02] transition-all duration-500 cursor-pointer overflow-hidden'>
          
          {/* Fondo decorativo sutil al hacer hover */}
          <div className='absolute inset-0 bg-gradient-to-br from-[#d41367]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />

          {/* Etiqueta superior opcional */}
          <span className='inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d41367] bg-[#d41367]/10 px-4 py-1.5 rounded-full mb-6'>
            Únete a nuestra misión
          </span>

          {/* Titular Principal */}
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight max-w-4xl leading-tight'>
            ¿Listo para ser parte del cambio en tu comunidad?
          </h2>

          {/* Mensaje Descriptivo */}
          <p className='mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed'>
            Ya sea que quieras sumarte como voluntario o apoyar nuestras causas como patrocinador, tu energía y compromiso hacen la diferencia.
          </p>

          {/* Botón de Acción */}
          <div className='mt-8 sm:mt-10 relative z-10'>
            <a
              href='/contacto'
              className='inline-flex items-center gap-2 px-8 py-4 bg-[#d41367] text-white text-base sm:text-lg font-bold rounded-full shadow-lg hover:bg-[#b00f54] hover:shadow-xl transition-all duration-300 transform group-hover:scale-105'
            >
              Sé parte del cambio →
            </a>
          </div>

        </div>
      </section>
    )
}