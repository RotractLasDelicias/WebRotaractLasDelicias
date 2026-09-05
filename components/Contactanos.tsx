import ContactForm from './ContactForm';


export default function Contactanos () {
{/* Contacto Section */}
    return (
      
      <section className='sm:px-6 md:px-10 my-6 md:my-10 max-w-7xl mx-auto'>
        <div className='bg-[#d41367] rounded-3xl md:rounded-[4rem] p-6 sm:p-10 md:p-16 text-white shadow-2xl overflow-hidden relative'>
          <div className='flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-between relative z-10'>
            
            {/* Columna Izquierda: Información */}
            <div className='w-full lg:w-5/12 text-center lg:text-left'>
              <span className='inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-white/80 bg-white/10 px-4 py-1.5 rounded-full mb-4'>
                Estemos en contacto
              </span>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4'>
                Contáctanos
              </h2>
              <p className='text-base sm:text-lg text-white/90 leading-relaxed mb-8'>
                ¿Tienes dudas, quieres sumarte como voluntario, colaborar como patrocinador o simplemente saludar? Nuestro equipo de liderazgo está listo para escucharte.
              </p>
              {/* Redes */}
              <div className='flex flex-col items-center lg:items-start gap-4 text-sm sm:text-base'>
                <p className='font-semibold text-white/80 uppercase text-xs tracking-wider mb-1'>
                  Síguenos en nuestras redes
                </p>
                <div className='flex flex-wrap justify-center lg:justify-start gap-3'>
                  <a href='#' className='px-5 py-2.5 rounded-full bg-white/10 hover:bg-white hover:text-[#d41367] font-semibold transition-all duration-300 backdrop-blur-sm text-sm'>Instagram</a>
                  <a href='#' className='px-5 py-2.5 rounded-full bg-white/10 hover:bg-white hover:text-[#d41367] font-semibold transition-all duration-300 backdrop-blur-sm text-sm'>TikTok</a>
                  {/*<a href='#' className='px-5 py-2.5 rounded-full bg-white/10 hover:bg-white hover:text-[#d41367] font-semibold transition-all duration-300 backdrop-blur-sm text-sm'>LinkedIn</a>*/}
                </div>
              </div>
            </div>

            {/* Columna Derecha: El formulario aislado como Client Component */}
            <div className='w-full lg:w-7/12 max-w-2xl bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-gray-900 shadow-xl'>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    )
}