import Contactanos from '@/components/Contactanos';
import { getContentData } from '../../lib/posts';
import JuntaComite from '@/components/JuntaComite';

export default function ContribuyentesPage() {


  return (

    <div className='bg-white min-h-screen'>

      {/* 1. SECCIÓN: QUIÉNES SOMOS */}
      <section className='px-4 pt-16 md:px-10 max-w-7xl mx-auto text-center'>
        <span className='inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d41367] bg-[#d41367]/10 px-4 py-1.5 rounded-full mb-4'>
          Sobre Nosotros
        </span>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6'>
          ¿Quiénes Somos?
        </h1>
        <div className='max-w-4xl mx-auto text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed space-y-6 text-justify sm:text-center'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
          </p>
        </div>
      </section>

      {/* 2. SECCIÓN: MISIÓN, VISIÓN Y OBJETIVOS */}
      <section className='px-4 py-16 md:px-10 max-w-7xl mx-auto'>
        {/* MISIÓN Y VISIÓN (Formato Rectangular Vertical / Stacking) */}
        <div className='flex flex-col gap-8 mb-12'>
          {/* Misión */}
          <div className='w-full bg-white rounded-2xl border border-gray-100 shadow-xl p-8 md:p-10 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group'>
            <div className='absolute top-0 left-0 w-2 h-full bg-[#d41367]' />
            <div className='flex items-center gap-3 mb-4'>
              <span className='inline-block text-xs font-bold uppercase tracking-wider text-[#d41367] bg-[#d41367]/10 px-3 py-1 rounded-full'>
                Propósito
              </span>
            </div>
            <h2 className='text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4'>
              Nuestra Misión
            </h2>
            <p className='text-gray-600 text-base sm:text-lg leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            </p>
          </div>

          {/* Visión */}
          <div className='w-full bg-white rounded-2xl border border-gray-100 shadow-xl p-8 md:p-10 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group'>
            <div className='absolute top-0 left-0 w-2 h-full bg-gray-900 group-hover:bg-[#d41367] transition-colors duration-300' />
            <div className='flex items-center gap-3 mb-4'>
              <span className='inline-block text-xs font-bold uppercase tracking-wider text-gray-900 bg-gray-100 px-3 py-1 rounded-full'>
                Futuro
              </span>
            </div>
            <h2 className='text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4'>
              Nuestra Visión
            </h2>
            <p className='text-gray-600 text-base sm:text-lg leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
            </p>
          </div>
        </div>

        {/* OBJETIVOS ESTRATÉGICOS (4 Cuadrados Ajustables Horizontalmente) */}
        <div className='mt-16'>
          <div className='text-center mb-10'>
            <h3 className='text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight'>
              Objetivos Estratégicos
            </h3>
            <p className='text-gray-600 mt-2 text-base sm:text-lg'>
              Las metas clave que guían cada una de nuestras iniciativas.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full'>
            {/* Objetivo 1 */}
            <div className='bg-white aspect-square rounded-2xl border border-gray-100 shadow-xl p-6 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'>
              <span className='text-4xl font-black text-[#d41367]/20 group-hover:text-[#d41367] transition-colors'>
                01
              </span>
              <div>
                <h4 className='text-lg font-bold text-gray-900 mb-2'>
                  Desarrollo Comunitario
                </h4>
                <p className='text-gray-600 text-sm leading-relaxed line-clamp-5'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            {/* Objetivo 2 */}
            <div className='bg-white aspect-square rounded-2xl border border-gray-100 shadow-xl p-6 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'>
              <span className='text-4xl font-black text-[#d41367]/20 group-hover:text-[#d41367] transition-colors'>
                02
              </span>
              <div>
                <h4 className='text-lg font-bold text-gray-900 mb-2'>
                  Formación de Liderazgo
                </h4>
                <p className='text-gray-600 text-sm leading-relaxed line-clamp-5'>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            {/* Objetivo 3 */}
            <div className='bg-white aspect-square rounded-2xl border border-gray-100 shadow-xl p-6 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'>
              <span className='text-4xl font-black text-[#d41367]/20 group-hover:text-[#d41367] transition-colors'>
                03
              </span>
              <div>
                <h4 className='text-lg font-bold text-gray-900 mb-2'>
                  Innovación Social
                </h4>
                <p className='text-gray-600 text-sm leading-relaxed line-clamp-5'>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>

            {/* Objetivo 4 */}
            <div className='bg-white aspect-square rounded-2xl border border-gray-100 shadow-xl p-6 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'>
              <span className='text-4xl font-black text-[#d41367]/20 group-hover:text-[#d41367] transition-colors'>
                04
              </span>
              <div>
                <h4 className='text-lg font-bold text-gray-900 mb-2'>
                  Alianzas Sostenibles
                </h4>
                <p className='text-gray-600 text-sm leading-relaxed line-clamp-5'>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN: JUNTA Y COMITÉS */}
      <div className='pb-10'>
        <JuntaComite juntaOComite="comite" />
      </div>

      {/* 4. SECCIÓN: CONTACTANOS */}
      <div className='px-4'>
        <Contactanos />
      </div>
    </div>
  );
}